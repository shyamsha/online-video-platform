import React, { Fragment, Component, Dispatch, FC } from "react";
import { Route, Switch, Redirect } from "react-router";
import { connect } from "react-redux";
import { RouteEnums } from "./RouteEnums";
import Login from "../containers/Auth/Login/Login";
import Dashboard from "../containers/Dashboard/Dashboard";
import VideoApp from "../containers/Video/Video";
import Premium from "../containers/Premium/Premium";

interface PropsFromState {}

interface PropsDispatchFromState {}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  hasError: boolean;
}

class AppNavigator extends Component<any, any> {
  state: State = {
    hasError: false,
  };

  Auth: FC = () => (
    <Fragment>
      <Switch>
        <Route path={`/${RouteEnums.LOGIN}`} component={Login} />
      </Switch>
    </Fragment>
  );

  App: FC = () => (
    <Fragment>
      <Switch>
        <Redirect from="/" to={`/${RouteEnums.DASHBOARD}`} exact />
        <Route path={`/${RouteEnums.DASHBOARD}`} component={Dashboard} exact />
        <Route path={`/${RouteEnums.Video}/:id`} component={VideoApp} exact />
        <Route path={`/${RouteEnums.Premium}`} component={Premium} exact />
      </Switch>
    </Fragment>
  );

  render() {
    return <this.App />;
  }
}

const mapStateToProps: any = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

export default connect<any>(mapStateToProps, mapDispatchToProps)(AppNavigator);
