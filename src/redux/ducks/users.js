export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER";

export const getUser = () => {
  return { type: GET_USER };
};

export const setUser = (user) => {
  return { type: SET_USER, user: user };
};

const initialState = {
  users: null,
};

export const userReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_USER:
      return { ...state, users: actions.user };
    default: {
      return state;
    }
  }
};
