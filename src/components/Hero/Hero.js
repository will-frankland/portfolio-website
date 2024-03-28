import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, I'm Will <br />
        Welcome to my portfolio!
      </SectionTitle>
      <SectionText>
        I'm currently working as a Junior Web Developer having made a switch from Mechanical Engineering. See my projects
        and learn more about me below.
      </SectionText>
      {/* <Button href="./public/will-frankland-resume.pdf" download>
        Download My Resume
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
