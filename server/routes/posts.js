import express from "express";
import {
  getPosts,
  createPosts,
  deletedPosts,
  updatePosts,
  likePosts,
} from "../controller/posts.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.delete("/deletePost", deletedPosts);
router.post("/updatePost", updatePosts);
router.post("/likePost", likePosts);

export default router;
