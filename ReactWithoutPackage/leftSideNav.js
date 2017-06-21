import React from 'react';
export class LeftListComponent extends React.Component {
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