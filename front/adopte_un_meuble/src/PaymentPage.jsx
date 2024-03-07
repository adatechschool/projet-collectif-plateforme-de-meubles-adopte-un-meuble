import React from "react";
import Navbar from "./components/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="titre">année</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
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
