import React, { useEffect,useState } from 'react';
import useStyle from "./style";
import { Card,CardActions,CardMedia,CardContent,Button,Typography } from "@mui/material";
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';

import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment";
import {connect} from "react-redux";
import { deletePosts,likePosts } from '../../../redux/actions/posts';

function Post({post,setCurrentId,deletedPosts,likedPosts}) {
    console.log(post);
    const classes = useStyle();
    const handleDelete = (_id, e) => {
        if (e) {
          e.prevantDefault();
        }
        let data = {};
        data.id = _id;
        deletedPosts(data);
      };

    const handleLike = (_id,e)=>{
        if (e) {
            e.prevantDefault();
          }

          let data = {};
            data.id = _id;
          likedPosts(data);
    }
    const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAlt fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };
    return (
        <>
        <Card className={classes.card} key={post._id}> 
            <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:"white"}} size="small" onClick={()=>{setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}> 
                <Typography variant="body2" component={"h2"} color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={()=>{handleLike(post._id)}}>
                    <Likes />
                </Button>
                <Button size="small" color="primary" onClick={()=>{handleDelete(post._id)}}>
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
      posts: state.data.posts,
    };
};
  const mapDispatchToProps = (dispatch) => {
    return {
        deletedPosts: (data) => dispatch(deletePosts(data)),
        likedPosts:(data)=>dispatch(likePosts(data)),
    };
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Post);