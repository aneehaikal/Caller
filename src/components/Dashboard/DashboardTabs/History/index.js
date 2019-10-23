import React, { useState } from 'react';
import { Table, Modal, Button } from 'antd';
import rightArrow from '../../../../images/Table/right-arrow.png';
import File from '../../../../images/Table/file.png';
import playButton from '../../../../images/Table/play-button.png';
import recievedCall from '../../../../images/Table/recieved-call.png';
import MissedCall from '../../../../images/Table/missed-call.png';

const Name = () => {
  return (
    <div>
      <span>Amy Jhon</span>
      <span className="table-content">
        <img alt='' src={rightArrow} />
      </span>{' '}
    </div>
  );
};
const Status = () => {
  return (
    <div>
      <span className="table-icon">
        <img alt='' src={recievedCall} />
      </span>
      Connected
      <span className="table-content">
        <img alt='' src={rightArrow} />
      </span>{' '}
    </div>
  );
};

const StatusWith = () => {
  return (
    <div>
      <span className="missed-call">
        <img alt='' src={MissedCall} />
      </span>
      Connected
      <span className="table-content">
        <img alt='' src={rightArrow} />
      </span>{' '}
    </div>
  );
};

const DateTime = () => {
  return (
    <div>
      12/12/2019 | 03:45 PM{' '}
      <span className="table-content">
        {' '}
        <img alt='' src={rightArrow} />
      </span>{' '}
    </div>
  );
};

const Type = ({ setVisible, visible, setStatus }) => {
  console.log("calling")
  return (
    <div>
      Phone OutBound{' '}
      <span className="table-content">
        {' '}
        <img alt='' src={rightArrow} />
      </span>
      <span className="table-content">
        {' '}
        <img alt='' src={File} />
      </span>
      <span
        className="table-content"
        onClick={() => setInitialStatss(setVisible, visible, setStatus)}
      >
        {' '}
        <img alt='' src={playButton} />
      </span>
    </div>
  );
};

const TypeWithoutIcon = () => {
  return (
    <div>
      Phone InBound{' '}
      <span className="table-content">
        {' '}
        <img alt='' src={rightArrow} />
      </span>
    </div>
  );
};

function setInitialStatss(setVisible, visible, setStatus) {
  setVisible(true);
}

const data = [
  {
    key: '2',
    name: <Name />,
    status: <Status />,
    DateTime: <DateTime />,
    type: <Type />,
    active: "1",
  },

  {
    key: '2',
    name: <Name />,
    status: <Status />,
    DateTime: <DateTime />,
    type: <Type />,
    active: 1,
  },
  {
    key: '3',
    name: <Name />,
    status: <Status />,
    DateTime: <DateTime />,
    type: <TypeWithoutIcon />,
    active: 0,
  },
  {
    key: '4',
    name: <Name />,
    status: <Status />,
    DateTime: <DateTime />,
    type: <TypeWithoutIcon />,
    active: 0,
  },
  {
    key: '5',
    name: <Name />,
    status: <StatusWith />,
    DateTime: <DateTime />,
    type: <TypeWithoutIcon />,
    active: 0,
  },
];

const History = () => {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(false);

  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  const columns = [
    {
      title: 'Date',
      dataIndex: 'DateTime',
    },
    {
      title: 'Type',
      dataIndex: 'Type',
      render: (value, record) => record.active == 1 ? <Type setVisible={setVisible} status={status} /> : <TypeWithoutIcon />,
    },
    {
      title: 'User',
      dataIndex: 'name',

    },

    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];


  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        className="table-ant"
      />
      <Modal
        title="Confirm Action"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            No
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Yes
          </Button>
        ]}
      >
        <p>Are you sure to flag this number as a bad number</p>
      </Modal>     
    </div>
  );
};

export default History;


