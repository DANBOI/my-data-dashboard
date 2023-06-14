import mongoose from "mongoose";
import { loadType } from "mongoose-currency";
import { kpis } from "../../data";

//support currency type in mongoose
loadType(mongoose);

const currencySchemaType = {
  type: mongoose.Types.Currency,
  currency: "USD",
  get: (v: number) => v / 100,
};

//Schemas
const monthSchema = new mongoose.Schema(
  {
    month: String,
    revenue: currencySchemaType,
    expenses: currencySchemaType,
    operationalExpenses: currencySchemaType,
    nonOperationalExpenses: currencySchemaType,
  },
  { toJSON: { getters: true } }
);

const daySchema = new mongoose.Schema(
  {
    date: String,
    revenue: currencySchemaType,
    expenses: currencySchemaType,
  },
  { toJSON: { getters: true } }
);

const kpiSchema = new mongoose.Schema(
  {
    totalProfit: currencySchemaType,
    totalRevenue: currencySchemaType,
    totalExpenses: currencySchemaType,
    monthlyData: [monthSchema],
    dailyData: [daySchema],
    //nested document with arbitrary keys
    expensesByCategory: {
      salaries: currencySchemaType,
      supplies: currencySchemaType,
      services: currencySchemaType,
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

// check kpiModel if is exsits first.
const Kpi = mongoose.models.Kpi || mongoose.model("Kpi", kpiSchema);

export const insertKpiData = () => Kpi.insertMany(kpis);

export default Kpi;
