import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";
import { useState , useEffect} from 'react';
import AddNewItem from "./components/AddNewItem";
import SearchItem from "./components/SearchItem";
import apiRequest from "./components/ApiRequest";

function App() {
    const API_URL="http://localhost:3500/items"
    const [items,setItems]=useState([]);
    const [newItem,setNewItem] =useState('');
    const [search,setSearch]=useState('');
    const [fetchError,setFetchError] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
      const fetchItems=async ()=>{
        try{
            const response=await fetch(API_URL)
            if(!response.ok){
              throw Error("Data not Received");
            }
            const listItems=await response.json()
            setItems(listItems)
            setFetchError(null)
        }
        catch(err){
          setFetchError(err.message)
        }
        finally{
          setIsLoading(false ) 
        }
      }
      setTimeout(()=>{
        (async () => await fetchItems())()
    },2000)
      
    }, [] )

    // const handleSetItem=(listItems)=>{
        
    //     localStorage.setItem('todolist',JSON.stringify(listItems))

    // }
  
    const addNew = async (item) => {
      const id = items.length ? Number(items[items.length - 1].id) + 1 : 1;
      const newItem = { id, checked: false, item };
      const listItems = [...items, newItem];
      setItems(listItems);
      const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      };
      
      const result = await apiRequest(API_URL, postOptions);
      if (result) {
        setFetchError(result);
      }
    };
    
    const handleCheck=async (id)=>{
        const listItem=items.map((item)=>
        item.id===id ? {...item,checked:!item.checked} : item)
        setItems(listItem)
        const myItem=listItem.filter((item)=>item.id===id)

        const updateOptions = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({checked:myItem[0].checked})
        };
        const reqURL=`${API_URL}/${id}`
        const result = await apiRequest(reqURL, updateOptions);
        if (result) {
          setFetchError(result);
        }
    }

    const handleDelete=async(id)=>{
        const newItem=items.filter((item)=>item.id!==id)
        setItems(newItem)

        const deleteOptions = {
          method: "DELETE",
        };

        const reqURL=`${API_URL}/${id}`
        const result = await apiRequest(reqURL, deleteOptions);
        if (result) {
          setFetchError(result);
        }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (newItem) {
        addNew(newItem);
        setNewItem('');
      }
    };

  return (
    <div className="App">
      <Header />  
      <AddNewItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
      
      />
      <SearchItem
          search={search}
          setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading...</p>}
        {fetchError && <p>Error Occured : {fetchError}</p>}
        {!isLoading && !fetchError &&
          <Content 
              items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
          />
        }
      </main>
      <Footer 
          length={items.length}/>
    </div>
  );
}
export default App;