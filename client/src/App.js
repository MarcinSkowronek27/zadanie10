import React from 'react';
import PropTypes from 'prop-types';
import { SelectComponent } from './Select';
const randomID = require('@marcin_lark30/randomid-generator');


class Select extends React.Component {
  render() {
    return (
<div></div>
    );
  }
}



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

    // let x = () => {
    //   if (this.state.inputText !== 'Select...') {
    //     this.state.args.map(item => {
    //       console.log('działa');
    //       if (item.arg == this.state.inputText) return item.logVar;
    // else if (this.state.inputText == 'true') return 'true';
    // else if (this.state.inputText == 'false') return 'false';
    // return 'bcv'
    //   })
    // }
    // else return 'undefinbved';
    // }
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
      // })
    }
    // console.log(x());
    return (
      <div className="app" >
        <div className="app-board">
          {this.state.args.map((item, index) => (
            // <div key={item.id}>
            <SelectComponent state={this.state} handleChangeNam={(e) => this.handleChangeName(e, item.id)} item={item} key={item.id} value={this.state.args[index].arg} {...item} />
            // {/* <input
            //   autoComplete="off"
            //   onChange={(e) => this.handleChangeName(e, item.id)}
            //   value={this.state.args[index].arg}
            // />
            // <select name="logic" id={`logic${index}`} onChange={(e) => {
            //   // document.querySelector()
            //   this.handleChange(e);
            //   this.handleChangeLog(e, item.id);
            // }}>
            //   {this.props.options.map((arrayItem, index) => (
            //     <option key={index} value={arrayItem}>
            //       {arrayItem}
            //     </option>
            //   ))}
            // </select> */}
            // {/* </div> */}
          ))}
        </div>
        <button onClick={e => {
          e.preventDefault();
          let id = randomID(4);
          console.log(e.target.value);
          this.handleAddVar({ id: id, arg: 'newarg', logVar: "true" });
        }} >+ add arg</button>
        <div className="divSelectVar">
          <select className="selectVar" value={this.state.inputText} onChange={(e) => {
            // if (e.target.value == 'and') {
            //   this.setState({
            //     argsTwo: [...this.state.argsTwo]
            // })}
            this.setState({ inputText: e.target.value, logicOperator: e.target.value })
            // this.handleX();
          }}>
            <option key={0} value=''
            // selected={this.state.selectOption}
            >Select...</option>
            <optgroup id='argument' label='argument'>
              <option key={1} value='true' >
                true
              </option>
              <option key={2} value='false' >
                false
              </option>
            </optgroup>
            <optgroup id='constant' label='constant'>
              {this.state.args.map((item, index) => (
                <option key={index + 1} value={item.arg} >
                  {item.arg}
                </option>
              ))}
            </optgroup>
            <option key={100} value='and' >
              and
            </option>
            <option key={101} value='or' >
              or
            </option>
          </select><button onClick={(e) => this.setState({ selectOption: 'selected', inputText: 'Select...' })}>x</button>
          {this.state.logicOperator === 'and' || this.state.logicOperator === 'or' ? (
            <div>
              {this.state.argsTwo.map(itemTwo => (
                <div key={itemTwo.id} className="divSelectVar2">
                  <select defaultValue='Select...' onChange={(e) => {
                    this.setState({ inputText1: e.target.value, logicOperator1: e.target.value })
                    // this.handleX();
                  }}>
                    <option key={0} value=''
                    // selected={this.state.selectOption}
                    >Select...</option>
                    <optgroup id='argument' label='argument'>
                      <option key={1} value='true' >
                        true
                      </option>
                      <option key={2} value='false' >
                        false
                      </option>
                    </optgroup>
                    <optgroup id='constant' label='constant'>
                      {this.state.args.map((item, index) => (
                        <option key={index + 1} value={item.arg} >
                          {item.arg}
                        </option>
                      ))}
                    </optgroup>
                    <option key={100} value='and' >
                      and
                    </option>
                    <option key={101} value='or' >
                      or
                    </option>
                  </select><button onClick={(e) => this.setState({ selectOption1: 'selected', inputText1: 'Select...' })}>x</button>
                </div>
              ))}
              < button onClick={e => this.setState({
                argsTwo: [...this.state.argsTwo, { id: randomID(4) }]
              })
              }> + add op</button>
            </div>
            // {<div className="selectVar2">
            //    <select defaultValue='Select...' onChange={(e) => {
            //       // if(e.target.value == 'and') {
            //       //   this.setState({ })
            //       // }
            //       this.setState({inputText1: e.target.value, logicOperator1: e.target.value })
            //       // this.handleX();
            //     }}>
            //       <option key={0} value=''
            //       // selected={this.state.selectOption}
            //       >Select...</option>
            //       <optgroup id='argument' label='argument'>
            //         <option key={1} value='true' >
            //           true
            //         </option>
            //         <option key={2} value='false' >
            //           false
            //         </option>
            //       </optgroup>
            //       <optgroup id='constant' label='constant'>
            //         {this.state.args.map((item, index) => (
            //           <option key={index + 1} value={item.arg} >
            //             {item.arg}
            //           </option>
            //         ))}
            //       </optgroup>
            //       <option key={100} value='and' >
            //         and
            //       </option>
            //       <option key={101} value='or' >
            //         or
            //       </option>
            //     </select><button onClick={(e) => this.setState({ selectOption1: 'selected', inputText1: 'Select...' })}>x</button>
            //   </div>
            //   <div className="selectVar2">
            //     <select defaultValue='Select...' onChange={(e) => {
            //       this.setState({inputText1: e.target.value, logicOperator1: e.target.value })
            //       // this.handleX();
            //     }}>
            //       <option key={0} value=''
            //       // selected={this.state.selectOption}
            //       >Select...</option>
            //       <optgroup id='argument' label='argument'>
            //         <option key={1} value='true' >
            //           true
            //         </option>
            //         <option key={2} value='false' >
            //           false
            //         </option>
            //       </optgroup>
            //       <optgroup id='constant' label='constant'>
            //         {this.state.args.map((item, index) => (
            //           <option key={index + 1} value={item.arg} >
            //             {item.arg}
            //           </option>
            //         ))}
            //       </optgroup>
            //       <option key={100} value='and' >
            //         and
            //       </option>
            //       <option key={101} value='or' >
            //         or
            //       </option>
            //     </select><button onClick={(e) => this.setState({ selectOption1: 'selected', inputText1: 'Select...' })}>x</button>
            //   </div>
            //   <button>+ add op</button>
            // </div >
          )
            : ''
          }
          <div className="result">Result {x()}</div>
        </div >
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
