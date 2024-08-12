import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

export default function DataTable({ items, updateItemQuantity, removeItem }) {
  const columns = [
    {
      field: "image",
      headerName: "Item",
      minWidth: 150, // Set a minimum width for better responsiveness
      renderCell: (params) => (
        <img
          src={params.value}
          alt={params.row.name}
          style={{ width: "60px", height: "auto" }}
        />
      ),
    },
    { field: "name", headerName: "Item Name", minWidth: 200 },
    {
      field:"price", headerName:"price ($)", minWidth:130
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 250,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="success"
            onClick={() =>
              updateItemQuantity(params.row.id, params.row.quantity - 1)
            }
          >
            -
          </Button>

          <span className="mx-4 text-lg font-medium">{params.row.quantity}</span>

          <Button
            variant="contained"
            color="success"
            onClick={() =>
              updateItemQuantity(params.row.id, params.row.quantity + 1)
            }
          >
            +
          </Button>
        </>
      ),
    },
    {
      field: "remove",
      headerName: "Remove",
      minWidth: 130,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          onClick={() => removeItem(params.row.id)}
        >
          Remove
        </Button>
      ),
    },
  ];

  const rows = items.map((item) => ({
    id: item.id,
    image: item.image,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
  }));

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        overflowX: "auto", // Enable horizontal scrolling
      }}
    >
      <div style={{ minWidth: "600px" }}> {/* Set minimum width to prevent squeezing on small screens */}
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 7, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
