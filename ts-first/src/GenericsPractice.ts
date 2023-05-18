
function returnKeys<T extends Object>(arg: T) {

    console.log(Object.keys(arg));
    return arg;

}

const f = returnKeys({
    abc: 'def'
})

interface Person2<T> {
    name: string,
    age: number,
    special: T
}

const John: Person2<string> = {
    special: 'This is my special property',
    name: 'John',
    age: 32
}

class Observable <T extends Person2<string>>{

    subscribe(arg: T){
        console.log(`Subscribed to ${arg.name}`);
    }

}

new Observable<typeof John>().subscribe(John);
