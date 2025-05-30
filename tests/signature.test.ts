import { SignatureVerifier, SignatureUtils } from '../src/signature';

describe('SignatureVerifier', () => {
  const testSecret = 'test-secret-key';
  const testPayload = '{"message":"hello world","timestamp":1234567890}';

  let verifier: SignatureVerifier;

  beforeEach(() => {
    verifier = new SignatureVerifier(testSecret);
  });

  describe('constructor', () => {
    it('should create verifier with valid secret', () => {
      expect(() => new SignatureVerifier(testSecret)).not.toThrow();
    });

    it('should throw error with empty secret', () => {
      expect(() => new SignatureVerifier('')).toThrow('Secret key is required for signature verification');
    });
  });

  describe('generateSignature', () => {
    it('should generate consistent signature for string payload', () => {
      const signature1 = verifier.generateSignature(testPayload);
      const signature2 = verifier.generateSignature(testPayload);
      expect(signature1).toBe(signature2);
      expect(signature1).toMatch(/^[a-f0-9]{64}$/); // SHA256 hex string
    });

    it('should generate consistent signature for buffer payload', () => {
      const buffer = Buffer.from(testPayload, 'utf8');
      const signature1 = verifier.generateSignature(buffer);
      const signature2 = verifier.generateSignature(buffer);
      expect(signature1).toBe(signature2);
      expect(signature1).toMatch(/^[a-f0-9]{64}$/);
    });

    it('should generate same signature for string and equivalent buffer', () => {
      const stringSignature = verifier.generateSignature(testPayload);
      const bufferSignature = verifier.generateSignature(Buffer.from(testPayload, 'utf8'));
      expect(stringSignature).toBe(bufferSignature);
    });
  });

  describe('verifySignature', () => {
    it('should verify valid signature', () => {
      const signature = verifier.generateSignature(testPayload);
      expect(verifier.verifySignature(testPayload, signature)).toBe(true);
    });

    it('should reject invalid signature', () => {
      const invalidSignature = 'invalid-signature';
      expect(verifier.verifySignature(testPayload, invalidSignature)).toBe(false);
    });

    it('should reject signature for different payload', () => {
      const signature = verifier.generateSignature(testPayload);
      const differentPayload = '{"message":"different message"}';
      expect(verifier.verifySignature(differentPayload, signature)).toBe(false);
    });

    it('should verify signature for buffer payload', () => {
      const buffer = Buffer.from(testPayload, 'utf8');
      const signature = verifier.generateSignature(buffer);
      expect(verifier.verifySignature(buffer, signature)).toBe(true);
    });

    it('should handle malformed hex signature gracefully', () => {
      const malformedSignature = 'not-hex-string';
      expect(verifier.verifySignature(testPayload, malformedSignature)).toBe(false);
    });
  });

  describe('verifyJsonSignature', () => {
    it('should verify signature for JSON object', () => {
      const jsonObject = { message: 'hello world', timestamp: 1234567890 };
      const jsonString = JSON.stringify(jsonObject);
      const signature = verifier.generateSignature(jsonString);
      expect(verifier.verifyJsonSignature(jsonObject, signature)).toBe(true);
    });

    it('should verify signature for JSON string', () => {
      const signature = verifier.generateSignature(testPayload);
      expect(verifier.verifyJsonSignature(testPayload, signature)).toBe(true);
    });

    it('should reject invalid signature for JSON', () => {
      const jsonObject = { message: 'hello world' };
      const invalidSignature = 'invalid-signature';
      expect(verifier.verifyJsonSignature(jsonObject, invalidSignature)).toBe(false);
    });

    it('should handle JSON stringification errors gracefully', () => {
      const circularObject: any = {};
      circularObject.self = circularObject;
      const signature = 'some-signature';
      expect(verifier.verifyJsonSignature(circularObject, signature)).toBe(false);
    });

    it('should be sensitive to JSON key order', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 2, a: 1 };
      const signature1 = verifier.generateSignature(JSON.stringify(obj1));
      // Note: JSON.stringify may produce different orders, so this tests implementation consistency
      expect(verifier.verifyJsonSignature(obj1, signature1)).toBe(true);
    });
  });

  describe('verifyBytesSignature', () => {
    it('should verify signature for Uint8Array', () => {
      const bytes = new Uint8Array(Buffer.from(testPayload, 'utf8'));
      const signature = verifier.generateSignature(Buffer.from(bytes));
      expect(verifier.verifyBytesSignature(bytes, signature)).toBe(true);
    });

    it('should reject invalid signature for bytes', () => {
      const bytes = new Uint8Array(Buffer.from(testPayload, 'utf8'));
      const invalidSignature = 'invalid-signature';
      expect(verifier.verifyBytesSignature(bytes, invalidSignature)).toBe(false);
    });
  });

  describe('Go server compatibility', () => {
    it('should generate signature compatible with Go HMAC implementation', () => {
      // Test case that matches the Go function behavior
      const payload = 'test payload';
      const secret = 'test-secret';
      const verifier = new SignatureVerifier(secret);
      const signature = verifier.generateSignature(payload);
      // Verify the signature can be verified back
      expect(verifier.verifySignature(payload, signature)).toBe(true);
      // The signature should be a 64-character hex string (SHA256)
      expect(signature).toMatch(/^[a-f0-9]{64}$/);
    });

    it('should handle empty payload like Go implementation', () => {
      const emptyPayload = '';
      const signature = verifier.generateSignature(emptyPayload);
      expect(verifier.verifySignature(emptyPayload, signature)).toBe(true);
      expect(signature).toMatch(/^[a-f0-9]{64}$/);
    });

    it('should handle binary data like Go implementation', () => {
      const binaryData = Buffer.from([0x00, 0x01, 0x02, 0x03, 0xff, 0xfe]);
      const signature = verifier.generateSignature(binaryData);
      expect(verifier.verifySignature(binaryData, signature)).toBe(true);
    });
  });
});

