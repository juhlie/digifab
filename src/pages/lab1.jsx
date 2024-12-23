import * as React from "react";

export default function HandmadeMachine() {
  return (
    <div className="page">
      <h1>handmade machine lab</h1>
      <p>
        The world needs new machines! We were asked to imagine and design our
        own custom handmade machine based on four randomly-selected prompts:
        “fun-sized,” “speck of dust,” “a room,” and “giggle.” Given the time and
        material constraints (we were mostly working with duct tape and
        cardboard), we ultimately decided to make a tiny dust-activated
        giggle-inducing room.
      </p>
      <p>
        This machine had three components: a dust funnel, a helmet, and the room
        itself. Each component was made by a different group member.
      </p>
      <p>We constructed the funnel with duct tape and cardboard strips...</p>
      <div className="images">
        <img src="/lab1-1.jpg" />
        <img src="/lab1-2.jpg" />
        <img src="/lab1-3.jpg" />
      </div>
      <p>
        and created the helmet by connecting cardboard strips in a dome-shape...
      </p>
      <div className="images">
        <img src="/lab1-4.jpg" />
        <img src="/lab1-5.jpg" />
        <img src="/lab1-6.jpg" />
      </div>
      <p>
        and attached the funnel and the helmet together. We also used cardboard
        to build walls around a chair, simulating a fun-sized "room".
      </p>
      <div className="images">
        <img src="/lab1-7.jpg" />
        <img src="/lab1-8.jpg" />
        <img src="/lab1-9.jpg" />
      </div>
      <p>Here's a demo of the finished product, the Gigglenator 2000:</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/tW9JQY64RdI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <span className="empty"></span>
    </div>
  );
}
