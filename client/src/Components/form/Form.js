import React, { useEffect, useState } from "react";
import { TextField, Paper, Button, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import useStyle from "./style";
import { connect, useSelector } from "react-redux";
import { createPosts, updatePosts,getPosts } from "../../redux/actions/posts";

function Form({ currentId, setCurrentId, createPosts, updatePosts }) {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const [title,setTitle] = useState(null);
  const classes = useStyle();
  // let getPost = posts;
  // getPost.map((p)=>p.message);
  // console.log(getPost, "getPost");
  const post = useSelector((state) =>
    currentId ? state.posts.payload.find((message) => message._id === currentId) : null
  );
  console.log(post, "post");
  // console.log(currentId);
  // const post = (currentId ? props.posts.find((message)=>message._id === currentId):null);
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmite = async(e) => {
    e.preventDefault();
    if (currentId) {
     let newObj = {...postData};
    // await props.updateStudent(newObj);
      await  updatePosts(newObj);
      //  await getPosts();
        clear();
      } else {
        createPosts(postData);
        clear();
      }
  };
  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="on"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmite}
      >
        <Typography variant="h6">Creating A Memory</Typography>
        <TextField
          name="creator"
          label="Creator"
          variant="outlined"
          fullWidth
          value={postData?.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={postData?.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          value={postData?.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          label="Tags"
          variant="outlined"
          fullWidth
          value={postData?.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            value={postData?.selectedFile}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          onClick={clear}
          size="small"
          color="warning"
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

// export default Form;

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createPosts: (posts) => dispatch(createPosts(posts)),
    updatePosts: (data) => dispatch(updatePosts(data)),
    getPosts: (posts) => dispatch(getPosts(posts)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
