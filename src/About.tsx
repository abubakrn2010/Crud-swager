import axios from "axios";
import { useEffect, useState } from "react";

const api = "https://to-dos-api.softclub.tj/api/to-dos";


function About() {
  const [todos, setTodos] = useState([]);


  async function getUsers() {
    try {
      const { data } = await axios.get(api);
      setTodos(data.data);
    } catch (error) {
      console.error(error);
    }
  }


  async function handleDelete(id: number) {
    try {
      await axios.delete(`${api}?id=${id}`)
      getUsers()
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>

      {todos.map((e) => {
        return (
          <div key={e.id} className="border border-gray-400 p-4 m-2 rounded-lg w-[200px]">
            <img src={e.images.imageName} alt="" />

            {/* .map((e) => {
                   return (<>
                       <img src={e.imageName} alt="Сурат хато" /> 
                   </>)
                }) */}

            <h2>{e.name}</h2>
            <p>{e.description}</p>

            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </div>
        )
      })}

    </div>
  )
}

export default About;