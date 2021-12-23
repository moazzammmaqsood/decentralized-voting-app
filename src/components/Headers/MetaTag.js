import React from 'react';
import MetaTags from 'react-meta-tags';

class Meta extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            {/* <title>E-Voting</title> */}
            <link rel="apple-touch-icon" sizes="180x180" href={require("assets/img/favicon/apple-touch-icon.png")} />
            <link rel="icon" type="image/png" sizes="32x32" href={require("assets/img/favicon/favicon-32x32.png")} />
            <link rel="icon" type="image/png" sizes="16x16" href={require("assets/img/favicon/favicon-16x16.png")} />
            <link rel="manifest" href={require("assets/img/favicon/site.webmanifest")} />
            <link rel="shortcut icon" href={require("assets/img/favicon/favicon.ico")} />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="msapplication-config" content={require("assets/img/favicon/browserconfig.xml")} />
            <meta name="theme-color" content="#ffffff" />
          </MetaTags>
        </div>
      )
  }
}

export default Meta;