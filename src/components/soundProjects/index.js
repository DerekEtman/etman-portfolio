import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  makeStyles,
} from "@material-ui/core";
import PianoImage from "./assets/piano.jpg";
import useContentful from "../../hooks/useContentful";
import { CompareSharp } from "@material-ui/icons";
import CreateCard from "./createListTile";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    backgroundColor: "Black",
    color: "white",
    minHeight: "100vh",
    fontFamily: "'Bebas Neue', cursive",
    margin: "3vh auto",
    // overflow:"hidden",
    // backgroundImage: `url(${PianoImage})`,
    // backgroundSize: "300%",
    // backgroundPosition: "center",
  },
  textWrapper: {
    padding: "2%",
    height: "60vh",
  },
}));

// function checkContentType(asset) {
//   const {file:{contentType}} = asset.fields
//   switch(contentType){
//     case "audio/":

//   }
// }

export default function SoundPage() {
  const { getAsset, getAssets, getEntries } = useContentful();
  const [assetList, setAssetList] = useState([]);
  const [entriesList, setEntriesList] = useState([]);

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
    <Grid container className={classes.container}>
      {/* <Grid item xs={2}>
          Filter Nav
        </Grid> */}
      <Grid item xs={12}>
        <ImageList
          variant="woven"
          cols={3}
          rowHeight={121}
        >
          {
          entriesList.map((data) =>( 
          
          <CreateCard asset={data} />
          ))}
        </ImageList>
      </Grid>
    </Grid>
    // </Box>
  );
}
