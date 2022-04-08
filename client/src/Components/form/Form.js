import React, { useEffect, useState } from "react";
import { TextField, Paper, Button, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import useStyle from "./style";
import { connect, useSelector } from "react-redux";
import { createPosts, updatePosts, getPosts } from "../../redux/actions/posts";

function Form({ currentId, setCurrentId, createPosts, updatePosts, posts }) {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyle();
  const user =JSON.parse(localStorage.getItem("profile"));
  let post =
    posts?.length > 0 ? posts?.find((data) => data._id == currentId) : null;

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  console.log(currentId);
  // const post = (currentId ? props.posts.find((message)=>message._id === currentId):null);

  const handleSubmite = async (e) => {
    e.preventDefault();
    if (currentId) {
      let newObj = { ...postData};
      await updatePosts({...newObj,name:user?.result?.name });
      clear();
    } else {
      await createPosts({...postData,name:user?.result?.name});
      clear();
    }
  };
  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  if(!user?.result?.name){
    return(
      <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
              Please Sign In to create Your own Memories and like other's Memories.
          </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="on"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmite}
      >
        <Typography variant="h6">{currentId ? `Editing ${post?.title}`: "Creating A Memory"}</Typography>
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
    posts: state.data.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createPosts: (data) => dispatch(createPosts(data)),
    updatePosts: (data) => dispatch(updatePosts(data)),
    getPosts: (data) => dispatch(getPosts(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
