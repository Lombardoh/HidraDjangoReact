import {ProductList} from './products';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div><ProductList /></div>
    </Router>
    // <Router>
    //   <div className="container">
    //     <Link to="/fetch">fetch</Link>
    //     <hr />
    //     <Switch>
    //       <Route path="/fetch/:id">
    //         asdas
    //       </Route>
    //       <Route path="/contacto">
    //         Pagina de contacto
    //       </Route>
    //       <Route path="/productos">
    //         <FetchData />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  )
}

export default App;
