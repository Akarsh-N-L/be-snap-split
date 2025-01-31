import crypto from "crypto";

const getRandomUserId = () => {
  return crypto.randomBytes(10).toString("hex");
};

export default getRandomUserId;
