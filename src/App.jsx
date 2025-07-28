import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from './store/post-list-store';
import { Header } from './components/Header';
import Foot from './components/Foot';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Card from './components/Card';
import PostList from './components/PostList';
import './App.css'


function App() {
  const [selectedTab,setSelectedtab]=useState("CreatePost");

  return (
    <>
      <PostListProvider>
      <div className="app-container">
      <Sidebar 
      selectedTab={selectedTab}
       setSelectedtab={setSelectedtab}>
        
       </Sidebar>
      <div className='content'>
      <Header></Header>
      {selectedTab==="Home"? <PostList></PostList>:<CreatePost></CreatePost>}
      
      <Foot></Foot>
      </div>
      </div>
      </PostListProvider>
    </>
  )
}

export default App
