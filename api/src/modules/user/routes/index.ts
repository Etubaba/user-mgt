import { Router } from "express";
import {
  createUser,
  editUser,
  loginUser,
  refreshToken,
} from "../controller/user.controller";
import { UpdateUserDto } from "../dto/update-user.dto";
import { CreateUserDto } from "../dto/create-user.dto";
import { validateDto } from "../../../middleware/validateDto";

import { authenticate } from "../../../middleware/auth";
import { computeLevels } from "../../../middleware/computeLevels";
import { LoginDTO } from "../dto/login.dto";
import User from "../models/user";
import { ValidateTokenDto } from "../dto/validateToken.dto";

const router: Router = Router();

const basePath = "/user/";

router.post(
  `${basePath}register`,
  validateDto(CreateUserDto),
  computeLevels,
  createUser
);
router.put(
  `${basePath}update/:id`,
  validateDto(UpdateUserDto),
  authenticate,
  computeLevels,
  editUser
);
router.post(`${basePath}login`, validateDto(LoginDTO), loginUser);
router.post(`/token/validte`, validateDto(ValidateTokenDto), refreshToken);

router.delete("/delete", async (req, res) => {
  const deleteUser = await User.findByIdAndDelete("65d50f06faa8a2c23c3ca2a9");
  res.json(deleteUser);
});

router.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({ user, lvl: user.level2 });
});

export default router;
