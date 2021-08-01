import { DatePicker, Row, Spin, Table } from 'antd';
import { SortOrder, TablePaginationConfig } from 'antd/lib/table/interface';
import moment from 'moment';
import React from 'react';
import { BRCol } from '../components/BRWrappers/BRCol/BRCol';
import { AccountType, Transaction } from '../components/Home/Home.api';
import { HomeHandler } from '../components/Home/Home.handler';
import "./TransactionsTable.css";

// interface TransactionsTableProps {
//     transactions: Transaction[]
// }

interface TransactionsTableState {
    pagination: TablePaginationConfig;
    transactions: Transaction[];
    filteredTransactions: Transaction[];
}

export class TransactionsTable extends React.Component<{}, TransactionsTableState> {
    private handler: HomeHandler = new HomeHandler();
    
    state: Readonly<TransactionsTableState> = {
        pagination: {
            pageSize: 50
        },
        transactions: [],
        filteredTransactions: [],
    };

    async componentDidMount() {
        this.setState({ transactions: await this.loadTransactions() });
    }

    componentDidUpdate(pervProps: any, prevState: TransactionsTableState) {
        if (prevState.transactions.length !== this.state.transactions.length) {
            this.setState({ filteredTransactions: this.state.transactions });
        }
    }

    private loadTransactions = () => {
        return this.handler.getTransactions(1);
    }

    private handleTableChange = (pagination: TablePaginationConfig) => {
        this.setState({ pagination });
    }

    private onDateChange = (date: any) => {
        const { transactions } = this.state;
        this.setState({
            filteredTransactions: date ? transactions.filter(t => t.transactionDate.format("MM.YYYY") === moment(date).format("MM.YYYY")) : transactions,
        });
    }

    render() {
        const { pagination, transactions, filteredTransactions } = this.state;
        const columns = [
            {
                title: "Date",
                dataIndex: "date",
                key: "date",
                sorter: (a: any, b: any) => moment(a.date).isBefore(moment(b.date)) ? -1 : 1,
                sortDirections: ["descend"] as SortOrder[],
            },
            {
                title: "Description",
                dataIndex: "description",
                key: "description",
            },
            {
                title: "Account Type",
                dataIndex: "accountType",
                key: "accountType",
                filters: [
                    {
                        text: AccountType[1].toString(),
                        value: AccountType[1].toString(),
                    },
                    {
                        text: AccountType[2].toString(),
                        value: AccountType[2].toString(),
                    }
                ],
                onFilter: (value: any, record: any) => record.accountType === value,
            },
            {
                title: "Amount",
                dataIndex: "amount",
                key: "amount",
                sorter: (a: any, b: any) => a.amount - b.amount,
                sortDirections: ["ascend", "descend"] as SortOrder[],
            },
        ]
        const dataSource = filteredTransactions.map((t, index) => {
            return {
                key: index,
                date: moment(t.transactionDate).format("MM.DD.YYYY"),
                amount: t.amount,
                description: t.description,
                accountType: AccountType[t.acountType],
            };
        });

        return (
            <>
                <Spin tip="Loading..." spinning={transactions.length === 0}>
                    <div className="table-container">
                        <Row justify="end">
                            <BRCol>
                                <DatePicker format={"MM.YYYY"} picker="month" onChange={this.onDateChange} />
                            </BRCol>
                        </Row>
                        <Table className="transactions-table" dataSource={dataSource} columns={columns} pagination={pagination} onChange={this.handleTableChange} />
                    </div>
                </Spin>
            </>
        )
    }
}