import React from 'react';
import PropTypes from 'prop-types';
import { Argument } from './Argument';
import { Select } from './Select';
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
      inputText: "Select...",
      selectOption: '',
      logicOperator: '',
      argsTwo: [
        { id: '3rv5' }, { id: '5rv5' }
      ]

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

  handleChangeNameTwo = (e, id) => {

    let firstArg = this.state.args.find(array => array.arg === e.target.value);
    // console.log('check', firstArg.logVar);
    const newArray = this.state.argsTwo.map(array => {
      if ([id].includes(array.id)) {
        return { ...array, arg: e.target.value, logVar: firstArg.logVar }
      }
      return array
    })
    // console.log(newArray);
    this.setState({ argsTwo: newArray });
  };

  handleChangeLog = (e, id, arg) => {
    console.log('arg', arg);
    const newArray = this.state.args.map(array => {
      if ([id].includes(array.id)) {
        return { ...array, logVar: e.target.value }
      }
      return array
    })

    const newArrayTwo = this.state.argsTwo.map(arrayTwo => {
      if ([arg].includes(arrayTwo.arg)) {
        return { ...arrayTwo, logVar: e.target.value }
      }
      else
        // console.log('arrayTwo', arrayTwo);
        return arrayTwo
    })
    // console.log(newArray);
    this.setState({ args: newArray, argsTwo: newArrayTwo });
  };

  handleAddVar = (elem) => {
    this.setState({
      args: [...this.state.args, elem],
    })
  }

  removeSelect = (id) => {
    // console.log('kliknięte id:', id);
    let filteredArray = this.state.argsTwo.filter(item => item.id !== id);
    // console.log('wynik testu:', filteredArray);

    this.setState({
      argsTwo: filteredArray,
    }, () => { console.log('wartość tablicy OK:', this.state.argsTwo) });
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

    let x = () => {
      let z = '';// eslint-disable-next-line
      if (this.state.inputText == 'Select...' || this.state.inputText == '') return z = 'undefined';// eslint-disable-next-line
      if (this.state.inputText == 'true') return z = 'true';// eslint-disable-next-line
      if (this.state.inputText == 'false') return z = 'false';
      else this.state.args.map(item => {
        // eslint-disable-next-line
        if (item.arg == this.state.inputText) return z = item.logVar; // eslint-disable-next-line
        return z;
      })
      return z;
    }
    // console.log(x());
    return (
      <div className="app" >
        <div className="app-board">
          {this.state.args.map((item, index, args) => (
            <Argument key={item.id}
              state={this.state}
              options={this.props.options}
              handleChangeName={(e) => this.handleChangeName(e, item.id)}
              handleChange={(e) => this.handleChange(e)}
              handleChangeLog={(e) => this.handleChangeLog(e, item.id, item.arg)}
              item={item}
              value={this.state.args[index].arg}
              {...item} />
          ))}
        </div>
        <button onClick={e => {
          e.preventDefault();
          let id = randomID(4);
          console.log(e.target.value);
          this.handleAddVar({ id: id, arg: 'newarg', logVar: "true" });
        }} >+ add arg</button>
        {/* <div className="divSelectVar"> */}
        <Select inputText={this.state.inputText} state={this.state} handleChange={(e) => {
          this.setState({ inputText: e.target.value, logicOperator: e.target.value })
        }} handleClick={(e) => this.setState({ selectOption: 'selected', inputText: 'Select...' })} />

        {this.state.logicOperator === 'and' || this.state.logicOperator === 'or' ? (
          <div className="divSelectVar2">
            {this.state.argsTwo.map(itemTwo => (
              <Select key={itemTwo.id} inputText={this.state.logicOperator1} state={this.state} handleChange={(e) => {
                this.handleChangeNameTwo(e, itemTwo.id);
                // if (e.target.value === 'and' || e.target.value === 'or') {
                //   this.handleChangeNameTwo(e, itemTwo.id);
                // this.setState({
                //   argsTwo: [...this.state.argsTwo, { id: randomID(4) }, { id: randomID(4) }]
                // })
                // }
              }
              }
                //   (e) => {
                //   this.setState({ inputText1: e.target.value, logicOperator1: e.target.value })
                // }} 
                handleClick={e => this.removeSelect(itemTwo.id)} />
            ))}
            < button onClick={e => this.setState({
              argsTwo: [...this.state.argsTwo, { id: randomID(4) }]
            })
            }> + add op</button>
          </div>
        )
          : ''
        }
        <div className="result">Result {x()}</div>
        {/* </div > */}
      </div >
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
