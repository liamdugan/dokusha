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
const favorite = (title, profile) => {
  return {
    type: 'FAVORITE',
    title: title,
    profile: profile
  };
};

const isRead = (title, profile) => {
  return {
    type: 'IS_READ',
    title: title,
    profile: profile
  };
};

const clickBook = (title, text) => {
  return {
    type: 'CLICK_BOOK',
    title: title,
    text: text
  };
};

const getProfileInfo = (user) => {
  console.log("Profile Info action");
  return {
    type: 'PROFILE_INFO',
    user: user
  }
}

const requestBooks = () => {
  console.log("Books action");
  return {
    type: 'REQUEST_BOOKS'
  }
}

export { onLogin, favorite, getProfileInfo, requestBooks, isRead, clickBook }
