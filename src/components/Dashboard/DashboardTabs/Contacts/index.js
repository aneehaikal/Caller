import React, { useState } from 'react';
import { Table, Icon } from 'antd';
import rightArrow from '../../../../images/Table/right-arrow.png';
import Modal from './modal';

const Name = () => {
  return (
    <div>
      <span>Jhon Doe</span>
      <span className="table-content">
        <img src={rightArrow} />
      </span>{' '}
    </div>
  );
};
const Title = () => {
  return (
    <div>
      <span>Amy Jhon</span>
      <span className="table-content">
        <img src={rightArrow} />
      </span>{' '}
    </div>
  );
};

const Phone = () => {
  return (
    <div>
      99-999-9999
      <span className="table-content">
        <img src={rightArrow} />
      </span>{' '}
    </div>
  );
};

const Connected = () => {
  return (
    <div>
      12/12/2019 | 03:45 PM{' '}
      <span className="table-content">
        {' '}
        <img src={rightArrow} />
      </span>{' '}
    </div>
  );
};

const Add = ({ setVisible, visible, setStatus }) => {
  console.log("calling");
  return (
    <div className="pop-up">
      <Icon type="plus-circle" onClick={() => setInitialStatss(setVisible, visible, setStatus)} />
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
    title: <Title />,
    phone: <Phone />,
    connected: <Connected />,
    add: <Add />,
    active: "1",
  },

  {
    key: '2',
    name: <Name />,
    title: <Title />,
    phone: <Phone />,
    connected: <Connected />,
    add: <Add />,
    active: 1,
  },
  {
    key: '3',
    name: <Name />,
    title: <Title />,
    phone: <Phone />,
    connected: <Connected />,
    add: <Add />,
    active: 0,
  },
  {
    key: '4',
    name: <Name />,
    title: <Title />,
    phone: <Phone />,
    connected: <Connected />,
    add: <Add />,
    active: 0,
  },
];

const Contacts = () => {
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
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',

    },

    {
      title: 'Connected',
      dataIndex: 'connected',
    },
    {
      title: 'Add',
      dataIndex: 'add',
      render: (value, record) => <Add setVisible={setVisible} status={status} />,
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
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default Contacts;


