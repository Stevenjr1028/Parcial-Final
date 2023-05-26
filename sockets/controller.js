const chats = {};

const socketController = (socket, io) => {
  
    socket.on("message", msg => {
        // Enviar Mensaje a todos los sockets de la sala
        let room = chats[socket.room];
        room.forEach(client => {
            client.emit("message", msg);
        });
    });

    socket.on("disconnect", leave);
    socket.on("goodbye", leave);
};

module.exports = { socketController };