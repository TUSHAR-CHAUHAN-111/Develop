import React, { useEffect } from 'react';
import Post from './post/Post';
import useStyle from "./style";
import { connect,useSelector } from "react-redux";
import { Grid,CircularProgress } from "@mui/material";
import { getPosts } from "../../redux/actions/posts";

function Posts({posts=[],setCurrentId}) {
    const classes = useStyle();
    console.log("POSTS ",posts);
    return (
        !posts && !posts && !posts.length > 0  ? <CircularProgress /> :(
        <Grid container spacing={3} className={classes.mainContainer} alignItems="stretch">
            { posts?.map((post) => (
                <Grid   key={post._id} item xs={12} sm={6} md={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
        )
    );
}

const mapStateToProps = (state) => {
    return {
      posts: state.data.posts,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      getPosts: (data) => dispatch(getPosts(data)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Posts);