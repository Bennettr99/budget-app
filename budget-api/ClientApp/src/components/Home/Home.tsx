import { Row } from 'antd';
import React from 'react';
import { TransactionsTable } from '../../common/TransactionsTable';
import { BRCol } from '../BRWrappers/BRCol/BRCol';
import "../BRWrappers/BRCol/BRCol.css";

class HomeComponent extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <BRCol span={12}>
                        <h1>Home Page</h1>
                    </BRCol>
                </Row>
                <TransactionsTable/>
            </>
        )
    }
}

export const Home = HomeComponent;