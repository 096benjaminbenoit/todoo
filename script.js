const formElt = document.querySelector(".container_add_form")
const buttonElt = document.querySelector("#add-button");
const inputElt = document.querySelector("#add-text");
const listElt = document.querySelector("#add-list");

function addTask() {
    if(inputElt.value.length <= 0) {
        alert('bablabla')
    } else {
    let addDiv = document.createElement("div");
    listElt.append(addDiv);
    addDiv.classList.add("container_list_task");

    let addText = document.createElement("p");
    addText.classList.add("container_list_task--text");
    addDiv.append(addText);
    addText.append(inputElt.value);
    }

    formElt.reset();
}

buttonElt.addEventListener('click', addTask);

inputElt.addEventListener("keypress", function(pressEnter) {
    if (pressEnter.key === "Enter") {
        pressEnter.preventDefault();
    }
});