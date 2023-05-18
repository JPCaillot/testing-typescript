import { IServer } from "./Server";

var a: string = "Hello World!";
var b: number = 5;
var c: boolean = false;

var someArray: string[] = [];
someArray.push(a);
someArray.push(b as any); //last resort, unadvisable

// console.log(someArray);

interface Person {
    firstName: string,
    lastName: string
    job?: job
    isVisitor?: boolean
}

type job = 'Engineer' | 'Programmer';

function generateEmail(input: Person, force?: boolean): string | undefined {
    if (input.isVisitor && !force) {
        return undefined;
    } else {
        return `${input.firstName}.${input.lastName}@email.com`
    }
}

const abc: string | undefined = generateEmail({} as any);

function toUpperCase(arg: string) {};

toUpperCase(abc!)

// console.log(generateEmail({
//     firstName: 'Jane',
//     lastName: 'Doe',
//     isVisitor: true
// }, true));

function isPerson(potentialPerson: any): boolean {
    if ('firstName' in potentialPerson &&
    'lastName' in potentialPerson) {
        return true;
    } else {
        return false;
    }
}

function printEmailIfPerson(potentialPerson: any): void {
    if (isPerson(potentialPerson)) {
        console.log(generateEmail(potentialPerson));
    } else {
        console.log('Input is not a person');
    }
}

printEmailIfPerson({
    firstName: 'Jane',
    lastName: 'Doe'
});

async function someAsync() {
    return 'async'
}