"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestClass = void 0;
let currentUser = { user: "peter", roles: [{ role: "user" }, { role: "admin" }]
};
function TestMethod(target, propertyKey, PropertyDescriptor) {
    console.log(target);
    console.log(propertyKey);
    PropertyDescriptor.value = function (...args) {
        return `Hello ${args}`;
    };
}
//Now in the parameter we can expect an object
function Component(options) {
    return (target) => {
        target.elementId = options.id;
    };
}
//Now we can pass the object with the id propety to the component decorator
let TestClass = class TestClass {
    printId(prefix = '') {
        return prefix + this.id;
    }
};
__decorate([
    TestMethod
], TestClass.prototype, "printId", null);
TestClass = __decorate([
    Component({ id: "Hello wordl", })
], TestClass);
exports.TestClass = TestClass;
// This can be applied with @Admin
function Admin(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function () {
        if (IsInRole("admin")) {
            originalMethod.apply(this, arguments);
        }
        else {
            console.log(`${currentUser.user} is not in the admin role`);
        }
    };
    return descriptor;
}
function Role(role) {
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function () {
            if (IsInRole(role)) {
                originalMethod.apply(this, arguments);
            }
            return console.log(`${currentUser.user} is not in the  ${role} role`);
        };
    };
}
function RoleTwo(role) {
    return function (constructor) {
        if (!IsInRole(role)) {
            throw new Error('The user is not authorized to access this class');
        }
    };
}
let RestrictedClass = class RestrictedClass {
    constructor() {
        console.log(`Inside the constructor`);
    }
    Validate() {
        console.log(`Validating`);
    }
};
RestrictedClass = __decorate([
    RoleTwo("admin")
], RestrictedClass);
class NoRoleCheck {
    AnyoneCanRun(args) {
        if (!IsInRole("user")) {
            console.log(`${currentUser.user} is not in the user role`);
            return;
        }
        ;
        console.log(args);
    }
    AdminOnly(args) {
        if (!IsInRole("admin")) {
            console.log(`${currentUser.user} is not in the admin role`);
        }
        ;
        console.log(args);
    }
}
class DecoratedExampleMethodDecoration {
    AnyoneCanRun(args) {
        console.log(args);
    }
    AdminOnly(args) {
        console.log(args);
    }
}
__decorate([
    Role('user')
], DecoratedExampleMethodDecoration.prototype, "AnyoneCanRun", null);
__decorate([
    Role('admin')
], DecoratedExampleMethodDecoration.prototype, "AdminOnly", null);
function TestDecoratorExample(decoratorMethod) {
    console.log(`Current user ${currentUser.user}`);
    decoratorMethod.AnyoneCanRun(`Running as user`);
    decoratorMethod.AdminOnly(`Running as admin`);
}
function IsInRole(role) {
    return currentUser.roles.some(x => x.role === role);
}
TestDecoratorExample(new NoRoleCheck());
console.log(new TestClass().printId('Florian'));
console.log(new RestrictedClass().Validate());
//# sourceMappingURL=function-decorators.js.map