import React from 'react'
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {

    return (
        <main>
            <section>

                <h1 className="text-center p-4">
                    Productos Makeup
                </h1>

                <div className="container-sm container-md container-lg">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 g-md-3 g-sm-2 ms-md-5">
                        <ItemList/>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default ItemListContainer
