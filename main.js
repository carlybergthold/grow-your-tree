const form = document.querySelector('#form');
const treeContainer = document.querySelector('.tree-container');

form.addEventListener("submit", function growTree() {

    event.preventDefault();
    let tree = "";
    const treeObject = {
         height: document.querySelector('#height-input').value,
         character: document.querySelector('#character-input').value
    }

    for (i = 0; i <= treeObject.height; i++) {
        tree += treeObject.character.repeat(i + (i + 1)) + "<br>";
    }

    treeContainer.innerHTML = `<div>${tree}</div>`;

});