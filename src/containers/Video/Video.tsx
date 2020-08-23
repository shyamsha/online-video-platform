import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';

class VideoApp extends Component {
  player = {}
  state = {
      video: {
          src: "https://www.youtube.com/watch?v=ybPlCHN44sw",
          poster: "http://www.example.com/path/to/video_poster.jpg"
      }
  }

  onPlayerReady(player:any){
      console.log("Player is ready: ", player);
      this.player = player;
  }

  onVideoPlay(duration:any){
      console.log("Video played at: ", duration);
  }

  onVideoPause(duration:any){
      console.log("Video paused at: ", duration);
  }

  onVideoTimeUpdate(duration:any){
      console.log("Time updated: ", duration);
  }

  onVideoSeeking(duration:any){
      console.log("Video seeking: ", duration);
  }

  onVideoSeeked(from:any, to:any){
      console.log(`Video seeked from ${from} to ${to}`);
  }

  onVideoEnd(){
      console.log("Video ended");
  }

  render() {
      return (
          <div style={{padding:"24px",display:"flex",justifyContent:"center"}}>
              <VideoPlayer
                  controls={true}
                  src={this.state.video.src}
                  poster={this.state.video.poster}
                  width="720"
                  height="420"
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
export default VideoApp;
