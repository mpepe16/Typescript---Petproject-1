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

let currentUser = {user: "peter", roles : [{role:"user"}, {role:"admin"}]
};
function TestDecoratorExample(decoratorMethod : IDecoratorExample) {
 console.log(`Current user ${currentUser.user}`);
 decoratorMethod.AnyoneCanRun(`Running as user`);
 decoratorMethod.AdminOnly(`Running as admin`);
}

function IsInRole(role:string):boolean {
    return currentUser.roles.some(x => x.role === role);
}

TestDecoratorExample(new NoRoleCheck());
   