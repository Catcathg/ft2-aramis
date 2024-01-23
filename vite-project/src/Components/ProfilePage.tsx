import React, { useState, ChangeEvent } from 'react';
import "./ProfilePage.css";
import Nav from "./Nav";

export default function ProfilePage() {
  const [biography, setBiography] = useState<string>(""); // Utilisation de TypeScript pour spécifier le type de la biographie

  const handleBiographyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBiography(event.target.value);
  };

  return (
    <>
      <Nav />
      <div className="Content">
        <p>Do you want to make changes?</p>
        <h1 className="TextProfile">Profile</h1>
        <div className="profileContainer">
          <p className="Name">Baptiste Legrand</p>
          <p className="Information">
            Email
            <br />
            Type
            <br />
            Pôle
          </p>
          <textarea
            className="BiographyInput"
            placeholder="Write your biography here..."
            value={biography}
            onChange={handleBiographyChange}
          />
        </div>
      </div>
    </>
  );
}