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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeValidationBase = void 0;
var RangeValidationBase = /** @class */ (function () {
    function RangeValidationBase(start, end) {
        this.start = start;
        this.end = end;
    }
    RangeValidationBase.prototype.RangeCheck = function (value) {
        return value >= this.start && value <= this.end;
    };
    RangeValidationBase.prototype.GetNumber = function (value) {
        return new Number(value).valueOf();
    };
    return RangeValidationBase;
}());
exports.RangeValidationBase = RangeValidationBase;
var UnionRangeValidation = /** @class */ (function (_super) {
    __extends(UnionRangeValidation, _super);
    function UnionRangeValidation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnionRangeValidation.prototype.IsInRange = function (value) {
        if (typeof value === "number") {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    };
    return UnionRangeValidation;
}(RangeValidationBase));
//# sourceMappingURL=union-types.js.map