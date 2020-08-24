import React, { Component, Fragment } from "react";
import { Card, Col, Row, Button } from "antd";
import styled from "styled-components";
import PopUp from "./views/PopUp";

interface State {
  isPurchase: boolean;
}

export default class Premium extends Component<State> {
  state: State = {
    isPurchase: false,
  };

  purchaseHandler = () => {
    this.setState({ isPurchase: true });
  };

  handleOk = () => {
    this.setState({
      isPurchase: false,
    });
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
