const addNumber = (state, number) => {
  return {
    ...state,
    current: state.current * 10 + number,
  };
};

module.exports = {
  addNumber,
};
