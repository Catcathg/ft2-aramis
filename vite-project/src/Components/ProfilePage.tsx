import React, { useState } from 'react';
import "./ProfilePage.css";
import ImageProfile from '@/assets/Images/imageProfile.png';
import EmailIcon from '@/assets/Images/email-icon.svg';
import ProfileIcon from '@/assets/Images/profile-icon.svg';
import Nav from "./Nav";

export default function ProfilePage() {
  const [fieldErrors, setFieldErrors] = useState({});

  const validateField = (fieldName, fieldValue) => {
    const errors = { ...fieldErrors };

    if (fieldName === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue)) {
        errors.email = "Invalid email address";
      } else {
        delete errors.email;
      }
    }

    if (fieldName === "vehiculeType") {
      if (!["VN", "VO"].includes(fieldValue)) {
        errors.vehiculeType = "Type must be VN or VO";
      } else {
        delete errors.vehiculeType;
      }
    }

    if (fieldName === "pole") {
      const allowedPoles = ["PSA", "Renault Dacia", "Achat Internationaux VO", "Market Place", "Reprise", "Rest of the World"];
      if (!allowedPoles.includes(fieldValue)) {
        errors.pole = "Invalid Pole";
      } else {
        delete errors.pole;
      }
    }

    setFieldErrors(errors);
  };

  return (
    <>
      <Nav />
      <div className="ContentProfile">
        <p>Do you want to make changes?</p>
        <h1 className="TextProfile">Profile</h1>
        <div className="cardProfile">
          <p className="Name">Baptiste Legrand</p>
          <div className="ImageInfo">
            <div className="imageProfile">
              <img className="Image" src={ImageProfile} alt="Image Profile" />
            </div>
            <div className="Information">
              <p>Email</p>
              <div className="IconInputContainer">
                <input className="input"
                  type="text"
                  name="email"
                  onChange={(e) => validateField("email", e.target.value)}
                  style={{
                    backgroundImage: `url(${EmailIcon})`,
                  }}
                />
              </div>
              {fieldErrors.email && <span className="error">{fieldErrors.email}</span>}

              <p>Type</p>
              <div className="IconInputContainer">
                <input className="input"
                  type="text"
                  name="vehiculeType"
                  onChange={(e) => validateField("vehiculeType", e.target.value)}
                  style={{
                    backgroundImage: `url(${ProfileIcon})`,
                  }}
                />
              </div>
              {fieldErrors.vehiculeType && <span className="error">{fieldErrors.vehiculeType}</span>}

              <p>Pôle</p>
              <div className="IconInputContainer">
                <input className="input"
                  type="text"
                  name="pole"
                  onChange={(e) => validateField("pole", e.target.value)}
                  style={{
                    backgroundImage: `url(${ProfileIcon})`,
                  }}
                />
              </div>
              {fieldErrors.pole && <span className="error">{fieldErrors.pole}</span>}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
