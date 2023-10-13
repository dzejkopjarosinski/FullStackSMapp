const express = require('Express');
const router = express.Router();
const { Posts } = require("../models");
const { application } = require('express');

application.use(express.json())

router.get("/", async(req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

router.post("/", async(req,res) =>{
    // Body is all the data you send in a request
    const post = req.body;
    await Posts.create(post);
    res.json(post);

});


module.exports = router;