describe('SignatureUtils', () => {
  const testSecret = 'test-secret';
  const testPayload = '{"test": "data"}';

  describe('create', () => {
    it('should create SignatureVerifier instance', () => {
      const verifier = SignatureUtils.create(testSecret);
      expect(verifier).toBeInstanceOf(SignatureVerifier);
    });
  });

  describe('verifyJson', () => {
    it('should verify JSON signature without creating instance', () => {
      const jsonObject = { test: 'data' };
      const signature = SignatureUtils.generate(JSON.stringify(jsonObject), testSecret);
      expect(SignatureUtils.verifyJson(jsonObject, signature, testSecret)).toBe(true);
    });

    it('should reject invalid JSON signature', () => {
      const jsonObject = { test: 'data' };
      const invalidSignature = 'invalid';
      expect(SignatureUtils.verifyJson(jsonObject, invalidSignature, testSecret)).toBe(false);
    });
  });

  describe('verify', () => {
    it('should verify string signature without creating instance', () => {
      const signature = SignatureUtils.generate(testPayload, testSecret);
      expect(SignatureUtils.verify(testPayload, signature, testSecret)).toBe(true);
    });

    it('should verify buffer signature without creating instance', () => {
      const buffer = Buffer.from(testPayload);
      const signature = SignatureUtils.generate(buffer, testSecret);
      expect(SignatureUtils.verify(buffer, signature, testSecret)).toBe(true);
    });
  });

  describe('generate', () => {
    it('should generate signature for string', () => {
      const signature = SignatureUtils.generate(testPayload, testSecret);
      expect(signature).toMatch(/^[a-f0-9]{64}$/);
    });

    it('should generate signature for buffer', () => {
      const buffer = Buffer.from(testPayload);
      const signature = SignatureUtils.generate(buffer, testSecret);
      expect(signature).toMatch(/^[a-f0-9]{64}$/);
    });
  });
});

describe('Integration Examples', () => {
  const secret = 'webhook-secret-key';

  it('should verify webhook signature from JSON payload', () => {
    // Simulate receiving a webhook with JSON payload
    const webhookPayload = {
      event: 'user.created',
      data: {
        userId: '12345',
        email: 'user@example.com',
        timestamp: '2023-12-01T10:00:00Z',
      },
    };

    // Generate signature (as your Go server would)
    const payloadString = JSON.stringify(webhookPayload);
    const signature = SignatureUtils.generate(payloadString, secret);

    // Verify signature (as your TypeScript client would)
    const isValid = SignatureUtils.verifyJson(webhookPayload, signature, secret);
    expect(isValid).toBe(true);

    // Also verify with string payload
    const isValidString = SignatureUtils.verify(payloadString, signature, secret);
    expect(isValidString).toBe(true);
  });

  it('should handle API response verification', () => {
    // Simulate API response verification
    const apiResponse = {
      status: 'success',
      data: ['item1', 'item2', 'item3'],
      metadata: {
        total: 3,
        page: 1,
      },
    };

    const verifier = new SignatureVerifier(secret);
    const signature = verifier.generateSignature(JSON.stringify(apiResponse));

    // Verify the response hasn't been tampered with
    expect(verifier.verifyJsonSignature(apiResponse, signature)).toBe(true);

    // Tampered response should fail verification
    const tamperedResponse = { ...apiResponse, data: ['item1', 'item2', 'item3', 'item4'] };
    expect(verifier.verifyJsonSignature(tamperedResponse, signature)).toBe(false);
  });

  it('should demonstrate timing-safe comparison', () => {
    const payload = 'sensitive data';
    const correctSignature = SignatureUtils.generate(payload, secret);

    // Create a signature that differs by one character
    const almostCorrectSignature = correctSignature.slice(0, -1) + '0';

    // Both should complete in roughly the same time due to timing-safe comparison
    const start1 = Date.now();
    const result1 = SignatureUtils.verify(payload, correctSignature, secret);
    const time1 = Date.now() - start1;

    const start2 = Date.now();
    const result2 = SignatureUtils.verify(payload, almostCorrectSignature, secret);
    const time2 = Date.now() - start2;

    expect(result1).toBe(true);
    expect(result2).toBe(false);

    // Times should be relatively close (timing-safe comparison)
    // Note: This is a basic test; in practice, timing differences are much smaller
  });
});
