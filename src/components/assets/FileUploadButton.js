import * as React from 'react';
// import axios from 'axios';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FileUploadButton() {
  // const [file, setFile] = React.useState(null);
  const [file, changeFile] = React.useState();
  const [fileName, changeFileName] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // /**
  //  * 파일 업로드 확인
  //  */
  //   const onChangeFile = e => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     React.setFile(e.target.files[0]);
  //     console.log(e.target.files)
  //   }
  // }

  const Input = styled('input')({
    display: 'none',
  });
  return (
    <Box display='flex' justifyContent='flex-end' sx={{m: 4}}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <div>
          <Button onClick={handleOpen} variant="contained" style={{backgroundColor: "#24527a"}}>Update</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <label htmlFor="contained-button-file">
                <input type="file" onChange={ (e)=>{
                  changeFile(e.target.files[0]);
                  changeFileName(e.target.files[0].name);
                } } />
                <Button 
                  variant="contained" style={{backgroundColor: "#24527a"}} 
                  onClick={ ()=>{

                  const formData = new FormData();

                  formData.append("file", file);
                  formData.append("fileName", fileName);
                  console.log(file,fileName)
                  // 서버 업로드 부분
                  // try {
                  //   axios.post("http://localhost:3001/fileUpload", formData).then(
                  //     (response)=>{
                  //       console.log(response);
                  //     }
                  //   )

                  // } catch (exception) {
                  //   console.log(exception);
                  // }

                } }>업로드!!</Button>
              </label>
            </Box>
          </Modal>
        </div>

        <div>
          <Button onClick={handleOpen} variant="contained" style={{backgroundColor: "#24527a"}}>Upload</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <label htmlFor="contained-button-file">
                <input type="file" onChange={ (e)=>{
                  changeFile(e.target.files[0]);
                  changeFileName(e.target.files[0].name);
                } } />
                <Button 
                  variant="contained" style={{backgroundColor: "#24527a"}} 
                  onClick={ ()=>{

                  const formData = new FormData();

                  formData.append("file", file);
                  formData.append("fileName", fileName);
                  console.log(file,fileName)
                  // 서버 업로드 부분
                  // try {
                  //   axios.post("http://localhost:3001/fileUpload", formData).then(
                  //     (response)=>{
                  //       console.log(response);
                  //     }
                  //   )

                  // } catch (exception) {
                  //   console.log(exception);
                  // }

                } }>업로드!!</Button>
              </label>
            </Box>
          </Modal>
        </div>
      </Stack>
    </Box>
  );
}
