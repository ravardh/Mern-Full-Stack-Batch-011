import FS from "fs";
import Path from "path";

const fileName = "Sample.txt";

let PathName = Path.dirname("Sample.txt");
console.log(PathName);

PathName = Path.extname("Sample.txt");
console.log(PathName);

PathName = Path.resolve("");
console.log(PathName);

FS.writeFile(fileName, "Hello world this is file", "ascii", (err) => {
  if (err) {
    console.log(fileName + " can't be created" + err);
  } else {
    console.log("File created Sucessfully");
  }
});

FS.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.log(fileName + " can't be read" + err);
  } else {
    console.log(data);
  }
});

FS.appendFile(fileName, "This is append text", "utf-8", (err) => {
  if (err) {
    console.log(fileName + " can't be appended" + err);
  } else {
    console.log("File appended Sucessfully");
  }
});

FS.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.log(fileName + " can't be read" + err);
  } else {
    console.log(data);
  }
});
