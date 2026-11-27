

//задание 1
const titleEl = document.querySelector('.title');
const toggleButtonEl = document.querySelector('.toggle-button');
const changeButtonEl = document.querySelector('.change-button');

toggleButtonEl.addEventListener('click', () => {
    titleEl.hidden = !titleEl.hidden;
});
//задание 2-3
changeButtonEl.addEventListener('click', () => {
    titleEl.textContent = 'Привет, мир!';
});

const textEl = document.querySelector('.text');
const colorButtonEl = document.querySelector('.color-button');

colorButtonEl.addEventListener('click', () => {
    textEl.style.color = 'blue';
});

//задание 4
const descriptionEls = document.querySelectorAll('.description');

descriptionEls.forEach((descriptionEl) => {
    descriptionEl.textContent = 'Измененный текст';
});

//задание 5

const descriptionsEls = document.querySelectorAll('.description-two');

descriptionsEls.forEach((descriptionEl) => {
    descriptionEl.textContent = 'Новый текст';
});

//задание 6
const addButtonEl = document.querySelector('.add-button');

addButtonEl.addEventListener('click', () => {
    const newParagraphEl = document.createElement('p');

    newParagraphEl.textContent = 'Новый абзац';

    document.body.appendChild(newParagraphEl);
});

//задание 7
const deleteButtonEl = document.querySelector('.delete-button');

deleteButtonEl.addEventListener('click', () => {
    const descriptionEl = document.querySelector('.description');

    if (descriptionEl) {
        descriptionEl.remove();
    }
});

