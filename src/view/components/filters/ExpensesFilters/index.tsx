import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { CategoryEnum, type Category, type SortOrder } from '@/types/expenses';

interface ExpenseFiltersProps {
  selectedCategory: Category | 'Все';
  onCategoryChange: (category: Category | 'Все') => void;
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
}

const ExpenseFilters: React.FC<ExpenseFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  sortOrder,
  onSortOrderChange,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  const categories: (Category | 'Все')[] = [
    'Все',
    CategoryEnum.FOOD,
    CategoryEnum.TRANSPORT,
    CategoryEnum.HOUSING,
    CategoryEnum.ENTERTAINMENT,
    CategoryEnum.EDUCATION,
    CategoryEnum.OTHER,
  ];

  const sortOptions = [
    { value: 'desc', label: 'Сначала новые' },
    { value: 'asc', label: 'Сначала старые' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategorySelect = (category: Category | 'Все') => {
    onCategoryChange(category);
    setIsCategoryOpen(false);
  };

  const handleSortSelect = (order: SortOrder) => {
    onSortOrderChange(order);
    setIsSortOpen(false);
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filter_item} ref={categoryRef}>
        <button
          type="button"
          className={`${styles.filter_trigger} ${isCategoryOpen ? styles.active : ''}`}
          onClick={() => {
            setIsCategoryOpen(!isCategoryOpen);
            setIsSortOpen(false);
          }}
        >
          <p>
            Фильтровать по <span className={styles.highlighted}>категории</span>
          </p>
          <span className={styles.arrow}>▼</span>
        </button>

        {isCategoryOpen && (
          <div className={styles.dropdown}>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.dropdown_item} ${
                  selectedCategory === category ? styles.selected : ''
                }`}
                onClick={() => handleCategorySelect(category)}
              >
                <p>{category}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filter_item} ref={sortRef}>
        <button
          type="button"
          className={`${styles.filter_trigger} ${isSortOpen ? styles.active : ''}`}
          onClick={() => {
            setIsSortOpen(!isSortOpen);
            setIsCategoryOpen(false);
          }}
        >
          <p>
            Сортировать по <span className={styles.highlighted}>дате</span>
          </p>
          <span className={styles.arrow}>▼</span>
        </button>

        {isSortOpen && (
          <div className={styles.dropdown}>
            {sortOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`${styles.dropdown_item} ${
                  sortOrder === option.value ? styles.selected : ''
                }`}
                onClick={() => handleSortSelect(option.value as SortOrder)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseFilters;
