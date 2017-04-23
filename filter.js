var fs = require("fs");

var afterjsonFileName = "afterjson.txt"

if (process.argv.length < 3) {
    console.log("usage:   filter.js <tag name>");
}

var tag = process.argv[2];

var beforejson = JSON.parse(fs.readFileSync("beforejson.json", "utf8"));
var afterjson = fs.openSync(afterjsonFileName, "a");

beforejson.forEach(function(e) {
    if (e.tags.includes(tag)) {
        fs.appendFileSync(afterjsonFileName, e.description + "   " + e.href+"\n");
    }
});