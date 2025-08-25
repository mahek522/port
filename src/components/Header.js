import React, { useState, useEffect } from "react";
import "./Header.css"; // your existing CSS

const Header = () => {
  const [profileImage, setProfileImage] = useState(null);

  // Load profile image from localStorage
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Handle profile picture upload
  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("profileImage", reader.result); // persist image
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header
      className="header"
      style={{
        backgroundColor: "#000000", // always black
        transition: "all 0.3s ease",
      }}
    >
      <div className="container">
        <nav className="navbar">
          <div className="logo">Mahek Sultana</div>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>

          <div className="profile-upload">
            <label htmlFor="profileInput">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-pic"
                />
              ) : (
                "Upload Profile"
              )}
            </label>
            <input
              id="profileInput"
              type="file"
              accept="image/*"
              onChange={handleProfileUpload}
              style={{ display: "none" }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;








