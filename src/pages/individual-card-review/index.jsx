import React, { useContext } from "react";
import { Navbar } from "../../components";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { AuthContext } from "../../config/AuthContext";
const IndividualCardReview = () => {
  const { upscaleImage } = useContext(AuthContext);
  const navigate = useNavigate();
  // const List = [
  //   "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-U5UBUdG_DJh8e6iQotyxocNlAhYxMC34xoSQ2IazDWGTJNVs",
  //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
  //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtTLFqsQLGsAEmEZIhegjZ32TJuwlNrqxZdgJojzbvWuIV3dsQ",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUPF-CBgAHVF7sfbXZdYwCcFs-S0j9nj652KBSraryD0JWPXh",
  //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1ToGcEcOb6NP-d-eoZBihql_M2uwPr4RVStKe7INCczyxF0I5",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdx2JhuQbu40QmwjR46zt_KAMYaYaAHlszAVN4Q-5tHYkSuuCC",
  //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvxHnI6Xpij8C50DTGc_XH7cjFX0jQQHxX4WtUHMk2dDiOI8tN",
  //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBOCqVHI_y5YPOyOTrd_0t1s_oKmHkHO33eC169R_4Uf2o5DPy",
  //   "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVkXnO5Jn4F3tvaVy1zncPOE83E89cHb-67x7n_0ME3NGMzq1A",
  //   "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWNhpDAMH-Jh_6h4O5Sh8cCXcm2okaJqTej7MLL_3V0OVpJcwt",
  //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkQrh1qfAddIqjg7LAfSqhRTvE0JQhmqKZL1xb_wqHMa93fi_2",
  //   "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNurapI1turp3aN39WrgFqcr38S99Et88TRtbVwYpI7B97xtQf",
  //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
  //   "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-U5UBUdG_DJh8e6iQotyxocNlAhYxMC34xoSQ2IazDWGTJNVs",
  //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtTLFqsQLGsAEmEZIhegjZ32TJuwlNrqxZdgJojzbvWuIV3dsQ",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUPF-CBgAHVF7sfbXZdYwCcFs-S0j9nj652KBSraryD0JWPXh",
  //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1ToGcEcOb6NP-d-eoZBihql_M2uwPr4RVStKe7INCczyxF0I5",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdx2JhuQbu40QmwjR46zt_KAMYaYaAHlszAVN4Q-5tHYkSuuCC",
  //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvxHnI6Xpij8C50DTGc_XH7cjFX0jQQHxX4WtUHMk2dDiOI8tN",
  //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBOCqVHI_y5YPOyOTrd_0t1s_oKmHkHO33eC169R_4Uf2o5DPy",
  //   "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVkXnO5Jn4F3tvaVy1zncPOE83E89cHb-67x7n_0ME3NGMzq1A",
  //   "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWNhpDAMH-Jh_6h4O5Sh8cCXcm2okaJqTej7MLL_3V0OVpJcwt",
  // ];
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
                  {upscaleImage && upscaleImage.uri && (
                    <img src={upscaleImage.uri} alt="check" />
                  )}
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
export default IndividualCardReview;
