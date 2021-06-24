import { FetchData } from "../lookup";
import React, { useState, setState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export function ProductList(){
        const [state, setState] = useState(true)
        const [products, setProducts] = useState([])
        let aux = []

        if(state===true || !aux){
            setState(false)
            aux = Promise.resolve(FetchData())
            console.log(aux)
            
            
        }    
        
        return <h1>asd</h1>
        // return <div>
        //     <ul>
        //     {
        //         products.map(item =>(
        //             <li key={item.id}>
        //                 <Link to={'products'}>
        //                 {item.id} - {item.nombre} - {item.precio}
        //                 </Link>
        //             </li>
        //         ))
        //     }
        //     </ul>
        // </div>
}