"use strict";
function returnKeys(arg) {
    console.log(Object.keys(arg));
    return arg;
}
const f = returnKeys({
    abc: 'def'
});
const John = {
    special: 'This is my special property',
    name: 'John',
    age: 32
};
class Observable {
    subscribe(arg) {
        console.log(`Subscribed to ${arg.name}`);
    }
}
new Observable().subscribe(John);
