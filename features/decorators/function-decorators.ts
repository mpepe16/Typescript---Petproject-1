let currentUser = {user: "peter", roles : [{role:"user"}, {role:"admin"}]
};


function TestMethod(target: Object, propertyKey: string, PropertyDescriptor: PropertyDescriptor){
    console.log(target);
    console.log(propertyKey);
    PropertyDescriptor.value = function(...args: any[]){
        return `Hello ${args}`
    }
}

//Now in the parameter we can expect an object
function Component(options: {id: string}){
    return (target: Function & typeof TestClass) => {
        target.elementId = options.id;
    }
}
//Now we can pass the object with the id propety to the component decorator
@Component({id: "Hello wordl",})
export class TestClass{
    static elementId: string;
    id!: number;
    
    printId(prefix: string =''): string {
        return prefix + this.id;
    }
}

// This can be applied with @Admin
function Admin(target: any, propertyKey : string | symbol, descriptor : PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function() {
        if (IsInRole("admin")) {
            originalMethod.apply(this, arguments);
        } else {
            console.log(`${currentUser.user} is not in the admin role`);
        }
    }
    return descriptor;
}
interface IDecoratorExample {
    AnyoneCanRun(args:string) : void;
    AdminOnly(args:string) : void;
   }
   class NoRoleCheck implements IDecoratorExample {
    AnyoneCanRun(args: string): void {
        if (!IsInRole("user")) {
        console.log(`${currentUser.user} is not in the user role`);
        return;
        };
        console.log(args);
       }
       AdminOnly(args: string): void {
        if (!IsInRole("admin")) {
        console.log(`${currentUser.user} is not in the admin role`);
        };
        console.log(args);
       }
   }



function TestDecoratorExample(decoratorMethod : IDecoratorExample) {
 console.log(`Current user ${currentUser.user}`);
 decoratorMethod.AnyoneCanRun(`Running as user`);
 decoratorMethod.AdminOnly(`Running as admin`);

}
function IsInRole(role:string):boolean {
    return currentUser.roles.some(x => x.role === role);
}
TestDecoratorExample(new NoRoleCheck());
console.log(new TestClass().id + 1);
   