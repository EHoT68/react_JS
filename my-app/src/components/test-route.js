import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  return (
    <div>
      <h1>Menu</h1>
      <hr />
      <button onClick={() => history.push("/about")}>go about</button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/topqwdics">404</Link>
        </li>
      </ul>
    </div>
  );
};

export function TestRoute() {
  return (
    <div className="App">
      <h1>Router</h1>

      <BrowserRouter>
        <Menu />
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>

          <Route path="*">
            <h1>404 page</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return <h1>Home</h1>;
};

const About = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h1>About</h1>
      <hr />
      <ul>
        <li>
          <Link to="/about/about1">about1</Link>
        </li>
        <li>
          <Link to="/about/about2">about2</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route path={`${match.url}/about1`}>
          <h1>About1</h1>
        </Route>
        <Route path={`${match.url}/about2`}>
          <h1>About2</h1>
        </Route>
      </Switch>
    </div>
  );
};

const Topics = () => {
  const match = useRouteMatch();

  return (
    <div>
      <hr />
      <ul>
        <li>
          <Link to="/topics/topic1">topic1</Link>
        </li>
        <li>
          <Link to="/topics/topic2">topic2</Link>
        </li>
      </ul>

      <hr />
      <h1>Topics dinamic path</h1>

      <Switch>
        <Route path={`${match.url}/:topicId`}>
          <Topic />
        </Route>

        <Route exact path={`${match.url}`}>
          <h1>Select Topic</h1>
        </Route>
      </Switch>
    </div>
  );
};

const Topic = () => {
  const params = useParams();

  console.log(params);

  return <h1>topic id is - {params.topicId}</h1>;
};
