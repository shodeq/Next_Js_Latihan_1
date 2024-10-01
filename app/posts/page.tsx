'use client'

import CardList from "../components/posts/CardList";
import ViewUserButton from "../components/posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Ipost {
  userId : number,
  id : number,
  title : string,
  body : string
}


const Post = async () => {

  const response = await fetch(base_url)
  const posts: Ipost[] = await response.json()

    return (
     <>
     <p>{new Date().toLocaleTimeString()}</p>
     <h1 className="posting text-fuchsia-500">Post Page</h1>
     {posts.map((post) => {
      return(
     <CardList key={post.id}> 
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <ViewUserButton userId={post.userId} />
     </CardList>
      )
     })}
     </>
    );
  }
  
  export default Post

