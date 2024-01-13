const getStateError = (error) => {
  return { isOpen: true, type: error.status, data: error.message };
};

export { getStateError };
