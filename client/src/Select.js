import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ index, value, options, handleChangeName, handleChange, handleChangeLog }) => {


  return (
    <div>
      <input
        autoComplete="off"
        onChange={(e) => handleChangeName(e)}
        value={value}
      />
      <select name="logic" id={`logic${index}`} onChange={(e) => {
        handleChange(e);
        handleChangeLog(e);
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
  handleChangeName: PropTypes.func,
  handleChange: PropTypes.func,
  handleChangeLog: PropTypes.func,
};

export {
  Component as SelectComponent,
}

