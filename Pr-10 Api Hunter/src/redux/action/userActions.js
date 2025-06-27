export const getUsers = () => async (dispatch) => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    dispatch({ type: "GET_USERS_SUCCESS", payload: data.users });
  } catch (err) {
    dispatch({ type: "GET_USERS_ERROR", payload: err.message });
  }
};
