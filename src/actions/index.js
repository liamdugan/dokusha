// Dokusha actions

// update state with new profile data from the login query
const onSuccessfulLogin = (profile) => {
  return {
    type: 'LOGIN',
    profile: profile
  };
};

// let state know to show fail text
const onFailedLogin = (profile) => {
  return {
    type: 'FAILED_LOGIN'
  };
};

// User attempted to create an account that already exists
const onDuplicateSignup = () => {
  return {
    type: 'DUP_SIGNUP'
  }
}

const onLogOut = () => {
  return {
    type: 'LOG_OUT'
  }
}

const onBookLoad = (books) => {
  return {
    type: 'BOOK_LOAD',
    books: books
  }
}

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

// User is done reading
const doneRead = (profile, title, text) => {
  return {
    type: 'DONE_READ',
  }
}

export { onSuccessfulLogin, onDuplicateSignup, onFailedLogin,
  favorite, read, doneRead, onLogOut, onBookLoad }
