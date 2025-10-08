// Guardar nota
function save(note) {
    let notes = read();
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Leer todas las notas
function read() {
    let data = localStorage.getItem("notes");
    if (!data) {
        return [];
    } else {
        return JSON.parse(data);
    }
}
