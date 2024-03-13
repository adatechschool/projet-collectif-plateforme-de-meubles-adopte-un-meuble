import React from "react";
import { useState } from "react";
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

function AdminPage() {
  // const handleStatusChange = async (event) => {
  //   const requestData = {
  //     statut_id: event,
  //   };
  //   const update = await fetch(
  //     `http://localhost:3000/api/publication/updatestatut/${adminTable.id}`,
  //     {
  //       method: "PUT",
  //       body: JSON.stringify(requestData),
  //     }
  //   );
  //   console.log(event);
  // };

  return (
    <div className="w-sceen">
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
              <TableCell className="">
                <Select
                  onValueChange={async (event) => {
                    const requestData = {
                      statut_id: event,
                    };
                    const update = await fetch(
                      `http://localhost:3000/api/publication/updatestatut/${article.id}`,
                      {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(requestData),
                      }
                    );
                    console.log(event);
                  }}
                >
                  <SelectTrigger className="w-full">
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
