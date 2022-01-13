function mySomeFn(myArgument: number | string | boolean) {
    if(typeof myArgument === "string") {
        return myArgument.toUpperCase();
    } else if (typeof myArgument === "number") {
        return myArgument * 2;
    } else if(typeof myArgument === "boolean") {
        return !myArgument;
    }
}

console.log(mySomeFn("hallo welt!"));
console.log(mySomeFn(2));
console.log(mySomeFn(false));