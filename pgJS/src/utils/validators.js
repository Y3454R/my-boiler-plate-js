function validateEmail(mail) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

function validatePassword(password) {
  return password.length >= 6 ? true : false;
}

module.exports = { validateEmail, validatePassword };
