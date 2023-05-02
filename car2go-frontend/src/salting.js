import CryptoJS from 'crypto-js';

const key = 'my-secret-key'; // replace with your own secret key

export function encryptId(id) {
  return CryptoJS.AES.encrypt(id, key).toString();
}

export function decryptId(ciphertext) {
  if (!ciphertext) {
    console.error('Ciphertext is null or undefined');
    return null; // or throw an error
  }
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Error decrypting ciphertext:', error);
    return null; // or throw an error
  }
}
