"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeValidationBase = void 0;
class RangeValidationBase {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    RangeCheck(value) {
        return value >= this.start && value <= this.end;
    }
    GetNumber(value) {
        return new Number(value).valueOf();
    }
}
exports.RangeValidationBase = RangeValidationBase;
class UnionRangeValidation extends RangeValidationBase {
    IsInRange(value) {
        if (typeof value === "number") {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}
//# sourceMappingURL=union-types.js.map