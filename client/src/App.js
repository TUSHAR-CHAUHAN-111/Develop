import {Container} from "@mui/material";
import { Navbar } from "./Components/Navbar/Navbar";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";

function App() {
  return (
    <BrowserRouter>
    <Container maxWidth={"lg"}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;