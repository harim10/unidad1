//import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';
import ProductTable from './Components/ProductTable';


function App() {

  const productData = [
    {id: uuidv4(), nombre: 'Libreta cuadrada 7mm', precio: 15, descripcion: 'Libreta profesional cuadro grande', stock: 13},
    {id: uuidv4(), nombre: 'Libreta rayada', precio: 15, descripcion: 'Libreta profesional rayada', stock: 23},
    {id: uuidv4(), nombre: 'Lapicero punta fina negro', precio: 5, descripcion: 'Lapicero de punta fina', stock: 10}
  ]

  const [products, setProducts] = useState(productData);

  const AddProductToList = (product) => {
    product.id = uuidv4()
    setProducts([
      ...products, product
    ])
  }

  const DeleteProductFromList = (id) => {
    setProducts(products.filter(
      (product) => product.id !== id
    ))
  }

  const [show, setShow] = useState(true);

  const [productToDelete, setProductToDelete] = useState({id: null, nombre: '', precio: 0, descripcion: '', stock: 0});

  const EditOnList = (product) => {
    setShow(false);
    setProductToDelete({id: product.id, nombre: product.nombre, precio: product.precio, descripcion: product.descripcion, stock: product.stock});
  }

  const UpdateProduct = (id, updateProduct) => {
    setShow(true);
    setProducts(products.map(product => (product.id === id ? updateProduct : product)));
  }

  return (
    <div className="container-fluid bg-light">
      <h1 className="text-center">Registro de Productos</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            show ? (
              <div>
                <h2 className="text-center">Agregar Producto</h2>
                <AddProduct addProductToList={AddProductToList}/>
              </div>
            ) : (
              <div>
                <h2 className="text-center">Editar Producto</h2>
                <EditProduct productToDelete={productToDelete} updateProduct={UpdateProduct}/>
              </div>
            )
          }
        </div>
        <div class="container"><hr/></div>
        <div className="flex-large">
          <h2 className="text-center">Productos en Existencia</h2>
          <ProductTable product={products} deleteProductFromList={DeleteProductFromList} editOnList={EditOnList} />
        </div>
      </div>
    </div>
  );
}

export default App;