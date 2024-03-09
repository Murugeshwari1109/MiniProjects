import Content from './components/Content';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import './index.css'
import Table from './components/Table';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        console.log('Response Status:', response.status);
    
        if (!response.ok) {
          throw Error('Data not received');
        }
    
        const listItems = await response.json();
        console.log('Response Content:', listItems);
    
        setItems(listItems);
      } catch (err) {
        console.log(err);
      }
    };
    

    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Header reqType={reqType} setReqType={setReqType} />
      <Content items={items} />
      {/* <Table items={items}/> */}
    </div>
  );
}

export default App;
