import {createContext} from "react";
import { useReducer } from "react";


export const PostList =createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},

});

const postListReducer =(currPostList,action) =>{
  let newPostList=currPostList;
  if(action.type==='DELETE_POST'){
newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
  }
  else if(action.type=='ADD_POST')
  {
    newPostList=[action.payload,...currPostList];
  }
  return newPostList;
}
const PostListProvider =({children}) =>{
   const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);
   const addPost =(userid,postTitle,postBody,Reactions,tags) =>{
    console.log("added");
  dispatchPostList({
    type:'ADD_POST',
    payload:{
      
  id:Date.now(),
  title:postTitle,
  body:postBody,
  reactions:Reactions,
  userId:userid,
  tags:tags,
    }
  })
   };
   const deletePost=(postId) =>{
            dispatchPostList({
              type:'DELETE_POST',
              payload:{
                postId,
              },

            });
   };
   return (<PostList.Provider value={{postList,addPost,deletePost}}>
    {children}
  </PostList.Provider>);
};
const DEFAULT_POST_LIST=[
{
  id:"1",
  title:"Ging to IIT",
  body:"My Friends Show a glimpse of your everyday life, like your workspace, what you're currently reading, or a candid sho",
  reactions:2,
  userId:"user-9",
  tags:["Vacation ","Mumbai","Enjoying"],

},
{
  id:"2",
  title:"got degree",
  body:"My Friends Show a glimpse of your everyday life, like your workspace, what you're currently reading, or a candid sho",
  reactions:289,
  userId:"user-23",
  tags:["hardWork ","Unbelievible","Enjoying"],

},
];
export default PostListProvider;