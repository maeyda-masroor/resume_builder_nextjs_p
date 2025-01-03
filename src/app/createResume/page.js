// pages/index.js
"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", age: "", image: null });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert form data to JSON, including converting the image to base64
    const reader = new FileReader();
    reader.readAsDataURL(formData.image);
    reader.onloadend = () => {
      const data = {
        ...formData,
        image: reader.result, // base64 string
      };

      // Store the JSON string in sessionStorage or localStorage
      sessionStorage.setItem("formData", JSON.stringify(data));

      // Redirect to the next page
      router.push("/test1");
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Enter your age"
        onChange={handleChange}
        required
      />
      <input type="file" name="image" accept="image/*" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}
