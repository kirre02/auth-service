import * as bcrypt from "bcrypt";

export function hashPw(pw: string) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pw, salt);
    return hash;
  } catch (err) {
    return err;
  }
}
