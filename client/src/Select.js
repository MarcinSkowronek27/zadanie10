import React from 'react';
import PropTypes from 'prop-types';

const Component = ({item, index, state}) => {

  state = {
    args: [
      { id: '4fe4', arg: "MyArg", logVar: "true" }
    ]
  }

  const handleChangeName = (e, id) => {

    const newArray = this.state.args.map(array => {
      if ([id].includes(array.id)) {
        return { ...array, arg: e.target.value }
      }
      return array
    })
    console.log(newArray);
    this.setState({ args : newArray });
  };

  return (
    <div>
      <input
        autoComplete="off"
        onChange={(e) => handleChangeName(e, item.id)}
        value={index}
      />
    </div>
  )

};

Component.propTypes = {
  item: PropTypes.node,
  index: PropTypes.node,
  state: PropTypes.node
};

export {
  Component as Select,
}

