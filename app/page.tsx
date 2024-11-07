"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { 
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuContent
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ThemeSwitch"
import { useState } from "react"

export default function Page() {
  const projectUrls = [
    "https://github.com/anshnk/nullOS",
    "https://github.com/anshnk/unblockedtech",
    "https://github.com/z1g-project/ephemeral",
    "https://github.com/anshnk/Phoenix",
    "https://github.com/anshnk/portfolio",
    "https://github.com/anshnk/newsite"
  ];

  const [randomProjectUrl, setRandomProjectUrl] = useState(projectUrls[0]);

  const handleRandomizeProject = () => {
    const randomIndex = Math.floor(Math.random() * projectUrls.length);
    setRandomProjectUrl(projectUrls[randomIndex]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
    <Card className="w-[350px] content-center justify-center">
      <CardHeader>
        <Avatar>
          <AvatarImage src="https://github.com/anshnk.png" alt="anshnk" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <CardTitle>anshnk</CardTitle>
        <CardDescription>Pretty awesome coder</CardDescription>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-[100px]">
                Contact Me
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a href="https://discordapp.com/users/593497381820039187" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="mailto:ansh@anshnk.dev">
                  Email
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      </CardHeader>
      <CardContent>
        <p>
          Hey, I'm Ansh. I'm 13yrs old and I like coding. It's more of a hobby for me but I'm okay at it. This is my first submission for Hack Club High Seas.
        </p>
      </CardContent>
      <CardFooter>
        <ModeToggle />
        <a href={randomProjectUrl} target="_blank" rel="noopener noreferrer">
          <Button className="ml-4" onClick={handleRandomizeProject}>
            A project I've worked on or made!
          </Button>
        </a>
      </CardFooter>
    </Card>
    </div>
  )
}