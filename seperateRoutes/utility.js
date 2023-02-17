import fs from "fs";

if (!fs.existsSync("./data.json")) {
    fs.writeFile(
        "./data.json", 
        JSON.stringify({"messages": {}}), 
        () => { console.log("Created data.json") }
    );
}

function readData() {
    return JSON.parse(fs.readFileSync("./data.json"));
}

function writeFile(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data));
}

export { readData, writeFile };