
// - Expands the 26x26 table to 256x256 to encrypt ASCII text
// - Uses the Beaufort cipher's method of symmetric encryption/decryption using the table
// - Uses the Autokey cipher's method of expanding the encryption key with the plaintext
// - Base64 encodes the resulting ASCII ciphertext for easier display
const {Base64} = require('js-base64');

const beaufortAutokey = (key) => {
  const ascii = () => Array.from({ length: 256 }, (_, i) => String.fromCharCode(i)).join('');
  const shift = (text) => text.length <= 1 ? text : text.slice(1) + text[0];
  const rotate = (text, distance) => Array(distance).fill().reduce(result => shift(result), text);
  const base64Encode = (text) => Base64.encode(text);
  const base64Decode = (text) => Base64.decode(text);

  const table = (() => {
    const rows = {};
    const alphabet = ascii();

    return (textChar, keyChar) => {
      const row = rows[textChar] || (rows[textChar] = rotate(alphabet, alphabet.indexOf(textChar)));
      const column = row.indexOf(keyChar);

      return alphabet[column];
    };
  })();
  
  const encrypt = (plaintext) => {
    const ciphertext = plaintext.split('').reduce((result, textChar, index) => {
      const keyChar = index < key.length ? key[index] : plaintext[index - key.length];

      return result + table(textChar, keyChar);
    }, '');

    return base64Encode(ciphertext);
  };
  
  const decrypt = (ciphertext) => {
    return base64Decode(ciphertext).split('').reduce((result, textChar, index) => {
      const keyChar = index < key.length ? key[index] : result[index - key.length];

      return result + table(textChar, keyChar);
    }, '');
  };
  
  return { encrypt, decrypt };
};

const {encrypt, decrypt} = beaufortAutokey("daniildubov")

const string = `
G0EhKBBMIjBCGy4EAAjDqxDDlCLDtsOSDyjDrsOYw7Y2w77DvsORw7jDuyXDjA8DL8OcBgnDvxIAw4w0BADDjcO7w7MAw70lBA4Aw6vDtsO+w7cyw70Ow5/DvcOyABAvCgTDkcOxJcOoA8O/AMOyw5/DvcO6L8O+w5EELwLDkQrDvC4Sw5sYw7kQw44QAATDtwAAw7DDrTbDvMO+I8O4w7oAw4wiEw8ABBPDjcO+LwU0w4nDs8O3w4wlw7UOBQDDtcOYDsO8LhHDi8O6w7MPw5IRw68pDMORIwEKEcOxLsO+GMONw74Dw4c0BsO8E8OKAMOvEMO6AwsAw77DtsO8AyUEw7TDuykHw47DtcO4JQTDki7DuwLDmwLDvw==
`

console.log(decrypt(string))