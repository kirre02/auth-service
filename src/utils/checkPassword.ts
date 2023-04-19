import * as bcrypt from "bcrypt";

async function isPasswordValid(pw: string, hashedPw: string): Promise<boolean> {
  try {
    const match = await bcrypt.compare(pw, hashedPw);
    return match;
  } catch (error) {
    console.error("Password validation error:", error);
    throw new Error("Password validation error");
  }
}

export default isPasswordValid;
