import React, { useEffect, useState, useContext } from "react";
import { Toolbar, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import axios from "axios";
import axios from "../util/axios";
import { withRouter } from "react-router";

import Navbar from "../components/navBar/navbar";
import SummaryFields from "../components/summary-fields/summaryFields";
import { SummaryUserData } from "../context/summaryData";
// import SideBar from "../components/sidebar/sidebar";
// import Editor from "../components/editor/editor";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  loader: {
    marginTop: "-7px",
  },
}));

const Summary = (props) =>{
  const classes = useStyle();

  const [token, setToken] = useState("");
  const [loader, setLoader] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [email, setEmail] = useState(null);
  const [imageAddress, setImageAddress] = useState();
  const [summary, setSummary ] = useState([])

  const userData = useContext(SummaryUserData);
  // const { summary, setSummary } = userData;

  const summaryId = props.match.params.smid;

  useEffect(() => {
    setLoader(true);
    const time = setTimeout(() => {
      const localData = localStorage.getItem("data");
      if (localData) {
        const data = JSON.parse(localData);
        if (data.token.length !== 0) {
          setAuth(true);
          setToken(data.token);
          setEmail(data.email.substring(0, data.email.indexOf("@")));
          axios
            .post(
              "/api/dash/summary",
              {
                creator: data.userId,
                smId: summaryId,
              },
              {
                headers: {
                  Authorization: "Bearer " + data.token,
                },
              }
            )
            .then((res) => {
              setLoader(false);
              setSummary(res.data.summary.sentences);

            })
            .catch((err) => {
              setLoader(false);
              console.log(err);
            });
        }
      }
    }, 1000);

    return () => {
      setSummary([]);
      clearTimeout(time);
    };
  }, [summaryId]);

  const handleSelectedSummary = () => {

    console.log(summary)
    const filterSelection = summary.filter((val) => val.checked !== false);

    if (filterSelection.length !== 0) {
      
      
      let formData = new FormData();
      formData.append("payload", JSON.stringify(filterSelection) );
      formData.append("image", imageAddress);

      axios
        .post("http://localhost:5000/api/dash/images", formData, {
          headers: {
            // "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          
          userData.setImgList(res.data.imgs);
          props.history.push("/images");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleAddNewSelection = () => {
    const obj = {
      checked: false,
      title: "",
      summary: "",
    };
    const newArr = [];
    newArr.push(obj);

    setSummary((prev) => {
      newArr.push(...prev);
      return newArr;
    });
  };

  return (
    <div className={classes.root}>
      <Navbar isAuth={isAuth} email={email} />

      {/* <SideBar /> */}

      <main className={classes.content}>
        <Toolbar />
        {loader && <LinearProgress className={classes.loader} />}

        { summary.length !== 0 &&
          <SummaryFields
          summarydata={summary}
          setSummaryData={setSummary}

          submitSelection={handleSelectedSummary}
          addSelection={handleAddNewSelection}
          isLoading={loader}
          uploadImage={setImageAddress}
        />}
        {/* <Editor payload={data} save={handleUpdate} /> */}
      </main>
    </div>
  );
  }

export default withRouter(Summary);
