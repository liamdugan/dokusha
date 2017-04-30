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

// User favorites a book
const favorite = (profile) => {
  return {
    type: 'FAVORITE',
    profile: profile
  };
};

// User reads a book
const read = (title, profile) => {
  return {
    type: 'READ',
    title: title
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

// User is done reading
const doneRead = (profile, title, text) => {
  return {
    type: 'GOOD_READ',
  }
}

// Get user profile
const onDuplicateSignup = () => {
  return {
    type: 'DUP_SIGNUP'
  }
}

export { onSuccessfulLogin, onDuplicateSignup, onFailedLogin,
  favorite, getProfileInfo,
  requestBooks, read, doneRead }
