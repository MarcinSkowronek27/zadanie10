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
      inputText: "Select...",
      selectOption: '',
      logicOperator: '',
      argsTwo: [
        { id: '3rv5' }, { id: '5rv5' }
      ]
    };
  }

  handleChangeValue = (e) => {
    this.setState({ selectedValue: e.target.value });
  };

  handleChangeArg = (e, id) => {
    const newArray = this.state.args.map(item => {
      if (id === item.id) {
        return { ...item, arg: e.target.value }
      }
      return item
    })
    this.setState({ args: newArray });
  };

  handleChangeArgTwo = (e, id) => {
    let firstArg = this.state.args.find(item => item.arg === e.target.value);
    const newArray = this.state.argsTwo.map(item => {
      if (id === item.id && e.target.value !== 'and' && e.target.value !== 'or' && e.target.value !== 'true' && e.target.value !== 'false') {
        return { ...item, arg: e.target.value, logVar: firstArg.logVar }
      }
      if (id === item.id && (e.target.value === 'and' || e.target.value === 'or')) {
        return { ...item, arg: e.target.value }
      }
      if (id === item.id && (e.target.value === 'true' || e.target.value === 'false')) {
        return { ...item, logVar: e.target.value }
      }
      return item
    })
    this.setState({ argsTwo: newArray });
  };

  handleChangeLogicItem = (e, id, arg) => {
    const newArray = this.state.args.map(item => {
      if (id === item.id) {
        return { ...item, logVar: e.target.value }
      }
      return item
    })

    const newArrayTwo = this.state.argsTwo.map(item => {
      if (arg === item.arg) {
        return { ...item, logVar: e.target.value }
      }
      else
        return item
    })
    this.setState({ args: newArray, argsTwo: newArrayTwo });
  };

  handleAddVar = (elem) => {
    this.setState({
      args: [...this.state.args, elem],
    })
  }

  removeSelect = (id) => {
    let filteredArray = this.state.argsTwo.filter(item => item.id !== id);
    this.setState({
      argsTwo: filteredArray,
    });
  }

  render() {
    // console.log(this.state);

    let takeResult = () => {
      let initialValue = '';
      if (this.state.logicOperator === 'and') {
        let logic = this.state.argsTwo.map(elem => elem.logVar);
        if (logic.length !== 0) {
          let logicTest = logic.reduce(function (prev, curr) {
            return prev && curr;
          })
          return logicTest;
        }
        return 'undefined';
      }
      if (this.state.logicOperator === 'or') {
        let logicArray = this.state.argsTwo.map(elem => elem.logVar);
        if (logicArray.length !== 0) {
          let logicTest = logicArray.reduce(function (prev, curr) {
            return prev || curr;
          })
          return logicTest;
        }
        return 'undefined';
      }
      if (this.state.inputText === 'Select...' || this.state.inputText === '') return initialValue = 'undefined';
      if (this.state.inputText === 'true') return initialValue = 'true';
      if (this.state.inputText === 'false') return initialValue = 'false';
      else this.state.args.map(item => {
        if (item.arg === this.state.inputText) return initialValue = item.logVar;
        return initialValue;
      })
      return initialValue;
    }
    return (
      <div className="app" >
        <div className="app-board">
          {this.state.args.map((item, index) => (
            <Argument key={item.id}
              state={this.state}
              options={this.props.options}
              handleChangeArg={(e) => this.handleChangeArg(e, item.id)}
              handleChangeValue={(e) => this.handleChangeValue(e)}
              handleChangeLogicItem={(e) => this.handleChangeLogicItem(e, item.id, item.arg)}
              item={item}
              value={this.state.args[index].arg}
              {...item} />
          ))}
        </div>
        <button onClick={e => {
          e.preventDefault();
          let id = randomID(4);
          this.handleAddVar({ id: id, arg: 'newarg', logVar: "true" });
        }} >+ add arg</button>
        <Select inputText={this.state.inputText} state={this.state} handleChangeArg={(e) => {
          this.setState({ inputText: e.target.value, logicOperator: e.target.value })
        }} handleClick={(e) => this.setState({ selectOption: 'selected', inputText: 'Select...' })} />

        {this.state.logicOperator === 'and' || this.state.logicOperator === 'or' ? (
          <div className="divSelectVar2">
            {this.state.argsTwo.map(itemTwo => (
              <Select key={itemTwo.id} inputText={this.state.logicOperatorTwo} state={this.state} handleChangeArg={(e) => {
                this.handleChangeArgTwo(e, itemTwo.id);
                // if (e.target.value === 'and' || e.target.value === 'or') {
                //   this.setState({
                //     argsTwo: [...this.state.argsTwo, { id: randomID(4) }, { id: randomID(4) }]
                //   })
                // }
              }
              }
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
        <div className="result">Result {takeResult()}</div>
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
