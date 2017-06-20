class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Book Store',
      page: '',
      bookList: [{name: 'PHP', id: 1, page: 'php'}, {name: 'JAVASCRIPT', id: 2, page: 'javascript'}, {name: 'JAVA', id: 3, page: 'java'}, {name: 'PYTHON', id: 4, page: 'python'}]
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

class FooterComponent extends React.Component {
  render() {
    return (
        <div className="footer">
            <p>&copy; 2017 Newput Inc.</p>
            
       </div>
    );
  }
}

//Book Component
class BookComponent extends React.Component {
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

class LeftListComponent extends React.Component {
    render() {
      return (
          <div className="left-comp">
              <h3 className="h3">Books</h3>
              <ul>
                  <li>JAVA {this.props.javaCount}</li>
                  <li>PHP {this.props.phpCount}</li>
                  <li>JAVASCRIPT {this.props.jsCount}</li>
                  <li>PYTHON {this.props.pythonCount}</li>
             </ul>
         </div>
      );
    }
}


ReactDOM.render(<div><Header/><FooterComponent /></div>, document.getElementById('root'));