import path from "path";
import * as fs from "node:fs";

async function fetchData() {
  const filePath = path.join(process.cwd(), "src", "markdown");

  const data = await new Promise<string[]>((resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(files);
      }
    });
  });

  return data;
}

export default fetchData;