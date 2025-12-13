import React, { useState } from 'react';
import styles from './styles.module.scss';
import { CategoryEnum, type Category } from '@/types/expenses';
import { Food, Car, GameBoy, House, Message, Teacher } from '@assets/icons';

interface ExpensesFormProps {
  onSubmit: (expense: {
    description: string;
    category: Category;
    date: string;
    amount: number;
  }) => void;
}

interface CategoryItem {
  id: Category;
  title: string;
  icon: React.ReactNode;
}

const ExpensesForm: React.FC<ExpensesFormProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category | null>(null);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!description || !date || !amount || !category) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    onSubmit({
      description,
      category,
      date,
      amount: parseFloat(amount.replace(/\s/g, '').replace(',', '.')),
    });

    setDescription('');
    setCategory(CategoryEnum.FOOD);
    setDate('');
    setAmount('');
  };

  const categories: CategoryItem[] = [
    { id: CategoryEnum.FOOD, title: CategoryEnum.FOOD, icon: <Food /> },
    {
      id: CategoryEnum.TRANSPORT,
      title: CategoryEnum.TRANSPORT,
      icon: <Car />,
    },
    { id: CategoryEnum.HOUSING, title: CategoryEnum.HOUSING, icon: <House /> },
    {
      id: CategoryEnum.ENTERTAINMENT,
      title: CategoryEnum.ENTERTAINMENT,
      icon: <GameBoy />,
    },
    {
      id: CategoryEnum.EDUCATION,
      title: CategoryEnum.EDUCATION,
      icon: <Teacher />,
    },
    { id: CategoryEnum.OTHER, title: CategoryEnum.OTHER, icon: <Message /> },
  ];

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Новый расход</h2>

      <div>
        <label className={styles.label} htmlFor="description">
          <h3>Описание</h3>
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Введите описание"
          className={styles.input}
        />
      </div>

      <div>
        <label className={styles.label}>
          <h3>Категория</h3>
        </label>
        <div className={styles.categories_container}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.category_button} ${
                category === cat.id ? styles.category_button__active : ''
              }`}
              onClick={() => setCategory(cat.id)}
            >
              {cat.icon}
              <p>{cat.title}</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={styles.label} htmlFor="date">
          <h3>Дата</h3>
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={styles.input}
        />
      </div>

      <div>
        <label className={styles.label} htmlFor="amount">
          <h3>Сумма</h3>
        </label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => {
            const value = e.target.value
              .replace(/\s/g, '')
              .replace(/[^\d,.]/g, '');
            setAmount(value);
          }}
          placeholder="Введите сумму"
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.submit_button}>
        <h3 className={styles.submit_button__text}>Добавить новый расход</h3>
      </button>
    </form>
  );
};

export default ExpensesForm;
