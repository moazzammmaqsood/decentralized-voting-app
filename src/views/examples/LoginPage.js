import React from "react";
import Meta from "components/Headers/MetaTag.js";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function LoginPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  
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
  
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <Meta />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/votingbg1.jpg") + ")",
          }}
        ></div>
        <div className="content" style={{"margin-top": "5%"}}>
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/e-voting.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="CNIC..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons shopping_box"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Vote To..."
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        type="select"
                      >
                        {itemData.map((item) => (
                          <option value={item.id}
                          style={{
                           color: "#333",
                          }}>{item.author}</option>
                        ))}
                      </Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      Vote
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Verify CNIC
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;
