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
    addButtonDelete.addEventListener("click", supprElement);

    // permet de reset l'input une fois la tache ajoutée
    formElt.reset();

    // transform la div en input grace a notre fontions modifElement
    addButtonModified.addEventListener("click", modifiedElement)

    }
}

buttonElt.addEventListener('click', addTask);

// le formulaire ne s'envoie pas en appuyant sur entrée
inputElt.addEventListener("keypress", function(pressEnter) {
    if (pressEnter.key === "Enter") {
        pressEnter.preventDefault();
    }
});

// fonction pour supprimer via le boutton 
const supprElement = (event) =>
{
    event.target.parentNode.remove();
}

// fonction modifier il cible le parents du texte qui est donc la div 
const modifiedElement = (event) => 
{
    const newInput = document.createElement("input");
    event.target.parentNode.querySelector('.container_list_task--text').replaceWith(newInput);

    newInput.addEventListener("blur", (e) =>
    {
        const newTask = newInput.value ;
        const textContainer = document.createElement("p");
        textContainer.classList.add("container_list_task--text") ;
        textContainer.innerText = newTask ;
        newInput.replaceWith(textContainer) ;
    } )


    // newInput.classList.add("container_list_task--newImput")
    // const newImputElt = document.querySelector(".container_list_task--newImput")
    // console.log (newImputElt);
}
