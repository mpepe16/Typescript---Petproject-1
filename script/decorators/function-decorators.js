"use strict";
var NoRoleCheck = /** @class */ (function () {
    function NoRoleCheck() {
    }
    NoRoleCheck.prototype.AnyoneCanRun = function (args) {
        if (!IsInRole("user")) {
            console.log("".concat(currentUser.user, " is not in the user role"));
            return;
        }
        ;
        console.log(args);
    };
    NoRoleCheck.prototype.AdminOnly = function (args) {
        if (!IsInRole("admin")) {
            console.log("".concat(currentUser.user, " is not in the admin role"));
        }
        ;
        console.log(args);
    };
    return NoRoleCheck;
}());
var currentUser = { user: "peter", roles: [{ role: "user" }, { role: "admin" }]
};
function TestDecoratorExample(decoratorMethod) {
    console.log("Current user ".concat(currentUser.user));
    decoratorMethod.AnyoneCanRun("Running as user");
    decoratorMethod.AdminOnly("Running as admin");
}
function IsInRole(role) {
    return currentUser.roles.some(function (x) { return x.role === role; });
}
TestDecoratorExample(new NoRoleCheck());
//# sourceMappingURL=function-decorators.js.map