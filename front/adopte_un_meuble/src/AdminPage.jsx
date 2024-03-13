import React from "react";
import Navbar from "./components/Navbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

async function getAdminTable() {
  let response = await fetch("http://localhost:3000/api/publication/all");
  let data = await response.json();
  console.log("ADMIN DATA", data);
  return data;
}

let adminTable = await getAdminTable();

async function getStatusList() {
  let response = await fetch("http://localhost:3000/api/publication/status");
  let data = await response.json();
  console.log("STATUS DATA", data);
  return data;
}

let statusList = await getStatusList();

// const YourComponent = () => {
//   const statusList = [
//     /* Your status list goes here */
//   ];
//   const handleValueChange = (newValue) => {
//     console.log("Selected item changed:", newValue);
//   };
// };

function AdminPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Table>
        <TableCaption>admin page table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>nom de l'article</TableHead>
            <TableHead>vendeur</TableHead>
            <TableHead className="text-right">prix</TableHead>
            <TableHead className="text-right">statut</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {adminTable.map((article, index) => (
            <TableRow>
              <TableCell className="font-medium">{article.id}</TableCell>
              <TableCell>{article.titre}</TableCell>
              <TableCell>{article.Utilisateur.pseudo}</TableCell>
              <TableCell className="text-right">€{article.prix}</TableCell>
              {/* <TableCell className="text-right">
                {article.Statut_Publication.statut}
              </TableCell> */}
              <TableCell className="text-right">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue
                      placeholder={article.Statut_Publication.statut}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>statut</SelectLabel>
                      {statusList.map((status, index) => (
                        <SelectItem key={index} value={status.id}>
                          {status.statut}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminPage;
