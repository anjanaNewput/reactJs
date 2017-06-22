import React from 'react';
import {BookComponent} from './bookComponent.js';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Book Store',
      page: '',
      bookList: [{name: 'PHP', id: 1, page: 'php'}, {name: 'JAVASCRIPT', id: 2, page: 'js'}, {name: 'JAVA', id: 3, page: 'java'}, {name: 'PYTHON', id: 4, page: 'python'}]
    };
  }
  
  pageClicked(value) {
      this.setState({
          page: value
      });
  }
  render() {
    return (
        <div>
            <nav className="navbar navbar-default" id="header">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">{this.state.name}</a>
                  </div>
                  <ul className="nav navbar-nav navbar-right">
                  {this.state.bookList.map((item) => 
                   <li key={item.id} onClick={() => this.pageClicked(item.page)}><a href="#">{item.name}</a></li>
                  )}
                  </ul>
                </div>
            </nav>
            <div className="right-side-bar">
              <BookComponent page={this.state.page} />
            </div> 
        </div>
    );
  }
}
