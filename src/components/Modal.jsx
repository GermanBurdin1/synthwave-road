import React from 'react';
import { motion } from 'framer-motion';
import '../Modal.css';

const Modal = ({ project, onClose, onLinkClick }) => {
  return (
    <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="modal-content" initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        <p>Project description...</p>
        <a href={project.link} onClick={onLinkClick} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
