const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});
const io = socket(server);

const tasks = [];
// elementy do tablicy do testów {id: 'rt4s', name: 'Buy some food'}, {id: 'of3a', name: 'Make a dinner'}, {id: '5tvc', name: 'Bake a cake'}
// app.use((req, res) => {
//   res.status(404).send({ message: 'Not found...' });
// });

io.on('connection', (socket) => {
  socket.emit('updateData', tasks);
  socket.on('addTask', (taskName) => {
    tasks.push(taskName);
    console.log('tasks:', tasks);
    socket.broadcast.emit('addTask', taskName);
  });
  socket.on('removeTask', (removeId) => {
    tasks.splice(tasks.indexOf(removeId));
    // let filteredArray = tasks.filter(item => item.id !== removeId);
    // console.log('filteredArray:', filteredArray);
    // setState({
    //   tasks: filteredArray,
    // }),
    // console.log('to kasuje:', test);
    socket.broadcast.emit('removeTask', removeId);
  });
});
