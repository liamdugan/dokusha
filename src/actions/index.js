// Dokusha

const onLogin = () => {
  // possibly get username and password for this?
  return {
    type: 'LOGIN'
  };
};

// pass in the book object they clicked on as a JSON?
const favorite = (book) => {

  return {
    type: 'FAVORITE',
    book: book
  };
};
