import React from "react";
import { Container, Grid, Grow } from "@mui/material";
import Form from "../form/Form";
import Posts from "../posts/Posts";
import useStyle from "./styles";
import { getPosts } from "../../redux/actions/posts";
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
function Home(props) {
//   const classes = useStyle();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    props.getPosts();
  }, [dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

// export default Home;
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
