import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { AuthContext } from "../../config/AuthContext";

const UpscaleCard = () => {
  const navigate = useNavigate();
  const { generatedImages2 } = useContext(AuthContext);
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    setSelectedIndex(location.state.index);
  }, []);

  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <h1 className="tomnov-generate-left-heading">
                Make Your Artwork Tarot Card
              </h1>
              <div className="tomnov-generate-line" />
              <h4 className="tomnov-generate-left-title">Prompt Editor</h4>
              <div className="ind-card-rev-textarea">
                <textarea placeholder="Prompt..."></textarea>
              </div>
              <div className="ind-card-rev-reg-button-main">
                <button
                  className="ind-card-rev-reg-button"
                  onClick={() => navigate("/tomnov-generate")}
                >
                  <div>Regenerate</div>
                </button>
                <button
                  className="ind-card-rev-confirm-button"
                  onClick={() => navigate("/tomnov-generate")}
                >
                  Confirm
                </button>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className="tomnov-generate-right-section">
                <div className="tomnov-generate-right-section-header">
                  <h1>Individual Card Review</h1>
                </div>
                <div className="ind-card-rev-image-main">
                  {generatedImages2 ? (
                    <img
                      src={generatedImages2[selectedIndex].uri}
                      alt="check"
                    />
                  ) : (
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W"
                      alt="check"
                    />
                  )}
                  <div className="ind-card-rev-image-prev-button-main">
                    <button
                      className="ind-card-rev-image-prev-button"
                      onClick={() => {
                        if (selectedIndex === 0) {
                          setSelectedIndex(generatedImages2?.length - 1);
                        } else {
                          setSelectedIndex(selectedIndex - 1);
                        }
                        console.log("previous", selectedIndex);
                      }}
                    >
                      <div>Previous</div>
                    </button>
                    <button
                      className="ind-card-rev-image-next-button"
                      onClick={() => {
                        let index = selectedIndex;
                        if (selectedIndex === generatedImages2?.length - 1) {
                          setSelectedIndex(0);
                        } else {
                          index++;
                          setSelectedIndex(index);
                        }
                        console.log("next >>>>", selectedIndex);
                      }}
                    >
                      Next
                    </button>
                  </div>
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
