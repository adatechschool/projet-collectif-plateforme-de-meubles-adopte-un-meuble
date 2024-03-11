import React from "react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Login() {
  // useEffect(() => {}, []);

  const handleLogin = () => {
    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log("login");
  };

  const handleRegister = (e) => {
    const nom = e.target.nom.value;
    const prenom = e.target.prenom.value;
    const email = e.target.email.value;
    const mdp = e.target.mdp.value;
    fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, mdp, nom, prenom }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log("register");
  };
  return (
    <div className="w-screen flex justify-center pt-[5rem]">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <div>
            {" "}
            <TabsTrigger value="account" className="w-full">
              Connexion
            </TabsTrigger>
          </div>
          <TabsTrigger value="password" className="w-full">
            Créer un compte
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Compte</CardTitle>
              <CardDescription>Connectez vous à votre compte.</CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Input id="name" placeHolder="adresse mail" />
                </div>
                <div className="space-y-1">
                  <Input id="username" placeHolder="votre mot de passe" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Connection</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Création de compte</CardTitle>
              <CardDescription>
                Créer votre compte. Vous pourrez vous connecter ensuite.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleRegister}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Input id="nom" type="username" placeHolder="Nom" />
                </div>
                <div className="space-y-1">
                  <Input id="prenom" type="username" placeHolder="Prénom" />
                </div>
                <div className="space-y-1">
                  <Input id="email" type="mail" placeHolder="adresse mail" />
                </div>
                <div className="space-y-1">
                  <Input id="mdp" type="password" placeHolder="mot de passe" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Créer votre compte</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Login;
