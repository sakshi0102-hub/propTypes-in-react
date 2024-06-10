import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Props Validation Task</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Valid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Boolean</td>
              <td>{this.props.propBool ? "true" : "false"}</td>
              <td>{this.props.propBool ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>String</td>
              <td>{this.props.propString}</td>
              <td>{this.props.propString ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>{this.props.propNumber}</td>
              <td>{this.props.propNumber ? "true" : "false"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
App.propTypes = {
  propBool: PropTypes.bool.isRequired,
  propNumber: PropTypes.number.isRequired,
  propString: PropTypes.string.isRequired,
};
App.defaultProps = {
  propBool: true,
  propNumber: 42,
  propString: "Proptype",
};

export default App;
