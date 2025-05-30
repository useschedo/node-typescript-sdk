import * as crypto from 'crypto';

/**
 * Signature verification utilities for HMAC-SHA256 signatures
 */
export class SignatureVerifier {
  private readonly secret: string;

  constructor(secret: string) {
    if (!secret) {
      throw new Error('Secret key is required for signature verification');
    }
    this.secret = secret;
  }

  /**
   * Generate HMAC-SHA256 signature for a payload
   * @param payload - The payload to sign (string or Buffer)
   * @returns Hex-encoded signature string
   */
  public generateSignature(payload: string | Buffer): string {
    const hmac = crypto.createHmac('sha256', this.secret);
    hmac.update(payload);
    return hmac.digest('hex');
  }

  /**
   * Verify HMAC-SHA256 signature against a payload
   * @param payload - The payload that was signed (string or Buffer)
   * @param signature - The signature to verify (hex-encoded string)
   * @returns True if signature is valid, false otherwise
   */
  public verifySignature(payload: string | Buffer, signature: string): boolean {
    try {
      const expectedSignature = this.generateSignature(payload);
      return crypto.timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expectedSignature, 'hex'));
    } catch (error) {
      // Invalid hex string or other crypto error
      return false;
    }
  }

  /**
   * Verify signature from JSON payload
   * @param jsonPayload - JSON object or JSON string to verify
   * @param signature - The signature to verify (hex-encoded string)
   * @returns True if signature is valid, false otherwise
   */
  public verifyJsonSignature(jsonPayload: object | string, signature: string): boolean {
    try {
      const payloadString = typeof jsonPayload === 'string' ? jsonPayload : JSON.stringify(jsonPayload);

      return this.verifySignature(payloadString, signature);
    } catch (error) {
      // JSON stringify error or verification error
      return false;
    }
  }

  /**
   * Verify signature from raw bytes
   * @param payload - Raw byte payload
   * @param signature - The signature to verify (hex-encoded string)
   * @returns True if signature is valid, false otherwise
   */
  public verifyBytesSignature(payload: Uint8Array, signature: string): boolean {
    return this.verifySignature(Buffer.from(payload), signature);
  }
}

/**
 * Utility functions for signature verification
 */
export const SignatureUtils = {
  /**
   * Create a new SignatureVerifier instance
   * @param secret - Secret key for HMAC
   * @returns SignatureVerifier instance
   */
  create(secret: string): SignatureVerifier {
    return new SignatureVerifier(secret);
  },

  /**
   * Quick verification of JSON signature without creating a verifier instance
   * @param jsonPayload - JSON object or JSON string to verify
   * @param signature - The signature to verify (hex-encoded string)
   * @param secret - Secret key for HMAC
   * @returns True if signature is valid, false otherwise
   */
  verifyJson(jsonPayload: object | string, signature: string, secret: string): boolean {
    const verifier = new SignatureVerifier(secret);
    return verifier.verifyJsonSignature(jsonPayload, signature);
  },

  /**
   * Quick verification of string/buffer signature without creating a verifier instance
   * @param payload - The payload that was signed
   * @param signature - The signature to verify (hex-encoded string)
   * @param secret - Secret key for HMAC
   * @returns True if signature is valid, false otherwise
   */
  verify(payload: string | Buffer, signature: string, secret: string): boolean {
    const verifier = new SignatureVerifier(secret);
    return verifier.verifySignature(payload, signature);
  },

  /**
   * Generate signature for testing purposes
   * @param payload - The payload to sign
   * @param secret - Secret key for HMAC
   * @returns Hex-encoded signature string
   */
  generate(payload: string | Buffer, secret: string): string {
    const verifier = new SignatureVerifier(secret);
    return verifier.generateSignature(payload);
  },
};

// Note: No default export to ensure ESM/CJS compatibility
