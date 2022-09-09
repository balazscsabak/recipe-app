import jwt from 'jsonwebtoken';

function signIn(password: string): object | false {
  try {
    console.log(password);
    const attempt = password === process.env?.ADMIN_PW;

    if (attempt) {
      return {
        token: getToken(),
      };
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

function getToken() {
  return jwt.sign({ admin: 'admin' }, process.env.JWT_TOKEN as string, {
    expiresIn: 60 * 60 * 24 * 365,
  });
}

export { getToken, signIn };
