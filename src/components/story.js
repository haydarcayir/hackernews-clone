import React from "react";
import Card from "react-bootstrap/Card";
import { Heart, MessageCircle } from "react-feather";
import { useLocation } from "react-router-dom";

import { convertTimeToDate } from "../utils/utilsFunction";

const Story = ({ story: { title, by, time, score, kids } }) => {
  const location = useLocation();
  return (
    <Card bg="light" text="dark" className="h-100">
      <Card.Body>
        <Card.Subtitle className="mb-1 text-muted">{by}</Card.Subtitle>
        <Card.Subtitle style={{ fontSize: "12px" }} className="mb-2 text-muted">
          {convertTimeToDate(time, location.pathname)}
        </Card.Subtitle>
        <Card.Title as="h6">{title}</Card.Title>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center justify-content-around">
        <div>
          <Heart size="16" className="mr-2" color="black" />
          <span>{`${score} reactions`}</span>
        </div>
        <div>
          <MessageCircle size="16" className="mr-2" color="black" />
          <span>{`${kids ? kids.length : 0} comment`}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Story;
