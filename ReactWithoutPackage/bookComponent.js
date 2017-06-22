//Book Component
import React from 'react';
import { LeftListComponent } from './leftSideNav.js';
import axios from 'axios';

export class BookComponent extends React.Component {
    constructor(props){
        super();
        this.state = {
           bookList: [],
           phpCount: 0, 
           javascriptCount: 0, 
           pythonCount: 0, 
           javaCount: 0
        };
        this.toggleCount = this.toggleCount.bind(this);
    }
    
    getCountData(countObj) {
        this.setState({
            counts: countObj
        });
    }
    
    componentDidMount() {
        this.loadData('php');
    }
    
    componentWillReceiveProps(nextProps) {
        this.loadData(nextProps.page);
    }
    
    loadData(page) {
        axios.get("http://it-ebooks-api.info/v1/search/book/" +page).then((response) =>
            {this.setState({ bookList: response.data.Books})})
            .catch((error) => {console.log();});
    }
    
    toggleCount(event) {
        if(event.target.innerText == 'Like') {
            this.setState({
            [this.props.page+ 'Count']: this.state[this.props.page+'Count'] + 1
            });
            event.target.innerText = 'UnLike';
        } else {
            event.target.innerText = 'Like';
            this.setState({
                [this.props.page+ 'Count']: this.state[this.props.page+'Count'] - 1
            });
        }
    }
    render() {
        return (
            <div className="container-fluid">
               <div className="col-md-3"><LeftListComponent javaCount={this.state.javaCount} phpCount={this.state.phpCount} jsCount={this.state.javascriptCount} pythonCount={this.state.pythonCount}/></div>
               <div className="col-md-9">
                   <h3 className="h3">Books Component</h3>
                   <ul className="student-list">
                     {this.state.bookList.map((item) => 
                       <li key={item.ID}>
                          <div className="row">
                              <div className="col-md-3">
                                  <img src={item.Image} className="image" />
                              </div>
                              <div className="col-md-9 about-book">
                                  <div className="title">{item.Title}</div>
                                  <div className="desc">{item.Description}</div>
                                  <div><button className="btn btn-primary" onClick={this.toggleCount}>Like</button></div>
                              </div>
                          </div>
                          </li>
                      )}
                   </ul>
               </div>
            </div>
        );
    }
}
