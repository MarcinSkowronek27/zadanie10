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

  render() {
    const handleChange = (e) => {
      this.setState({ selectedValue: e.target.value });
    };
    const handleChangeName = (e, id) => {
      // let index = this.state.args.find(item => item.id === id);
      // console.log(index);
      // console.log(e.target.value);
      // console.log(id);

      const newObj = this.state.args.map(obj => {
        if ([id].includes(obj.id)) {
          return {...obj, arg: e.target.value}
        }
        return obj
      })
      console.log(newObj);
      // this.setState({args: [newObj]})
      // let check = this.state.args.splice(id,1,e.target.value);
      // console.log(check);
      // this.setState({args: [check, ...this.state.args]
      // })
      this.setState({ args: newObj });
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
            <div key={item.id}>
              <input
                autoComplete="off"
                onChange={(e) => handleChangeName(e, item.id)}
                value={this.state.args[index].arg}
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
          let id = randomID(4);
          handleAddVar({ id: id, arg: this.state.variableName, logVar: this.state.selectedValue });
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
