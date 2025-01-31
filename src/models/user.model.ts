import { IUser } from "../utils/interfaces/user.interface";
import UserDb from "../utils/mongo/models/user";

const createUser = async (user: IUser) => {
  return UserDb.create(user);
};

const getUserByEmail = async (email: string) => {
  return UserDb.findOne({ email });
};

const getUserByUid = async (uid: string) => {
  return UserDb.findOne({ uid });
};

const updateUser = async (uid: string, user: IUser) => {
  return UserDb.findOneAndUpdate({ uid }, user, { new: true });
};

const deleteUser = async (uid: string) => {
  return UserDb.deleteOne({ uid });
};

export default {
  createUser,
  getUserByEmail,
  getUserByUid,
  updateUser,
  deleteUser,
};
