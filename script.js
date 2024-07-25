const containerDiv = document.querySelector('.container');
const btnGenerate = document.querySelector('.btn-gen');

function createDivSquare() {
    let html = '';
    for (let i = 0; i < 256; i++) { // 16x16 = 256
        html += '<div class="columns"></div>';
    }
    containerDiv.innerHTML = html;
}

createDivSquare();

btnGenerate.addEventListener('click', () => {
    const rowNumsByUser = prompt('Please, enter number of rows');
    const grid = rowNumsByUser * rowNumsByUser;
    function createDivSquare(rows) {
        let html = '';
        for (let i = 0; i < rows; i++) { // 16x16 = 256
            html += '<div class="columns"></div>';
        }
        containerDiv.innerHTML = html;
    }
    createDivSquare(grid);
});