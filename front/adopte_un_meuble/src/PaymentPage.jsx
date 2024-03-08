// import React from "react";
import Navbar from "./components/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
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

function PaymentPage() {
  return (
    <div className="w-screen flex justify-center items-center py-[5rem] bg-lightMode-background">
      <Navbar />
      <div className="w-full px-[0.625rem] flex flex-col items-center gap-[1rem] max-w-2xl">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="titre">numéro de carte</Label>
          <Input type="email" id="card" placeholder="" />
        </div>
        <div className="flex w-full gap-[0.625rem] justify-center items-start">
          <div className="flex w-full gap-[0.625rem] justify-center items-start">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="titre">mois</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Mois" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Mois</SelectLabel>
                    <SelectItem value="janvier">01</SelectItem>
                    <SelectItem value="février">02</SelectItem>
                    <SelectItem value="mars">03</SelectItem>
                    <SelectItem value="avril">04</SelectItem>
                    <SelectItem value="mai">05</SelectItem>
                    <SelectItem value="juin">06</SelectItem>
                    <SelectItem value="juillet">07</SelectItem>
                    <SelectItem value="août">08</SelectItem>
                    <SelectItem value="septembre">09</SelectItem>
                    <SelectItem value="octobre">10</SelectItem>
                    <SelectItem value="novembre">11</SelectItem>
                    <SelectItem value="décembre">12</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="titre">Année</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Année" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Année</SelectLabel>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="titre">cvv</Label>
            <Input type="email" id="card" placeholder="" />
          </div>
        </div>
        <div className="flex w-full gap-[0.625rem] justify-center items-start">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="titre">nom</Label>
            <Input type="email" id="card" placeholder="" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="titre">prénom</Label>
            <Input type="email" id="card" placeholder="" />
          </div>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="titre">email</Label>
          <Input type="email" id="card" placeholder="" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="titre">téléphone</Label>
          <Input type="email" id="card" placeholder="" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="titre">ville</Label>
          <Input type="email" id="card" placeholder="" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="titre">code postal</Label>
          <Input type="email" id="card" placeholder="" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="titre">adresse</Label>
          <Input type="email" id="card" placeholder="" />
        </div>
        <Button className="w-full">envoyer</Button>
      </div>
    </div>
  );
}

export default PaymentPage;
