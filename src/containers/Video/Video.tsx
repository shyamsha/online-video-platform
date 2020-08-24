import React, { Component, Dispatch, Fragment } from "react";
import VideoPlayer from "react-video-js-player";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { push } from "connected-react-router";
import { Router } from "react-router";
import { RouteEnums } from "../../navigator/RouteEnums";
import VideoPopUp from "./view/VideoPopUp";
interface PropsFromState {
  loading: boolean;
  router: Router;
}

interface PropsDispatchFromState {
  onRedirect: typeof push;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  oneMin: boolean;
}

class VideoApp extends Component<AllProps, State> {
  player = {};
  videoRef = React.createRef();
  state: State = { oneMin: false };

  onPlayerReady(player: any) {
    this.player = player;
  }

  onVideoPlay(duration: number) {

  }

  onVideoPause(duration: number) {}

  onVideoTimeUpdate(duration: number) {
    if (Math.floor(duration) === 60) {
      // @ts-ignore
      this.videoRef.current.props.onPause();
      if(localStorage.getItem("email")){
        this.setState({ oneMin: false });
      }else{
        this.setState({oneMin:true})
      }
    }
  }

  onVideoSeeking(duration: number) {
    console.log("Video seeking: ", duration);
  }

  onVideoSeeked(from: number, to: number) {}

  onVideoEnd() {}

  handleOk = () => {
    this.setState(
      {
        oneMin: false,
      },
      () => {
        if (this.state.oneMin === false) {
          this.props.onRedirect(`/${RouteEnums.Premium}`);
        }
      },
    );
  };

  render() {
    return (
      <Fragment>
        <div
          style={{ padding: "24px", display: "flex", justifyContent: "center" }}
        >
          <VideoPlayer
            ref={this.videoRef}
            id="my-vid"
            controls={true}
            src={
              this.props.router.state ? this.props.router.state.front_url : ""
            }
            poster={
              this.props.router.state
                ? this.props.router.state.thumbnail_url
                : ""
            }
            width="720"
            height="420"
            responsive={true}
            fluid={true}
            onReady={this.onPlayerReady.bind(this)}
            onPlay={this.onVideoPlay.bind(this)}
            onPause={this.onVideoPause.bind(this)}
            onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
            onSeeking={this.onVideoSeeking.bind(this)}
            onSeeked={this.onVideoSeeked.bind(this)}
            onEnd={this.onVideoEnd.bind(this)}
          />
        </div>
        {this.state.oneMin? (
          <VideoPopUp visible={this.state.oneMin} handleOk={this.handleOk} />
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps: any = ({ video, router }: ApplicationState) => ({
  loading: video.loading,
  router: router.location,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onRedirect: (route: string, state?: any) => dispatch(push(route, state)),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(VideoApp);
