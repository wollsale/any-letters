// 65 -> 90

const alphabet = [
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90
];


window.addEventListener('keydown', (event) => {
    console.log(event.which);

    if(alphabet.includes(event.which)) {
        document.querySelector('.search__wrapper').classList.add('search__wrapper--is-visible');
        document.querySelector('.search__input').focus();
    }
})