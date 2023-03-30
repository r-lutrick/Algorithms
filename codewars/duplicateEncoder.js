/* 
The goal of this exercise is to convert a string to a new string where each 
character in the new string is "(" if that character appears only once in 
the original string, or ")" if that character appears more than once in the 
original string. Ignore capitalization when determining if a character is a 
duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, 
not the input!
*/

let word1 = "Success"

function duplicateEncode(word) {
    word = word.toLowerCase();
    let output = ""
    let mappedWord = {}
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        mappedWord.hasOwnProperty(letter) ? mappedWord[letter] += 1 : mappedWord[letter] = 1
    }
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        mappedWord[letter] > 1 ? output += ")" : output += "("
    }
    return output
}

console.log(duplicateEncode(word1)) //")())())"