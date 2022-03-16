// const URL_JSON_LOCAL = "../data/productos.json"

// Vanilla JS
// export const getFetch = new Promise((resolve, reject) => {
//     fetch(URL_JSON_LOCAL)
//         .then(response => {
//             resolve(response.json())
//         }).catch(err => {
//             reject(err)
//         })
// })

// console.log(getFetch)  

// JQUERY
// Se obtiene los productos del archivo .json cargado localmente
// let productos = [];
// $.getJSON(URL_JSON_LOCAL, function (respuesta, estado) {
//     if(estado === "success"){
//         productos = respuesta;
//     }
// });

const productos = [
                {
                    id:"1000",
                    nombre:"Esponja Soft Blender",
                    precio:503,
                    stock: 100,
                    srcImagen:"../images/carritoMakeup/Esponja.jpeg",
                    alt:"Esponja de Maquillaje"
                },
                {
                    id:"1001",
                    nombre:"Brocha Powder Blush",
                    precio:534,
                    stock: 100,
                    srcImagen:"../images/carritoMakeup/brocha.jpg",
                    alt:"Brocha de Maquillaje parpados"
                },
                {
                    id:"1002",
                    nombre:"Paleta de sombras Cosmos",
                    precio:2544,
                    stock: 100,
                    srcImagen:"../images/carritoMakeup/paletaSombras2.jpeg",
                    alt:"Maquillaje casual"
                },
                {
                    id:"1003",
                    nombre:"Iluminador Backet perolado",
                    precio:817,
                    stock: 100,
                    srcImagen:"../images/carritoMakeup/iluminador.jpg",
                    alt:"Iluminador Maquillaje"
                },
                {
                    id:"1004",
                    nombre:"Mini paletas Raimbow",
                    precio:1100,
                    stock: 100,
                    srcImagen:"../images/carritoMakeup/paletaSombras.png",
                    alt:"Paleta Maquillaje"
                },
                {
                    id:"1005",
                    nombre:"Agua Micelar 200ml",
                    precio:800,
                    stock: 100,
                    srcImagen:"../images/carritoMakeup/micelar.jpg",
                    alt:"Micelar Maquillaje"
                },
                {
                    id:"1006",
                    nombre:"Corrector líquido",
                    precio:604,
                    stock: 100,
                    srcImagen:"../images/carritoMakeup/corrector.jpg",
                    alt:"Corrector Maquillaje"
                },
                {
                    id:"1007",
                    nombre:"Paleta Soft Nude",
                    precio:1990,
                    stock: 100,
                    srcImagen:"../images/carritoMakeup/paleta.jpg",
                    alt:"Paleta de Maquillaje casamiento"
                },
                {
                    id:"1008",
                    nombre:"Paleta Flame",
                    precio:1000,
                    stock: 100,
                    srcImagen:"../images/carritoMakeup/paletaSombras3.jpg",
                    alt:"Paleta de Maquillaje casamiento"
                }                                                                                                                                
            ];

export const getProductos = new Promise((aceptado, rechazada)=>{
    //Acciones todo ok 
    setTimeout(() => {
        aceptado(productos)        
    }, 3000);
    //rechazada('400 not found')
})

