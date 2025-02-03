import React, { useState } from "react";
import cert1 from "../../assets/cert1.jpg";
import cert2 from "../../assets/cert2.jpg";
import cert3 from "../../assets/cert3.jpg";
import "./Certificate.css";

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { id: 1, src: cert1, alt: "Certificate 1" },
    { id: 2, src: cert2, alt: "Certificate 2" },
    { id: 3, src: cert3, alt: "Certificate 3" },
  ];

  return (
    <div className="certificate-container">
      {certificates.map((certificate) => (
        <div key={certificate.id} className="certificate">
          <img src={certificate.src} alt={certificate.alt} />
          <div
            className="overlay"
            onClick={() => setSelectedImage(certificate.src)}
          >
            <span className="maximize-icon">⛶</span>
            <p className="view-text">View Certificate</p>
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="modal">
          <span className="close-icon" onClick={() => setSelectedImage(null)}>
            ✖
          </span>
          <img src={selectedImage} alt="Enlarged Certificate" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default Certificate;
