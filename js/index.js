function fetch50Monsters() {
    fetch("http://localhost:3000/monsters/?_limit=50&_page=1")
    .then(resp => resp.json())
    .then(monsters => monsters.map(displayFirst50))
}
fetch50Monsters()

function displayFirst50(monster) {
    let monContainer = document.querySelector("#monster-container")
    let ul = document.createElement("ul")
    monContainer.append(ul)
    let li = document.createElement("li")
    let h3name = document.createElement("h3")
    let h3age = document.createElement("h3")
    let pDescription = document.createElement("p")
   h3name.textContent = `Name: ${monster.name}`
    h3age.textContent = `Age: ${monster.age}`
    pDescription.textContent = `Description: ${monster.description}`
    ul.append(li)
    li.append(h3name, h3age, pDescription)
}

function next50Monsters() {
    fetch("http://localhost:3000/monsters/?_limit=50&_page=2")
    .then(resp => resp.json())
    .then(monsters => monsters.map(displayNext50))
}
next50Monsters()

function displayNext50(monster) {
    console.log(monster)
    let fButton = document.querySelector("#forward")
    fButton.addEventListener("click", () => {
        let monContainer = document.querySelector("#monster-container")
        let ul = document.createElement("ul")
        monContainer.append(ul)
        let li = document.createElement("li")    
        let h3name = document.createElement("h3")
        let h3age = document.createElement("h3")
        let pDescription = document.createElement("p")
        h3name.textContent = `Name: ${monster.name}`
        h3age.textContent = `Age: ${monster.age}`
        pDescription.textContent = `Description: ${monster.description}`
        ul.append(li)
        li.append(h3name, h3age, pDescription)
    })
}
