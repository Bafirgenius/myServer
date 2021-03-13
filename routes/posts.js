const { Router } = require("express");

const router = require("express").Router();
const { getPosts, createPosts } = require("../controllers/posts")

router.get("/", getPosts);
router.post("/", createPosts);

module.exports = router;
