function ListItem(props) {
  return <li key={props.id}>{props.name}</li>;
}

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React App'
    };
  }
  render() {
    return (
        <nav className="navbar navbar-default navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">{this.state.name}</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Gallary</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
        </nav>
    );
  }
}

class NavComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      listItems: [{name: 'Render List Component', id:1, value: 'List'}, {name: 'Render Form Component', id:2, value: 'Form'}, {name: 'Render Table Component', id:3, value: 'Table'}, {name: 'Render Paragraph', id:4, value: 'Para'}] 
    };
  }
  render() {
    return (
        <div className="left-side-bar">
        <ul className="list-inline">
        {this.state.listItems.map((item) => 
         <li key={item.id} onClick={() => this.popup(value)}><a>{item.name}</a></li>
        )}
       </ul>
       </div>
    );
  }
}
class Rightnav extends React.Component {
  render() {
    return (
        <div className="right-side-bar">
          <ListComponent />
          <FormComponent />
        </div>
    );
  }
}
class ListComponent extends React.Component {
  constructor(){
      super();
      this.state = {
         page: 'List',
         studentList: [{name: 'Mak', id:1}, {name: 'Alice', id:2}, {name: 'Lisa', id:3}, {name: 'Jhon', id:4}, {name: 'Tim', id:5}] 
      };
  }
  render() {
    return (
        <div className="list-comp">
            <h3 className="h3">{this.state.page} Component</h3>
            <ul className="student-list">
                {this.state.studentList.map((item) => 
                    <ListItem key={item.id}
                 name={item.name} id={item.id}/>
                )}
           </ul>
       </div>
    );
  }
}

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        address: '',
        choice: '',
        page: 'Form'
    };

    this.handleFormControlChange = this.handleFormControlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormControlChange(event) {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      this.setState({
        [name]: value
      });
  }
  
  handleSubmit(event) {
    alert(this.state.name + ' from '+ this.state.address + ' opt the course ' + this.state.choice.toUpperCase());
    event.preventDefault();
  }

  render() {
    return (
        <div>
            <h3 className="h3">{this.state.page} Component</h3>
            <div className="form-container"><form>
                <div className="form-group"><label>Name:<input className="form-control" type="text" value={this.state.name} name="name" onChange={this.handleFormControlChange} /></label></div>
                <div className="form-group"><label>Address:<textarea className="form-control" value={this.state.address} name="address" onChange={this.handleFormControlChange} /></label></div>
                <div className="form-group"><label>Select the course
                    <select className="form-control" name="choice" value={this.state.choice} onChange={this.handleFormControlChange}>
                        <option value="bsc">BSc</option>
                        <option value="bca">BCA</option>
                        <option value="ba">BA</option>
                        <option value="bcom">BCom</option>
                    </select>
                </label></div>
                <div className="form-group"><button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button></div>
            </form></div>
        </div>
    );
  }
}

ReactDOM.render(<div><Header/><NavComponent /></div>, document.getElementById('root'));