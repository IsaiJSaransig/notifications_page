const markAll = document.querySelector('#mark-all');
const number = document.querySelector('#number');
const post = document.querySelectorAll('.post');
updateNumber();
markAll.addEventListener('click', () => {
    const notRead = document.querySelectorAll('.not-read');
    notRead.forEach(notRead => {
        notRead.classList.remove('not-read');
    })
    updateNumber();
})

function readNumber() {
    const notRead = document.querySelectorAll('.not-read');
    return notRead.length;
}

function updateNumber(){
    number.innerText = readNumber();
}

post.forEach(post => {
    post.addEventListener('click', () => {
        post.querySelector('.status').classList.remove('not-read');
        updateNumber();
    })
})