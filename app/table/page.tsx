import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52d",
      amount: 120,
      status: "success",
      email: "m2@example.com",
    },
    {
      id: "728ed52e",
      amount: 130,
      status: "failed",
      email: "m3@example.com",
    },
    {
      id: "728ed52h",
      amount: 150,
      status: "pending",
      email: "m4@example.com",
    },
    {
      id: "728ed52fr",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52de",
      amount: 120,
      status: "success",
      email: "m2@example.com",
    },
    {
      id: "728ed52ew",
      amount: 130,
      status: "failed",
      email: "m3@example.com",
    },
    {
      id: "728ed52hq",
      amount: 150,
      status: "pending",
      email: "m4@example.com",
    },
    {
      id: "728ed52fa",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52ds",
      amount: 120,
      status: "success",
      email: "m2@example.com",
    },
    {
      id: "728ed52ed",
      amount: 130,
      status: "failed",
      email: "m3@example.com",
    },
    {
      id: "728ed52hf",
      amount: 150,
      status: "pending",
      email: "m4@example.com",
    },
  ];
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
