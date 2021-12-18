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
} from "reactstrap";
import {ImageList,ImageListItem,ImageListItemBar} from "@mui/material";

// core components

function Vote() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [cnicFocus, setCnicFocus] = React.useState(false);
  
  const itemData=[];
  const item = {};
  const item2 = {};
  const item3 = {};
  
 

  itemData.push(
    item.img =    "https://i.dawn.com/primary/2018/07/5b4df20f3eafc.png",// require("assets/img/eva.jpg").default;
    item.author = "PTI - Pakistan Tehreek e Insaaf"
  ); 
  //https://i.dawn.com/primary/2018/07/5b4ee52c4d1ff.png
  itemData.push(
    item2.img =    "https://i.dawn.com/primary/2018/07/5b4ee52c4d1ff.png",// require("assets/img/eva.jpg").default;
    item2.author = "PPP - Pakistan Peoples Party"
  ); 
  itemData.push(
    item2.img =    "https://i.dawn.com/primary/2018/07/5b4ee52c4d1ff.png",// require("assets/img/eva.jpg").default;
    item2.author = "PPP - Pakistan Peoples Party"

  ); 
  itemData.push(  
  item2.img =    "https://i.dawn.com/primary/2018/07/5b4ee52c4d1ff.png",// require("assets/img/eva.jpg").default;
  item2.author = "PPP - Pakistan Peoples Party"
); 
  return (
    <>
      <div
        className="section section-signup"
        id="signup-section"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bg11.jpg").default + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
          <Row>
            <Card     data-background-color="blue">
            <ImageList variant="standard" cols={5} gap={3}>
              
              {itemData.map((item) => (
            
                <ImageListItem key={item.img}>
                 
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar position="below" title={item.author} />
                </ImageListItem>
              ))}
            </ImageList>
            </Card>
          </Row>
          <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              to="/login-page"
              outline
              size="lg"
              tag={Link}
            >
              View Login Page
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Vote;
