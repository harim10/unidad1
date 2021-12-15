import React from 'react';

const ProductTable = (props) => {
    
    return(
        <div className="container">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Stock</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.product.length > 0 ?
                        props.product.map(product =>(
                            <tr key={product.id}>
                                <td>{product.nombre}</td>
                                <td>{product.precio}</td>
                                <td>{product.descripcion}</td>
                                <td>{product.stock}</td>
                                <td>    
                                    <button className="btn btn-outline-light" onClick={() => {props.editOnList(product)}}>Editar</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-light" onClick={() => {props.deleteProductFromList(product.id)}}>Borrar</button>
                                </td>
                            </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center">No tiene registros</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}

export default ProductTable;