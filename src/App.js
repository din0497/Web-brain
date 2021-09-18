import Main from "./Main/Main";
import SideBar from "./SideBar/SideBar";
import { Container } from "./Styled/Styled";
import { Route, useLocation, Redirect } from "react-router-dom";
import Garage from "./pages/Garage";
import Racers from "./pages/Racers";
import Service from "./pages/Sevice";
import Calculator from './pages/Calculator'
import Settings from './pages/Settings'
function App() {
  // let location = useLocation();
  return (
    <Container>
      <SideBar />
      <Redirect from="/" to="home" />
      <Route path="/home">
        <Main />
      </Route>
      <Route path="/garage">
        <Garage />
      </Route>
      <Route path="/service">
        <Service />
      </Route>
      <Route path="/racers">
        <Racers />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      
    </Container>
  );
}

export default App;
