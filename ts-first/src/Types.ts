

let abc = undefined; //should be defined in the future
const def = null;

function getData(): string | undefined {
    return '';
}

const data = getData();

if (data) { //check if exists will make someOtherData automatically turn into just string
    const someOtherData = data;
}

let input: unknown; //type that is still not known (forms)
input = 'someInput';
let someSensitiveValue: string;

if (typeof input === 'string') {
    someSensitiveValue = input; //won't compile outside
}

//console.log(someSensitiveValue!);

function doTasks(tasks: number): void | never { //never - when it throws errors, it doesn't return anything
    if (tasks > 3) {
        throw new Error('Too many tasks!');
    }
}

const stuff = doTasks(2);
