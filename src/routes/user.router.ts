import express from "express";
import userController from "../controllers/user.controller";
import { createUserValidator } from "../utils/validators/user.validator";

const router = express.Router();

router.post("/", async (req, res): Promise<any> => {
  try {
    const data = req.body;

    const { error } = createUserValidator.validate(data);
    if (error) {
      return res.status(400).json({ success: false, error: error.message });
    }

    const user = await userController.createUser(data);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    console.log(`Error while creating user: ${JSON.stringify(error)}`);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default router;
