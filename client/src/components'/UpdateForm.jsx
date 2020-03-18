import React, { useEffect, useState } from "react";
import CustomForm from "../CustomForm";
import axios from "axios";

function UpdateForm(props) {
  console.log(props.movies);
  const submit = () => {
    console.log("submitted");
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        console.log(res);
        props.getMovies();
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const { handleChange, handleSubmit, values } = CustomForm(submit);
  const [movie, setMovie] = useState(values);

  const handleChanges = e => {
    handleChange(e);
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const movieToUpdate = props.movies.find(movie => {
      return `${movie.id}` === props.match.params.id;
    });

    if (movieToUpdate) {
      setMovie(movieToUpdate);
    }
  }, [props.movies, props.match.params.id]);

  console.log(movie);
  console.log(values);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={movie.title}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="director"
          value={movie.director}
          onChange={handleChanges}
        />
        <input
          type="number"
          name="metascore"
          value={movie.metascore}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="stars"
          value={movie.stars}
          onChange={handleChanges}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default UpdateForm;
