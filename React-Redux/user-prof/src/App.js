import { Component } from "react";
import { Router, Route } from "react-router-dom";

import { Login } from "./component/login/login";
import { Register } from "./component/Register/Register";
import { Home } from "./component/Home/Home";

import { history } from "./helpers";
import { PrivateRoute } from "./component/PrivateRoute";
import { connect } from "react-redux";
import { alertActions } from "./redux/actions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
