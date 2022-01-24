import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ state, handleClick, handleChangeArg, inputText }) => {

  return (
    <div className='divSelectVar'>
      <select className="selectVar" value={inputText} onChange={e => handleChangeArg(e)}>
            <option key={0} value=''
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
              {state.args.map((item, index) => (
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
          </select><button onClick={(e) => handleClick(e)}>x</button>
    </div>
  )

};

Component.propTypes = {
  state: PropTypes.object,
  inputText: PropTypes.string,
  handleChangeArg: PropTypes.func,
  handleChangeLog: PropTypes.func,
};

export {
  Component as Select,
}

