load("mjs_testing.js");
//load("tests_abs.js");
//load("tests_log.js");
load("tests_number.js");

runTests([
   { name: "Number", func: buildNumberScenarios },
   //{ name: "Math.abs", func: buildAbsScenarios },
   //{ name: "Math.log", func: buildLogScenarios }
]);
