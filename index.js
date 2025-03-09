#!/usr/bin/env node

import minimist from "minimist";

const args = minimist(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"],
});

if (args.help) {
  printHelp();
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
