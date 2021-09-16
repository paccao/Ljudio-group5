import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import IconButton from "@material-ui/core/IconButton";
import { Box, Typography, CssBaseline } from "@material-ui/core";




import { SearchContext } from "../context/SongProvider";

function DetailsPage() {
  const { songDetail, addObjToArray } = useContext(SearchContext);

  const history = useHistory();

  function addToQueue() {
    addObjToArray(songDetail);
    console.log("console log for entire songDetail obj", songDetail);
    console.log("consol log for songdetail.vidID", songDetail.videoId);
    history.push("/searchResults");
  }

  return (
    <>
    <CssBaseline/>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#FFF7E3"
      style={{
        height: 700,
        flexDirection: "column",
      }}
    >
      <img
        style={{ height: 200 }}
        src={songDetail.thumbnail}
        alt={songDetail.artist + "'s cover thumbnail"}
      />
      <Typography fontSize = "small" variant="h5">{songDetail.name}</Typography>
      <Box>
        <IconButton type="click" onClick={addToQueue}>
          <AddToQueueIcon fontSize="large" />
        </IconButton>

        <IconButton>
          <PlaylistAddIcon fontSize="large" />
        </IconButton>

        <IconButton>
          <ShareOutlinedIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
    </>
  );
}



export default DetailsPage;
