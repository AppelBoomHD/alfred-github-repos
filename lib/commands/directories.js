const { readdirSync } = require("fs");

const PROJECT_DIR = process.env.PROJECT_DIR;
const INC_SUBDIRS = !!+process.env.INC_SUBDIRS;

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const dirs = getDirectories(PROJECT_DIR);

const items = [];

if (INC_SUBDIRS) {
  dirs.forEach((dir) => {
    items.push({
      title: dir,
      subtitle: `Create project in directory: \`${dir}\``,
      arg: `${PROJECT_DIR}/${dir}`,
    });
  });
} else {
  items.push({
    title: "New Project",
    subtitle: `Create project in directory: \`${PROJECT_DIR}\``,
    arg: `${PROJECT_DIR}`,
  });
}

console.log(JSON.stringify({ items }, null, "\t"));
