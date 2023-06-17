import { Box, Palette } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Product } from "@/types";

import Widget from "@/layouts/WidgetContainer";

type Props = {
  data?: Product[];
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
  palette: Palette;
};

const productFields = [
  {
    field: "id",
    headerName: "id",
    flex: 1,
  },
  {
    field: "expense",
    headerName: "Expense",
    flex: 0.5,
    renderCell: (params: GridCellParams) => `$${params.value}`,
  },
  {
    field: "price",
    headerName: "Price",
    flex: 0.5,
    renderCell: (params: GridCellParams) => `$${params.value}`,
  },
];

export default function Widget7({
  data = [],
  error,
  isLoading,
  palette,
}: Props) {
  return (
    <Widget
      gridArea="Widget-7"
      title="List of Products"
      sideText={`${data?.length} products`}
    >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <Box
          mt="0.5rem"
          px="0.5rem"
          height="75%"
          //custom styles to x-data-grid children
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
            columns={productFields}
          />
        </Box>
      )}
    </Widget>
  );
}
