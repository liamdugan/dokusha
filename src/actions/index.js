// Dokusha

const onLogin = (username, password) => {
  // possibly get username and password for this?
  // TODO: Query a database for this!
  if (username === 'Test' && password === 'password') {
    return {
      type: 'LOGIN',
      username: username,
      password: password
    };
  } else {
    return {
      type: 'LOGIN_ERROR'
    };
  }
};

// pass in the book object they clicked on as a JSON?
const favorite = (book) => {

  return {
    type: 'FAVORITE',
    book: book
  };
};

export { onLogin, favorite }
