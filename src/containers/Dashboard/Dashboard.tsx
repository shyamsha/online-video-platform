import React, { Component, Fragment, Dispatch } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { Video } from "./types";
import { videoRequest } from "./actions";
import { push } from "connected-react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: true,
      swipeToSlide: true,
      accessibility: true,
      initialSlide: 1,
      nextArrow: <div style={{ display: "none" }}></div>,
      prevArrow: <div style={{ display: "none" }}></div>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <div style={{ padding: "24px" }}>
          <Slider {...settings} className="dynamic">
            {this.props.video?.data.map(video => {
              if (video.video_type === "STUDIO") {
                return (
                  <div id="container" key={video.id}>
                    <p className="min">{video.length} min</p>
                    <img
                      id="image"
                      src={video.thumbnail_url}
                      alt="card"
                    />
                    <p id="text">{video.instructor.name}</p>
                  </div>
                );
              }
            })}
          </Slider>
        </div>
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
