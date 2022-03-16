import { useState, useEffect } from 'react'
import React from 'react'
import { getProductos } from '../../utils/getProductos'
import '../ItemList/itemList.css'
import imgProducto from '../../images/carritoMakeup/Esponja.jpeg'

function ItemList() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)

    useEffect(() => {

        //api Fetch()
        getProductos    
        .then(data => {   
                setProductos(data)   
                console.log(data)  
        })
        .catch(err => console.log(err))    
        .finally(()=> setLoading(false))
        
        // return () => {
        //     console.log('clean')
        // }
    },[])

    function handlerOnClick() {
        setCount(count + 1)
    }

    return (
            <>
                { 
                    loading ? <h2>Cargando...</h2> :  productos.map(producto => <div className="col">
                                            <div key={producto.id}
                                                 className="card h-100 w-75 card-ancho">
                                                
                                                <img src={imgProducto} 
                                                     className="card-img-top img-fluid" 
                                                     loading="lazy" 
                                                     alt={producto.descripcion}/>
                                                
                                                <div className="card-body">
                                                
                                                    <div className="card-title pt-3 fw-bold productoMakeup pb-2">
                                                        {producto.nombre}
                                                    </div>
                                                    
                                                    <div className="h6 text-muted">
                                                        {'$' + parseFloat(producto.precio).toFixed(2)}
                                                    </div>

                                                    <div className="h6">
                                                        <input type="number" 
                                                               value="1" 
                                                               min="1" 
                                                               max={producto.stock} 
                                                               className="p-2 w-75 text-muted tex-center border border-secondary"
                                                        />
                                                    </div>
                                                    
                                                    <div className="h6 text-muted">
                                                        {producto.stock} disponibles
                                                    </div>
                                                    
                                                    <button id={producto.id} 
                                                            type="button"
                                                            onClick={handlerOnClick} 
                                                            className="btn btn-dark w-100 mt-3">
                                                        Agregar al carrito
                                                        {/* <i className="bi bi-cart3 ps-2"></i> */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                                            width="25"height="25" fill="currentColor" className="bi bi-cart3 ps-2" viewBox="0 0 16 16">
                                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                        </svg>
                                                        <span> {count} </span>
                                                    </button>
                                                
                                                </div>

                                            </div>
                                        </div>
                 
                )} 
            </>
    )
}

export default ItemList
