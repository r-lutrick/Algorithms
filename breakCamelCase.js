/*
Complete the solution so that the function will break up camel casing, using a space between words.

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
let test1 = 'camelCasing'
let test2 = 'camelCasingTest'

function solution(string) {
    return string.replace(/([A-Z])/, " $1")
}

console.log(solution(test1))