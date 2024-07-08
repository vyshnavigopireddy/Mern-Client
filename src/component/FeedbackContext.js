// src/FeedbackContext.js
import React, { createContext, useState } from 'react';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackList, setFeedbackList] = useState([]);

  const addFeedback = (feedback) => {
    setFeedbackList((prevFeedbackList) => [...prevFeedbackList, feedback]);
  };

  return (
    <FeedbackContext.Provider value={{ feedbackList, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
