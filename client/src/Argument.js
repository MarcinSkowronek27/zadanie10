import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ index, value, options, handleChangeArg, handleChangeValue, handleChangeLogicItem }) => {


  return (
    <div>
      <input
        autoComplete="off"
        onChange={(e) => handleChangeArg(e)}
        value={value}
      />
      <select name="logic" id={`logic${index}`} onChange={(e) => {
        handleChangeValue(e);
        handleChangeLogicItem(e);
      }}>
        {options.map((arrayItem, index) => (
          <option key={index} value={arrayItem}>
            {arrayItem}
          </option>
        ))}
      </select>
    </div>
  )

};

Component.propTypes = {
  value: PropTypes.node,
  index: PropTypes.string,
  options: PropTypes.array,
  handleChangeArg: PropTypes.func,
  handleChangeValue: PropTypes.func,
  handleChangeLogicItem: PropTypes.func,
};

export {
  Component as Argument,
}

