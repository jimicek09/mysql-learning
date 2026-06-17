document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.nav-item');

        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });

async function loadWords() {
    const response = await fetch('/data');
    const words = await response.json();

    const list = document.getElementById('dataShower')
    list.innerHTML = ''
    words.forEach(w => {
        const li = document.createElement('li')
        li.textContent = w.name + ', ' + w.email;
        list.appendChild(li)
    })
}

async function addWord() {
    const name = document.getElementById('nameInput').value
    const email = document.getElementById('emailInput').value

    if(name === ""|| email === "") {
        document.getElementById('hedding').innerText = "Please enter a valid input"
        document.getElementById('hedding').style.color = "red"
    } else {

        document.getElementById('hedding').innerText = "Enter your name and email"
        await fetch('/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, email: email })
        });
    }

    document.getElementById('nameInput').value = ''
    document.getElementById('emailInput').value = ''
    loadWords();
}
async function wipeData() {
    await fetch('/data', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    loadWords();
}

loadWords();