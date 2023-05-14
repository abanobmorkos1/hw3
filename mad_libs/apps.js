const object = {
    number : "",
    adjective: "",
    pluralNoun:"",
    adverb: "",
    anotherAdjective: "",
}

// func for prompt
 function ask (){
    object.number = prompt("Give a number")
    object.adjective = prompt("Give a adjective")
    object.pluralNoun =prompt("Give me a Plural Noun")
    object.adverb = prompt("Give me a Adverb")
    object.anotherAdjective = prompt("Another Adjective")
 }
ask()

 let outCome = `Once upon a time a group of ${object.number} General Assembly graduates
 got together and made a startup called ${object.adjective} Technologies.
 Their goal was to create smart ${object.pluralNoun}
 They approached the challenge ${object.adverb}
 which ultimately lead them to ${object.anotherAdjective} fame.`;
alert(outCome);