import React from 'react';
import PropTypes from 'prop-types';
// const randomID = require('@marcin_lark30/randomid-generator');


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      args: [
        { arg: "MyArg", logVar: "true" }
      ],
      selectedValue: "",
      variableName: ""
    };
  }

  render() {
    const handleChange = (e) => {
      this.setState({ selectedValue: e.target.value });
    };
    const handleChangeName = (e, index) => {
      this.setState({ variableName: e.target.value });
    };
    const handleAddVar = (elem) => {
      this.setState({
        args: [...this.state.args, elem],
      })
    }
    console.log(this.state);
    return (
      <div className="app">
        <div className="app-board">
          {this.state.args.map((item, index) => (
            <div key={index}>
              <input
                autoComplete="off"
                onChange={(e, index) => handleChangeName(e, index)}
                value={this.state.variableName}
              />
              <select onChange={(e) => handleChange(e)}>
                {this.props.options.map((arrayItem, index) => (
                  <option key={index} value={arrayItem}>
                    {arrayItem}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <button onClick={e => {
            e.preventDefault();
            handleAddVar({arg: this.state.variableName, logVar: this.state.selectedValue});
          }} >+ add arg</button>
        <div className="result">Result</div>
      </div>
    );
  }
}

App.defaultProps = {
  options: ["true", "false"]
};

App.propTypes = {
  id: PropTypes.string,
};

export default App;
