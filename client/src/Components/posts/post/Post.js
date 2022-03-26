import React, { useEffect,useState } from 'react';
import useStyle from "./style";
import { Card,CardActions,CardMedia,CardContent,Button,Typography } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment";
import {connect} from "react-redux";
import { deletePosts } from '../../../redux/actions/posts';

function Post({post,setCurrentId,deletedPosts}) {
    console.log(post);
    const classes = useStyle();
    const title = {};
    const handleDelete = (title, e) => {
        if (e) {
          e.preventDefault();
        }
        deletedPosts(title);
        // props.getMyStudent(collegeName);
      };
    return (
        <>
        <Card className={classes.card} key={post._id}> 
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:"white"}} size="small" onClick={()=>{setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}> 
                <Typography variant="body2" color="textSecondary">{post.tags}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="post">{post.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={()=>{}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>{handleDelete(title)}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
        </>
    );
}

// export default Post;

const mapStateToProps = (state) => {
    return {
    //   posts: state.posts && state.posts.payload,
    };
};
  const mapDispatchToProps = (dispatch) => {
    return {
        deletedPosts: (data) => dispatch(deletePosts(data)),
    };
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Post);