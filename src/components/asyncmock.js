const productos = [
    {id: "1", nombre: "Intel Celeron", precio: 21.499, img: "../assets/intel_celeron.jpg", idCat:"2"},
    {id: "2", nombre: "Intel i9", precio: 341.799, img: "../assets/intel_i9.jpg", idCat:"2"},
    {id: "3", nombre: "Amd Ryzen 7", precio: 228.999, img: "../assets/amd_ryzen7.jpg", idCat:"3"},
    {id: "4", nombre: "Amd Ryzen 9", precio: 407.999, img: "../assets/amd_ryzen9.jpg", idCat:"3"}
]


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            resolve(productos)
        }, 100) 
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}