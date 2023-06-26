import { useEffect } from "react";
import { useState } from "react";
import Form from "./Form";
import ItemList from "./ItemList"

function App() {
  const API_URL= "https://jsonplaceholder.typicode.com/";
  
  const [data,setData] = useState([]);
  const [reqType, setReqType] = useState("users");

  //users
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`${API_URL}${reqType}`);
        if(!response.ok) throw Error("Did not receive expected data");
        const fetchedData = await response.json();
        setData(fetchedData);
      }catch(err){ 
        console.log(err);
      }
    }
    fetchData()
  },[reqType])


  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline my-5">Fetch JSON Users</h1>
      
      <Form
        reqType = {reqType}
        setReqType = {setReqType}
      />

      <ItemList
      data = {data}
      />
      
    </div>
  );
}

export default App;
