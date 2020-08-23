import React, { Component, Dispatch } from 'react';
import VideoPlayer from 'react-video-js-player';
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { push } from "connected-react-router";
import { Router } from 'react-router';
import { RouteEnums } from '../../navigator/RouteEnums';
interface PropsFromState {
  loading: boolean;
  router:Router
}

interface PropsDispatchFromState {
  onRedirect: typeof push;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  oneMin:boolean
}

class VideoApp extends Component<AllProps,State> {
  player = {}
  state:State = { oneMin:false }

  onPlayerReady(player:any){
      // console.log("Player is ready: ", player);
      this.player = player;
  }

  onVideoPlay(duration:number){
    if(duration===60){
      console.log("Video play at: ", duration);
      }
  }

  onVideoPause(duration:number){
    if(this.state.oneMin===true){
      this.props.onRedirect(`/${RouteEnums.Premium}`)
      }
  }

  onVideoTimeUpdate(duration:number){
    if(Math.floor(duration)===6){
      this.setState({oneMin:true})
    }
  }

  onVideoSeeking(duration:number){
      console.log("Video seeking: ", duration);
  }

  onVideoSeeked(from:number, to:number){
      console.log(`Video seeked from ${from} to ${to}`);
  }

  onVideoEnd(){
      console.log("Video ended");
  }

  // play=() =>{
  //   this.player.play();
  // }

  // pause=()=> {
  //   this.player.pause();
  // }

  render() {
    console.log(this.player)
      return (
          <div style={{padding:"24px",display:"flex",justifyContent:"center"}}>
              <VideoPlayer
                  controls={true}
                  src={this.props.router.state?this.props.router.state.front_url:""}
                  poster={this.props.router.state?this.props.router.state.thumbnail_url:""}
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
      );
  }
}

const mapStateToProps: any = ({ video, router }: ApplicationState) => ({
  loading: video.loading,
  router:router.location
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onRedirect: (route: string, state?: any) => dispatch(push(route, state)),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(VideoApp);

