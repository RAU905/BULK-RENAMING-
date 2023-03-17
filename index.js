const fs = require("fs");
const path = require("path");
const replaceThis = "raushan";
const replaceWith = "rausn";
const preview = true;
const folder = __dirname;
try {
  fs.readdir(folder, (err, data) => {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      let item = data[index];
      let oldFile = path.join(folder, item);
      let newFile = path.join(
        folder,
        item.replaceAll(replaceThis, replaceWith)
      );
      if (!preview) {
        fs.rename(oldFile, newFile, () => {
          console.log("Rename successful of  " + data[index]);
        });
      } else {
        if (folder + item !== newFile) {
          console.log(folder + item + " will be renamed to " + newFile);
          fs.rename(folder + item, newFile, () => {
            console.log("Rename successful of  " + data[index]);
          });
        } else {
          console.log(" already renamed ");
        }
      }
    }
  });
} catch (err) {
  console.error(err);
}
