import React from 'react'
import { Layout, Breadcrumb, Row, Col, Table } from 'antd'
import { Topbar } from '../components/header'
import { Bottombar } from '../components/footer'
// import { DataTable } from '../components/table'
import { SearchBar } from '../components/search-bar'
import { Sidebar } from '../components/sider'
const { Content } = Layout

export const MainProductPage = (props) => {
  return (
    <Layout>
      <Topbar />
      <Layout>
        <Content>
          <br />
          <Row>
            <Col span={8}></Col>
            <Col span={8}>
              <SearchBar />
            </Col>
            <Col span={8}></Col>
          </Row>
        </Content>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Product Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: '24px 0' }}
          >
            <Sidebar {...props} />
            <Content>
              <div className="site-layout-content">
                <Table
                  columns={columns}
                  dataSource={data}
                  onChange={onChange}
                  onRow={(record, rowIndex) => {
                    return {
                      onClick: () => {
                        console.log({ record, rowIndex })
                        props.history.push(`/view-product/${record.key}`)
                      },
                    }
                  }}
                />
              </div>
            </Content>
          </Layout>
        </Content>
        <Bottombar />
      </Layout>
    </Layout>
  )
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    // specify the filter category
    filters: [
      {
        text: 'Toilet Bowl',
        value: 'Toilet Bowl',
      },
      {
        text: 'Air Conditioner',
        value: 'Air Conditioner',
      },
      {
        text: 'Water Heater',
        value: 'Water Heater',
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) !== -1,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Serial No.',
    dataIndex: 'serial',
    sorter: (a, b) => a.serial - b.serial,
  },
  {
    title: 'Warranty No.',
    dataIndex: 'warranty',
    sorter: (a, b) => a.warranty - b.warranty,
  },
  {
    title: 'Expiry Date',
    dataIndex: 'expiry',
    sorter: (a, b) => a.expiry2 - b.expiry2,
  },
]

const data = [
  {
    key: '1',
    name: 'COTTO Automatic Toilet Bowl',
    serial: '000027',
    warranty: '002450',
    expiry: '20/03/2020',
    expiry2: '2020',
  },
  {
    key: '2',
    name: 'AMERICAN STANDARD Toilet Bowl',
    serial: '000001',
    warranty: '000495',
    expiry: '10/05/2024',
    expiry2: '2024',
  },
  {
    key: '3',
    name: 'STIEBEL ELTRON Water Heater',
    serial: '002304',
    warranty: '000007',
    expiry: '24/05/2022',
    expiry2: '2022',
  },
  {
    key: '4',
    name: 'DAIKIN Air Conditioner',
    serial: '304023',
    warranty: '030512',
    expiry: '29/03/2021',
    expiry2: '2021',
  },
]

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra)
}
