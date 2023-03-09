import CryptoJS, { AES } from "crypto-js";
import config from "../config/default";

export const encryptFile = (fileData: string, iv: string) => {
  return new Promise((resolve, reject) => {
    const decryptedData = AES.decrypt(fileData, config.secret_key, {
      iv: CryptoJS.enc.Hex.parse(iv),
    });
    resolve(decryptedData);
  });
};
export default encryptFile;
