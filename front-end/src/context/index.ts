// .env load keys from.env file and buffers!

import CryptoJS, { AES } from "crypto-js";
import axios from "axios";

import env from "../config/default";

const encryptFile = async (file: any, iv: CryptoJS.lib.WordArray) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  if (reader) {
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        const fileContents = reader.result as ArrayBuffer;
        const blob = new Blob([fileContents], { type: file.type });

        const encrypted = AES.encrypt(JSON.stringify(blob), env.secret_key, {
          iv: iv,
        }).toString();
        resolve(encrypted);
      };
    });
  }
};

const uploadFile = (file: File) => {
  return new Promise(async (resolve, reject) => {
    const iv = CryptoJS.lib.WordArray.random(16);

    await encryptFile(file, iv).then((data) => {
      debugger;
      const _data = {
        file_name: file.name,
        user_id: 1,
        extension: file.type,
        file: data,
        iv: iv.toString(),
      };

      const headers = {
        "Content-Type": "application/json",
      };

      axios
        .post(`${env.url}/api/upload`, _data, { headers: headers })
        .then((res) => {
          resolve(res);
        });
    });
  });
};

export { uploadFile };
