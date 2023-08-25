'use client'

import Link from "next/link"
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function Home() {
  return (
    <section>

    <main className="flex flex-col items-center justify-between ">

      <div className="flex  flex-col items-center justify-between text-4xl">
      <h1>
      APPLICATION
      </h1> 
      </div>
      <div className="flex flex-row mt-6 gap-6">
      <Link href="/about" >About</Link>
      <Link href="/contact">Contact</Link>
      </div>
      <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Docs Connecter</p>
        <small className="text-default-500">Development and Learning</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/4.png"
          width={270}
        />
      </CardBody>
    </Card>
    <div className='flex gap-3 flex-col'>
    <Image src={'/Untitleddesign.png'} alt="blogpost" className=' w-[20rem]' />
    <Image src={'/Untitleddesign.png'} alt="blogpost" className=' w-[20rem]' />
    <Image src={'/Untitleddesign.png'} alt="blogpost" className=' w-[20rem]' />
    <Image src={'/Untitleddesign.png'} alt="blogpost" className=' w-[20rem]' />
</div>

    </main>
    </section>
  )
}
