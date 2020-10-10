import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Hobbies() {
  return (
    <div className="col-xs-12 row text-align-justify">
      <div className="col-xs-12">
        <ScrollAnimation animateIn="fadeIn">
          <p className="margin-0-t">
            To switch things up from every other portfolio out there I thought I'd give you a chance
            to get to know me a bit more first. So here are some things that I am passionate about
            outside of my career.
          </p>
        </ScrollAnimation>
      </div>
      <div className="col-xs-12 col-md-6 align-self-center">
        <ScrollAnimation animateIn="fadeIn">
          <img className="fill-width reduce-on-small" src="images/unDraw/gaming.svg" alt="blog" />
        </ScrollAnimation>
      </div>
      <div className="col-xs-12 col-md-6">
        <ScrollAnimation animateIn="fadeInRight" duration={0.5}>
          <p>
            First and foremost I am a PC enthusiast. My passion is PC building and if money was no
            object I would spend my days researching and building custom PCs.
          </p>
          <p>
            To date I have built 5 custom PCs, 2 of my own and 3 for my friends. On top of this I
            have fixed and troubleshooted countless issues for friends. I very much plan for these
            numbers to continue to rise and I enjoy helping where I can.
          </p>
          <p>
            I also like to push my PC builds to the extreme by overclocking the PC components to get
            the most out of their performance. I also put a lot of time and effort into the
            aesthetics of my builds as I take great pride in how they look.
          </p>
          <p>
            I also like to play games. I favour story driven, open world games where you can just
            sink into the story and world that has been built. I also won't say no to fun
            multiplayer games with my friends where you can just mess about and have fun.
          </p>
        </ScrollAnimation>
      </div>
      <div className="col-xs-12 col-md-6 order-2">
        <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
          <p>I also like to stay fit and healthy by going to the gym regularly to keep in shape.</p>
          <p>
            I no longer compete but my strongest sport is Table Tennis. I played for most of my
            teenage years and managed to reach regional level in the sport and also represented my
            University.
          </p>
          <p>
            I have recently started reading again after many years of not touching a book. Having
            long been a fan of a the films, I thought I would give The Lord of the Rings books a
            try. I am glad I decided to do so as I had long forgotten the joy of reading and I have
            learnt so much more about the world that I love.
          </p>
        </ScrollAnimation>
      </div>
      <div className="col-xs-12 col-md-6 align-self-center order-1">
        <ScrollAnimation animateIn="fadeIn">
          <img className="fill-width reduce-on-small" src="images/unDraw/gym.svg" alt="blog" />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Hobbies;
