
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface Obj {
    id: string
    img: string
    name: string
    age: number
    status: boolean
}

interface CrudProps {
    data: Obj[]
    del: (id: string) => void
    hendleopenedit: (user: Obj) => void
}

const Crud2 = ({ data, del, hendleopenedit }: CrudProps) => {
     return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {data.map((el) => (
     <div key={el.id} className="rounded-xl bg-white p-5 shadow-md">
      <div className="flex items-center gap-4">
    <img src={el.img || "https://i.pravatar.cc/150"} alt={el.name} className="h-14 w-14 rounded-full object-cover" />
    <div>
     <h2 className="font-bold">{el.name}</h2>
    </div>
      </div>

      <div className="my-5 flex justify-between">
    <p>Age: {el.age}</p>
    <span className={el.status ? "rounded-full bg-green-100 px-3 py-1 text-xs text-green-700" : "rounded-full bg-red-100 px-3 py-1 text-xs text-red-700"}>
     {el.status ? "Active" : "Inactive"}
    </span>
      </div>

      <Accordion type="single" collapsible>
    <AccordionItem value="info">
     <AccordionTrigger>More information</AccordionTrigger>
     <AccordionContent>
      <p>Name: {el.name}</p>
      <p>Age: {el.age}</p>
      <p>Status: {el.status ? "Active" : "Inactive"}</p>
      <img src={el.img || "https://i.pravatar.cc/150"} alt={el.name} className="mt-3 h-24 w-24 rounded-lg object-cover" />
     </AccordionContent>
    </AccordionItem>
      </Accordion>

      <div className="mt-4 flex gap-2">
    <Button onClick={() => hendleopenedit(el)} className="flex-1 bg-green-600 ">Edit</Button>
    <Button onClick={() => del(el.id)} className="flex-1 bg-red-600 ">Delete</Button>
      </div>
     </div>
    ))}
      </div>
    )
}

export default Crud2
