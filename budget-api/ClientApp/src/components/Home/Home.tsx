import { Row } from 'antd';
import React from 'react';
import { TransactionsTable } from '../../common/TransactionsTable';
import { BRCol } from '../BRWrappers/BRCol/BRCol';
import { Transaction } from './Home.api';
import { HomeHandler } from './Home.handler';
import "../BRWrappers/BRCol/BRCol.css";

interface HomeComponentState {
    transactions: Transaction[];
}

class HomeComponent extends React.Component<{}, HomeComponentState> {
    private handler: HomeHandler = new HomeHandler();

    constructor(props: any) {
        super(props);
        this.state = {
            transactions: []
        };
    }

    async componentDidMount() {
        this.setState({ transactions: await this.loadTransactions() });
    }

    loadTransactions = () => {
        return this.handler.getTransactions(1);
    }

    render() {
        const { transactions } = this.state;

        return (
            <>
                <Row justify="center">
                    <BRCol span={12}>
                        <h1>Home Page</h1>
                    </BRCol>
                </Row>
                <TransactionsTable transactions={transactions} />
            </>
        )
    }
}

export const Home = HomeComponent;