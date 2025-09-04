'use client';

import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
    const { data: session } = authClient.useSession() 
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      password,
      name,
    }, {
      onError: () => {
        window.alert('Something went wrong');
      },
      onSuccess: () => {
        window.alert('Success');
      },
    })
  }

  const onLogin = () => {
    authClient.signIn.email({
      email,
      password,
    }, {
      onError: () => {
        window.alert('Something went wrong');
      },
      onSuccess: () => {
        window.alert('Success');
      },
    })
  }

  if (session) {
    return <div className="flex flex-col p-4 gap-y-4">
      <p>Logged in as {session.user.name}</p>
      <Button onClick={() => authClient.signOut()}>Logout</Button>
    </div>
  }

  return (
    <div className="flex flex-col p-4 gap-y-10">
      <div className="p-4 flex flex-col gap-4">
        <Input placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></Input>
        <Input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
        <Input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
        <Button onClick={onSubmit}>Create User</Button>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <Input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
        <Input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
        <Button onClick={onLogin}>Login</Button>
      </div>
    </div>
  );
}
