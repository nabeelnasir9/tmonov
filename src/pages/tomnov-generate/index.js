import React, { useState } from "react";
import { Navbar, Button } from "../../components";
import Grid from "@mui/material/Grid";
import "./index.css";
import { FaCheck } from "react-icons/fa6";
import GenerateIcon from "./../../assets/generate.svg";
import { useNavigate } from "react-router-dom";
const TomnovGenerate = () => {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState("Male");
  const GenderList = ["Male", "Female", "Other"];
  const [Ethnicity, setEthnicity] = useState([
    {
      title: "Caucasians",
      selected: false,
    },
    {
      title: "Black",
      selected: false,
    },
    {
      title: "Latina/Hispanic",
      selected: false,
    },
  ]);
  const List = [
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-U5UBUdG_DJh8e6iQotyxocNlAhYxMC34xoSQ2IazDWGTJNVs",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtTLFqsQLGsAEmEZIhegjZ32TJuwlNrqxZdgJojzbvWuIV3dsQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUPF-CBgAHVF7sfbXZdYwCcFs-S0j9nj652KBSraryD0JWPXh",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1ToGcEcOb6NP-d-eoZBihql_M2uwPr4RVStKe7INCczyxF0I5",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdx2JhuQbu40QmwjR46zt_KAMYaYaAHlszAVN4Q-5tHYkSuuCC",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvxHnI6Xpij8C50DTGc_XH7cjFX0jQQHxX4WtUHMk2dDiOI8tN",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBOCqVHI_y5YPOyOTrd_0t1s_oKmHkHO33eC169R_4Uf2o5DPy",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVkXnO5Jn4F3tvaVy1zncPOE83E89cHb-67x7n_0ME3NGMzq1A",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWNhpDAMH-Jh_6h4O5Sh8cCXcm2okaJqTej7MLL_3V0OVpJcwt",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkQrh1qfAddIqjg7LAfSqhRTvE0JQhmqKZL1xb_wqHMa93fi_2",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNurapI1turp3aN39WrgFqcr38S99Et88TRtbVwYpI7B97xtQf",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-U5UBUdG_DJh8e6iQotyxocNlAhYxMC34xoSQ2IazDWGTJNVs",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtTLFqsQLGsAEmEZIhegjZ32TJuwlNrqxZdgJojzbvWuIV3dsQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUPF-CBgAHVF7sfbXZdYwCcFs-S0j9nj652KBSraryD0JWPXh",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1ToGcEcOb6NP-d-eoZBihql_M2uwPr4RVStKe7INCczyxF0I5",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdx2JhuQbu40QmwjR46zt_KAMYaYaAHlszAVN4Q-5tHYkSuuCC",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvxHnI6Xpij8C50DTGc_XH7cjFX0jQQHxX4WtUHMk2dDiOI8tN",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBOCqVHI_y5YPOyOTrd_0t1s_oKmHkHO33eC169R_4Uf2o5DPy",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVkXnO5Jn4F3tvaVy1zncPOE83E89cHb-67x7n_0ME3NGMzq1A",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWNhpDAMH-Jh_6h4O5Sh8cCXcm2okaJqTej7MLL_3V0OVpJcwt",
  ];
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
              <h4 className="tomnov-generate-left-title">Choose Gender</h4>
              <div className="tomnov-generate-radio-main">
                {GenderList.map((v, i) => {
                  return (
                    <div key={i} onClick={() => setSelectedGender(v)}>
                      <div>
                        {v === selectedGender && (
                          <div className="tomnov-generate-radio" />
                        )}
                      </div>
                      {v}
                    </div>
                  );
                })}
              </div>
              <h4 className="tomnov-generate-left-title">Ethnicity</h4>
              <div className="tomnov-generate-checkbox-main">
                {Ethnicity.map((v, i) => {
                  return (
                    <div
                      onClick={() => {
                        Ethnicity[i].selected = !Ethnicity[i].selected;
                        setEthnicity([...Ethnicity]);
                      }}
                    >
                      <div>
                        {v.selected && <FaCheck color="#fff" size={13} />}
                      </div>
                      {v.title}
                    </div>
                  );
                })}
              </div>
              <h4 className="tomnov-generate-left-title">Swap Images</h4>
              <label className="tomnov-generate-upload-button">
                <input type="file" hidden />
                <img src={GenerateIcon} alt="icon" />
                <p>Upload Target Image</p>
              </label>
              <Button title="Generate Deck" />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className="tomnov-generate-right-section">
                <div className="tomnov-generate-right-section-header">
                  <h1>Results</h1>
                  <div>
                    <button className="tomnov-generate-button">
                      <div>Regenerate</div>
                    </button>
                    <button
                      className="tomnov-generate-print-button"
                      onClick={() => navigate("/account")}
                    >
                      Print and Order
                    </button>
                  </div>
                </div>
                <div className="tomnov-generate-image-container">
                  <Grid container spacing={3}>
                    {List.map((v, i) => {
                      return (
                        <Grid item key={i} xs={4} sm={3} md={3} lg={3} xl={3}>
                          <button
                            className="tomnov-generate-image-mian"
                            onClick={() =>
                              navigate("/individual-card-review", {
                                state: { index: i },
                              })
                            }
                          >
                            <img src={v} alt="icon" />
                          </button>
                        </Grid>
                      );
                    })}
                  </Grid>
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
export default TomnovGenerate;
