import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <main>
      <h1>Kenneth Suarez</h1>
      <h2>Frontend Developer</h2>
      <a href="https://github.com/Gibran602">
        <p>https://github.com/Gibran602</p>
      </a>
      <a href="mailto:gibransuarez893@gmail.com">
        <button className="email-button">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </button>
      </a>
      <a href="https://www.linkedin.com/in/gibran-suarez602">
        <button className="linkedin-button">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </button>
      </a>
      <div className="sections-container">
        <section className="about-section">
          <h3>About</h3>
          <p>
            Hi, I'm a Frontend Developer with a passion for technology and
            problem-solving. Originally from Puerto Rico, I now live in the
            United States, where I continue to pursue my love for coding.
            Outside of work, I enjoy traveling, camping, and gaming in my
            downtime. Always seeking new challenges and experiences, I'm excited
            about creating innovative solutions and exploring the world around
            me.
          </p>
        </section>
        <section className="interests-section">
          <h3>Interests</h3>
          <p>
            Traveling and discovering new places. Camping and outdoor
            adventures. Gaming in my free time. Exploring tech trends and
            innovations. Hiking and staying active outdoors. Learning about
            different cultures.
          </p>
        </section>
      </div>
    </main>
  );
}
