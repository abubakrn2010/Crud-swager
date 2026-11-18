
import React, { useEffect, useState } from 'react'
import Table from './table'
import Modal from '../src/modal'

interface obj {
    id: string
    name: string
    img: string
    age: number
    status: boolean
}

const App = () => {

    const api = 'https://6aacc6f6a2413bf0ec1102d3.mockapi.io/data'

    const [data, setdata] = useState<obj[]>([])
    const [search, setsearch] = useState('')
    const [status, setstatus] = useState('all')
    const [modaladd, setmodaladd] = useState<boolean>(false)
    const [modaledit, setmodaledit] = useState<boolean>(false)
    const [idx, setidx] = useState<string>('')
    const [nameinp, setnameinp] = useState<string>('')
    const [ageinp, setageinp] = useState<number | string>('')
    const [imginp, setimginp] = useState<string>('')
    const [statusinp, setstatusinp] = useState<string>('true')

    async function getdata() {
        try {
            const res = await fetch(api)
            const data = await res.json()
            setdata(data)
        } catch (error) {
            console.error(error)
        }
    }

    async function deluser(id: string) {
        try {
            await fetch(`${api}/${id}`, {
                method: 'DELETE'
            })
            getdata()
        } catch (error) {
            console.error(error)
        }
    }

    const filterdata = data.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase()) &&
        (status === 'all' || el.status.toString() === status)
    )

    const select = (value: string) => {
        setstatus(value)
    }

    useEffect(() => {
        getdata()
    }, [])

    async function handlesubmit(event: any) {
        event.preventDefault()

        const newuser = {
            img: event.target.inpimg.value,
            name: event.target.inpname.value,
            age: Number(event.target.inpage.value),
            status: event.target.inpstatus.value === 'true'
        }

        try {
            await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newuser)
            })

            setmodaladd(false)
            event.target.reset()
            getdata()
        } catch (error) {
            console.error(error)
        }
    }

    async function handleeditsubmit(event: any) {
        event.preventDefault()

        const newuser = {
            name: event.target.inpname.value,
            age: Number(event.target.inpage.value),
            img: event.target.inpimg.value,
            status: event.target.inpstatus.value === 'true'
        }

        try {
            await fetch(`${api}/${idx}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newuser)
            })

            setmodaledit(false)
            getdata()
        } catch (error) {
            console.error(error)
        }
    }

    function hendleopenedit(user: obj) {
        setnameinp(user.name)
        setageinp(user.age)
        setimginp(user.img)
        setstatusinp(String(user.status))
        setidx(user.id)
        setmodaledit(true)
    }

    async function changeStatus(user: obj) {
        try {
            await fetch(`${api}/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...user,
                    status: !user.status
                })
            })

            getdata()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>

            <Modal open={modaladd}>
                <form onSubmit={handlesubmit}>
                    <input name="inpname" required className="w-full rounded-lg border px-4 py-3" type="text" placeholder="Enter name" />

                    <input name="inpage" required min="1" className="w-full rounded-lg border px-4 py-3" type="number" placeholder="Enter age" />

                    <input name="inpimg" className="w-full rounded-lg border px-4 py-3" type="text" placeholder="Image URL" />

                    <select name="inpstatus" defaultValue="true" className="w-full rounded-lg border bg-white px-4 py-3">
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                    </select>

                    <div className="flex gap-3">
                        <button type="submit" className="flex-1 rounded-lg bg-green-600 py-3 text-white">Add User</button>
                        <button type="button" onClick={() => setmodaladd(false)} className="flex-1 rounded-lg bg-gray-200 py-3">Cancel</button>
                    </div>
                </form>
            </Modal>

            <Modal open={modaledit}>
                <h2 className="mb-5 text-xl font-bold">Edit User</h2>

                <form key={idx} onSubmit={handleeditsubmit} className="grid gap-4">
                    <input defaultValue={nameinp} name="inpname" required className="w-full rounded-lg border px-4 py-3" type="text" placeholder="Enter name" />

                    <input defaultValue={ageinp} name="inpage" required min="1" className="w-full rounded-lg border px-4 py-3" type="number" placeholder="Enter age" />

                    <input defaultValue={imginp} name="inpimg" className="w-full rounded-lg border px-4 py-3" type="text" placeholder="Image URL" />

                    <select name="inpstatus" defaultValue={statusinp} className="w-full rounded-lg border bg-white px-4 py-3">
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                    </select>

                    <div className="flex gap-3">
                        <button type="submit" className="flex-1 rounded-lg bg-green-600 py-3 text-white">Save Changes</button>
                        <button type="button" onClick={() => setmodaledit(false)} className="flex-1 rounded-lg bg-gray-200 py-3">Cancel</button>
                    </div>
                </form>
            </Modal>

            <button onClick={() => setmodaladd(true)}>Add user</button>

            <input
                placeholder="Search"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
            />

            <select onChange={(e) => select(e.target.value)}>
                <option value="all">All</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>

            <Table
                data={filterdata}
                del={deluser}
                hendleopenedit={hendleopenedit}
                changeStatus={changeStatus}
            />

        </div>
    )
}

export default App



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import React from 'react'

interface Obj{
    id:string,
    img:string,
    name:string,
    age:number,
    status:boolean
}



const Table = ({data,del,hendleopenedit,changeStatus}) => {
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
                    return <tr key={el.id} className="border-b border-r">

                        <td>{i+1}</td>
                        <td><img className="h-12 w-12 rounded-full object-cover" src={el.img} alt="aa" /></td>
                        <td>{el.name}</td>
                        <td>{el.age}</td>
                        <td>
                            <input type="checkbox" checked={el.status} onChange={() => changeStatus(el)}/>
                            <span>{el.status?'Active':'Inactive'}</span>
                        </td>
                        <td>
                            <button onClick={()=>hendleopenedit(el)}>Edit</button> <span></span>
                            <button onClick={()=>del(el.id)}>Delete</button>
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







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





import React, { Children } from 'react'
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"

interface modal{
    open:boolean
}

const Modal = ({open,children}:modal) => {
  return (
     <Dialog open={open}>
            <DialogContent className="p-6">
                {children}
            </DialogContent>
        </Dialog>
  )
}

export default Modal
