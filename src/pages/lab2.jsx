import * as React from "react";

export default function NovelButton() {
  return (
    <div className="page">
      <h1>novel button lab</h1>
      <p>
        Can we activate electronics with buttons of our own design? In this lab,
        we were asked to tell a story based on a few prompts by creating custom
        "buttons" of sorts. We decided to create buttons out of a tiny swimming
        pool, keyboard, and glowing trees to simulate a backyard rave / pool
        party.
      </p>
      <p>
        We started by sketching out what we wanted our buttons to look like. To
        create the swimming pool, we used the Cricut to cut out pieces of
        cardstock in the shape of a wave and the walls.
      </p>
      <div className="images">
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-1.png?v=1679586391884" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-2.png?v=1679586390764" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-3.png?v=1679586395937" />
        {/*        <img src="../../public/lab2-1.png" />
        <img src="../../public/lab2-2.png" />
        <img src="../../public/lab2-3.png" /> */}
      </div>
      <p>
        We taped the waves to the swimming pool walls and added a piece of blue
        cardstock on top to represent the surface of the pool. We then covered
        the interior of the top and bottom of the box with copper tape and
        inserted a "spring" made of duct tape between them to create a button
        that would be activated when the pool's surface was pushed down
        (representing someone jumping into the pool). We used alligator clips to
        connect the copper tape to a Makey Makey, a device that maps objects to
        computer keys, so that this button could be activated with a computer's
        space bar.
      </p>
      <div className="images">
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-4.png?v=1679586478474" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-5.png?v=1679586478777" />
        {/*        <img src="../../public/lab2-4.png" />
        <img src="../../public/lab2-5.png" /> */}
      </div>
      <p>
        This computer was connected to Scratch, the block-based programming
        language, and the swimming pool activated the program, starting the rave
        music and enabling the keyboard's functionality. We also constructed
        this keyboard in real life, to represent a kind of DJ set. The keyboard
        was made in a similar fashion to the swimming pool - copper tape
        sandwiched between cardstock acted as buttons that mapped onto different
        pins on the Makey Makey and different sounds in Scratch.
      </p>
      <div className="images">
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-6.png?v=1679586532140" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-7.png?v=1679586539535" />
        {/*        <img src="../../public/lab2-6.png" />
        <img src="../../public/lab2-7.png" /> */}
      </div>
      <p>
        Finally, the trees, which were activated by a handmade dial that would
        trigger them to glow in different colors. The trees themselves were
        designed in Inkscape and cut out of cardbard with the Cricut, while the
        internal wiring was cut out of copper tape, also with the Cricut. The
        dial was made out of copper tape, cardboard, and a dowel. The LEDs were
        connected to the copper tape inside the trees, and the trees were
        connected to the dial and the batteries with alligator clips.
      </p>
      <div className="images">
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-8.png?v=1679586580115" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-9.png?v=1679586593680" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-10.png?v=1679588455113" />
        {/*        <img src="../../public/lab2-8.png" />
        <img src="../../public/lab2-9.png" />
        <img src="../../public/lab2-10.png" /> */}
      </div>
      <div className="images">
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-11.png?v=1679588709616" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-12.png?v=1679588711495" />
        <img src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/lab2-13.png?v=1679588720865" />
        {/*        <img src="../../public/lab2-11.png" />
        <img src="../../public/lab2-12.png" />
        <img src="../../public/lab2-13.png" /> */}
      </div>
      <p>
        <a
          href="https://docs.google.com/document/d/1GeIRbg90gH9fO7a3AVyHtGYGJ6_jtDW20Qy-dEHDquA/edit"
          target="_blank"
        >
          Link to step-by-step instructions
        </a>
      </p>
      <span className="empty"></span>
    </div>
  );
}
