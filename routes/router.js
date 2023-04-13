import express from "express";
import {
  addUser,
  getUsers,
  getUser,
  editUser,
  deleteUser,
} from "../controller/route-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/users", getUsers);
router.get("/:id", getUser);
router.patch("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
