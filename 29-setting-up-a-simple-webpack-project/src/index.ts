export function log(s: string) {
    console.log(s);
}

class A {
    greeting = "hello world";
}

log(new A().greeting);
