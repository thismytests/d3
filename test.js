// Exercise #1.
function exercise1() {
    let a = 1;
    let b = 0;

    if (a) {
        let a = 2;
        b = a;
    }

    console.log("a =", a);
    console.log("b =", b);
}

// exercise1();

// Exercise #2
function exercise2(input) {
    let {a, b} = input;
    let c = a + b; // 3

    const d = 0;

    if (c > 0) {
        d = c;
    }

    console.log("d =", d);
}

// exercise2({ a: 1, b: 2 });

// Exercise #3
function exercise3() {
    const a = {b: {c: 3}};
    const a1 = Object.assign({}, a);
    const c1 = a.b.c + 0;

    console.log(a === a1); // false
    console.log(a.b === a1.b); // true
    console.log(a.b.c === c1); // true
}

Object.prototype._assign = function (obj1, obj2) {
    Object.keys(obj2).forEach(function (key) {
        console.log(`key`, key);
        obj1[key] = obj2[key]
    })

    return obj1
}


// exercise3();

// Exercise #4
function exercise4() {
    var store = 0;

    function counter() {
        store = store + 1
        return store
    }

    console.assert(counter() === 1, "Ooops");
    console.assert(counter() === 2, "Ooops");
    console.assert(counter() === 3, "Ooops");
    console.assert(counter() === 4, "Ooops");
}

exercise4();

// Exercise #5
function exercise5() {
    const a = {
        message: "Hello world!",
        log: function () {
            console.log(this.message);
        }
    };

    setTimeout(() => a.log(), 1000);
}

// exercise5();

// Esercise #6
// Write a program that displays numbers from 1 to 100.
// In this case, instead of numbers that are multiples of three,
// the program should display the word "Fizz",
// and instead of numbers that are multiples of five, the word "Buzz".
// If the number is a multiple of both 3 and 5,
// then the program should display the word "FizzBuzz"
function exercise6() {
    for (let i = 1; i <= 100; i++) {

        if (!(i % 15)) {
            console.log(`FizzBuzz`,);
        } else if (!(i % 3)) {
            console.log(`Fizz: `);
        } else if (!(i % 5)) {
            console.log(`Buzz: `);
        }

    }
}

exercise6();

// Exercise #7
function exercise7() {
    const jobsQueue = [
        {duration: 100},
        {duration: 2000},
        {duration: 500},
        {duration: 1000},
        {duration: 200},
        {duration: 1500},
        {duration: 500}
    ];

    async function processJob(job) {
        const {duration} = job;

        console.log(`Start: ${duration}`);

        await new Promise((resolve) => {
            setTimeout(resolve, duration);
        });

        console.log(`Finished: ${duration}`);
    }

    async function processAll(par11n /* parallelization */) {
        // your code here
    }

    processAll(2)
        .then(() => {
            console.log("Finished All");
        })
        .catch((error) => {
            console.error(error);
        });
}

// exercise7();
