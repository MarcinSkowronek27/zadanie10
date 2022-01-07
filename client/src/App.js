import React from 'react';
import PropTypes from 'prop-types';
const randomID = require('@marcin_lark30/randomid-generator');


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      args: [
        { id: '4fe4', arg: "MyArg", logVar: "true" }
      ],
      selectedValue: "",
      variableName: ""
    };
  }

  handleChange = (e) => {
    this.setState({ selectedValue: e.target.value });
  };

  handleChangeName = (e, id) => {

    const newArray = this.state.args.map(array => {
      if ([id].includes(array.id)) {
        return { ...array, arg: e.target.value }
      }
      return array
    })
    console.log(newArray);
    this.setState({ args: newArray });
  };

  handleChangeLog = (e, id) => {

    const newArray = this.state.args.map(array => {
      if ([id].includes(array.id)) {
        return { ...array, logVar: e.target.value }
      }
      return array
    })
    console.log(newArray);
    this.setState({ args: newArray });
  };

  handleAddVar = (elem) => {
    this.setState({
      args: [...this.state.args, elem],
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <div className="app-board">
          {this.state.args.map((item, index) => (
            <div key={item.id}>
              <input
                autoComplete="off"
                onChange={(e) => this.handleChangeName(e, item.id)}
                value={this.state.args[index].arg}
              />
              <select onChange={(e) => {
                // this.handleChange(e);
                this.handleChangeLog(e, item.id);
              }}>
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
          let id = randomID(4);
          this.handleAddVar({ id: id, arg: this.state.variableName, logVar: this.state.selectedValue });
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
