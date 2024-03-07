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

function SellPage() {
  return (
    <div className="w-screen flex justify-center items-center py-[5rem] bg-lightMode-background">
      <Navbar />
      <div className="w-full px-[0.625rem] flex flex-col items-center gap-[1rem] max-w-2xl">
        <div className="bg-background border w-full h-[12rem] flex justify-center content-center items-center rounded-md">
          <p>télécharger votre image</p>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="titre">titre</Label>
          <Input type="email" id="titre" placeholder="le nom du meuble" />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">description</Label>
          <Textarea placeholder="description du meuble" id="message" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="prix">prix</Label>
          <Input type="email" id="prix" placeholder="prix désiré" />
        </div>
        <div className="flex w-full gap-[0.625rem] justify-center items-start">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="titre">condition</Label>
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
            <Label htmlFor="titre">catégorie</Label>
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
        <Button className="w-full">envoyer</Button>
      </div>
    </div>
  );
}

export default SellPage;
