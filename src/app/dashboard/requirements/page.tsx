"use client";

import Table from "@/components/Table";
import TablePagination from "@/components/TablePagination";
import TableSearch from "@/components/TableSearch";
import { requirementsData } from "@/lib/data";
import { ArrowDownAZ, Ellipsis, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

type Requirement = {
  id: number;
  requirementCode: string;
  requestedBy: string;
  organization: string;
  department: string;
  unit: string;
  date: string;
  time: string;
  assignedTo: string;
  category: string;
  detail: string;
  priority: string;
  status: string;
  history: [];
};

const columns = [
  {
    header: "Requirement Code",
    accessor: "requirementCode",
    className: "",
  },
  {
    header: "Requested By",
    accessor: "requestedBy",
    className: "hidden md:table-cell",
  },
  {
    header: "Organization",
    accessor: "organization",
    className: "hidden md:table-cell",
  },
  {
    header: "Department",
    accessor: "department",
    className: "hidden md:table-cell",
  },
  {
    header: "Unit",
    accessor: "unit",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Time",
    accessor: "time",
    className: "hidden md:table-cell",
  },
  {
    header: "Assigned To",
    accessor: "assignedTo",
    className: "hidden md:table-cell",
  },
  {
    header: "Category",
    accessor: "category",
    className: "hidden md:table-cell",
  },
  {
    header: "Detail",
    accessor: "detail",
    className: "hidden md:table-cell",
  },
  {
    header: "Priority",
    accessor: "priority",
    className: "hidden md:table-cell",
  },
  {
    header: "Status",
    accessor: "status",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
    className: "",
  },
];

export default function RequirementsListPage() {
  const renderRow = (item: Requirement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-200"
    >
      <td className="table-cell p-4">{item.requirementCode}</td>
      <td className="hidden md:table-cell">{item.requestedBy}</td>
      <td className="hidden md:table-cell">{item.organization}</td>
      <td className="hidden md:table-cell">{item.department}</td>
      <td className="hidden md:table-cell">{item.unit}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.time}</td>
      <td className="hidden md:table-cell">{item.assignedTo}</td>
      <td className="hidden md:table-cell">{item.category}</td>
      <td className="hidden md:table-cell">{item.detail}</td>
      <td className="hidden md:table-cell">{item.priority}</td>
      <td className="hidden md:table-cell">{item.status}</td>
      <td className="hidden md:table-cell">{item.history}</td>
      {/* actions */}
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/dashboard/requirements/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 ">
              <Ellipsis className="w-4 h-4"/>
            </button>
          </Link>
          {/* {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="teacher" type="delete" id={item.id} />
          )} */}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Your Requirements</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
              <ArrowDownAZ className="w-4 h-4" />
            </button>
            {/* {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              // </button>
              <FormModal table="teacher" type="create"/>
            )} */}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={requirementsData} />
      {/* PAGINATION */}
      <TablePagination />
    </div>
  );
}
