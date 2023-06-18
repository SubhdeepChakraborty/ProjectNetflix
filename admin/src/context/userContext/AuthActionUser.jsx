export const getUsersStart = () => ({
  type: "GET_USERS_START",
});

export const getUsersSuccess = (User) => ({
  type: "GET_USERS_SUCCESS",
  payload: User,
});

export const getUsersFailure = () => ({
  type: "GET_USERS_FAILURE",
});

export const createUserStart = () => ({
  type: "CREATE_USER_START",
});

export const createUserSuccess = (user) => ({
  type: "CREATE_USER_SUCCESS",
  payload: user,
});

export const createUserFailure = () => ({
  type: "CREATE_USER_FAILURE",
});

export const updateUserStart = () => ({
  type: "UPDATE_USER_START",
});

export const updateUserSuccess = (user) => ({
  type: "UPDATE_USER_SUCCESS",
  payload: user,
});

export const updateUserFailure = () => ({
  type: "UPDATE_USER_FAILURE",
});

export const deleteUsersStart = () => ({
  type: "DELETE_USERS_START",
});

export const deleteUsersSuccess = (id) => ({
  type: "DELETE_USERS_SUCCESS",
  payload: id,
});

export const deleteUsersFailure = () => ({
  type: "DELETE_USERS_FAILURE",
});
