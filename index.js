const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
} 

function prependCat(name){
    const copy1OfCats = ["Arnold", ...cats];
    return copy1OfCats;
}

function removeLastCat(){
    const copy2OfCats = cats.slice(0,-1)
    return copy2OfCats;
}

function removeFirstCat(){
    const copy3OfCats = cats.slice(1)
    return copy3OfCats;
}