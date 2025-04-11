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
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab1-1.png?v=1679585889611" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab1-2.png?v=1679585930379" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab1-3.png?v=1679585937025" />
        {/*        <img src="../../public/lab1-1.png" />
        <img src="../../public/lab1-2.png" />
        <img src="../../public/lab1-3.png" /> */}
      </div>
      <p>
        and created the helmet by connecting cardboard strips in a dome-shape...
      </p>
      <div className="images">
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab1-4.png?v=1679586184251" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab1-5.png?v=1679586195278" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab1-6.png?v=1679586195911" />
        {/*         <img src="../../public/lab1-4.png" />
        <img src="../../public/lab1-5.png" />
        <img src="../../public/lab1-6.png" /> */}
      </div>
      <p>
        and attached the funnel and the helmet together. We also used cardboard
        to build walls around a chair, simulating a fun-sized "room".
      </p>
      <div className="images">
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab1-7.png?v=1679586292383" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab1-8.png?v=1679586296851" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab1-9.png?v=1679586299159" />
        {/*        <img src="../../public/lab1-7.png" />
        <img src="../../public/lab1-8.png" />
        <img src="../../public/lab1-9.png" /> */}
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
