const TestLib    = require("./test/test_lib");
const TestRunner = require("./test/test_runner");


let runner = new TestRunner([TestLib]);

runner.runAll();