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

    await fetch('/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email })
    });

    document.getElementById('nameInput').value = ''
    document.getElementById('emailInput').value = ''
    loadWords();
}

loadWords();