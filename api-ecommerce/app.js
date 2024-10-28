//Alexis Brito Duron
const express = require('express'); 

const app = express(); 
 

const puerto = 3000; 
 

app.use(express.json()); 
 

app.get('/', (req, res) => { res.send('Bienvenido a la API de E-commerce')}); 

let productos = [    
    { id: 1, nombre: 'Abrigo', precio: 20.00 }, 
    { id: 2, nombre: 'chaleco', precio: 35.00 } 
];


app.get('/productos', (req, res) => {     res.json(productos); }); 

// Crear un nuevo producto 
app.post('/productos', (req, res) => { const nuevoProducto = req.body;    
    nuevoProducto.id = productos.length + 1; // Asignamos un ID al producto     
    productos.push(nuevoProducto); // Lo agregamos al array de productos     
    res.status(201).json(nuevoProducto); // Respondemos con el producto creado 
    }); 

// Actualizar un producto 
app.put('/productos/:id', (req, res) => { 
    const id = parseInt(req.params.id); // Obtenemos el ID desde la URL 
    const productoActualizado = req.body; // El producto actualizado viene en el cuerpo de la solicitud 
 
    // Buscamos el producto en el array 
    const index = productos.findIndex(p => p.id === id);     if (index !== -1) { 
        productos[index] = { id, ...productoActualizado }; // Actualizamos el producto         res.json(productos[index]); // Devolvemos el producto actualizado 
    } else { 
        res.status(404).json({ mensaje: 'Producto no encontrado' }); 
    } 
}); 

// Actualizar un producto 
app.put('/productos/:id', (req, res) => { 
    const id = parseInt(req.params.id); // Obtenemos el ID desde la URL 
    const productoActualizado = req.body; // El producto actualizado viene en el cuerpo de la solicitud 
 
    // Buscamos el producto en el array 
    const index = productos.findIndex(p => p.id === id);     if (index !== -1) { 
        productos[index] = { id, ...productoActualizado }; // Actualizamos el producto         res.json(productos[index]); // Devolvemos el producto actualizado 
    } else { 
        res.status(404).json({ mensaje: 'Producto no encontrado' }); 
    } 
}); 

// Iniciamos el servidor
app.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
 });