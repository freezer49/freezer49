function addition (phrase,nbRepetitions){
    for(let i=0; i < nbRepetitions; i++){
    console.log(phrase);
    }
}
repeterPhrase("une phrase random",3)

 function calculPoints(pointsActuels,pointAjoutes){
const total= pointsActuels + pointAjoutes
console.log (`Vous avez ${total} points`)
 }
 function calculPoints(pointsActuels, pointAjoutes){
    return pointsActuels + pointAjoutes
 }
const total = calculPoints(10,45)
console.log(total)

// const pointInitiaux = 12 
// const pointAjouter = 10 

// calculPoints(PointInitiaux, pointAAjouter)