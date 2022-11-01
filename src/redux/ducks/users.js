export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";

export const getUser = () => {
  return { type: GET_USER };
};

export const setUser = (user) => {
  return { type: SET_USER, user: user };
};

export const createUser = (sinlgeUser) => {
  return { type: CREATE_USER, sinlgeUser };
};
export const deleteUser = (user) => {
  return { type: DELETE_USER, id: user };
};

const initialState = {
  users: null,
};

export const userReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_USER:
      return { ...state, users: actions.user };
    case CREATE_USER:
      return { ...state, user: actions.sinlgeUser };
    case DELETE_USER:
      return { ...state, id: actions.id };
    default: {
      return state;
    }
  }
};
