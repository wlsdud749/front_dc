// let module2 = require("./test_module");
// let partModule = module2.partModule;
// let moduleName = module2.moduleName;

const {partModule, moduleName} = require("./test_module"); // 구조분해 처럼 사용 가능

partModule.func();
console.log("moduleName: " + moduleName);