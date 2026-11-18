import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '../../Components/Crud2/Crud2'
import Modal from '../../Components/Modal/Modal';
import { Button } from "@/components/ui/button"



interface obj{
    id:string | any
    name:string,
    img:string,
    age:number,
    status:boolean
}


const App = () => {

    const api='https://6aacc6f6a2413bf0ec1102d3.mockapi.io/data'

    const [data,setdata]=useState<obj[]>([])
    const [search,setsearch]=useState('')
  const [status, setstatus] = useState('all')
  const [modaladd,setmodaladd]=useState<boolean>(false)
  const [modaledit,setmodaledit]=useState<boolean>(false)
  const [info,setinfo]=useState<boolean>(false)
      const [idx, setidx] = useState(null)
       const [nameinp, setnameinp] = useState<string>("")
          const [ageinp, setageinp] = useState<number | string>("")
          const [imginp, setimginp] = useState<string>("")
          const [statusinp, setstatusinp] = useState<string>("true")

    async function deluser(id:string) {
        try {
            await axios.delete(`${api}/${id}`)
            getdata()
        } catch (error) {
            console.error(error)
        }
    }

    async function getdata() {
        try {
            const {data}=await axios.get(api)
            setdata(data)
        } catch (error) {
            console.error(error)
        }
    }

  const filterdata = data.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase()) &&
    status === 'all' || el.status.toString() === status
)

const select = (value: string) => {
    setstatus(value)
}

    useEffect(()=>{
        getdata()
    },[])



    async function handlesubmit(event:any) {
        event.preventDefault()

        const newuser={
            id:Date.now(),
            img:event.target.inpimg.value,
            name:event.target.inpage.value,
            age: event.target.inpage.value,
             status: event.target.inpstatus.value === "true"
        }

        try {
            await axios.post(api,newuser)
            setmodaladd(false)
            event.target.reset()
            getdata()
        } catch (error) {
            console.error(error)
        }
    }

    async function handleeditsubmit(event:any) {
        event.preventDefault()

        const newuser={
            id:idx,
              name: event.target.inpname.value,
            age: event.target.inpage.value,
            img: event.target.inpimg.value,
            status: event.target.inpstatus.value === "true"
        }

        try {
            await axios.put(`${api}/${idx}` ,newuser)
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

     function inf(user: obj) {
        setnameinp(user.name)
        setageinp(user.age)
        setimginp(user.img)
        setstatusinp(String(user.status))
        setidx(user.id)
        setinfo(true)
    }


  return (
    <div>



        <Modal open={modaladd}>
            <form className="grid gap-4" onSubmit={handlesubmit}>
                 <input name="inpname" required className="w-full  border px-4 py-3" type="text" placeholder="Name" />
     <input name="inpage" required min="1" className="w-full  border px-4 py-3" type="text" placeholder="Age" />
     <input name="inpimg" className="w-full  border px-4 py-3" type="text" placeholder="Image" />
     <select name="inpstatus" defaultValue="true" className="w-full  border bg-white px-4 py-3">
         <option value="true">Active</option>
         <option value="false">Inactive</option>
     </select>
     <div className="flex gap-3">
         <button type="submit" className="flex-1  bg-green-600 py-3 text-white">Add User</button>
         <button type="button" onClick={() => setmodaladd(false)} className="flex-1  bg-gray-200 py-3">Cancel</button>
     </div>
            </form>
        </Modal>



      <Modal open={modaledit}>
         <h2 className="mb-5 text-xl font-bold">Edit User</h2>
         <form  onSubmit={handleeditsubmit} className="grid gap-4">
     <input defaultValue={nameinp} name="inpname" required className="w-full  border px-4 py-3" type="text" placeholder="Name" />
     <input defaultValue={ageinp} name="inpage" required className="w-full  border px-4 py-3" type="text" placeholder="Age" />
     <input defaultValue={imginp} name="inpimg" className="w-full  border px-4 py-3" type="text" placeholder="Image" />
     <select name="inpstatus" defaultValue={statusinp} className="w-full  border bg-white px-4 py-3">
         <option value="true">Active</option>
         <option value="false">Inactive</option>
     </select>
     <div className="flex gap-3">
         <button type="submit" className="flex-1  bg-green-600 py-3 text-white">Add user</button>
         <button type="button" onClick={() => setmodaledit(false)} className="flex-1  bg-gray-200 py-3">Cancel</button>
     </div>
         </form>
     </Modal>


     <Modal open={info}>
    <div className="grid gap-4">

        <h2 className="text-xl font-bold">User Information</h2>

        <img src={imginp} className="w-32 h-32 object-cover" />

        <h3>Name: {nameinp}</h3>

        <p>Age: {ageinp}</p>

        <p>Status: {statusinp === "true" ? "Active" : "Inactive"}</p>

        <button
            onClick={() => setinfo(false)}
            className="bg-gray-200 py-3"
        >
            Close
        </button>

    </div>
</Modal>



     <Button variant='destructive'  onClick={()=>setmodaladd(true)}>Add user</Button> <span>  </span>


<input className='border' placeholder="Search" value={search} onChange={(e) => setsearch(e.target.value)}/>

<select className='border ml-20px' onChange={(e) => select(e.target.value)}>
    <option value="all">All</option>
    <option value="true">Active</option>
    <option value="false">Inactive</option>
</select>


      <Table  data={filterdata} del={deluser} hendleopenedit={hendleopenedit} inf={inf}/> 
    </div>
  )
}

export default App
