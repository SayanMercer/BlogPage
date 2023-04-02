import {useEffect, useState} from 'react';

import {firestore} from '../firebase';
import {Link,Routes ,Route} from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import {  doc, onSnapshot, query } from "firebase/firestore";


 



function Home() {

  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    firestore
      .collection('posts')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        console.log('posts', posts);
        setPosts(posts); // will show/fect posts from cloud firestore and render on browser
      });
  }, []);

  return <div className="home">
    <h1>Tech Blog</h1>
    <div id= "blog-by">Sayan</div>

    {posts.map((post, index) => (
      <div className="post" key={`post-${index}`}>
        <Link to={`/post/${post.id}`}>

          <h3>{post.title}</h3>
        </Link>
        <p>{post.subTitle}</p>
      </div>
    ))}
  </div>;
}
 

export default Home;
