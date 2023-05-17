function HelloWorld({ user }) {
  return(
  <div>
    { user.isAdmin && <div>Admin</div>
   }
  </div>);
}


export default HelloWorld
