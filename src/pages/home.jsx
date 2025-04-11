import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";

/**
 * The Home function defines the content that makes up the main content of the Home page
 *
 * This component is attached to the /about path in router.jsx
 * The function in app.jsx defines the page wrapper that this appears in along with the footer
 */

export default function Home() {
  return (
    <div className="homepage">
      <div>
        <h1>digital fabrication</h1>
      </div>
      <div>
        <img
          /** src="https://64.media.tumblr.com/57060c46397ada22d68d278146997a37/cfd4ac982e425977-be/s500x750/e09e82b2fb7154fc46cf8cc3e08a836c317fd666.gifv" */
          /** src="https://64.media.tumblr.com/3e7b3c3cd50dd105bb4eb071115982ab/fc10f6313504c52f-08/s1280x1920/4715804753649662c148977f1f6e268960371a7a.jpg" */
          /** src="https://64.media.tumblr.com/2dddd3947f9d25a9a0447984203a5f1d/d390959eae625e4a-bd/s2048x3072/48ef35a00921143e664a790da45b85f3ddec69df.jpg" */
          /** src="../../public/floaty_tamagotchi.gif" */
          src="https://cdn.glitch.global/3d578488-eef3-4a33-957d-5d424b110f94/floaty_tamagotchi.gif?v=1679585761568"
          className="illustration"
          alt="a floating tamagotchi..."
        />
      </div>
      <div>
        <h2>Hi, I'm Julie</h2>
        <p>
          This is my learning portfolio for Digital Fabrication, Spring '23,
          TIMARA 107A & 107B at Oberlin College
        </p>
      </div>
    </div>
  );
}
