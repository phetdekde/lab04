function swap(){
    const tile = document.querySelectorAll("td")
    tile.forEach(elem => {
        if(elem.classList.contains('black')) {
            elem.classList.remove('black')
        }
        else {
            elem.classList.add('black')
        }
    });
}

const table = document.querySelector("table")
table.addEventListener('click',swap)
