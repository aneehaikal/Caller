import React from 'react';
import { Table } from 'antd';

const Date = () => {
  return (
    <div>
      12/12/2019
    </div>
  );
};
const Site = () => {
  return (
    <div>
      www.monster.com
    </div>
  );
};

const Title = () => {
  return (
    <div>
      Full stack engineer
    </div>
  );
};

const Type = () => {
  return (
    <div>
      Contract
    </div>
  );
};

const Url = () => {
  return (
    <div>
      http://bit.ly/arhWj
    </div>
  );
};

const data = [
  {
    key: '2',
    date: <Date />,
    site: <Site />,
    title: <Title />,
    type: <Type />,
    url: <Url />,

  },

  {
    key: '2',
    date: <Date />,
    site: <Site />,
    title: <Title />,
    type: <Type />,
    url: <Url />,
  },
  {
    key: '3',
    date: <Date />,
    site: <Site />,
    title: <Title />,
    type: <Type />,
    url: <Url />,
  },
  {
    key: '4',
    date: <Date />,
    site: <Site />,
    title: <Title />,
    type: <Type />,
    url: <Url />,
  },
];

const Jobs = () => {

  const columns = [
    {
      title: 'Date Added',
      dataIndex: 'date',
    },
    {
      title: 'Job Site',
      dataIndex: 'site',
    },
    {
      title: 'Job Title',
      dataIndex: 'title',

    },

    {
      title: 'Job Type',
      dataIndex: 'type',
    },
    {
      title: 'Job URL',
      dataIndex: 'url',
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
    </div>
  );
};

export default Jobs;


