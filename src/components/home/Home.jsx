import { Container, Row } from "react-bootstrap";

import Navbar from "../Navbar";
import Table from "./table/Table";
import Config from "./Config/Config";

// react-bootstrap components

const Home = () => {
    return (
      <>
        <Navbar />
        {/* `mainContentRow` Styled in style.scss for responsive 100vh height */}
        <Row className="container-fluid m-0 p-0" id="mainContentRow"> 
          <Config/>
          <Table/>
        </Row>
      </>
    );
  }
export default Home;