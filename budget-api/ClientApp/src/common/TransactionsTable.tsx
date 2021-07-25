import MaterialTable, { Icons } from 'material-table';
import React, { forwardRef } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from "@material-ui/icons/Search";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { AccountType, Transaction } from '../components/Home/Home.api';
import moment from 'moment';
import { ArrowDownward } from '@material-ui/icons';

interface TransactionsTableProps {
    transactions: Transaction[]
}

export class TransactionsTable extends React.Component<TransactionsTableProps, {}> {
    render() {
        const icons: Icons = {
            Clear: forwardRef((props: any, ref: any) => <ClearIcon {...props} ref={ref} />),
            DetailPanel: forwardRef((props, ref) => <NavigateNextIcon {...props} ref={ref} />),
            FirstPage: forwardRef((props: any, ref: any) => <FirstPageIcon {...props} ref={ref} />),
            LastPage: forwardRef((props: any, ref: any) => <LastPageIcon {...props} ref={ref} />),
            NextPage: forwardRef((props: any, ref: any) => <NavigateNextIcon {...props} ref={ref} />),
            PreviousPage: forwardRef((props: any, ref: any) => <NavigateBeforeIcon {...props} ref={ref} />),
            ResetSearch: forwardRef((props: any, ref: any) => <ClearIcon {...props} ref={ref} />),  
            Search: forwardRef((props: any, ref: any) => <SearchIcon {...props} ref={ref} />),
            SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        }

        const { transactions } = this.props;
        return (
            <MaterialTable
                columns={[
                    { title: "Date", field: "date" },
                    { title: "Amount", field: "amount" },
                    { title: "Description", field: "description" },
                    { title: "Account Type", field: "account" },
                ]}
                data={transactions.map((t: Transaction) => {
                    return { date: moment(t.transactionDate).format("MM.DD.YYYY"), amount: t.amount, account: AccountType[t.acountType], description: t.description }
                })}
                title="Title"
                icons={icons}
                options={{grouping: true}} />
        )
    }
}