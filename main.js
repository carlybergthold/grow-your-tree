
const form = document.querySelector('#form');
form.addEventListener("submit", growTree);

const userInput = {
    height: document.querySelector('#height-input').value, 
    character: document.querySelector('#character-input').value
}

function growTree(object) {
    let treeContainer = document.querySelector('.tree-container');
    let text = "";

    for (i = 0; i <= `${object.height}`; i ++) {
        text += `${object.character}.repeat(i + (i + 1)) + "<br>"`;
    }

    console.log('text ', text);
    treeContainer.innerHTML = text;
}