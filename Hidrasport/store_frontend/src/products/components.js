import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';

export function ProductList(){
        const [products, setProducts] = useState([])
        useEffect(()=>{
            FetchProducts();
        },[])

        const FetchProducts = async () => {
            
            const response = await axios.get("http://127.0.0.1:8000/api/stock_manager/");
            setProducts(response.data)
        }
        
        //return <h1>asd</h1>
        return <div>
            <ul>
            {
                products.map(item =>(
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}>
                        {item.id} - {item.nombre} - {item.precio}
                        </Link>
                    </li>
                ))
            }
            </ul>
        </div>
}

export function ProductView(props){
    const [product, setProduct] = useState([])
    const id = props.match.params.id
    useEffect(()=>{
        FetchProduct();
    },[])

    
    const FetchProduct = async () => {
        
        const response = await axios.get(`http://127.0.0.1:8000/api/stock_manager/${id}/`);
        setProduct(response.data)
        
    }

    return <div>
            <ul>
                {product.id} <br />
                {product.nombre} <br />
                {product.precio} <br />
            </ul>
    </div>
}

export function ProductFilterView(props){
    const [products, setProducts] = useState([])
    const category = props.match.params.category
    useEffect(()=>{
        FetchProducts();
    },[])

    const FetchProducts = async () => {
        
        const response = await axios.get(`http://127.0.0.1:8000/api/stock_manager/${category}/`);
        setProducts(response.data)
    }
    
    //return <h1>asd</h1>
    return <div>
        <ul>
        {
            products.map(item =>(
                <li key={item.id}>
                    <Link to={`/products/${item.id}`}>
                    {item.id} - {item.nombre} - {item.precio}
                    </Link>
                </li>
            ))
        }
        </ul>
    </div>
}