// let library = null;

// fetch('./livres.json')
//     .then(res => res.json())
//     .then(data => {
//         console.log('Fetched data:', data);
//         console.log('Type of data:', typeof data);
//         library = data; 
//     })
// .catch(err => console.error('Error loading JSON:', err));


// function allIn() {
//     if (!Array.isArray(library)) {
//         console.error("Library not loaded yet!");
//         return;
//     }
//     const lc = document.getElementById("all");
//     lc.innerHTML = "";
//     for (let book of library) {
//         lc.innerHTML += `
//         <div>
//             <strong>${book.titre}</strong><br>
//             Auteur: ${book.auteur}<br>
//             Nom: ${book.nom}<br>
//             Genre: ${book.genre}<br>
//             Format: ${book.format}
//             <hr>
//         </div>
//         `;
//     }
// }

function displayAll() {
    const lc = document.getElementById("all");
    lc.innerHTML = "";
    for (key in library) {
        let book = library[key];
        lc.innerHTML += `
        <div id='book${key}'>
            <strong>${book['titre']}</strong><br>
            Auteur: ${book['auteur']}<br>
            Nom: ${book['nom']}<br>
            Genre: ${book['genre']}<br>
            ${("littérature" in book)?("<p>- Littérature: "+book['littérature']+"<br>"):("")}
            Format: ${book['format']}
            <hr>
        </div>
        `;
    }
}