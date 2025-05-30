import { SignatureVerifier, SignatureUtils } from '../signature';

/**
 * Example 1: Webhook signature verification
 * This is the most common use case - verifying webhooks from your Go server
 */
export function verifyWebhookSignature(
  webhookPayload: object | string,
  receivedSignature: string,
  secret: string,
): boolean {
  try {
    // Use the utility function for quick verification
    return SignatureUtils.verifyJson(webhookPayload, receivedSignature, secret);
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return false;
  }
}

/**
 * Example 2: Express.js middleware for webhook verification
 */
export function createWebhookVerificationMiddleware(secret: string) {
  return (req: any, res: any, next: any) => {
    const signature = req.headers['x-signature'] || req.headers['signature'];

    if (!signature) {
      return res.status(401).json({ error: 'Missing signature header' });
    }

    // Get raw body (you'll need to configure express to preserve raw body)
    const payload = req.rawBody || JSON.stringify(req.body);

    const isValid = SignatureUtils.verify(payload, signature, secret);

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid signature' });
    }

    next();
  };
}

/**
 * Example 3: API response verification
 * Verify that API responses haven't been tampered with
 */
export class ApiClient {
  private verifier: SignatureVerifier;

  constructor(private secret: string) {
    this.verifier = new SignatureVerifier(secret);
  }

  async fetchWithVerification(url: string, expectedSignature?: string): Promise<any> {
    const response = await fetch(url);
    const data = await response.json();

    if (expectedSignature) {
      const isValid = this.verifier.verifyJsonSignature(data as string | object, expectedSignature);
      if (!isValid) {
        throw new Error('Response signature verification failed');
      }
    }

    return data;
  }

  async postWithSignature(url: string, payload: object): Promise<any> {
    // Generate signature for the payload
    const signature = this.verifier.generateSignature(JSON.stringify(payload));

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Signature': signature,
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  }
}

/**
 * Example 4: File integrity verification
 * Verify that uploaded files haven't been corrupted
 */
export async function verifyFileIntegrity(
  file: File | Buffer,
  expectedSignature: string,
  secret: string,
): Promise<boolean> {
  try {
    let buffer: Buffer;

    if (file instanceof File) {
      // Browser environment
      const arrayBuffer = await file.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
    } else {
      // Node.js environment
      buffer = file;
    }

    return SignatureUtils.verify(buffer, expectedSignature, secret);
  } catch (error) {
    console.error('File integrity verification failed:', error);
    return false;
  }
}
