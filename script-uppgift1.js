// Testar för att se om den göra samma sak som let x = 4; (Declare & Assign)
let x; // Declare
x = 4; // Assign
console.log(x);

// Originallista
//let originalLista = ["vallmo", "dahlia", "lavendel", "prästkrage"];

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
