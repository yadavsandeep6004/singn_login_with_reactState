let USER_DATA = {
  // email: "yadavsandeep@gmail.com",
  // password: "1234567"
};

//==================== signgup ==========================

export const registerUser = (payload) => {
  USER_DATA = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: payload.password,
    confirmPassword: payload.confirmPassword,
    id: Math.random().toString().slice(2),
    token: "xx5x2x91331x3x3x341xx51176x7xxx182x65xxx"
  };
  console.log(USER_DATA)

  return Promise.resolve({
    status: {
      type: "success",
      code: 200,
      message: "Registration Successful",
      error: false
    },
    data: {
      ...USER_DATA
    }
  });
};

// =============================== login====================

export const loginUser = (payload) => {
  if (
    payload.email === USER_DATA.email &&
    payload.password === USER_DATA.password
  ) {
    return {
      status: {
        type: "success",
        code: 200,
        message: "Login successful",
        error: false
      },
      data: {
        ...USER_DATA
      }
    };
  } else {
    return {
      status: {
        type: "error",
        code: 401,
        message: "Email or password are incorrect",
        error: true
      },
      data: null
    };
  }
};

//  ==================== logout =================

export const logoutUser = (payload) => {
  if (payload.token === USER_DATA.token) {
    return {
      status: {
        type: "success",
        code: 200,
        message: "Logout Successful",
        error: false
      }
    };
  } else {
    return {
      status: {
        type: "error",
        code: 402,
        message: "Failed to logout",
        error: true
      }
    };
  }
};
