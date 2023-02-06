const { addNoteHandler, getAllHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler, } = require("./handler");

const routes = [
    //ROUTE UNTUK TAMBAH DATA
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    //ROUTE UNTUK MENMPILKAN DATA SECARA KESELURUHAN
    {
        method:'GET',
        path:'/notes',
        handler: getAllHandler,
    },
    //ROUTE MENAMPILKAN DATA
    {
        method:'GET',
        path:'/notes/{id}',
        handler:getNoteByIdHandler,
    },
    //ROUTE EDIT
    {
        method:'PUT',
        path:'/notes/{id}',
        handler: editNoteByIdHandler,
    },
    //ROUTE HAPUS
    {
        method:'DELETE',
        path:'/notes/{id}',
        handler: deleteNoteByIdHandler,
    }
];

module.exports = routes;