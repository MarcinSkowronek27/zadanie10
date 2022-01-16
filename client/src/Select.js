import React from 'react';
import PropTypes from 'prop-types';

const Component = ({item, state, value, handleChangeNam}) => {

  // const handleChangeName = (e, id) => {

  //   const newArray = state.args.map(array => {
  //     if ([id].includes(array.id)) {
  //       return { ...array, arg: e.target.value }
  //     }
  //     return array
  //   })
  //   console.log(newArray);
  //   // this.setState({ args : newArray });
  //   console.log('działa');
  // };

  return (
    <div>
      <input
        autoComplete="off"
        onChange={(e) => handleChangeNam(e)}
        value={value}
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
  Component as SelectComponent,
}

