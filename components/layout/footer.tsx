import React from "react";
import styled from "styled-components";
import Darkmode from "darkmode-js";

const CustomFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
`;

export const options = {
  top: "5px", // default: '32px'
  right: "32px", // default: '32px'
  left: "unset", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
  zIndex: 200,
  "z-index": 200,
};

export const Footer = () => {
  return (
    <CustomFooter className="bg-dark">
      <div className="container">
        <span className="text-white">
          &#169;
          {`${new Date().getFullYear()} Company Inc. All Rights Reserved`}
        </span>
        <div className="float-right">
          <a
            href="https://github.com/anishagg17/Blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div style={{ zIndex: 200 }}> {new Darkmode(options).showWidget()}</div>{" "}
      </div>
    </CustomFooter>
  );
};

Footer.displayName = "Footer";
