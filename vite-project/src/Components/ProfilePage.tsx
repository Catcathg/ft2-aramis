import React, { useState, useEffect } from 'react';
import "./ProfilePage.css";
import ImageProfile from '@/assets/Images/imageProfile.png';
import EmailIcon from '@/assets/Images/email-icon.svg';
import ProfileIcon from '@/assets/Images/profile-icon.svg';
import Nav from "./Nav";

export default function ProfilePage() {
  const [fieldValues, setFieldValues] = useState({
    email: "",
    type: "",
    pole: "",
  });

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

    if (fieldName === "type") {
      if (!["VN", "VO"].includes(fieldValue)) {
        errors.type = "Type must be VN or VO";
      } else {
        delete errors.type;
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

  useEffect(() => {
    const storedData = localStorage.getItem("content");
    if (storedData) {
      setFieldValues(JSON.parse(storedData));
    }
  }, []);

  const updateLocalStorage = () => {
    localStorage.setItem("content", JSON.stringify(fieldValues));
  };

  return (
    <>
      <Nav />
      <div className="ContentProfile">
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
                  value={fieldValues.email}
                  onChange={(e) => {
                    validateField("email", e.target.value);
                    setFieldValues((prevValues) => ({ ...prevValues, email: e.target.value }));
                  }}
                  onBlur={updateLocalStorage}
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
                  name="type"
                  value={fieldValues.type}
                  onChange={(e) => {
                    validateField("type", e.target.value);
                    setFieldValues((prevValues) => ({ ...prevValues, type: e.target.value }));
                  }}
                  onBlur={updateLocalStorage}
                  style={{
                    backgroundImage: `url(${ProfileIcon})`,
                  }}
                />
              </div>
              {fieldErrors.type && <span className="error">{fieldErrors.type}</span>}

              <p>Pôle</p>
              <div className="IconInputContainer">
                <input className="input"
                  type="text"
                  name="pole"
                  value={fieldValues.pole}
                  onChange={(e) => {
                    validateField("pole", e.target.value);
                    setFieldValues((prevValues) => ({ ...prevValues, pole: e.target.value }));
                  }}
                  onBlur={updateLocalStorage}
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
      <br />
    </>
  );
}
