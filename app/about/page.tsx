import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   
export default function Home() {
    return (
      <main className="flex flex-col items-center justify-between p-12">
        <div className=" text-2xl flex flex-col items-center justify-between ">
        <h1 className="text-4xl">
          About
        </h1>
        </div>
        <div className="w-[42rem]">
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is there any purpose behind this?</AccordionTrigger>
        <AccordionContent>
        Hello There, this is our contact page and you can contact us from here well this site is in developing state but It will finish soon
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is there any goal to make this platform?</AccordionTrigger>
        <AccordionContent>
        Hello There, this is our contact page and you can contact us from here well this site is in developing state but It will finish soon

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is there any problem to solve using this?</AccordionTrigger>
        <AccordionContent>
        Hello There, this is our contact page and you can contact us from here well this site is in developing state but It will finish soon
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
      </main>
    )
  }
  