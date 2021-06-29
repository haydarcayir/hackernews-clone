import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div
      className="position-fixed"
      style={{
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        paddingTop: "50vh",
        paddingLeft: "50vw",
        backgroundColor: "#f8f9fa",
        opacity: "0.5",
      }}
    >
      <Spinner animation="grow" variant="danger"></Spinner>
    </div>
  );
};

export default Loading;
