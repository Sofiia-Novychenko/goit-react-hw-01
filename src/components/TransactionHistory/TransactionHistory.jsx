import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionTable}>
      <thead className={styles.transactionThead}>
        <tr className={styles.transactionTheadLine}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.transactionTbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.transactionTheadLine}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
