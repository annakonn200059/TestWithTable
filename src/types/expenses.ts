export enum CategoryEnum {
  FOOD = 'Еда',
  TRANSPORT = 'Транспорт',
  HOUSING = 'Жилье',
  ENTERTAINMENT = 'Развлечения',
  EDUCATION = 'Образование',
  OTHER = 'Другое',
}

export type Category =
  | CategoryEnum.FOOD
  | CategoryEnum.TRANSPORT
  | CategoryEnum.HOUSING
  | CategoryEnum.ENTERTAINMENT
  | CategoryEnum.EDUCATION
  | CategoryEnum.OTHER;

export interface Expense {
  id: string;
  description: string;
  category: Category;
  date: string;
  amount: number;
}

export type SortOrder = 'asc' | 'desc';

export const ALL_CATEGORIES: Category[] = [
  CategoryEnum.FOOD,
  CategoryEnum.TRANSPORT,
  CategoryEnum.HOUSING,
  CategoryEnum.ENTERTAINMENT,
  CategoryEnum.EDUCATION,
  CategoryEnum.OTHER,
];
