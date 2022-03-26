import {Container,Grid,Grow,Typography,AppBar} from "@mui/material";
import Memories from "../src/Components/images/memories.png";
import Form from "./Components/form/Form";
import Posts from "./Components/posts/Posts";
import useStyle from "./styles";
import {getPosts} from "./redux/actions/posts";
import {connect, useDispatch} from "react-redux";
import { useEffect, useState } from "react";

function App(props) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [currentId,setCurrentId] = useState(null);
  useEffect(() => {
    props.getPosts();
  }, [dispatch]);
  console.log(props.posts);
  // console.log("getPostsAppJs",getPosts());
  return (
    <Container maxWidth={"lg"}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" className={classes.heading} align="center">Memories</Typography>
        <img src={Memories} className={classes.image} alt="Memories" height={"60"} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch"  spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

// export default App;
const mapStateToProps = (state) => {
  return {
    posts: state.posts.payload,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (data) => dispatch(getPosts(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);