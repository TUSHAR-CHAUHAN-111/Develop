import express from "express";
import auth from '../middleware/auth.js';
import {
  getPosts,
  createPosts,
  deletedPosts,
  updatePosts,
  likePosts,
} from "../controller/posts.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/",auth, createPosts);
router.delete("/deletePost", auth, deletedPosts);
router.post("/updatePost", auth, updatePosts);
router.post("/likePost", auth, likePosts);

export default router;
