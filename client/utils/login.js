export function loginObject(email, password) {
  try {
    let buildObj = {
      email: email,
      password: password,
    };
    return buildObj;
  } catch (error) {
    console.error(error);
  }
}
