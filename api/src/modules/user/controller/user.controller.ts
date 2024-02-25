import { Request, Response } from "express";
import User from "../models/user";
import { CreateUserDto } from "../dto/create-user.dto";
import * as argon from "argon2";
import { LoginDTO } from "../dto/login.dto";
import { generateToken } from "../../../utils/generateToken";
import { UpdateUserDto } from "../dto/update-user.dto";
import * as jwt from "jsonwebtoken";
import { ValidateTokenDto } from "../dto/validateToken.dto";
import config from "../../../config";

const createUser = async (req: Request, res: Response) => {
  try {
    const dto: CreateUserDto = req.body;

    const { password, email, ...rest } = dto;

    const user = await User.findOne({
      email: email,
    });

    //check if user already exists
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hash password

    const hashedPassword = await argon.hash(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      ...rest,
    });

    delete newUser.password;

    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json({ message: "Error Occour: " + err.message });
  }
};

const editUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userData: UpdateUserDto = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findByIdAndUpdate(id, {
      ...userData,
    });

    return res.json({
      user: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password }: LoginDTO = req.body;

    const user = await User.findOne({
      email,
    });

    //check if  no user found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //check if user password is correct

    const isPasswordCorrect = await argon.verify(user.password, password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: `User password is incorrect` });
    }

    const [accessToken, refreshToken] = await Promise.all([
      generateToken(user.email, "access"),
      generateToken(user.email, "refresh"),
    ]);

    //delete passord from user details
    delete user.password;

    return res.json({ user, accessToken, refreshToken });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const refreshToken = async (req: Request, res: Response) => {
  const { token }: ValidateTokenDto = req.body;
  try {
    let decoded: string | jwt.JwtPayload;

    try {
      decoded = jwt.verify(token, config().jwt.refresh.secret);
    } catch (error) {
      // Handle the error when verification fails
      throw new Error("Invalid token");
    }

    let userEmail: string | undefined;

    if (typeof decoded === "string") {
      userEmail = undefined;
      throw new Error("Invalid token");
    } else {
      userEmail = decoded.email;
    }

    const user = await User.findOne({
      where: {
        email: userEmail,
      },
    });

    //generate token
    const [accessToken, newRefreshToken] = await Promise.all([
      generateToken(user.email, "access"),
      generateToken(user.email, "refresh"),
    ]);

    //delete passord from user details
    delete user.password;

    res.status(200).json({
      user,
      accessToken,
      refreshToken: newRefreshToken,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export { editUser, createUser, loginUser, refreshToken };
