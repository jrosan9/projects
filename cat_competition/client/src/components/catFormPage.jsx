import React from "react";
import { useState } from "react";
import { useNew_catMutation } from "../../slices/api";

function CatFormPage() {
  const [postNewCat] = useNew_catMutation();
  const [catName, setCatName] = useState("");
  const [description, setDescription] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImg(file);
    console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        document.getElementById("cat_image_preview").src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", catName);
    formData.append("description", description);
    formData.append("image", img);
    formData.append("subscriber_name", firstName);
    formData.append("subscriber_LastName", lastName);
    formData.append("subscriber_email", email);
    formData.append("subscriber_PhoneNumber", phoneNumber);

    try {
      // Send the FormData via mutation
      const response = await postNewCat(formData).unwrap();
      const { token } = response;
      localStorage.setItem("authToken", token);
      alert("Cat created successfully!");
    } catch (error) {
      console.error("Error creating cat:", error);
      alert("Unsuccessful cat & subscriber creation.");
    }
  };

  return (
    <>
      <div id="cat_form">
        <form onSubmit={submitForm} encType="multipart/form-data">
          {img && <img id="cat_image_preview" alt="cat_preview" />}
          <input
            type="file"
            accept="image/*"
            name="image"
            id={"cat_image"}
            onChange={handleImageChange}
          />
          <input
            type="text"
            placeholder="Cat Name"
            value={catName}
            name="name"
            onChange={(e) => setCatName(e.target.value)}
          />
          <input
            type="text"
            placeholder="description..."
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            name="subscriber_name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            name="subscriber_LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            name="subscriber_email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            name="subscriber_PhoneNumber "
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CatFormPage;
