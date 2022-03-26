import express from "express";
import { getPosts, createPosts, deletedPosts,updatePosts } from "../controller/posts.js";
const router = express.Router();

router.get("/", getPosts);
// router.post("/", createPosts);
router.delete('/', deletedPosts);
router.post('/updatePost', updatePosts);

export default router;
