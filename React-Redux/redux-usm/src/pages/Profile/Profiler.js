import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AccountSetting from "../Account Setting/AccountSetting";
import ApplicationSetting from "../Application Setting/ApplicationSetting";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
function ImageUpload() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
       /// Modal
      
    <Grid item xs={12}>
      <Item>
        <div className="back-to-page ">
          <a href="/">My Account</a>
        </div>
        <h2>Profile Update</h2>
        <div className="image-upload-container">
          <div className="box-decoration">
            <div
              onClick={handleClick}
              style={{ cursor: "pointer" }}
              className="area-pic"
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="img-display-after"
                />
              ) : (
                <img src="./photo.png" alt="" className="img-display-before" />
              )}
              <div className="inner">
                <i className="fa fa-camera" aria-hidden="true"></i>
              </div>
              <input
                id="image-upload-input"
                type="file"
                onChange={handleImageChange}
                ref={hiddenFileInput}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <Grid item xs={10}>
            <div className="highlight">
              <h3>Sachin Chanduveetil</h3>
              <div className="muted">Designation</div>
              <div className="litr">Frontend Developer</div>
              <div className="muted">Company Name</div>
              <div className="litr">Insight India LLP</div>
            </div>
            <div className="about">
              <div className="muted">About:</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                libero metus, maximus eget nibh et, finibus tristique dui. Duis
                semper libero nec quam ullamcorper dictum. Nam erat lorem,
                feugiat sed rhoncus in, vulputate sit amet nibh.{" "}
              </p>
    
            </div>
          </Grid>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <h2>Account Settings</h2>
              <AccountSetting />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h2>Application Settings</h2>
              <ApplicationSetting />
            </Item>
          </Grid>
        </Grid>
      </Item>
    </Grid>

 
  
   
  );
}

export default ImageUpload;
