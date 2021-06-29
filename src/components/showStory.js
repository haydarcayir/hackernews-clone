import React from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Story from "./story";
import Loading from "./loading";
import useStoriesFetcher from "../hooks/storiesFetcher";

const ShowStory = () => {
  const { type } = useParams();
  const { isLoading, stories } = useStoriesFetcher(type);

  return (
    <Row>
      {isLoading && <Loading />}
      {!isLoading && (
        <React.Fragment>
          {stories.map((story) => (
            <Col xs={12} md={4} className="mb-2">
              <Story key={story.id} story={story} />
            </Col>
          ))}
        </React.Fragment>
      )}
    </Row>
  );
};

export default ShowStory;
