
import React from 'react'
import { Button } from "@/components/ui/button"

interface Obj {
    id: string
    img: string
    name: string
    age: number
    status: boolean
}

interface Props {
    data: Obj[]
    del: (id: string) => void
    hendleopenedit: (user: Obj) => void
    changeStatus: (user: Obj) => void
}

const Crud2 = ({ data, del, hendleopenedit, changeStatus }: Props) => {
    return (
      <div className="overflow-x-auto rounded-xl bg-white shadow">
          <table className="w-full text-left">
      <thead className="bg-gray-200">
          <tr>
      <th className="p-4">Image</th>
      <th className="p-4">Name</th>
      <th className="p-4">Age</th>
      <th className="p-4">Status</th>
      <th className="p-4">Actions</th>
          </tr>
      </thead>
      <tbody>
          {data.map((el) => (
      <tr key={el.id} className="border-b">
          <td className="p-4">
      <img src={el.img} className="h-12 w-12 rounded-full object-cover" />
          </td>
          <td className="p-4">{el.name}</td>
          <td className="p-4">{el.age}</td>
          <td className="p-4">
      <input type="checkbox" checked={el.status} onChange={() => changeStatus(el)} className="h-5 w-5 cursor-pointer accent-green-600" />
      <span className="ml-2">{el.status ? "Active" : "Inactive"}</span>
          </td>
          <td className="p-4">
      <div className="flex gap-2">
          <Button onClick={() => hendleopenedit(el)} className="bg-blue-600 hover:bg-blue-700">Edit</Button>
          <Button onClick={() => del(el.id)} className="bg-red-600 hover:bg-red-700">Delete</Button>
      </div>
          </td>
      </tr>
          ))}
      </tbody>
          </table>
      </div>
    )
}

export default Crud2
