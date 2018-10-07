// Testar för att se om den göra samma sak som let x = 4; (Declare & Assign)
let x; // Declare
x = 4; // Assign
console.log(x);

// Originallista
let originalLista = ["vallmo", "dahlia", "lavendel", "prästkrage"];

// Testar isArray. 
let lista = ["vallmo", "dahlia", "lavendel", "prästkrage"];
let el = document.getElementById("isThisArray");
el.innerHTML = Array.isArray(lista); //Sparar värdet av innerHTML i variabeln lista

// Testar sort().
lista.sort();
console.log(lista);
let el2 = document.getElementById("whatDoesSortDo");
el2.innerHTML = lista;

// Testar sort() med nummer.
let osorterad = [1, 50, 40, 13, 7, 2];
document.getElementById("sortNumberOsorterad").innerHTML = osorterad;

document.getElementById("sortNumberSorterad").innerHTML = osorterad.sort();

// Testar reverse()
document.getElementById("reverseList").innerHTML = lista.sort().reverse();
//document.getElementById("reverseList").innerHTML = osorterad.sort().reverse();

// Testar concat(), sätter ihop arrayer
document.getElementById("konkatineraArrayer").innerHTML = lista.concat(osorterad);

//Testar join(), sätter ihop allt i en lista till en och samma sträng med tillägg.
document.getElementById("joinaToString").innerHTML = osorterad.join(" 😎 ")

// Testar toString(), sätter ihop en lista till en sträng utan tillägg, endast ett kommatecken.
document.getElementById("toStringNoAdd").innerHTML = osorterad.toString()
document.getElementById("toStringNoAdd2").innerHTML = typeof(osorterad.toString())

// Testar copyWithin()
document.getElementById("copyIndex").innerHTML = lista.copyWithin(2, 0);

// Testar from(). Den tar en sträng och omvandlar den till en array, motsatsen till toString()
let myArray = Array.from("makeArrayPlease");
document.getElementById("createArray").innerHTML = myArray;
document.getElementById("createArrayTrue").innerHTML = Array.isArray(myArray);

// Testar includes()
document.getElementById("includeElements").innerHTML = lista.includes("vallmo", 0);


// Testar indexOf()
document.getElementById("returnIndex").innerHTML = lista.indexOf("vallmo");


// Testar pop()
document.getElementById("getRidEnd").innerHTML = lista.pop();

//Testar shift()
document.getElementById("getRidStart").innerHTML = lista.shift();


//Testar unshift()
document.getElementById("addBeginning").innerHTML = originalLista.unshift("julstjärna", "novemberkaktus");
//Testar fill()
let latin = document.getElementById("fillStaticValue").innerHTML = lista.fill("Euphorbia pulcherrima");

//Testar includes()
document.getElementById("includedElement").innerHTML = originalLista.includes("vallmo", 0);

//Testar lastIndexOf()
document.getElementById("returnLastIndex").innerHTML = originalLista.lastIndexOf("dahlia");

//Testar push()
document.getElementById("addElementLast").innerHTML = originalLista.push("Julstjärna", "Novemberkaktus");
console.log(originalLista);

//Testar slice()
document.getElementById("slicedElements").innerHTML = originalLista.slice(2, 4);
