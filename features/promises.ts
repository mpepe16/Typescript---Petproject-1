function ExpensiveWebCall(time : number) : Promise<void> {
    return new Promise((resolve, reject) => setTimeout(resolve, time));
   }
   class MyWebService {
    async CallExpensiveWebOperation() {
    try {
    await ExpensiveWebCall(4000);
    console.log(`Finished web service`);
} catch (error) {
    console.log(`Caught ${error}`);
    }
    }
   }
   

console.log(`calling service`);
new MyWebService().CallExpensiveWebOperation();
console.log(`Processing continues until the web service returns`);