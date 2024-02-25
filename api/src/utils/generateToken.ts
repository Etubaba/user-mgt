import configuration from "../config";
import * as jwt from "jsonwebtoken";

export async function generateToken(
  email: string,
  type: "access" | "refresh"
): Promise<string> {
  const config = configuration();
  const expiresIn = config.jwt[type].signInOptions.expiresIn;

  const token = jwt.sign({ email }, <string>config.jwt[type].secret, {
    expiresIn,
  });

  return token;
}
