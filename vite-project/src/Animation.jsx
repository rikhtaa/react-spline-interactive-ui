import Spline from "@splinetool/react-spline";
import styled from "styled-components";

export default function Animation() {
  return (
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/i6oHi4XMFX0QxCKU/scene.splinecode"
        />
        <Menu>
          <div className="menu-li">
            <li>
              <img src="/images/logo.svg" alt="Logo" />
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Download</a>
            </li>
            <li>
              <a href="/">App</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </div>
          <div>
            <li>
              <button>Get Started</button>
            </li>
          </div>
        </Menu>
        <Content>
          <h1>Collaborate with people</h1>
          <p>
            Bring your team together and build your community by using our
            cross-platform app that lets you Collaborate via chat, voice and by
            sharing and storing unlimited media files.A world of topics is
            waiting for you.Join the private beta.
          </p>
          <button>
            <img src="/images/icon-laptop.svg" alt="Download" />
            Download for Mac
          </button>
        </Content>
        <Social>
          <div />
          <img src="/images/icon-twitter.svg" alt="Twitter" />
          <img src="/images/icon-youtube.svg" alt="Youtube" />
        </Social>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  width: 100%;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    width: auto !important;
    height: auto !important;
    overflow: visible !important;
    z-index: 0;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
      margin-top: 60px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  top: 144px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  max-width: 57%;
  z-index: 2;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: "Spline Sans", sans-serif;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
  }
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 1s;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }
  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    position: relative;
    gap: 30px;
    align-items: center;
    margin: 20px 30px 0 100px;
    padding: 0;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    margin-left: 30px;
    .menu-li {
      margin-inline: 0;
    }
  }

  div li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;

      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
  @media (max-width: 800px) {
    font-size: 40px;
    justify-content: space-between;
    div li:nth-child(2),
    div li:nth-child(3),
    div li:nth-child(4),
    div li:nth-child(5) {
      display: none;
    }
  }

  div button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 1s;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
