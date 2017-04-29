// Dokusha

const onLogin = (username, password) => {
  // possibly get username and password for this?
  console.log("Username " + username);
  console.log("Password " + password);
  return {
    type: 'LOGIN',
    username: username,
    password: password
  };
};

// pass in the book object they clicked on as a JSON?
const favorite = (book) => {

  return {
    type: 'FAVORITE',
    book: book
  };
};

export { onLogin, favorite }
