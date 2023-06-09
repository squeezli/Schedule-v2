import React, { createContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const showMessage = (text, severity) => {
    setMessage({ text, severity });
  };

  const hideMessage = () => {
    setMessage(null);
  };

  return (
    <MessageContext.Provider value={{ showMessage, hideMessage }}>
      {children}
      <Snackbar
        open={!!message}
        autoHideDuration={4000}
        onClose={hideMessage}
      >
        <Alert onClose={hideMessage} severity={message?.severity}>
          {message?.text}
        </Alert>
      </Snackbar>
    </MessageContext.Provider>
  );
};
