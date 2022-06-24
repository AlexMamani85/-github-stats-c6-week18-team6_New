import { tokenKey } from "../config";
import { collectionClient } from "./collection-client";

export function login(credentials) {
  return collectionClient("/login", { body: credentials }).then((data) => {
    const { token, ...user } = data;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
}
