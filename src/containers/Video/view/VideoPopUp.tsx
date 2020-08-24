import React, { Fragment } from 'react'
import { Modal, Button } from 'antd'
import styled from 'styled-components';

interface Props{
  visible:boolean;
  handleOk:()=>void;
}

export default function VideoPopUp(props:Props) {

  return (
    <Fragment>
      <Modal
          title="premium membership"
          visible={props.visible}
          footer={null}
          centered={true}
          closable={false}
          maskClosable={false}
        >
          <p style={{fontSize:"14px"}}>Please Purchase Premium Membership</p>
          <CustomButton>
            <Button type="primary" size="large" onClick={props.handleOk}>Proceed</Button>
          </CustomButton>
        </Modal>
    </Fragment>
  )
}

const CustomButton=styled.div`

`;
