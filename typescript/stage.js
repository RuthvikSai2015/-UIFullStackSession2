var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorator1(constructor) {
    console.log('Decoration Started with Flowers');
}
var StageDecor = /** @class */ (function () {
    function StageDecor() {
        this.height = 200;
        this.width = 100;
        console.log("Objects Creation without decoration");
    }
    StageDecor = __decorate([
        decorator1
    ], StageDecor);
    return StageDecor;
}());
var stgobj = new StageDecor();
console.log(stgobj);
