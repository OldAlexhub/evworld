import { Router } from "express";
import protectRoute from "../middleware/protectRoute.js";
import Signup from "../controllers/Signup.js";
import Login from "../controllers/Login.js";
import PostHealth from "../controllers/PostHealth.js";
import ShowHealth from "../controllers/ShowHealth.js";

const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/postdata", protectRoute, PostHealth);
router.get("/show/:userId", protectRoute, ShowHealth);

export default router;
