//Book Component
import React from 'react';
import { LeftListComponent } from './leftSideNav.js';

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
    loadData(page) {
        $.getJSON( "./" +page + ".json").then((JsonList) => this.setState({ bookList: $.parseJSON(JSON.stringify(JsonList)) }));
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
        this.loadData(this.props.page);
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
                                  <div><button className="btn btn-primary" onClick={this.toggleCount}>{item.status}</button></div>
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
