import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

import TextEditor from "./TextEditor";
import "./styles.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
