var fs = require("fs");

var afterjsonFileName = "afterjson.txt"

var beforejson = JSON.parse(fs.readFileSync("beforejson.json", "utf8"));
var afterjson = fs.openSync(afterjsonFileName, "a");

var qdomainArray = [];

beforejson.forEach(function(e) {
    if (e.tags.includes("qdomain")) {
        fs.appendFileSync(afterjsonFileName, e.href+"\n");
    }
});