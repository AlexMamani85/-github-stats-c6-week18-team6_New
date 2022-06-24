import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function login(credentials) {
  const data = await collectionClient("/login", { body: credentials });
  const { token, ...user } = data;
  sessionStorage.setItem(tokenKey, token);
  return user;
}
