const partModule = {
    value: "korea",
    func: function () {
        console.log("vlaue =", this.value);
    }

}; // 함수 선언

module.exports.moduleName = "partModule"; // 모듈로 export
module.exports.partModule = partModule;