import React, { useState } from 'react';
import ExpensesTable from '@components/tables/ExpensesTable';
import styles from './styles.module.scss';
import { type Expense, type SortOrder, type Category } from '@/types/expenses';
import ExpensesFilters from '@/view/components/filters/ExpensesFilters';
import ExpensesForm from '@/view/components/forms/MyExpensesForm';
import mockExpenses from './mock';

const MyExpenses: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>(mockExpenses);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Все'>(
    'Все'
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const filteredExpenses =
    selectedCategory === 'Все'
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    const dateA = new Date(a.date.split('.').reverse().join('-'));
    const dateB = new Date(b.date.split('.').reverse().join('-'));
    return sortOrder === 'desc'
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });

  const handleAddExpense = (newExpense: Omit<Expense, 'id'>) => {
    const expense: Expense = {
      ...newExpense,
      id: Date.now().toString(),
      date: new Date(newExpense.date).toLocaleDateString('ru-RU'),
    };

    setExpenses((prev) => [...prev, expense]);
  };

  const handleDeleteExpense = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить этот расход?')) {
      setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    }
  };

  return (
    <>
      <h1>Мои расходы</h1>

      <section className={styles.mainContent}>
        <div className={styles.table}>
          <div className={styles.table__header}>
            <h2 className={styles.table__title}>Таблица расходов</h2>
            <ExpensesFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortOrder={sortOrder}
              onSortOrderChange={setSortOrder}
            />
          </div>

          <ExpensesTable
            expenses={sortedExpenses}
            onDelete={handleDeleteExpense}
            onEdit={() => {}}
          />
        </div>

        <ExpensesForm onSubmit={handleAddExpense} />
      </section>
    </>
  );
};

export default MyExpenses;
