import React from 'react'
import { Button } from "@/components/ui/button"


interface Obj{
    id:string,
    img:string,
    name:string,
    age:number,
    status:boolean
}



const Table = ({data,del,hendleopenedit,inf}) => {
  return (
    <div className="ml-[150px] overflow-x-auto  bg-whit ">
      <table className="w-[80%] text-left">
        <thead className="bg-gray-200">
            <tr>
                <th>№</th>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((el,i) => {
                    return <tr key={el.id} className="border-b border-r ">

                        <td className='border-l'>{i+1}</td>
                        <td><img className="h-12 w-12 rounded-full object-cover" src={el.img} alt="aa" /></td>
                        <td>{el.name}</td>
                        <td>{el.age}</td>
                        <td>
                            <span>{el.status?'Active':'Inactive'}</span>
                        </td>
                        <td>
                            <Button  variant='secondary' onClick={()=>hendleopenedit(el)}>Edit</Button> <span></span>
                            <Button variant='secondary' onClick={()=>del(el.id)}>Delete</Button>
                            <Button variant='ghost' onClick={()=>inf(el)}>Info</Button>
                        </td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
