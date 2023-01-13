/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/
// return masked string
function maskify(cc) {
    //   split into two pieces one for masking other for output then join together
    if (cc > 4) {
        let view = cc.substring(cc.length - 4, cc.length)
        let maskLength = cc.length - 5
        mask = ""
        for (let i = 0; i < maskLength; i++) {
            mask = mask + "#"
        }
        return mask + view
    } else {
        return cc
    }

    // best practice
    // return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
console.log(maskify('4556364607935616'))