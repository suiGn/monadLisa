import crypto from 'crypto';
import pkg from 'js-sha3';
const { keccak256 } = pkg;

/**
 * Generates a Digital Identifier (DID) for an object using a specified hashing algorithm.
 * @param {Object} data - The object to be hashed.
 * @param {string} algorithm - The hashing algorithm to use ('SHA-256' or 'Keccak-256').
 * @returns {string} The generated DID.
 */
function Cleaker(data, algorithm = 'SHA-256') {
  const dataString = JSON.stringify(data);

  let hash;
  if (algorithm === 'SHA-256') {
    hash = crypto.createHash('sha256').update(dataString).digest('hex');
  } else if (algorithm === 'Keccak-256') {
    hash = keccak256(dataString);
  } else {
    throw new Error('Unsupported hashing algorithm');
  }

  return hash;
}

export default Cleaker;
