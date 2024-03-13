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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
      <Navbar />
      <Table className="mt-16">
        <TableCaption>admin page table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>nom de l'article</TableHead>
            <TableHead>vendeur</TableHead>
            <TableHead className="text-right">prix</TableHead>
            <TableHead className="">statut</TableHead>
            <TableHead className="">modifier</TableHead>
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
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      modifier l'article
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input
                          id="username"
                          defaultValue="@peduarte"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminPage;
