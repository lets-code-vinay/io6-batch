import React from "react";
import { Rating } from "react-simple-star-rating";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import "./style.css";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { getAvatarName, getFormattedDate } from "../../utils/utility";

const UserRating = ({ review }) => {
  return (
    <Paper elevation={2} className="user-rating">
      <Box className="avatar-container">
        <Avatar>{getAvatarName(review?.reviewerName)}</Avatar>
        <Box className="name-section">
          <Typography variant="h6">{review?.reviewerName}</Typography>
          <Typography variant="body2">{review?.reviewerEmail}</Typography>
        </Box>
      </Box>
      <Rating
        initialValue={review?.rating}
        readonly={true}
        size={25}
        className="stars"
      />
      <Typography variant="h6">{review?.comment}</Typography>

      <Box className="ratings-given">
        <Typography variant="body2">
          {getFormattedDate(review?.date)}
        </Typography>

        <Box className="thumbs-given-section">
          <Box className="thumbs-given">
            <ThumbUpAltOutlinedIcon color="primary" />
            <Typography color="primary" variant="body2">
              {(Math.random() * 10).toFixed(0)}
            </Typography>
          </Box>
          <Box className="thumbs-given">
            <ThumbDownOutlinedIcon color="secondary" />
            <Typography color="secondary" variant="body2">
              {(Math.random() * 10).toFixed(0)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserRating;
