import React, { useState } from "react";

function ToyForm({ addToy }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    addToy(formData);

    setFormData({
      name: "",
      image: "",
    });
  }

  return (
    <form className="add-toy-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter a toy's name..."
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Enter a toy's image URL..."
        value={formData.image}
        onChange={handleChange}
      />

      <button type="submit">Add Toy</button>
    </form>
  );
}

export default ToyForm;