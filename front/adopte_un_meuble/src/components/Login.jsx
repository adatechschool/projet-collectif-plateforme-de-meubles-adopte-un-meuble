import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

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
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(
    "Connectez vous à votre compte."
  );

  const [errorRegister, setErrorRegister] = useState(
    "Créer votre compte. Vous pourrez vous connecter ensuite."
  );
  sessionStorage.clear();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.error);
        if (data.error) {
          setErrorLogin(data.error);
          return;
        }

        sessionStorage.setItem("user", JSON.stringify(data.user.user));
        sessionStorage.setItem("session", JSON.stringify(data.user.session));

        console.log("login");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(nom, prenom, email, password);
    fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, nom, prenom }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrorRegister(data.error);
          return;
        }
        console.log("register", data);

        navigate("/login");
      });
  };
  return (
    <div className="w-screen flex justify-center pt-[5rem] bg-lightMode-background">
      <Navbar />
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <div>
            {" "}
            <TabsTrigger value="account" className="w-full">
              Connection
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

              <CardDescription
                className={
                  errorLogin !== "Connectez vous à votre compte."
                    ? "text-red-500"
                    : ""
                }
              >
                {errorLogin}
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Input
                    id="loginMail"
                    placeHolder="adresse mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Input
                    id="loginMdp"
                    type="password"
                    placeHolder="votre mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Connexion</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Création de compte</CardTitle>
              <CardDescription
                className={
                  errorRegister !==
                  "Créer votre compte. Vous pourrez vous connecter ensuite."
                    ? "text-red-500"
                    : ""
                }
              >
                {errorRegister}
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleRegister}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Input
                    id="nom"
                    type="username"
                    placeHolder="Nom"
                    onChange={(e) => setNom(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Input
                    id="prenom"
                    type="username"
                    placeHolder="Prénom"
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Input
                    id="email"
                    type="mail"
                    placeHolder="adresse mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Input
                    id="mdp"
                    type="password"
                    placeHolder="mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Créer votre compte</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Login;
