import getRandomUserId from "../utils/uid";
import userModel from "../models/user.model";
import { INewUser } from "../utils/interfaces/user.interface";
import bcrypt from "bcrypt";

const createUser = async (user: INewUser) => {
  const isExistingUser = await userModel.getUserByEmail(user.email);

  if (isExistingUser) {
    throw new Error("User already exists");
  }

  const uid = getRandomUserId();
  user.password = await getHashedPassword(user.password);
  const newUserData = { ...user, uid, groups: [], balances: [] };

  const newUser = await userModel.createUser(newUserData);
  return newUser;
};

const getHashedPassword = async (password: string) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export default {
  createUser,
};
