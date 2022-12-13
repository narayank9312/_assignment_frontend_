/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

function CreateUser() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    };
    fetch(`http://localhost:4000/createUser`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        // className={styles.form}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">PhoneNo:</label>
        <input
          id="phome"
          type="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <div>
          <h1>Upload and Display Image </h1>
          {selectedImage && (
            <div>
              <img
                alt="not fount"
                width={"250px"}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button onClick={() => setSelectedImage(null)}>Remove</button>
            </div>
          )}
          <br />

          <br />
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>

        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;
