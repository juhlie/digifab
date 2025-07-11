import * as React from "react";

export default function ListeningMachine() {
  return (
    <div className="page">
      <h1>listening machine lab</h1>
      <p>We made human antennae!!!</p>
      <div className="images">
        {/* <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-1.png?v=1679588785637" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-2.png?v=1679588797100" /> */}
        <img src="./lab3-1.png" />
        <img src="./lab3-2.png" />
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/5Z92p5s4VPk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>
        For this lab, we were supposed to simulate some sort of animal sense -
        whether real or fictional - by using electronics to convert sensory
        inputs to outputs. We decided to create antennae that could respond to
        touch with facial vibrations, creating the impression of having
        antennae. This was accomplished using contact microphones (piezo disks)
        to function as touch sensors, buzzers (surface transducers) to deliver
        the vibrations, and wooden props in the shape of antennae.
      </p>
      <p>Diagramming our ideas and converting them to shapes in Fusion 360</p>
      <div className="images">
        {/* <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-3.png?v=1679588851708" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-4.png?v=1679588860055" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-5.png?v=1679588866601" /> */}
        <img src="./lab3-3.png" />
        <img src="./lab3-4.png" />
        <img src="./lab3-5.png" />
      </div>
      <p>Using Glowforge to laser cut the Fusion 360 design out of plywood</p>
      <div className="images">
        {/* <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-6.png?v=1679588902882" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-7.png?v=1679588908028" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-8.png?v=1679588914907" /> */}
        <img src="./lab3-6.png" />
        <img src="./lab3-7.png" />
        <img src="./lab3-8.png" />
      </div>
      <p>
        Securing and buttressing the antennae using disc cut-outs, and attaching
        them to a helmet made out of cardboard and duct tape
      </p>
      <div className="images">
        {/* <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-9.png?v=1679588922569" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-10.png?v=1679588920880" /> */}
        <img src="./lab3-9.png" />
        <img src="./lab3-10.png" />
      </div>
      <p>
        We initially connected the contact mics and buzzers to an analog
        amplifier, but decided to switch to using a digital amplifier because it
        could be stored more compactly on top of the cardboard helmet
      </p>
      <div className="images">
        {/* <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-11.png?v=1679588926205" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-12.png?v=1679588932964" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-13.png?v=1679588949442" /> */}
        <img src="./lab3-11.png" />
        <img src="./lab3-12.png" />
        <img src="./lab3-13.png" />
      </div>
      <p>
        We then taped the contact mics to the top of the antennae and arranged
        the buzzers to hang from the interior of the helmet so it would touch
        the wearer's temples. The breadboard, batteries, and amplifier sit
        somewhat precariously on top of the wearer's head.
      </p>
      <p>
        The final design is wearable, though the buzzers may need to be held up
        manually:
      </p>
      <div className="images">
        {/* <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94lab3-1.png?v=1679588785637" /> */}
        <img src="./lab3-1.png" />
      </div>
      <span className="empty"></span>
    </div>
  );
}
