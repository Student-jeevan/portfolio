import React from 'react';

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="image-modal-overlay" onClick={onClose}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-modal" onClick={onClose}>&times;</span>
                <img src={imageSrc} alt="Enlarged view" />
            </div>
        </div>
    );
};

export default ImageModal;
