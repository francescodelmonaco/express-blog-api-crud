const posts = require('../data/posts');

function index(req, res) {
    // copiamo la logica dell'index
    res.json(posts);
};

function show(req, res) {
    // copiamo la logica della show
    res.json(posts[req.params.id]);
};

function store(req, res) {
    // copiamo la logica della store
    res.send('Creazione nuovo post');
};

function update(req, res) {
    // copiamo la logica dell'update
    res.send('Modifica integrale del post ' + req.params.id);
};

function modify(req, res) {
    // copiamo la logica del modify
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {
    // copiamo la logica della destroy

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const postDaEliminare = posts.find(post => post.id === id);

    // Piccolo controllo
    if (!postDaEliminare) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    };

    // Rimuoviamo la pizza dal menu
    posts.splice(posts.indexOf(postDaEliminare), 1);

    console.log(posts);

    // Restituiamo lo status corretto
    res.sendStatus(204);
};

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy };