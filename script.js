const formElt = document.querySelector(".container_add_form");
const buttonElt = document.querySelector("#add-button");
const inputElt = document.querySelector("#add-text");
const listElt = document.querySelector("#add-list");

function addTask() {
    if(inputElt.value.trim() == "") {
        alert('Veuillez saisir une tâche');
    } else {
    // création de la div
    let addDiv = document.createElement("div");
    listElt.append(addDiv);
    addDiv.classList.add("container_list_task");

    // création du paragraphe avec la value de l'input
    let addText = document.createElement("p");
    addText.classList.add("container_list_task--text");
    addDiv.append(addText);
    addText.append(inputElt.value);

    // création du bouton de modification
    let addButtonModified = document.createElement("button");
    addDiv.append(addButtonModified);
    addButtonModified.classList.add("container_list_task--modified");

    // création du bouton de suppression
    let addButtonDelete = document.createElement("button");
    addDiv.append(addButtonDelete);
    addButtonDelete.classList.add("container_list_task--delete");

    // permet de reset l'input une fois la tache ajoutée
    formElt.reset();

    const modifiedButton = document.querySelector('.container_list_task--modified');

    modifiedButton.addEventListener('click', function modifiedTask() {
        let addText = document.querySelector('.container_list_task--text');
        let addDiv = document.querySelector(".container_list_task");
        let newInput = document.createElement("input");
        addDiv.replaceChildren(newInput, addDiv.childNodes[1]);
        })
    }
}

buttonElt.addEventListener('click', addTask);

// le formulaire ne s'envoie pas en appuyant sur entrée
inputElt.addEventListener("keypress", function(pressEnter) {
    if (pressEnter.key === "Enter") {
        pressEnter.preventDefault();
    }
});