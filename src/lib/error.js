const getStateError = (error) => {
  return { isOpen: true, type: "login", data: error };
};

export { getStateError };
