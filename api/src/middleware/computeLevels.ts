import { NextFunction, Request, Response } from "express";
import User from "../modules/user/models/user";
import { HttpException } from "../utils/error";

export const computeLevels = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    if (!body.gebracht_von_lvl1) {
      next();
    }
    const broughtByUser = await User.findById(body.gebracht_von_lvl1);

    if (body.gebracht_von_lvl1 && !broughtByUser) {
      next(new HttpException(400, "Gebracht von user not found"));
    }

    if (broughtByUser.gebracht_von_lvl1) {
      const lvl1User = await User.findById(broughtByUser.gebracht_von_lvl1);

      // Set Lvl 2 to gebracht_von_lvl1
      broughtByUser.level2 = lvl1User.gebracht_von_lvl1;

      if (lvl1User?.gebracht_von_lvl1) {
        // If gebracht_von_lvl1 of lvl1User is set, set Lvl 3
        const thirdGradeUser = await User.findById(lvl1User.gebracht_von_lvl1);
        broughtByUser.level3 = thirdGradeUser?.gebracht_von_lvl1;
      } else {
        broughtByUser.level3 = null;
      }
    } else {
      broughtByUser.level3 = null;
      broughtByUser.level2 = null;
    }

    await broughtByUser.save();

    next();
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
