import React from "react";
import { Button } from "@mui/material";
import axios from "axios";

export const AddSchedule = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);



  const handleUploadClick = () => {
    const data = new FormData();
    data.append("file", selectedFile);
    axios.post("/api/schedule/upload", data).then((res) => {
      console.log(res.statusText);
    });
  };


  return (
    <>
      <form></form>

      <Button variant="contained" component="label">
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
          <Button variant="contained" onClick={handleUploadClick}>
            Отправить
          </Button>
        </>
      ) : (
        <>Файл не выбран</>
      )}
    </>
  );
};
