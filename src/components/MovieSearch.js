import React, { useState } from "react";

export default function MovieSearch() {
const [data, setData] = useState({
    title: '',
  });
  console.log(data.title);
  return (
    <div>
      <h2>Search movies</h2>
      <input
      type="text"
          value={data.title}
          placeholder="Title"
          onChange={({ target }) => 
    setData({...data, title:target.value})}
        />
    </div>
  );
}