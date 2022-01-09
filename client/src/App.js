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
    let c = 'true';
    const tes = this.state.args.map(item => {
      const newArr = [];
      newArr.push(item.logVar);
      newArr.map(item => {
        if (item == c) {
          c = 'true';
        } else {
          c = 'false'
        };
        return c;
      });
      console.log(c);
      return c;
    });
    console.log(tes);
    let A = true;
    let B = true;
    let D = false;
    let Coma = A && B && D + '';
    console.log(Coma);
    let t = document.querySelector('.selectVar').value;
    console.log(t);
    let x = this.state.args.map(item => {
      if (item.arg == t) return item.logVar;
      return '';
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
          <select className="selectVar">
          <option key={0} value='Select...' disabled="disabled">Select...</option>
            {this.state.args.map((item, index) => (
            <option key={index+1} value={item.arg}>
              {item.arg}
            </option>
          ))}
          </select><button>x</button>
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
