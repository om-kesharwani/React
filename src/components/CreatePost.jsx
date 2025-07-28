  import {useRef} from"react"
  import {PostList} from "../store/post-list-store";
  import { useContext } from "react";
  const CreatePost =() => {
   const {addPost} = useContext(PostList);
   const useridele=useRef();
   const postTitleele=useRef();
   const postBodyele=useRef();
   const Reactionsele=useRef();
   const tagsele=useRef();
   const handleSubmit=(event)=>{
     event.preventDefault();
     const userid=useridele.current.value;
      const postTitle=postTitleele.current.value;
       const postBody=postBodyele.current.value;
        const Reactions=Reactionsele.current.value;
         const tags=tagsele.current.value.split(' ');
         useridele.current.value="";
         postTitleele.current.value="";
       postBodyele.current.value="";
      Reactionsele.current.value="";
      tagsele.current.value="";
      addPost(userid,postTitle,postBody,Reactions,tags);
   };
  return(
    <form class="create-post" onSubmit={handleSubmit}>
      <div class="mb-3">
    <label for="userid" class="form-label">Enter your user id</label>
    <input type="text"ref={useridele} class="form-control" id="userid" placeholder="your userid"  />
    
    
  </div>
  <div class="mb-3">
    <label for="title" class="form-label">post tiltle</label>
    <input type="text" ref={postTitleele}class="form-control" id="title" placeholder="how are you feeling today"  />
    
    
  </div>
  <div class="mb-3">
    <label for="body" class="form-label">post content</label>
    <textarea rows="4" ref={postBodyele}type="text" class="form-control" id="body" placeholder=" Tell us more about it"  />
    
    
  </div>
  <div class="mb-3">
    <label for="reactions" class="form-label">Number of reactions</label>
    <input type="text" ref={Reactionsele}class="form-control" id="reactions" placeholder="how many reaction you got "  />
    
    
  </div>
  <div class="mb-3">
    <label for="tags" class="form-label">Enter your hastags here</label>
    <input type="text" ref={tagsele} class="form-control" id="tags" placeholder="please enter your tags"  />
    
    
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  )
}
export default CreatePost;