import React, { Component, Fragment, Dispatch } from "react";
import { Card, Col, Row, Button } from "antd";
import styled from "styled-components";
import PopUp from "./views/PopUp";
import { ApplicationState } from "../../store";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { RouteEnums } from "../../navigator/RouteEnums";

interface PropsFromState {
  loading: boolean;
  errors: { video?: string };
}

interface PropsDispatchFromState {
  onRedirect: typeof push;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  isPurchase: boolean;
}

class Premium extends Component<AllProps,State> {
  state: State = {
    isPurchase: false,
  };

  purchaseHandler = () => {
    this.setState({ isPurchase: true });
  };

  handleOk = () => {
    this.setState({
      isPurchase: false,
    },()=>{this.props.onRedirect(`/${RouteEnums.DASHBOARD}`)});
  };

  handleCancel = () => {
    this.setState({
      isPurchase: false,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="site-card-wrapper">
          <CustomRow gutter={16}>
            <Col span={8}>
              <CustomCard title="$20" bordered={false}>
                <ul>
                  <ol>
                    <li>Learn with team</li>
                    <li>Immediate support</li>
                  </ol>
                </ul>
                <div
                  style={{
                    display: "grid",
                    position: "relative",
                    top: "140px",
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    onClick={this.purchaseHandler}
                  >
                    Select
                  </Button>
                </div>
              </CustomCard>
            </Col>
            <Col span={8}>
              <CustomCard title="$25" bordered={false}>
                <ul>
                  <ol>
                    <li>Personal Couch/Assistance</li>
                    <li>Learn with team</li>
                    <li>Immediate support</li>
                  </ol>
                </ul>
                <div
                  style={{
                    display: "grid",
                    position: "relative",
                    top: "118px",
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    onClick={this.purchaseHandler}
                  >
                    Select
                  </Button>
                </div>
              </CustomCard>
            </Col>
          </CustomRow>
        </div>
        {this.state.isPurchase ? (
          <PopUp
            visible={this.state.isPurchase}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
          />
        ) : null}
      </Fragment>
    );
  }
}

const CustomCard = styled(Card)`
  border-radius: 8px !important;
  height: 22rem !important;

  .ant-card-head {
    text-align: -webkit-center;
    color: blue;
    font-size: 24px;
  }
`;

const CustomRow = styled(Row)`
  align-items: center;
  justify-content: center;
  align-content: center;
  width: -webkit-fill-available;
`;

const mapStateToProps: any = ({ video }: ApplicationState) => ({
  loading: video.loading,
  video: video.video,
  errors: video.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onRedirect: (route: string, state?: any) => dispatch(push(route, state)),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Premium)
