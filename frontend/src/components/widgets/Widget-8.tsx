import { Box, Palette } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Transaction } from "@/types";

import Widget from "@/layouts/WidgetContainer";

type Props = {
  data?: Transaction[];
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
  palette: Palette;
};

const transactionFields = [
  {
    field: "id",
    headerName: "id",
    flex: 1,
  },
  {
    field: "buyer",
    headerName: "Buyer",
    flex: 0.65,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 0.35,
    renderCell: (params: GridCellParams) => `$${params.value}`,
  },
  {
    field: "productIds",
    headerName: "Count",
    flex: 0.1,
    renderCell: (params: GridCellParams) => (params.value as string[]).length,
  },
];

export default function Widget8({
  data = [],
  error,
  isLoading,
  palette,
}: Props) {
  return (
    <Widget
      gridArea="Widget-8"
      title="Recent Orders"
      sideText={`${data?.length} latest transactions`}
      error={error}
      isLoading={isLoading}
    >
      {data && (
        <Box
          mt="1rem"
          px="0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={data}
            columns={transactionFields}
          />
        </Box>
      )}
    </Widget>
  );
}
