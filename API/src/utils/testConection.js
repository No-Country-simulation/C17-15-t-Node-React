import dbConnection from './dbConnection.js';

// Llama a la función para conectar a la base de datos
dbConnection().then(() => {
  console.log('Conexión a la base de datos establecida correctamente.');
}).catch(error => {
  console.error('Error al conectar a la base de datos:', error);
});