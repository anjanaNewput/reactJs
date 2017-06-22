import React from 'react';

export default class FormComponent extends React.Component {
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