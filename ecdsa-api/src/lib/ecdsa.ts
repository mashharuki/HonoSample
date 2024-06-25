
/**
 * 署名関数
 * @param message 
 * @param privateKey 
 * @returns 
 */
export async function signMessage(message: string, privateKey: string): Promise<string> {
  // Use the crypto package to sign the message with the private key
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  console.log("data:", data);
  console.log("privatekey:", privateKey);
  // Sign the data
  const signature = await crypto.subtle.sign(
    { name: 'ECDSA', hash: { name: 'SHA-256' } },
    await crypto.subtle.importKey('jwk', JSON.parse(privateKey), { name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign']),
    data
  );
  return Buffer.from(signature).toString('base64');
}

/**
 * 検証関数
 * @param message 
 * @param signature 
 * @param publicKey 
 * @returns 
 */
export async function verifySignature(
  message: string, 
  signature: string, 
  publicKey: string
): Promise<boolean> {
  // Use the crypto package to verify the signature with the public key
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const sig = Buffer.from(signature, 'base64');
  // Verify the signature
  const valid = await crypto.subtle.verify(
    { 
      name: 'ECDSA', 
      hash: { name: 'SHA-256' } 
    },
    // Import the public key
    await crypto.subtle.importKey('jwk', JSON.parse(publicKey), { name: 'ECDSA', namedCurve: 'P-256' }, true, ['verify']),
    sig,
    data
  );
  console.log("verify result:", valid);
  return valid;
}