var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Comp1 as someComponent } from "./data/components/Comp1";
import * as Comp from './data/components/Comp1';
class BaseServer {
    constructor(port, address) {
        this.port = port;
        this.address = address;
        // private port: number;
        // private address: string;
        this.comp1 = new someComponent;
        this.comp2 = new Comp.Comp1;
        this.date = '';
        this.port = port;
        this.address = address;
    }
    startServer() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getData();
            console.log(`Starting server at: ${this.address}: ${this.port}`);
            // return function() { noImplicitThis to avoid confusion between class and function "this"
            //     this.date = 5;
            // }
        });
    }
    stopServer() { }
    ;
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'data';
        });
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
const someServer = new BaseServer(8080, 'localhost');
someServer.startServer();
// const somePort = (someServer as any).port;
// console.log(somePort);
