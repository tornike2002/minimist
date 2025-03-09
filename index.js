#!/usr/bin/env node

import path from "path";
import fs from "fs";
import minimist from "minimist";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const args = minimist(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"],
});

if (args.help) {
  printHelp();
} else if (args.file) {
  let filePath = path.resolve(args.file);
  console.log(__dirname);
  console.log(filePath);
} else {
  error("Incorrect Usage", true);
}

// ***************************************

function printHelp() {
  console.log("index.js usage:");
  console.log("");
  console.log("  index.js --help");
  console.log("  index.js --file={FILENAME}");
  console.log("");
  console.log("--help                 print this help");
  console.log("--file={FILENAME}      process the file");
}

function error(msg, includeHelp = false) {
  console.error(msg);
  if (includeHelp) {
    console.log("");
    printHelp();
  }
}
