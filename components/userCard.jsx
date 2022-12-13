/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextareaAutosize } from "@mui/material";

export default function UserCard({ data, handleEdit, handleDelete }) {
  const [name, setName] = React.useState(data?.name);
  const [phone, setPhone] = React.useState(data?.phone);

  return (
    <Card style={{}} sx={{ maxWidth: 345 }}>
      <img
        alt="profile"
        height="140"
        width="345"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
      />
      <CardContent>
        <TextareaAutosize
          defaultValue={name}
          style={{
            border: "none",
            resize: "none",
            outline: "none",
          }}
          aria-label="empty textarea"
          placeholder="name of the user"
          onChange={(e) => setName(e.target.value)}
        />

        <TextareaAutosize
          defaultValue={phone}
          style={{
            border: "none",
            resize: "none",
            outline: "none",
          }}
          aria-label="empty textarea"
          placeholder="contact of the user"
          onChange={(e) => setPhone(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button
          onClick={() => handleEdit(data?._id, name, phone)}
          style={{ cursor: "pointer" }}
          size="small"
        >
          Edit
        </Button>
        <Button
          onClick={() => handleDelete(data?._id)}
          style={{ cursor: "pointer" }}
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
