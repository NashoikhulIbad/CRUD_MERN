import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/books"));
      window.location.reload(false);
  };

  return (
    <div className="card">
      <img src  
      ={image} alt={name} />
      <article><b>Author:</b> {author}</article>
      <article><b>Judul:</b> {name}</article>
      <article>{description}</article>
      <h3>Rp: {price}</h3>
      <Button  LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }} variant="outlined">Update</Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }} variant="outlined" startIcon={<DeleteIcon />}>
       Delete
    </Button>
    </div>
  );
};

export default Book;
