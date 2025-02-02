import "./style/style.scss";
import Header from "./component/layout/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ROUTE } from "./constant/router.js";
function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Switch>
          <Route path={ROUTE.HOME}>
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
