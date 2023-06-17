import { useTheme } from "@mui/material";
import { useGetKpisQuery } from "@/services/kpiApi";
import { useGetProductsQuery } from "@/services/productApi";
import { useGetTransactionsQuery } from "@/services/transactionApi";

import DashboardGrid from "@/layouts/DashboardGrid";
import Widget1 from "@/components/widgets/Widget-1";
import Widget2 from "@/components/widgets/Widget-2";
import Widget3 from "@/components/widgets/Widget-3";
import Widget4 from "@/components/widgets/Widget-4";
import Widget5 from "@/components/widgets/Widget-5";
import Widget6 from "@/components/widgets/Widget-6";
import Widget7 from "@/components/widgets/Widget-7";
import Widget8 from "@/components/widgets/Widget-8";
import Widget9 from "@/components/widgets/Widget-9";
import Widget10 from "@/components/widgets/Widget-10";

export default function Dashboard() {
  const { palette } = useTheme();
  const {
    data: kpiData,
    error: kpiError,
    isLoading: kpiLoading,
  } = useGetKpisQuery();

  const {
    data: productData,
    error: productError,
    isLoading: productLoading,
  } = useGetProductsQuery();

  const {
    data: transactionData,
    error: transactionError,
    isLoading: transactionLoading,
  } = useGetTransactionsQuery();

  return (
    <DashboardGrid>
      {/* row1 */}
      <Widget1
        data={kpiData}
        error={kpiError}
        isLoading={kpiLoading}
        palette={palette}
      />
      <Widget2
        data={kpiData}
        error={kpiError}
        isLoading={kpiLoading}
        palette={palette}
      />
      <Widget3
        data={kpiData}
        error={kpiError}
        isLoading={kpiLoading}
        palette={palette}
      />

      {/* row2 */}
      <Widget4
        data={kpiData}
        error={kpiError}
        isLoading={kpiLoading}
        palette={palette}
      />
      <Widget5 palette={palette} />
      <Widget6
        data={productData}
        error={productError}
        isLoading={productLoading}
        palette={palette}
      />

      {/* row3 */}
      <Widget7
        data={productData}
        error={productError}
        isLoading={productLoading}
        palette={palette}
      />
      <Widget8
        data={transactionData}
        error={transactionError}
        isLoading={transactionLoading}
        palette={palette}
      />
      <Widget9 />
      <Widget10 />
    </DashboardGrid>
  );
}
