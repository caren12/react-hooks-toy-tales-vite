import React, { useState } from "react";

function ToyForm({ addToy }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToy(formData);
    setFormData({ name: "", image: "" });
  };

  return (
    <form className="add-toy-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Toy name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Toy image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <button type="submit">Add Toy</button>
    </form>
  );
}

export default ToyForm;
