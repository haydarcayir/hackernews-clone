import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NotFound from "../components/notFound";
import Header from "../components/header";
import ShowStory from "../components/showStory";
import Container from "react-bootstrap/Container";

import Enums from "../utils/enums";

const App = () => {
  const possibleRoutes = [
    Enums.NEW_STORIES,
    Enums.TOP_STORIES,
    Enums.BEST_STORIES,
  ];

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route
            path="/"
            render={() => <Redirect to={Enums.NEW_STORIES} />}
            exact
          />
          <Route path="/notfound" component={NotFound} exact />
          <Route
            path="/:type"
            render={(props) => {
              const { type } = props.match.params;
              if (!possibleRoutes.includes(type)) {
                return <Redirect to="/notfound" />;
              } else {
                return <ShowStory />;
              }
            }}
            exact
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
