import './Transactions-item.scss';

export interface Transaction {
    id: number;
    type: string;
    amount: string;
    currency: string;
}

interface TransactionsItemProps {
    transaction: Transaction
}

function TransactionsItem(props: TransactionsItemProps) {
    return (
        <tr>
            <td>{props.transaction.type}</td>
            <td>{props.transaction.amount}</td>
            <td>{props.transaction.currency}</td>
        </tr>
    );
}

export default TransactionsItem;
