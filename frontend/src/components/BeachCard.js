import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import CardActions from "@material-ui/core/CardActions";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { cropString } from "../helpers/services";

const StyledCard = styled(Card)`
  width: 360px;
  height: 370px;

  .media {
    position: relative;
    height: 0;
    padding-top: 56.25%;
    transition: all 0.15s ease-out;

    &::after {
      transition: all 0.25s ease-in;
      content: "";
      background-color: black;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.4;
      width: 100%;
      height: 100%;
    }

    &:hover {
      transform: scale(1.08);
      transition: all 0.15s ease-in;

      &::after {
      width: 0%;
      transition: all 0.25s ease-in;
    }
    }
  }
`;

function BeachCard({ title, location, description, imageUrl, onClick }) {
  const image =
    imageUrl ||
    "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";

  return (
    <StyledCard>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        titleTypographyProps={{ variant: "h6" }}
        subheader={location}
      />
      <CardMedia
        className="media"
        image={image}
        title={title}
        onClick={onClick}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {cropString(description)}
        </Typography>
      </CardContent>
      {/* More actions
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </StyledCard>
  );
}

export default BeachCard;
