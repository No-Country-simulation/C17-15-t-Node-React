import express from "express";
import fs from "fs";
import path from "path";
import __dirname from "../../utils.js"; // Asegúrate de especificar la extensión .js aquí

const router = express.Router();
const ROUTES_DIRECTORY = path.join(__dirname, "src", "routes"); // Directorio de las rutas

// Función para limpiar el nombre del archivo
const cleanFileName = (fileName) => {
    const clean = fileName.split('.').shift();
    return clean;
}

// Lee los archivos en el directorio de las rutas y registra las rutas
fs.readdirSync(ROUTES_DIRECTORY).forEach(fileName => {
    const prefixRoute = cleanFileName(fileName);
    if (prefixRoute !== "index") {
        console.log(`Cargando la ruta... ${prefixRoute}`);
        import(path.join(ROUTES_DIRECTORY, fileName)).then(module => {
            router.use(`/${prefixRoute}`, module.default);
        }).catch(error => {
            console.error(`Error al cargar el módulo ${prefixRoute}: ${error}`);
        });
    }
});

// Exporta las rutas configuradas
export default (server) => server.use('/v1', router);