const box = document.querySelector('.box');
const btn = document.querySelector('.button');
const container = document.querySelector('.container');
const api = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) 
    .then(data => {
        btn.remove();
        container.style.height = 'auto';
        box.innerHTML = '';
        data.forEach((n) => {
            box.innerHTML += `<div class='card'>
                                <div class="card__id">Пост #${n.id}</div>
                                <h1 class='card__title'>${n.title}</h1>
                                <p class='card__body'>${n.body}</p>
                                <p class="card__user">Автор: Пользователь ${n.userId}</p> 
                            </div>`;
        });
    })  
    .catch(error => {
        btn.innerHTML = `Ошибка: ${error}`;
    })
}

btn.addEventListener('click', () => {
    api();
});