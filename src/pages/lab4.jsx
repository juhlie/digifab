import * as React from "react";

export default function WearableSynth() {
  return (
    <div className="page">
      <h1>wearable synth sensor lab</h1>
      <p>
        I made a plushie bear with a pocket for a plushie heart. The heart,
        which is conductive, can be squished to activate the bear's arrhythmia.
      </p>
      <div className="images">
        <img src="/lab4-1.jpg" />
        <img src="/lab4-2.jpg" />
        <img src="/lab4-3.jpg" />
      </div>
      <p>
        What's this arrhythmia? It's the name of the sonic piece that my
        labmates and I decided to perform for this assignment. Each of us
        created our own instrument of sorts to play as part of an improvised
        band.
      </p>
      <p>
        My instrument, the bear plushie, played various heartbeat sounds from a
        speaker connected to the Arduino Tone library. I wanted to make a squish
        sensor that could be stored inside the bear's heart so that the
        arrhythmia could be triggered when the heart was squished. I wasn't
        entirely sure how to approach this, so I began with diagramming ideas
        and testing the resistance of a spool of conductive thread. I connected
        parts of the thread to a circuit with a speaker and an Arduino Nano,
        testing out various resistances to see which values produced a readable
        range of serial input data.
      </p>
      <div className="images">
        <img src="/lab4-4.jpg" />
        <img src="/lab4-5.jpg" />
        <img src="/lab4-6.jpg" />
      </div>
      <p>
        I ultimately decided to create a pom pom out of yarn and conductive
        thread, inspired by the{" "}
        <a href="https://www.kobakant.at/DIY/?p=2028" target="_blank">
          conductive pom pom tutorial
        </a>{" "}
        from the Kobakant art collective. I tried to increase the connections
        between conductive parts of the pom pom by creating multiple clusters of
        yarn interlaced with conductive thread and then wrapping the conductive
        thread through these clusters repeatedly. I also tried to tie these
        clusters together in the vague shape of a heart. The resistance of the
        pom pom was approximately 30 ohms at rest and 15 ohms when squished. I
        initially had some trouble reading these values into the Arduino, but
        was successful when using a resistor with a small value.
      </p>
      <div className="images">
        <img src="/lab4-7.jpg" />
        <img src="/lab4-8.jpg" />
        <img src="/lab4-9.jpg" />
      </div>
      <p>
        When I was convinced that it was possible to use this pom pom as a
        squish sensor, I quilted together old pieces of scrap fabric to create a
        patchwork heart casing and put the pom pom inside. I used some stuffing
        to fill out the heart and created two holes in the back of the casing
        for either end of the conductive thread to poke through.
      </p>
      <div className="images">
        <img src="/lab4-10.jpg" />
        <img src="/lab4-11.jpg" />
        <img src="/lab4-12.jpg" />
      </div>
      <p>
        I then connected the conductive thread to solid wire and soldered these
        wires to the circuit with the speaker and the Arduino. I also sewed two
        pieces of canvas together to create a heart-sized pocket for the
        interior of the bear.
      </p>
      <div className="images">
        <img src="/lab4-13.jpg" />
        <img src="/lab4-14.jpg" />
        <img src="/lab4-15.jpg" />
      </div>
      <p>
        I continued quilting pieces of scrap fabric together to form the bear's
        exterior. I essentially created a larger pocket with the quilt and
        placed the smaller canvas pocket inside the larger quilted one. This
        left some room between the pockets to put the stuffing, turning the
        whole thing into a plushie, and also left some places to store the
        hardware components.
      </p>
      <p>
        I designed some eyelashes in Inkscape so I could use the embroidery
        machine to sew them onto the fabric. I embroidered the eyelashes on
        twice, once in a lighter color and again in a darker color, to give them
        more dimension. After this, the embroidery machine was briefly out of
        commission, so I used a sewing machine to embroider the bear's nose and
        mouth by hand. Notice the difference between the two designs:
      </p>
      <div className="images">
        <img src="/lab4-16.jpg" />
        <img src="/lab4-17.jpg" />
        <img src="/lab4-18.jpg" />
      </div>
      <p>
        For the finishing touches, I sewed some stuffing into the casing for the
        bear's nose and mouth, added belt loops to the back of the bear, and
        attached a belt through these loops so that the bear could be worn on a
        shoulder sling. I also glued some fuzzy pink fabric onto the top of the
        bear. This fabric looks like hair and doubles as a cover for the pocket
        with the heart.
      </p>
      <div className="images">
        <img src="/lab4-19.jpg" />
        <img src="/lab4-3.jpg" />
        <img src="/lab4-1.jpg" />
      </div>
      <p>
        We decided to give this bear the name "C. Shreddy Bear" as an homage to
        a recently released movie about a bear, and also because this bear is
        aparently the frontman of our band. Here is C. Shreddy Bear in action:
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/zB4XHj5xS0A"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
