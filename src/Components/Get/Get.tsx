
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import Crud2 from '../../Components/Crud2/Crud2'
import Modal from '../../Components/Modal/Modal'

interface Obj {
    id: string
    img: string
    name: string
    age: number
    status: boolean
}

const Get = () => {
    const api = 'https://6aacc6f6a2413bf0ec1102d3.mockapi.io/data'

    const [data, setdata] = useState<Obj[]>([])
    const [modaladd, setmodaladd] = useState<boolean>(false)
    const [modaledit, setmodaledit] = useState<boolean>(false)
    const [nameinp, setnameinp] = useState<string>("")
    const [ageinp, setageinp] = useState<number | string>("")
    const [imginp, setimginp] = useState<string>("")
    const [statusinp, setstatusinp] = useState<string>("true")
    const [idx, setidx] = useState<string>("")

    async function getdata() {
     try {
         const { data } = await axios.get(api)
         setdata(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getdata()
    }, [])

    async function Deletedata(id: string) {
        try {
            await axios.delete(`${api}/${id}`)
            getdata()
        } catch (error) {
            console.error(error)
        }
    }

    async function handlesubmit(event: any) {
        event.preventDefault()

        const newuser = {
            name: event.target.inpname.value,
            age: event.target.inpage.value,
            img: event.target.inpimg.value || "https://i.pravatar.cc/150",
            status: event.target.inpstatus.value === "true"
        }

        try {
            await axios.post(api, newuser)
            setmodaladd(false)
            event.target.reset()
            getdata()
        } catch (error) {
            console.error(error)
        }
    }

    function hendleopenedit(user: Obj) {
        setnameinp(user.name)
        setageinp(user.age)
        setimginp(user.img)
        setstatusinp(String(user.status))
        setidx(user.id)
        setmodaledit(true)
    }

    async function handleeditsubmit(event: any) {
        event.preventDefault()

        const newuser = {
            name: event.target.inpname.value,
            age: event.target.inpage.value,
            img: event.target.inpimg.value || "https://i.pravatar.cc/150",
            status: event.target.inpstatus.value === "true"
        }

        try {
            await axios.put(`${api}/${idx}`, newuser)
            setmodaledit(false)
            getdata()
        } catch (error) {
            console.error(error)
        }
    }

    async function changeStatus(user: Obj) {
        try {
            await axios.put(`${api}/${user.id}`, {
                ...user,
                status: !user.status
            })
            getdata()
        } catch (error) {
            console.error(error)
        }
    }

    return (
     <div className="min-h-screen bg-gray-100 p-4 md:p-8">
         <div className="mx-auto max-w-6xl">

     <div className="mb-6 flex items-center justify-between">
         <h1 className="text-2xl font-bold">Users CRUD</h1>
         <Button onClick={() => setmodaladd(true)} className="bg-green-600 hover:bg-green-700">+ Add User</Button>
     </div>

     <Modal open={modaladd}>
         <h2 className="mb-5 text-xl font-bold">Add New User</h2>
         <form onSubmit={handlesubmit} className="grid gap-4">
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

     <Crud2 data={data} del={Deletedata} hendleopenedit={hendleopenedit} changeStatus={changeStatus} />

         </div>
     </div>
    )
}

export default Get
