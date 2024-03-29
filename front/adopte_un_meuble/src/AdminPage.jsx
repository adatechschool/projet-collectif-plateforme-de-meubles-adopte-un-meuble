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
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

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

async function getEtatList() {
  let response = await fetch("http://localhost:3000/api/publication/etat");
  let data = await response.json();
  return data;
}

async function getMatiereList() {
  let response = await fetch("http://localhost:3000/api/publication/matiere");
  let data = await response.json();
  return data;
}

async function getCouleurList() {
  let response = await fetch("http://localhost:3000/api/publication/couleur");
  let data = await response.json();
  return data;
}

async function getPieceList() {
  let response = await fetch("http://localhost:3000/api/publication/piece");
  let data = await response.json();
  return data;
}

async function getCategoryList() {
  let response = await fetch("http://localhost:3000/api/publication/category");
  let data = await response.json();
  return data;
}

let statusList = await getStatusList();
let etatList = await getEtatList();
let pieceList = await getPieceList();
let matiereList = await getMatiereList();
let couleurList = await getCouleurList();
let categoryList = await getCategoryList();

function AdminPage() {
  return (
    <div className="w-sceen">
      <Navbar />
      <div className="w-screen h-[58px] bg-white fixed top-0 z-10 opacity-[0.80] backdrop-blur-[50px]"></div>
      <Table className="mt-16">
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
              <TableCell className="hover:-rotate-2 hover:text-lightMode-secondarytext origin-bottom-left transition">
                <Link to={"/article/filter?id=" + article.id}>
                  {article.titre}
                </Link>
              </TableCell>
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
                  <DialogContent className="sm:max-w-[425px] max-h-screen overflow-scroll">
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="nom" className="text-right">
                          nom de l'article
                        </Label>
                        <Input
                          id="name"
                          defaultValue={article.titre}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="prix" className="text-right">
                          prix
                        </Label>
                        <Input
                          id="prix"
                          defaultValue={article.prix}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          description
                        </Label>
                        <Textarea
                          id="description"
                          defaultValue={article.description}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="état" className="text-right">
                          état
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue
                              placeholder={article.État_Meuble.état}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>état</SelectLabel>
                              {etatList.map((etat, index) => (
                                <SelectItem key={index} value={etat.id}>
                                  {etat.état}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="type" className="text-right">
                          type
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder={article.Type.type} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>type</SelectLabel>
                              {categoryList.map((category, index) => (
                                <SelectItem key={index} value={category.id}>
                                  {category.type}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="matière" className="text-right">
                          matière
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue
                              placeholder={article.Matière.matière}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>type</SelectLabel>
                              {matiereList.map((matiere, index) => (
                                <SelectItem key={index} value={matiere.id}>
                                  {matiere.matière}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="couleur" className="text-right">
                          couleur
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue
                              placeholder={article.Couleur.couleur}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>type</SelectLabel>
                              {couleurList.map((couleur, index) => (
                                <SelectItem key={index} value={couleur.id}>
                                  {couleur.couleur}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="pièce" className="text-right">
                          pièce
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder={article.Pièce.pièce} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>type</SelectLabel>
                              {pieceList.map((piece, index) => (
                                <SelectItem key={index} value={piece.id}>
                                  {piece.pièce}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">
                        enregistrer les modifications
                      </Button>
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
