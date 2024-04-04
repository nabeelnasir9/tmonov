import Grid from "@mui/material/Grid";
import axios from "axios";
import React, { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { AuthContext } from "../../config/AuthContext";
import GenerateIcon from "./../../assets/generate.svg";
import "./index.css";

/**
 * @returns  [TODO: forward to upscale indiv card page]
 */
const TomnovGenerate = () => {
  const { generatedImages2, setGeneratedImages2 } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState("Male");
  const GenderList = ["Male", "Female", "Other"];
  const [progress, setProgress] = useState(false);
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
  console.log(Ethnicity);
  const handleEthnicitySelection = (index) => {
    const updatedEthnicity = Ethnicity.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          selected: true,
        };
      } else {
        return {
          ...item,
          selected: false,
        };
      }
    });
    setEthnicity(updatedEthnicity);
  };
  const [generatedImages, setGeneratedImages] = useState("");
  const fetchData = async () => {
    setProgress(true);
    try {
      const selectedEthnicities = Ethnicity.filter((item) => item.selected).map(
        (item) => item.title,
      );

      const ethnicityString = selectedEthnicities.join(", ");
      console.log(ethnicityString);
      const response = await axios.post(
        "http://localhost:3001/api/generate/create",
        {
          prompt: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-U5UBUdG_DJh8e6iQotyxocNlAhYxMC34xoSQ2IazDWGTJNVs Subject is a young ${ethnicityString} ${selectedGender} on island carrying abag on a stick and skipping carelessly.subjectis facing the camera. fullshot.photorealistic details.tarot card. --ar 1:2 --style raw`,
        },
      );
      setGeneratedImages(response.data.uri);
      console.log("Generated images:", generatedImages);
      setProgress(false);
    } catch (error) {
      console.error("Error fetching generated images:", error);
    }
  };
  const fetchData2 = async () => {
    setProgress(true);
    try {
      const selectedEthnicities = Ethnicity.filter((item) => item.selected).map(
        (item) => item.title,
      );

      const ethnicityString = selectedEthnicities.join(", ");
      console.log(ethnicityString);
      const response = await axios.post(
        "http://localhost:3001/api/generate/create2",
        {
          prompt: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-U5UBUdG_DJh8e6iQotyxocNlAhYxMC34xoSQ2IazDWGTJNVs Subject is a young ${ethnicityString} ${selectedGender} on island carrying abag on a stick and skipping carelessly.subjectis facing the camera. fullshot.photorealistic details.tarot card. --ar 1:2 --style raw`,
        },
      );
      setGeneratedImages2(response.data);
      // Assuming the response contains an array of image URIs
      console.log("Generated images:", generatedImages);
      setProgress(false);
    } catch (error) {
      console.error("Error fetching generated images:", error);
    }
  };
  // const List = [
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
                    <div key={i} onClick={() => handleEthnicitySelection(i)}>
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
              <button
                onClick={() => fetchData2()}
                disabled={progress}
                className="big-button"
              >
                Generate 2 Cards
              </button>
              <button
                onClick={() => fetchData()}
                disabled={progress}
                className="big-button"
              >
                Generate Single Card
              </button>
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
                    <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
                      <img src={generatedImages} alt="check" />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    {generatedImages2?.map((v, i) => {
                      return (
                        <Grid item key={i} xs={4} sm={3} md={4} lg={4} xl={3}>
                          <button
                            className="tomnov-generate-image-mian"
                            onClick={() =>
                              // FIX: Forward to /upscale and then to this.
                              navigate("/individual-card-review", {
                                state: { index: i },
                              })
                            }
                          >
                            <img src={v?.uri} alt="icon" />
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
        {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid> */}
      </Grid>
    </div>
  );
};
export default TomnovGenerate;
