import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCard from "../components/userCard";

function ListUser() {
  const [user, setUser] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    console.log("id------", id);
    const requestOptions = {
      method: "Delete",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://localhost:4000/delete/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleEdit = (id, name, phone) => {
    console.log("id-----", id, name, phone);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    };
    fetch(`http://localhost:4000/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const handleSearch = (value) => {
    setSearchTerm(value);
    user?.filter((data) => {
      if (SearchTerm === "") return data;
      if (data?.phone) {
        if (data?.phone?.toLowerCase().includes(SearchTerm.toLowerCase())) {
          return data;
        }
      }
    });
  };
  const getData = async () => {
    const response = await fetch(`http://localhost:4000/listUser`);
    const result = await response.json();
    setUser(result);
    console.log("result---------", result);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div style={{ marginLeft: "42%", marginTop: "5%" }}>List Of Users</div>
      <TextField
        style={{
          marginLeft: "35%",
          marginTop: "5%",
          height: "3rem",
          // background: "white",
          width: "20rem",
        }}
        id="outlined-basic"
        label="search by contact number"
        variant="outlined"
        onChange={(event) => handleSearch(event.target.value)}
      />
      {user.map((data, index) => (
        <div style={{ marginLeft: "35%", marginTop: "5%" }} key={data._id}>
          <UserCard
            data={data}
            handleDelete={(id) => handleDelete(id)}
            handleEdit={(id, name, phone) => handleEdit(id, name, phone)}
          />
        </div>
      ))}
    </div>
  );
}

export default ListUser;
