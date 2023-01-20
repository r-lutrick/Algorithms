function d6() {
    var roll = Math.random();
    roll = Math.ceil(roll * 6) //Ceiling is used here due to it not including 0. Floor could be used but a +1 would be needed because floor includes 0
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function oracle(arr) {
    /*  
    var i = Math.random()  < set variable i to be a random number (0.01 - 0.99)
    i = i * arr.lenth      < update itself with lenth. Using arr.length allows for different sized arrays. 
    i = Math.floor(i)      < update itself with floor. Floor is used here because we want to include the 0. 
    Above can be written like this as well:
    */
    var i = Math.floor(Math.random() * arr.length);
    return arr[i]
}

console.log(oracle(lifesAnswers))
