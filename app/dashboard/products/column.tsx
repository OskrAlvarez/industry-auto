import { ColumnDef } from "@tanstack/react-table";
import DataTableActions from "./data-table-actions";
import Image from "next/image";

export type Product = {
  id: number,
  image_urls: string[];
  make: string;
  model: string;
  year: number;
  price: string | number;
}

interface ProductColumsActions {
  onEdit: (product: Product) => void
  onDelete: (product: Product) => void
}

export const getColumns = ({onEdit, onDelete}: ProductColumsActions):ColumnDef<Product>[] =>  [
  { header: 'Image', 
    id: 'image', 
    cell: ({ row }) => { 
      let imageUrl = row.original.image_urls;  
      if (typeof imageUrl === 'string') {
        imageUrl = JSON.parse(imageUrl)
      }

      return ( 
      <Image 
        className="rounded-md"
        src={imageUrl[0]} 
        alt={`Product Image`} 
        width={100} 
        height={100} 
      /> ) 
    }
  },
  {
    accessorKey: 'make',
    header: 'Make'
  },
  {
    accessorKey: 'model',
    header: 'Model'
  },
  {
    accessorKey: 'year',
    header: 'Year'
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"))
 
      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits:0

      }).format(amount)
 
      return formatted
    }
  },
  {
    header: 'Actions',
    id: 'Actions',
    cell: ({ row }) => <DataTableActions row={row} onEdit={onEdit} onDelete={onDelete} /> 
  }
]