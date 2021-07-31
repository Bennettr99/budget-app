import { Table } from 'antd';
import { FilterValue, SortOrder, TablePaginationConfig } from 'antd/lib/table/interface';
import moment from 'moment';
import React from 'react';
import { AccountType, Transaction } from '../components/Home/Home.api';

interface TransactionsTableProps {
    transactions: Transaction[]
}

interface TransactionsTableState {
    pagination: TablePaginationConfig;
}

export class TransactionsTable extends React.Component<TransactionsTableProps, TransactionsTableState> {
    state: Readonly<TransactionsTableState> = {
        pagination: {
            pageSize: 50
        },
    };

    private handleTableChange = (pagination: TablePaginationConfig) => {
        this.setState({ pagination });
    }

    private getDateFilters = (transactions: Transaction[]) => {
        const monthYear = transactions.map(t => {
            return t.transactionDate.format("MM.YY");
        });
        return Array.from(new Set(monthYear)).map(t => {
            return {
                text: t,
                value: t,
            }
        });
    }

    render() {
        const { transactions } = this.props;
        const { pagination } = this.state;
        console.log(this.getDateFilters(transactions));
        const columns = [
            {
                title: "Date",
                dataIndex: "date",
                key: "date",
                filters: this.getDateFilters(transactions),
                onFilter: (value: any, record: any) => moment(record.date).format("MM.YY") === value,
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
        const dataSource = transactions.map((t, index) => {
            return {
                key: index,
                date: moment(t.transactionDate).format("MM.DD.YYYY"),
                amount: t.amount,
                description: t.description,
                accountType: AccountType[t.acountType],
            };
        });

        return (
            <Table dataSource={dataSource} columns={columns} pagination={pagination} onChange={this.handleTableChange} />
        )
    }
}