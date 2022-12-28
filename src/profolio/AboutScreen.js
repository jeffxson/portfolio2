import React from "react";
import { Container } from "react-bootstrap";
import logo from "./meme.jpg";
import insur from "./insurepass.png";
import game from "./game.png";
import Rp from "./rp.PNG";
import kwaba from "./kwaba.PNG";
export const work = [
  {
    picture: insur,
    discribtion:
      "Insurpass is ushering in the future of insurance, creating amazing opportunities for insurers to access trusted digital distribution channels to provide coverage for the underserved ",
    link: "https://www.insurpass.com/",
    name: "Insurepass",
  },
  {
    picture: game,
    discribtion:
      "Gamelyd is an online plartform that helps in organizing game tournaments in diffrent modes, Gamelyd simplifies and makes it easy for people in diffrent locations to meet and play tournaments together.",
    link: "https://www.gamelyd.com/",
    name: "Gamelyd",
  },
  {
    picture: Rp,
    discribtion:
      "RP Shortlets is a subsidiary of Real Property Assets and Technologies Limited, a boutique real estate and facilities management company founded in 2012. With our unique contemporary style and passion for connecting people with property, we aspire to provide the ultimate real estate experience for today’s modern consumer.",
    link: "https://www.rpshortlets.com/",
    name: "Rpshortlets",
  },
  {
    picture: kwaba,
    discribtion:
      "Track rent payments, send rent reminders and manage your properties easily, Use Kwaba to send and receive rent reminders, collect rent, verify tenants and automate your entire property management process.",
    link: "https://www.kwaba.africa/",
    name: "Kwaba",
  },
];

const AboutScreen = () => {
  return (
    <>
      <Container>
        <div className="mainer">
          <h1 className="h11">About</h1>
          <p className="p11">
            Building quality websites and applications with HTML, CSS, and
            JavaScript. Provided front-end website development using React,
            HTML, CSS, Bootstrap, MongoDB Node.js and other editing software,
            seeks a position with a top technology firm. I have a strong
            interest in projects that require both conceptual and analytical
            thinking, I am extremely motivated to constantly develop my skills
            and grow professionally.
          </p>

          <div className="container1">
            <div className="box1">
              <img src={logo} className="logo" alt="logo" />
            </div>

            <div className="box2">
              <div className="type">
                <h2>Frontend Developer</h2>
                <p>
                  Hello, i am a frontend web developer and here are basic
                  information about me and some personal information
                </p>
                <div className="new-box">
                  <div className="boxer1">
                    <ul className="basic-info">
                      <h3>Contact</h3>
                      <li>
                        <b>Email :</b> jeffxon20@gmail.com
                      </li>
                      <li>
                        <b>Phone :</b> +234 903 473 683
                      </li>
                      <li>
                        <b>City :</b> Lagos, Nigeria.
                      </li>
                      <li>
                        <b>Freelance :</b> Avalable
                      </li>
                      <li>
                        <b>Nationality :</b> Nigeria
                      </li>
                    </ul>
                  </div>
                  <div className="boxer1">
                    <ul className="basic-info">
                      <h3>Skills</h3>
                      <h5>Languages</h5>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <h5>CD/CI</h5>
                      <li>Github</li>
                      <li>Git</li>
                    </ul>
                  </div>
                  <div className="boxer1">
                    <ul className="basic-info">
                      <h3>Skills</h3>
                      <h5>Libraries</h5>
                      <li>Redux</li>
                      <li>TypeScript</li>
                      <li>NextJS</li>
                      <li>React Native</li>
                      <li>Bootstrap</li>
                      <li>Chakra ui</li>
                    </ul>
                  </div>
                  <div className="boxer1">
                    <ul className="basic-info">
                      <h3>Skills</h3>
                      <h5>Libraries</h5>

                      <li>Npm</li>
                      <li>Rest API</li>
                      <li>Material ui</li>
                      <li>Styled components</li>
                      <li>Express</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="cards">
          {work.map((item) => (
            <p>
              <li>
                <a href={item.link} class="card">
                  <img src={item.picture} class="card__image" alt="" />
                  <div class="card__overlay">
                    <div class="card__header">
                      <div class="card__header-text">
                        <h3 class="card__title">{item.name}</h3>
                      </div>
                    </div>
                    <p class="card__description">{item.discribtion}</p>
                  </div>
                </a>
              </li>
            </p>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default AboutScreen;
