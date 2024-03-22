'use client';
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";
import styles from './mode.module.css';

const Mode: React.FC = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <button onClick={toggleMode}>
        {mode === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
}

export default Mode;
