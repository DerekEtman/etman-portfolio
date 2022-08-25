import { Grid, ImageList, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
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
    <Grid container className={classes.container}>
      {/* <Grid item xs={2}>
          Filter Nav
        </Grid> */}
      <Grid item xs={12}>
        <ImageList variant="quilted" cols={4} rowHeight={121} gap={8}>
          {entriesList.map((data) => {
            return <CreateCard asset={data} key={data.sys.id} />;
          })}
        </ImageList>
      </Grid>
    </Grid>
  // </Box>
  );
}
