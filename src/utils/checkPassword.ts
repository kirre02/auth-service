import * as bcrypt from "bcrypt";

function isPasswordValid(pw: string) {
  return bcrypt.compareSync(pw, this.pw);
}

export default isPasswordValid;
