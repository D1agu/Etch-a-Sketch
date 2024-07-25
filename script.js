const containerDiv = document.querySelector('.container');
function createDivSquare() {
    let html = '';
    for (let i = 0; i < 256; i++) { // 16x16 = 256
        html += '<div class="columns"></div>';
    }
    containerDiv.innerHTML = html;
}

createDivSquare();