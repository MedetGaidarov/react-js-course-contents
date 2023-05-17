function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        
        <li  key={post.id}>
            {post.vs &&
                    <div>
                        {console.log(post)}
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                    </div>
        }
        </li>
      ))}
    </div>
  );
}

export default PostList;
