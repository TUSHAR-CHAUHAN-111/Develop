import PostMessage from "../model/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const post = await PostMessage.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createPosts = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new PostMessage(post);
    await newPost.save();

    console.log("newPost", newPost);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const deletedPosts = async (req, res) => {
  // try {
  //   const { id } = req.params;

  //   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  //   await PostMessage.findByIdAndRemove(id);

  //   console.log("delete");
  //   res.json({ message: "Post deleted successfully." });
  // } catch (error) {
  //   console.log(error);
  // }
  try {
    if (req.body && req.body.title) {
      const { title } = req.body;
      let deletePost = await PostMessage.findOneAndDelete({
        title: title,
      })
        .clone()
        .catch(function (err) {
          console.log(err);
        });

      if (deletePost) {
        return res.status(200).send({
          msg: "Post deleted Successfully!!",
        });
      }
    } else {
      return res.status(400).send({
        error: "title not found!!",
      });
    }
  } catch (error) {
    return res.status(400).send({
      error: "error" + error,
    });
  }
};

// export const updatePosts = async (req,res) => {
//   try {
//     const { id } = req.params;
//     // if(req.body && req.body.postData){
//     // const { creator,title, message,tags, selectedFile } = req.body.postData;
//   // }
//   const post = req.body;
//     console.log("id",id);
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     // const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
//     const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
//     console.log("updatedPost",updatedPost);

//     res.json(updatedPost);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const updatePosts = async(req,res) =>{
  console.log('in  updatepost api ')
    // const {id:_id} = req.params;
    // const postData  = req.body;
    // if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no post with that id");
  
    // const updatedPost = await PostMessage.findByIdAndUpdate(_id,postData,{new:true});
    // console.log("updatedPost",updatedPost);
    // res.json(updatedPost);
    console.log('req.body.updateData: ', req.body);
    try {
      const {title,message,creator,tags,selectedFile,_id} = req.body;
      console.log('req.body.updateData: ', req.body.updateData);
      const updatedPost = await PostMessage.findByIdAndUpdate(
        _id,
        {
          message,
          tags,
          selectedFile,
          creator,
          title
        }
      ).catch((error )=>console.log('error in query ',error));
      if(updatedPost){
        return res.status(200).send({
          msg: "posts updated Successfully!!",
        });
      }
    } catch (error) {
      console.log('error from controller ',error);
        return res.status(400).send({
          error:error,
        });
    }
}