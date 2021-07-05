import React, { Component } from 'react';
import { MenuItems } from './Menuitems';
import './Navbar.css';
import { Button } from '../Button';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {ProductList, ProductView, ProductFilterView} from '../../products'

class Navbar extends Component {
    state = { clicked: false}

    handleClick = ()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(<>
        <Router>
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><Link className="navbar-logo" to="/">React</Link><i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>      
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign out</Button>
            </nav>  
            <Switch>
                <Route path="/products/:id" component={ProductView} />
                <Route path="/:category" component={ProductFilterView} /> 
            </Switch> 
        </Router>
            </>
        )
    }
}

export default Navbar