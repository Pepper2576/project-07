export function signUpObject(firstName, lastName, email, password1, password2) {
  try {
    if (password1 === password2 && password1 != '') {
      let buildObj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password1,
      };
      return JSON.stringify(buildObj);
    } else {
      throw new Error('Passwords do not match');
    }
  } catch (error) {
    alert(error);
    console.error(error);
  }
}
