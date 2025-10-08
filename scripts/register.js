// Variables
const inputTitle = document.getElementById("txtTitle");
const inputContent = document.getElementById("txtContent");
const btnSave = document.getElementById("btnSave");
const notesContainer = document.getElementById("notesContainer");

// Constructor
function Note(title, content) {
    this.id = Date.now();
    this.title = title;
    this.content = content;
}

// Mostrar notas
function displayNotes() {
    const notes = read();
    notesContainer.innerHTML = "";

    notes.forEach(note => {
        const div = document.createElement("div");
        div.classList.add("note");
        div.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button class="delete-btn" onclick="deleteNote(${note.id})">X</button>
        `;
        notesContainer.appendChild(div);
    });
}

// Registrar nueva nota
function registerNote() {
    const title = inputTitle.value.trim();
    const content = inputContent.value.trim();

    if (title && content) {
        const newNote = new Note(title, content);
        save(newNote);
        inputTitle.value = "";
        inputContent.value = "";
        displayNotes();
    }
}

// Eliminar nota
function deleteNote(id) {
    let notes = read();
    notes = notes.filter(n => n.id !== id);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

// Inicializar
function init() {
    btnSave.addEventListener("click", registerNote);
    displayNotes(); // Mostrar notas al cargar
}

window.onload = init;
