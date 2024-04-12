import { Container } from "react-bootstrap";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [itemsData,setitemsData]=useState(items);

  const allCategory=['الكل',...new Set(items.map(i=>i.category))];
  //handle filter by category
  const categoryFilter=(category)=>{
    if(category==='الكل'){
      setitemsData(items);
    }else{
      const newItems=items.filter(item=>item.category===category);
      setitemsData(newItems);
    }
  }
  //handle filter by search 
  const searchFilter=(itemTitle)=>{
    if(itemTitle!==''){
      const newItems=items.filter(item=>item.title===itemTitle);
      setitemsData(newItems);
    }
  }
  return (
    <div className="App">
      <NavBar searchFilter={searchFilter}/>
      <Container>
        <Header/>
        <Category categoryFilter={categoryFilter} allCategory={allCategory}/>
        <ItemsList menuData={itemsData}/>
      </Container>
    </div>
  );
}

export default App;
