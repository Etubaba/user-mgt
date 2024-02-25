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
router.post(`/token/validate`, validateDto(ValidateTokenDto), refreshToken);

export default router;
