import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { AuthContext } from "../../config/AuthContext";
import "./index.css";

/** [TODO: get output to come here and forward the upscale messageId forward to the previous card-review page.] */

const UpscaleCard = () => {
  const navigate = useNavigate();
  const { generatedImages2 } = useContext(AuthContext);
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage =
    generatedImages2 &&
    generatedImages2.length > 0 &&
    selectedIndex < generatedImages2.length
      ? generatedImages2[selectedIndex].uri
      : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W";
  // useEffect(() => {
  //   setSelectedIndex(location.state.index);
  // }, []);

  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={5} lg={6} xl={5}>
              <h1 className="tomnov-generate-left-heading">
                Upscale Individual Card
              </h1>
              <div className="tomnov-generate-line" />
              <h4 className="tomnov-generate-left-title">
                Select the Card you like the best for Higher Quality
              </h4>
              <div className="ind-card-up-reg-button-main">
                <button
                  className="ind-card-up-reg-button"
                  onClick={() => navigate("/tomnov-generate")}
                >
                  <div>Upscale 1st</div>
                </button>
                <button
                  className="ind-card-up-reg-button"
                  onClick={() => navigate("/tomnov-generate")}
                >
                  <div>Upscale 2nd</div>
                </button>
              </div>
              <div className="ind-card-up-reg-button-main">
                <button
                  className="ind-card-up-reg-button"
                  onClick={() => navigate("/tomnov-generate")}
                >
                  <div>Upscale 3rd</div>
                </button>
                <button
                  className="ind-card-up-reg-button"
                  onClick={() => navigate("/tomnov-generate")}
                >
                  <div>Upscale 4th</div>
                </button>
              </div>
              <div className="confirm-main">
                <button
                  className="ind-card-rev-confirm-button"
                  onClick={() => navigate("/tomnov-generate")}
                >
                  Confirm
                </button>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
              <div className="tomnov-generate-right-section">
                <div className="tomnov-generate-right-section-header">
                  <h1>Individual Card Review</h1>
                </div>
                <div className="ind-card-rev-image-main">
                  <img src={selectedImage} alt="check" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};

export default UpscaleCard;
