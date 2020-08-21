import React, { Component, Fragment, Dispatch } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { Video } from "./types";
import { videoRequest } from "./actions";
import { push } from "connected-react-router";

interface PropsFromState {
  loading: boolean;
  video: Video | null;
  errors: { video?: string };
}

interface PropsDispatchFromState {
  onVideo: typeof videoRequest;
  onRedirect: typeof push;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {}

class Dashboard extends Component<AllProps, State> {
  state: State = {};

  componentDidMount() {
    this.props.onVideo();
  }

  render() {
    return (
      <Fragment>
        <div> video Dashboard</div>
      </Fragment>
    );
  }
}

const mapStateToProps: any = ({ video }: ApplicationState) => ({
  loading: video.loading,
  video: video.video,
  errors: video.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onVideo: () => dispatch(videoRequest()),
  onRedirect: (route: string, state?: any) => dispatch(push(route, state)),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Dashboard);
