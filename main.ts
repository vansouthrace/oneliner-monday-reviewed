import * as fs from "node:fs";

const entry = "Monday gets one star: it showed up uninvited, ruined my weekend's sequel, and had the nerve to bring a meeting with it.";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
