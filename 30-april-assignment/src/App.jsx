import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [addFav, setAddFav] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.npms.io/v2/search?q=reactjs");
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFavorites = (item) => {
    const alreadyExits = addFav.some(
      (fav) => fav.package.name === item.package.name
    );
    if (!alreadyExits) {
      setAddFav([...addFav, item]);
    }
  };

  useEffect(() => {
    localStorage.setItem("addFav", JSON.stringify(addFav));
  }, [addFav]);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("addFav"));
    if (storedFav) {
      setAddFav(storedFav);
    }
  }, []);

  const handleDelete = (item) => {
    const newAddFav = addFav.filter(
      (fav) => fav.package.name !== item.package.name
    );
    setAddFav(newAddFav);
  };

  return (
    <div className="main">
      <h1> Welcome to Favorite NPM Packages </h1>
      <span style={{ marginLeft: "4rem" }}>
        You don't have any favs yet. Search it and Please Add below{" "}
      </span>{" "}
      <br />
      <input
        type="text"
        placeholder = 'Search Npm Package Here..'
        className="input"
        onChange={handleInput}
        value={input}
      />
      {data &&
        data
          .slice(0, 5)
          .filter((item) => {
            const packageName = item.package.name.toLowerCase();
            return input && packageName.includes(input.toLowerCase());
          })
          .map((item) => {
            return (
              <div key={item.package.name} className="list">
                <h3>{item.package.name}</h3>

                <textarea
                  className="text"
                  value={item.description}
                  onChange={(e) => {
                    item.description = e.target.value;
                  }}
                  placeholder="add something you like about this package"
                ></textarea>
                <button onClick={() => handleFavorites(item)} className="btn">
                  Add to Favorites{" "}
                </button>
              </div>
            );
          })}
      <div className="fav">
        {addFav.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {addFav.map((item) => {
                return (
                  <tr key={item.package.name}>
                    <td>{item.package.name}</td>
                    <td>{item.description}</td>
                    <td>
                      <button onClick={() => handleDelete(item)}>❌</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
