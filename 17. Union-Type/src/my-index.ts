function mySomeFn(myArgument: number | string | boolean | any[]) {
    if(isMyString(myArgument)) {
        return myArgument.toUpperCase();
    } else if (typeof myArgument === "number") {
        return myArgument * 2;
    } else if(typeof myArgument === "boolean") {
        return !myArgument;
    } else {
        return myArgument.length;
    }
}

function isMyString(someObj : any) : someObj is string {
    return (typeof someObj === "string");
}

console.log(mySomeFn("hallo welt!"));
console.log(mySomeFn(2));
console.log(mySomeFn(false));
console.log(mySomeFn(["hallo", "welt!", 1]));