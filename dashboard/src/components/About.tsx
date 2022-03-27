const About = () => {
  return (
    <article class="pa3 pa5-ns">
      <h1 class="f3 f2-m f1-l">About</h1>
      <p class="measure lh-copy">
        Herein is a discussion and guide of the projects on this site, each of
        which was built to practice or extend a concept in React, Preact,
        Javascript, Typescript, and other assorted web technologies.
      </p>
      <p class="measure lh-copy">
        First, find the video switcher <a href="/about">here</a>. The purpose of
        this was to practice concepts related to state, props, and the
        parent/child/sibling programming pattern. I also wrote it as classes
        rather than funcitons because it's still important to be aware of this
        slightly older programming paradigm.
      </p>
    </article>
  );
};

export default About;
