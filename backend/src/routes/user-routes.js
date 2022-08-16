const express = require("express");
const multer = require("multer");
// const { doAuthMiddleware } = require("../auth/doAuthMiddleware");
const { makeDoAuthMiddleware } = require("../auth/doAuthMiddleware");
const { registerUser } = require("../use-cases/register-user");
const { showAllUser } = require("../use-cases/show-all-users");
const { loginUser } = require("../use-cases/login-user");
const { refreshUserToken } = require("../use-cases/refresh-user-token");
const { showMyProfile } = require("../use-cases/show-my-profile");
const userRouter = express.Router();

const upload = multer();
const pictureUploadMiddleware = upload.single("userImg");
const doAuthMiddleware = makeDoAuthMiddleware("access");
const doRefreshTokenMiddleware = makeDoAuthMiddleware("refresh");

userRouter.get("/allUsers", doAuthMiddleware, async (_, res) => {
  try {
    const allUsers = await showAllUser();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: {
        message: error
          ? error.message
          : "Unknown error while loading all users.",
      },
    });
  }
});

userRouter.post("/register", pictureUploadMiddleware, async (req, res) => {
  try {
    const userInfo = req.body;
    // const userImg = req.file.filename;
    const user = await registerUser({ ...userInfo });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      err: error.message || "Unknown error while registering new user.",
    });
  }
});
userRouter.post("/login", async (req, res) => {
  // try {
  //   const result = await loginUser({
  //     email: req.body.email,
  //     password: req.body.password,
  //   });

  //   if (result.refreshToken) {
  //     req.session.refreshToken = result.refreshToken;
  //   }
  //   console.log("result", result);
  //   res.status(200).json(result);
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({
  //     error: {
  //       message: error ? error.message : "Unknown error while logging in.",
  //     },
  //   });
  // }

  try {
    const { accessToken, refreshToken } = await loginUser({
      email: req.body.email,
      password: req.body.password,
    });
    // if (refreshToken) {
    //   console.log("refresh", refreshToken);
    //   req.session.refreshToken = refreshToken;
    // }
    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.toString() || "Internal Server Error.",
    });
  }
});
userRouter.get("/logout", async (req, res) => {
  req.session.refreshToken = null;
  res.status(200).json({});
});
userRouter.get("/profileInfo", doAuthMiddleware, async (req, res) => {
  try {
    const userId = req.userClaims.sub; // an den token wird erkannt, um welchen user es sich handelt...
    const userProfile = await showMyProfile({ userId });
    res.status(200).json(userProfile);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: { message: err.message } });
  }
});

userRouter.post("/refreshtoken", doRefreshTokenMiddleware, async (req, res) => {
  try {
    const result = await refreshUserToken({
      refreshToken: req.session.refreshToken || req.body.refreshToken,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      err: {
        message: err
          ? err.message
          : "Unknown error while refreshing your token.",
      },
    });
  }
});
module.exports = {
  userRouter,
};
