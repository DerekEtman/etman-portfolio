import { Grid, ImageList, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
import CreateCard from "./createListTile";

const useStyles = makeStyles((theme) => ({
  container1: {
    minHeight: "100vh",
    margin: "3vh auto",
    backgroundColor: "Black",
    color: "white",
    fontFamily: "'Bebas Neue', cursive",
    // overflow:"hidden",
    // backgroundImage: `url(${PianoImage})`,
    // backgroundSize: "300%",
    // backgroundPosition: "center",
  },
  textWrapper: {
    padding: "2%",
    height: "60vh",
  },
  projectList:{
    // width:'90%',
  }
}));

// function checkContentType(asset) {
//   const {file:{contentType}} = asset.fields
//   switch(contentType){
//     case "audio/":

//   }
// }

export default function SoundPage() {
  const { getEntries } = useContentful();
  // const [assetList, setAssetList] = useState([]);
  const [entriesList, setEntriesList] = useState([]);

  console.log("E", entriesList)
  useEffect(() => {
    // getAssets()
    //   .then((response) => setAssetList(response.items))
    //   .catch((err) => console.log(err));

    getEntries()
      .then((response) => setEntriesList(response.items))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // assetList.map((asset) => createCard(asset));
  //   function createCards(cardArray){
  // 	console.log("CA", cardArray)
  //   }

  const classes = useStyles();

  return (
  // <Box>
    <Grid container className={classes.container1} >
      {/* <Grid item xs={2}>
          Filter Nav
        </Grid> */}
      <Grid item xs={11} className={classes.projectList}>
        <ImageList variant="quilted"  rowHeight={121} >
          {entriesList.map((data) => {
            return <CreateCard asset={data} key={data.sys.id} />;
          })}
        </ImageList>
      </Grid>
    </Grid>
  // </Box>
  );
}
