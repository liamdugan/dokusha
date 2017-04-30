// Dokusha

const onSuccessfulLogin = (profile) => {
  // send login query to the database
  return {
    type: 'LOGIN',
    profile: profile
  };
};

const onFailedLogin = (profile) => {
  // send login query to the database
  return {
    type: 'FAILED_LOGIN'
  };
};

const onSignUp = (username, password) => {
  // send login query to the database
  return {
    type: 'SIGN_UP',
    username: username,
    password: password
  };
};

// User favorites a book
const favorite = (title, profile) => {
  return {
    type: 'FAVORITE',
    title: title,
    profile: profile
  };
};

// User reads a book
const read = (title, profile) => {
  return {
    type: 'READ',
    title: title,
    profile: profile
  };
};

// Get user profile
const getProfileInfo = (user) => {
  return {
    type: 'PROFILE_INFO',
    user: user
  }
}

// Request all of the books from the server
const requestBooks = () => {
  return {
    type: 'REQUEST_BOOKS'
  }
}

// User was able to read the book
const successfulRead = (profile, title, text) => {
  return {
    type: 'GOOD_READ',
    profile: profile,
    title: title,
    text: text
  }
}

// User was not able to read the book
const unsuccessfulRead = () => {
  return {
    type: 'BAD_READ'
  }
}

export { onSuccessfulLogin, onFailedLogin, favorite, getProfileInfo,
  requestBooks, read, successfulRead,
  unsuccessfulRead, onSignUp }
