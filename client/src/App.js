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
      selectedValue: "true",
      variableName: "",
      inputText: "MyArg",
      selectOption: ''
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
    // let c = 'true';
    // const tes = this.state.args.map(item => {
    //   const newArr = [];
    //   newArr.push(item.logVar);
    //   newArr.map(item => { // eslint-disable-next-line
    //     if (item === c) {
    //       c = 'true';
    //     } else {
    //       c = 'false'
    //     };
    //     return c;
    //   });
    //   // console.log(c);
    //   return c;
    // });
    // console.log(tes);
    let x = this.state.args.map(item => {
      let z = ''; // eslint-disable-next-line
      if (this.state.args.length == 1) return this.state.args[0].logVar; // eslint-disable-next-line
      else if (item.arg == this.state.inputText) return z = item.logVar; 
      else return z;
    })
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
              <select name="logic" id={`logic${index}`} onChange={(e) => {
                // document.querySelector()
                this.handleChange(e);
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
          console.log(e.target.value);
          this.handleAddVar({ id: id, arg: 'newarg', logVar: "true" });
        }} >+ add arg</button>
        <div className="divSelectVar">
          <select className="selectVar" onChange={(e) => this.setState({ inputText: e.target.value })}>
          <option key={0} value='' disabled="disabled" selected={this.state.selectOption}>Select...</option>
            {this.state.args.map((item, index) => (
            <option key={index+1} value={item.arg} >
              {item.arg}
            </option>
          ))}
          </select><button onClick={(e) => this.setState({ selectOption: 'selected', inputText: 'Select...' })}>x</button>
          <div className="result">Result {x}</div>
        </div>
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
