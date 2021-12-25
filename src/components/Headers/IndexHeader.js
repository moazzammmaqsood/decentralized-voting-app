/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/votingbg2.png") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/e-voting.png")}
            ></img>
            <h1 className="h1-seo"><b>Decentralized Voting System</b></h1>
            <h4>Casting your vote is essential and the most influential, and peaceful tool that exists in a democratic society. Your vote is extremely vital to this system and this is why we would keep it secure, bias free and transparent. <br />Don't forget to use your right by casting a vote.</h4>
          </div>
         
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
