import React from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
 import { Input } from "@/components/ui/input"
 import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

   function Login() {
  return (
    <div className="w-screen flex justify-center pt-[5rem]">
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
       <div> <TabsTrigger value="account"className="w-full">Connexion</TabsTrigger></div>
        <TabsTrigger value="password" className='w-full'>Créer un compte</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Compte</CardTitle>
            <CardDescription>
              Connectez vous à votre compte.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Input id="name" placeHolder="Votre pseudo" />
            </div>
            <div className="space-y-1">
              <Input id="username" placeHolder="adresse mail" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Connection</Button>
          </CardFooter>
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
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Input id="current" type="username" placeHolder="pseudo"/>
            </div>
            <div className="space-y-1">
              <Input id="new" type="mail" placeHolder="adresse mail"/>
            </div>
            <div className="space-y-1">
              <Input id="new" type="password" placeHolder="mot de passe"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Créer votre compte</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}


export default Login;
