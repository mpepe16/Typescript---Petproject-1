"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var union_types_1 = require("./union-types");
var UnionRangeValidationWithTypeAlias = /** @class */ (function (_super) {
    __extends(UnionRangeValidationWithTypeAlias, _super);
    function UnionRangeValidationWithTypeAlias() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnionRangeValidationWithTypeAlias.prototype.IsInRange = function (value) {
        if (typeof value === "number") {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    };
    return UnionRangeValidationWithTypeAlias;
}(union_types_1.RangeValidationBase));
var total = 10;
if (new UnionRangeValidationWithTypeAlias(0, 100).IsInRange(total)) {
    console.log("This value is in range");
}
