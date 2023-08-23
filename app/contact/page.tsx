"use client"

 
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
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
import React from "react";
import { Calendar } from "@/components/ui/calendar"
export default function Home() {

  const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <main className="flex flex-col items-center justify-between p-12 ">
        
        <h1 className="text-4xl">
          Contact
        </h1>
        <div className="flex gap-4">
        <Card className="w-[350px]  mt-10">
      <CardHeader>
        <CardTitle>Let us know about bugs</CardTitle>
        <CardDescription>Here We solve the bugs and try to make it more user friendly</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Statememnt</Label>
              <Input id="name" placeholder="Discription Of Problem" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Problems</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Authentication</SelectItem>
                  <SelectItem value="sveltekit">Authentication</SelectItem>
                  <SelectItem value="astro">Authentication</SelectItem>
                  <SelectItem value="nuxt">Authentication</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>

        <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border mt-5"
    />
        </div>
      </main>
    )
  }
  