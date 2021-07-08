// When the page loads, show the first 50 monsters. 
// Each monster's name, age, and description should be shown.
// Above your list of monsters, you should have a form to create a new monster. 
// You should have fields for name, age, and description, and a 'Create Monster Button'. 
// When you click the button, the monster should be added to the list and saved in the API.
// At the end of the list of monsters, show a button. 
// When clicked, the button should load the next 50 monsters and show them.

function fetch50Monsters() {
    fetch("http://localhost:3000/monsters/?_limit=50&_page=1")
    .then(resp => resp.json())
    .then(monsters => monsters.map(displayFirst50))
}
fetch50Monsters()

function displayFirst50(monster) {
    console.log(monster)
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

