var word = "kayak";

var ana = word.split("").reverse().join("");
ana == word
  ? console.log("C'est un annagramme")
  : console.log("Word is not an annagramme");

console.log(ana);
