import React, { Fragment, useState } from "react";
import { Modal, Input } from "antd";

interface Props {
  visible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export default function PopUp(props: Props) {
  const [email, setEmail] = useState("");
  const emailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    const user = [];
    user.push(e.target.value);
    localStorage.setItem("email", JSON.stringify(user));
  };
  return (
    <Fragment>
      <Modal
        title="Purchase"
        visible={props.visible}
        onOk={() => {
          if (email.length > 1) {
            return props.handleOk();
          }
        }}
        onCancel={props.handleCancel}
        centered={true}
        closable={false}
        maskClosable={false}
      >
        <p style={{ fontSize: "14px" }}>Email</p>
        <Input type="email" value={email} required onChange={emailChange} />
      </Modal>
    </Fragment>
  );
}
