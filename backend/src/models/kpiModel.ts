import mongoose, { Types, Schema, models, model } from "mongoose";
import { loadType } from "mongoose-currency";
// import { kpis } from "../../data";

//support currency type in mongoose
loadType(mongoose);

export const currencySchemaType = {
  // @ts-ignore
  type: Types.Currency,
  currency: "USD",
  get: (value: number) => value / 100,
};

//Schemas
const monthSchema = new Schema(
  {
    month: String,
    revenue: currencySchemaType,
    expenses: currencySchemaType,
    operationalExpenses: currencySchemaType,
    nonOperationalExpenses: currencySchemaType,
  },
  { toJSON: { getters: true } }
);

const daySchema = new Schema(
  {
    date: String,
    revenue: currencySchemaType,
    expenses: currencySchemaType,
  },
  { toJSON: { getters: true } }
);

const kpiSchema = new Schema(
  {
    totalProfit: currencySchemaType,
    totalRevenue: currencySchemaType,
    totalExpenses: currencySchemaType,
    monthlyData: [monthSchema],
    dailyData: [daySchema],
    //nested document with arbitrary keys
    expensesByCategory: {
      type: Map,
      of: currencySchemaType,
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

// check kpiModel if is exsits first.
const Kpi = models.Kpi || model("Kpi", kpiSchema);

// export const insertKpiData = () => Kpi.insertMany(kpis);

export default Kpi;
