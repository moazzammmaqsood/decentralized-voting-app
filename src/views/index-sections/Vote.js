import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import {ImageList,ImageListItem,ImageListItemBar} from "@mui/material";

// core components

function Vote() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [cnicFocus, setCnicFocus] = React.useState(false);
  
  const itemData=[]; 

  itemData.push({
    "id": 1,
    "img" :   "https://i.dawn.com/primary/2018/07/5b4df20f3eafc.png",// require("assets/img/eva.jpg");
    "author" : "PTI - Pakistan Tehreek e Insaaf",
    "symbol": "Bat"
  }); 
  //https://i.dawn.com/primary/2018/07/5b4ee52c4d1ff.png
  itemData.push(  {
    "id": 2,
    "img" :  "https://i.dawn.com/primary/2018/07/5b505ecd4fbc2.png",// require("assets/img/eva.jpg");
    "author" : "MQM - Mutahida Qoumi Moment",
    "symbol": "Kite"
    }); 
  itemData.push(  {
    "id": 3,
    "img" :  "https://i.dawn.com/primary/2018/07/5b4ee52c4d1ff.png",// require("assets/img/eva.jpg");
    "author" : "PPP - Pakistan Peoples Party",
    "symbol": "Arrow"
    }); 
  itemData.push(  {
    "id": 4,
  "img" :  "https://i.dawn.com/primary/2018/07/5b4ee57146316.png",// require("assets/img/eva.jpg");
  "author" : "PMLN - Pakistan Muslim League N",
  "symbol": "Tiger"
  }); 
  //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dawn.com%2Fnews%2F1401376&psig=AOvVaw1Uc2t0vazBctRZsp7JY5Ib&ust=1640181653195000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjysPmG9fQCFQAAAAAdAAAAABAD
  itemData.push({
    "id": 5,
    "img" :  "https://i.dawn.com/primary/2018/07/5b4ee75074c57.png",// require("assets/img/eva.jpg");
    "author" : "JUI - Jamat-e-Islami",
    "symbol": "Symbol of Justice"
    }); 
  
  return (
    <>
      <div
        className="section section-signup text-center"
        id="signup-section"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
        <h2 className="title">Here is our team</h2>
            <div className="team">
          <Row>
           {itemData.map((item) => (
             
             <Col md="4">
             <div className="team-player">
               <img
                 alt="..."
                 className=" img-fluid img-raised"
                 src={`${item.img}?w=50`}
               ></img>
               <h4 className="title text-white">{item.author}</h4>
               <p className="category text-info">{item.symbol}</p>
             </div>
           </Col>
            ))}
          </Row>
          </div>
          <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              to="/login-page"
              outline
              size="lg"
              tag={Link}
            >
              Cast Your Vote Today!
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Vote;
