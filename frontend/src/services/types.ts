//query data definitions
export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Kpi {
  _id: string;
  id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  expensesByCategory: ExpensesByCategory;
  createdAt: string;
  updatedAt: string;
}
