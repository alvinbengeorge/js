var a = "hello";
console.log(a);
a = 10;
console.log(a);
//^^ bad habits ^^

var m = 11;

func = function () {
    console.log("first")
}
// func()


console.log(m)


// loops
let s = "abcdefghijklmnop";
for (i = 0; i < s.length; i++) {
    //console.log(s[i])
}

const vowels = ['a', 'e', 'i', 'o', 'u']
let num = 0
while (num < s.length) {
    if (vowels.includes(s[num])) {
        console.log(s[num])
    }
    //num = num + 1;
    num++;
}

