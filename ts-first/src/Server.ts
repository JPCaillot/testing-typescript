import { Comp1 as someComponent } from "./data/components/Comp1";
import * as Comp from './data/components/Comp1';

import { Comp1 } from "@components/Comp1"; //option with tsconfig

function logInvocation(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const className = target.constructor.name;
    let originalMethod = descriptor.value;
    descriptor.value = async function(...args: any[]) {
        console.log(`${className}#${propertyKey} called with ${JSON.stringify(args)}`);

        const result = await originalMethod.apply(this, args);

        console.log(`${className}#${propertyKey} returned ${JSON.stringify(result)}`);
    }
}

export interface IServer {

    startServer(): void;
    stopServer(): void;

}

class BaseServer implements IServer {

    // private port: number;
    // private address: string;
    public comp1 = new someComponent;
    public comp2 = new Comp.Comp1;
    public date: string = '';

    constructor(public port: number, public address: string) { // also possible, but not that worth it
        this.port = port;
        this.address = address;
    }

    async startServer() {
        const data = await this.getData(123);
        console.log(`Starting server at: ${this.address}: ${this.port}`);
        // return function() { noImplicitThis to avoid confusion between class and function "this"
        //     this.date = 5;
        // }
    }

    stopServer(): void {};

    @logInvocation
    async getData(id: number): Promise<string> {
        return 'data';
    }

}

// class DbServer extends BaseServer {

//     constructor(port: number, address: string) {
//         super(port, address);
//         console.log('calling db server constructor');
//     }

//     stopServer(): void{
//         console.log('stopping server');
//     };

// }

const someServer: IServer = new BaseServer(8080, 'localhost') 
someServer.startServer();
// const somePort = (someServer as any).port;
// console.log(somePort);