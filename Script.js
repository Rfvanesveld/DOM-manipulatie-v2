let newList = document.createElement("li");
let spottedAnimals = document.getElementById("spotted-animals-list");

document.getElementsByTagName("button")[0].id = ("The-Lion");
document.getElementsByTagName("button")[1].id = ("The-Leopard");
document.getElementsByTagName("button")[2].id = ("The-Elephant");
document.getElementsByTagName("button")[3].id = ("The-Rhino");
document.getElementsByTagName("button")[4].id = ("The-Buffalo");
document.getElementsByTagName("ul")[0].id = ("TheBigFiveList");

document.getElementById('The-Lion').addEventListener('click', bigFiveSpotted);
document.getElementById('The-Leopard').addEventListener('click', bigFiveSpotted);
document.getElementById('The-Elephant').addEventListener('click', bigFiveSpotted);
document.getElementById('The-Rhino').addEventListener('click', bigFiveSpotted);
document.getElementById('The-Buffalo').addEventListener('click', bigFiveSpotted);

document.querySelector('#remove-first-item-button').addEventListener('click', removeFirstItem);
document.querySelector('#remove-all-button').addEventListener('click', removeAllItems);

let bigFiveList = document.getElementById("TheBigFiveList");

function removeFirstItem() {
    console.log('clicked')
    bigFiveList.removeChild(bigFiveList.firstElementChild);
};

function removeAllItems() {
    bigFiveList.innerHTML = '';
    // bigFiveList.remove(bigFiveList);
};


let spottedAnimal = (animal) => {
    spottedAnimals.appendChild(newList);
    // newList.classList.add("spotted-animals-list-item");
    newList.innerHTML = animal;
    console.log(animal);
};

function bigFiveSpotted(event) {
    spottedAnimal(event.target.firstChild.data);
    bigFiveList.removeChild(event.target.parentNode);
};


// Verplaatsen van een animal van The Big Five List" naar de "Spotted List""....................."
// Verplaatsen van een animal van The Big Five List" naar de "Spotted List""....................."

// function bigFiveSpotted() {
//     let moveTo = this.parentElement.parentElement.id == "TheBigFiveList" ? spottedAnimals : bigFiveList;
//     moveTo.appendChild(this.parentElement);
//     console.log(this)
// }

// addEventListener("click", function () { spotted.innerHTML += lionSpot.outerHTML })