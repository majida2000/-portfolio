import React from "react";
import profil from "../assets/profil.png";
import PropTypes from "prop-types";

function Profil({ size, shape, className, alt, name, socialProfile, showName, showSocialProfile }) {

    const handleClick = () => {
        // Ajouter une fonctionnalité pour changer la photo ici
    }


  return (
    <div className={`text-center mb-4 ${className}`}>
    
      <img
        src={profil}
        alt="profil"
        className={`rounded-${shape} profile-img`}
        style={{ width: size, height: size, cursor: "pointer" }}
        onClick={handleClick}
      />
        {showName && <div className="mt-2">{name}</div>}
        {showSocialProfile && <div className="mt-2">{socialProfile}</div>}

    </div>
  );
}

Profil.defaultProps = {
    size: "250px",
    shape: "circle",
    className: "",
    alt: "profile photo",
    name: "",
    socialProfile: "",
    showName: true,
    showSocialProfile: false
}

Profil.propTypes = {
    size: PropTypes.string,
    shape: PropTypes.oneOf(["circle", "circle"]),
    className: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    socialProfile: PropTypes.string,
    showName: PropTypes.bool,
    showSocialProfile: PropTypes.bool
}

export default Profil;