import React, { useState, useEffect } from "react";

const UserList = () => {
  const initialUsers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    // Add more users as needed
  ];

  const [users, setUsers] = useState(initialUsers);
  const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     // Load favorites from local storage on component mount
//     const get = () =>{
//         const storedFavorites = localStorage.getItem("favorites");
//         return storedFavorites ? JSON.parse(storedFavorites) : [];
//      }
//      get()
//     // setFavorites(storedFavorites);
//   }, []);


  useEffect(() => {
    // Save favorites to local storage whenever favorites change
    // localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (user) => {
    setFavorites([...favorites, user]);
    localStorage.setItem("favorites", JSON.stringify(favorites) )
 
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => addToFavorites(user)}>
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>

      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
