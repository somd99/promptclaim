import React, { useState, useEffect } from 'react'
import { Descriptions, Collapse } from 'antd'
import { AppLayout } from '../components/app-layout'
import { useParams } from 'react-router-dom'

const { Panel } = Collapse

function callback(key) {
  console.log(key)
}

// const text = `
// RETURN – EXCHANGE POLICIES

// Terms & Conditions:
// 1. Product must not be damaged by customers action or has been installed.
// 2. The return/exchange policies are eligible with product purchased through Boonthavorn Online Store only.
// 3. Product must be unused, the product brand or price tag must be intact and the product's box or package must be in the complete condition, warranty document, manual and compatible equipment of the product.
// 4. Product provided under the condition of promotion such as premium, giveaways, etc. must be returned with the main product(s).
// 5. If you want to change “Lifestyle” furniture and the product(s) that has been installed or the problem isn’t caused by product itself, the company reserves the rights of any exchanges.
// `

export const ViewPolicyPage = (props) => {
  let { key } = useParams()
  //API
  const [item, setItems] = useState([])
  const [policyId,setPolicyId] = useState('')
  const [policyDes,setPolicyDes] = useState('')
  const fetchItem = async () => {
    const data = await fetch(
      'http://localhost:8001/retailer/policy/getByPolicyId/' + key,
      {
        headers: {
          Authorization: localStorage.token,
        },
      },
    )
    const item = await data.json()
    setItems(item)
    console.log(item)
    await setPolicyId(item[0].policy_id)
    await setPolicyDes(item[0].policy_description)
  }

  useEffect(() => {
    fetchItem()
    //eslint-disable-next-line
  }, [])

  return (
    <AppLayout
      {...props}
      nosearch
      title="Policy Information"
      lastpagePolicy="Policy Dashboard"
    >
      <div className="site-layout-content">
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Policy Informaion">
            Policy ID: {policyId}
            <br />
            <br />
            <Collapse>
              <Panel header="Policy Description">
                {policyDes}
              </Panel>
            </Collapse>
          </Descriptions.Item>
        </Descriptions>
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Products that hold this policy">
          {item.map((item) => 
            <Collapse onChange={callback}>
              <Panel header={item.product_name}>
                ID: {item.uuid}
                <br/>
                Serial No: {item.serial_no}
                <br/>
                Product No: {item.product_no}
              </Panel>
            </Collapse>)}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </AppLayout>
  )
}
// eslint-disable-next-line
const data = {
  '1': {
    key: '1',

    policyID: '000001',

    policyDes: 'this is policy description',

    product1: {
      customer1: {
        CustomerID: '000001',

        ProductNumber: '000005',

        SerialNumber: '000012',

        PolicyPeriod: '14/4/19 - 14/4/21',
      },
      customer2: {
        CustomerID: '000003',

        ProductNumber: '000805',

        SerialNumber: '003012',

        PolicyPeriod: '19/4/19 - 14/9/21',
      },
      customer3: {
        CustomerID: '000963',

        ProductNumber: '000098',

        SerialNumber: '000789',

        PolicyPeriod: '24/4/19 - 24/4/22',
      },
    },
  },
  '2': {
    key: '2',

    policyID: '222222',

    policyDes: 'this is policy description',

    product1: {
      customer1: {
        CustomerID: '000001',

        ProductNumber: '000005',

        SerialNumber: '000012',

        PolicyPeriod: '14/4/19 - 14/4/21',
      },
      customer2: {
        CustomerID: '000003',

        ProductNumber: '000805',

        SerialNumber: '003012',

        PolicyPeriod: '19/4/19 - 14/9/21',
      },
      customer3: {
        CustomerID: '000963',

        ProductNumber: '000098',

        SerialNumber: '000789',

        PolicyPeriod: '24/4/19 - 24/4/22',
      },
    },
  },
  '3': {
    key: '3',

    policyID: '333333',

    policyDes: 'this is policy description',

    product1: {
      customer1: {
        CustomerID: '000001',

        ProductNumber: '000005',

        SerialNumber: '000012',

        PolicyPeriod: '14/4/19 - 14/4/21',
      },
      customer2: {
        CustomerID: '000003',

        ProductNumber: '000805',

        SerialNumber: '003012',

        PolicyPeriod: '19/4/19 - 14/9/21',
      },
      customer3: {
        CustomerID: '000963',

        ProductNumber: '000098',

        SerialNumber: '000789',

        PolicyPeriod: '24/4/19 - 24/4/22',
      },
    },
  },
  '4': {
    key: '4',

    policyID: '444444',

    policyDes: 'this is policy description',

    product1: {
      customer1: {
        CustomerID: '000001',

        ProductNumber: '000005',

        SerialNumber: '000012',

        PolicyPeriod: '14/4/19 - 14/4/21',
      },
      customer2: {
        CustomerID: '000003',

        ProductNumber: '000805',

        SerialNumber: '003012',

        PolicyPeriod: '19/4/19 - 14/9/21',
      },
      customer3: {
        CustomerID: '000963',

        ProductNumber: '000098',

        SerialNumber: '000789',

        PolicyPeriod: '24/4/19 - 24/4/22',
      },
    },
  },
}
