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

    // création du bouton de suppression
    let addButtonDelete = document.createElement("button");
    addDiv.append(addButtonDelete);
    addButtonDelete.classList.add("container_list_task--delete");
    }
    // permet de reset l'input
    formElt.reset();
}

buttonElt.addEventListener('click', addTask);

// le formulaire ne s'envoie pas en appuyant sur entrée
inputElt.addEventListener("keypress", function(pressEnter) {
    if (pressEnter.key === "Enter") {
        pressEnter.preventDefault();
    }
});