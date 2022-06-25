import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export const createUser = async (userData) => {
  const newUser = await collectionClient("/signup", { body: userData });
  const { token, ...user } = newUser;
  sessionStorage.setItem(tokenKey, token);
  return user;
};

export const getUser = async () => {
  const user = await collectionClient("/profile");
  const { token, ...profile } = user;
  return profile;
};

export const updateUser = async (userData) => {
  const updatedUser = await collectionClient("/profile", { method:'PATCH', body: userData });
  const { token, ...user } = updatedUser;
  sessionStorage.setItem(tokenKey, token);
  return user;
};