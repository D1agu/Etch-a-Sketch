const containerDiv = document.querySelector('.container');
const btnGenerate = document.querySelector('.btn-gen');

function createDivSquare(rows) {
    const grid = rows * rows;
    let html = '';
    for (let i = 0; i < grid; i++) {
        html += '<div class="columns"></div>';
    }
    containerDiv.innerHTML = html;
    containerDiv.style.width = (rows * 40) + 'px';
    const columnsChild = document.querySelectorAll('.columns');
    for (let i = 0; i < columnsChild.length; i++) {
        const childEl = columnsChild[i];
        childEl.style.flex = `1 0 ${100 / rows}%`;

    }

}

createDivSquare(16);

btnGenerate.addEventListener('click', () => {
    const rowNumsByUser = prompt('Please, enter number of rows');
    createDivSquare(rowNumsByUser);
});

