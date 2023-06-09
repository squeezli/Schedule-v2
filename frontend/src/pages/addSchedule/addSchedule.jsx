import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import "./addSchedule.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth.context";
// import { useAuth } from "./hooks/auth.hook";

import { MessageContext } from "../../context/Message.context";

export const AddSchedule = () => {
  const {showMessage} = React.useContext(MessageContext);
  const auth = React.useContext(AuthContext);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const navigate = useNavigate();

  const handleUploadClick = () => {
    const data = new FormData();
    data.append("file", selectedFile);
    axios
      .post("/api/schedule/upload", data, {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      })
      .then((res) => {
        // console.log(res);
        showMessage(res.data.message);
      });
      // setTimeout(() => {
      //   navigate("/");
      // }, 2000);
    navigate(`/`);
  };

  return (
    <div className="formStyle">
      <form></form>

      <Button
        variant="contained"
        sx={{ display: "flex", maxWidth: 450, top: 300, margin: "auto" }}
        component="label"
      >
        Загрузить файл
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          hidden
        />
      </Button>
      {/* {console.log(selectedFile.name)} */}
      {selectedFile ? (
        <>
          {selectedFile.name}
          <Button
            sx={{ maxWidth: 450, margin: "0 auto", display: "flex", top: 300 }}
            variant="contained"
            onClick={handleUploadClick}
          >
            Отправить
          </Button>
        </>
      ) : (
        <>Файл не выбран</>
      )}

    </div>
  );
};
