import './Transactions-list.scss';
import TransactionsItem, { Transaction } from "../Transactions-item/Transactions-item"

interface TransactionsItemProps {
    transaction: Transaction[];
}

function TransactionsList(props: TransactionsItemProps) {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {props.transaction.map((transaction) => (
                    <TransactionsItem transaction={transaction} />
                ))}
            </tbody>
        </table>
    );
}

export default TransactionsList;
