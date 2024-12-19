export function loginObject(email, password) {
  try {
    let buildObj = {
      email: email,
      password: password,
    };
    return JSON.stringify(buildObj);
  } catch (error) {
    console.error(error);
  }
}
