import React from 'react';
import Table from '@components/Table';
import type { Expense } from '@/types/expenses';
import type { TableColumn } from '@/types/table';
import styles from './styles.module.scss';

import EditIcon from '@assets/icons/edit-2.svg';
import BagIcon from '@assets/icons/bag.svg';

interface ExpensesTableProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
  onEdit?: (id: string) => void;
}

const ExpensesTable: React.FC<ExpensesTableProps> = ({
  expenses,
  onDelete,
  onEdit,
}) => {
  const formatAmount = (amount: number) => {
    return amount.toLocaleString('ru-RU') + ' ₽';
  };

  const columns: TableColumn<Expense>[] = [
    {
      key: 'description',
      title: 'Описание',
      width: '30%',
      render: (item) => <p>{item.description}</p>,
    },
    {
      key: 'category',
      title: 'Категория',
      width: '25%',
      render: (item) => <p>{item.category}</p>,
    },
    {
      key: 'date',
      title: 'Дата',
      width: '25%',
      render: (item) => <p>{item.date}</p>,
    },
    {
      key: 'amount',
      title: 'Сумма',
      width: '25%',
      align: 'left',
      render: (item) => <p>{formatAmount(item.amount)}</p>,
    },
    {
      key: 'actions',
      title: '',
      width: '25%',
      align: 'center',
      render: (item) => (
        <div className={styles.actions}>
          {onEdit && (
            <button
              className={styles.action_button}
              onClick={(e) => {
                e.stopPropagation();
                onEdit(item.id);
              }}
              aria-label="Редактировать расход"
              title="Редактировать"
            >
              <img src={EditIcon} alt="Редактировать" className={styles.icon} />
            </button>
          )}
          <button
            className={styles.action_button}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(item.id);
            }}
            aria-label="Удалить расход"
            title="Удалить"
          >
            <img src={BagIcon} alt="Удалить" className={styles.icon} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <Table columns={columns} data={expenses} keyExtractor={(item) => item.id} />
  );
};

export default ExpensesTable;
