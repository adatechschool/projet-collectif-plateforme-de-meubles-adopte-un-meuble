// import React from "react";
import Navbar from "./components/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

function PaymentPage() {
  return (
    <div className="w-screen flex justify-center items-center py-[5rem] bg-lightMode-background">
      <Navbar />
      <div className="w-full px-[0.625rem] flex flex-col items-center gap-[1rem] max-w-xl">
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
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>mois</SelectLabel>
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
              <Label htmlFor="titre">année</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>année</SelectLabel>
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
        <Separator className="my-[2rem]" />
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
        <Link to="/thanks" className="w-full">
          <Button className="w-full">envoyer</Button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentPage;
