import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Brand } from "./pages/Brand";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/brand/:brand" component={Brand} />
      </Switch>
    </BrowserRouter>
  );
};
