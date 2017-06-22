import React from 'react';
import { Link } from 'react-router-dom';
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        name: 'Book Store'
      };
    }
   render() {
      return (
         <div>
         <nav className="navbar navbar-default">
             <div className="container-fluid">
               <div className="navbar-header">
                 <a className="navbar-brand">{this.state.name}</a>
               </div>
               <ul className="nav navbar-nav navbar-right">
                 <li><Link  to="/home">Home</Link></li>
                 <li><Link  to="/form">Form</Link></li>
                 
               </ul>
             </div>
         </nav>
           {this.props.children}
         </div>
      )
   }
}

export default App;