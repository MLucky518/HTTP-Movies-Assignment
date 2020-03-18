import { useState } from "react";

const CustomForm = callback => {
  const [values, setValues] = useState({
    title: "",
    director: "",
    metascore: 0,
    stars: []
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default CustomForm;
