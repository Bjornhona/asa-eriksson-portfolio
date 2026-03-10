"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";
import BlendImageFilter from "@/components/BlendImageFilter/BlendImageFilter";
import { Button } from "@/ui";
import { MailIcon } from "lucide-react";
import { TimeLineWrapper } from "@/components/TimeLineWrapper/TimeLineWrapper";

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const experience = new Date().getFullYear() - 2019;

  return (
    <div className="relative container pt-[64px] pb-12">
      <motion.div
        className="absolute right-[var(--space-4)] sm:right-[var(--space-6)] md:right-[var(--space-8)] lg:right-[var(--space-10)] xl:right-[var(--space-12)] w-[40vw] h-[40vw] aspect-square overflow-hidden rounded-full"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <BlendImageFilter
          src="/Me.jpg"
          alt="Åsa Eriksson"
          width={400}
          height={400}
          className="-translate-y-4 xs:-translate-y-6 sm:-translate-y-10 md:-translate-y-16"
          loading="eager"
        />
      </motion.div>
      <div className="relative">
        <div className="min-h-screen z-10 flex max-w-2xl flex-col justify-center pb-24 [text-shadow:0_2px_6px_rgba(0,0,0,0.5)]">
          <motion.div
            className="space-y-4 max-w-xs xs:sm:max-w-sm md:max-w-md lg:max-w-lg"
            variants={container}
            initial="initial"
            animate="animate"
          >
            <motion.h1 variants={fadeInUp}>
              <TitleHoverGlow title="About Me." />
            </motion.h1>

            <motion.h4 variants={fadeInUp}>
              I’m a <strong>Frontend Developer and Product Designer</strong> who
              builds modern web applications with a strong focus on usability,
              performance, and clean architecture.
            </motion.h4>

            <motion.h6 variants={fadeInUp}>
              With a background in both <strong>design and engineering</strong>,
              I bridge the gap between visual creativity and technical
              execution. My goal is simple: create digital products that are{" "}
              <strong>beautiful, intuitive, and scalable</strong>.
            </motion.h6>

            <motion.h6 variants={fadeInUp}>
              I work with companies and startups around the world to transform
              ideas into <strong>high-quality web experiences</strong>.
            </motion.h6>
          </motion.div>
        </div>
      </div>

      <TimeLineWrapper
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <motion.div
          className="space-y-4 my-24"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeInUp}>My Background</motion.h3>

          <motion.h6 variants={fadeInUp}>
            My path into tech started from the design side.
          </motion.h6>
          <motion.h6 variants={fadeInUp}>
            I began my career working with{" "}
            <strong>graphic design and user experience</strong>, helping brands
            communicate visually and craft better digital products. Over time, I
            became increasingly interested in the technical side of building
            those experiences.
          </motion.h6>
          <motion.h6 variants={fadeInUp}>
            That curiosity led me to transition into{" "}
            <strong>frontend development</strong>, where I could combine design
            thinking with engineering.
          </motion.h6>
          <motion.h6 variants={fadeInUp}>
            Today, I specialize in building{" "}
            <strong>modern web applications with React and Next.js</strong>,
            focusing on performance, scalability, and exceptional user
            experience.
          </motion.h6>
          <motion.h6 variants={fadeInUp}>
            With experience working in professional development teams and
            delivering production-ready applications, I understand what it takes
            to build software that is{" "}
            <strong>
              not only visually polished but also maintainable and reliable
            </strong>
            .
          </motion.h6>
        </motion.div>
      </TimeLineWrapper>

      <TimeLineWrapper
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <motion.div
          className="space-y-4"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeInUp}>What I Do</motion.h3>

          <motion.h6 variants={fadeInUp}>
            I help companies design and build modern digital products.
          </motion.h6>

          <motion.h6 variants={fadeInUp}>
            My work focuses on three areas:
          </motion.h6>

          <motion.h4 variants={fadeInUp}>Frontend Development</motion.h4>
          <motion.h6 variants={fadeInUp}>
            Building fast, scalable, and maintainable web applications using
            modern technologies.
          </motion.h6>
          <motion.ul variants={fadeInUp} className="list-disc list-inside">
            <motion.li variants={fadeInUp}>React</motion.li>
            <motion.li variants={fadeInUp}>Next.js</motion.li>
            <motion.li variants={fadeInUp}>TypeScript</motion.li>
            <motion.li variants={fadeInUp}>Modern CSS architectures</motion.li>
            <motion.li variants={fadeInUp}>Performance optimization</motion.li>
          </motion.ul>

          <motion.h4 variants={fadeInUp}>Product & UI Design</motion.h4>
          <motion.h6 variants={fadeInUp}>
            Designing interfaces that are intuitive, elegant, and user-focused.
          </motion.h6>
          <motion.ul variants={fadeInUp} className="list-disc list-inside">
            <motion.li variants={fadeInUp}>UI design systems</motion.li>
            <motion.li variants={fadeInUp}>
              UX flows and product thinking
            </motion.li>
            <motion.li variants={fadeInUp}>Responsive design</motion.li>
            <motion.li variants={fadeInUp}>
              Accessibility and usability
            </motion.li>
          </motion.ul>

          <motion.h4 variants={fadeInUp}>Design-Driven Development</motion.h4>
          <motion.h6 variants={fadeInUp}>
            Combining design and development to create products where{" "}
            <strong>form and function work together seamlessly</strong>.
          </motion.h6>
        </motion.div>
      </TimeLineWrapper>

      <TimeLineWrapper
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <motion.div
          className="space-y-4 max-w-md mx-auto my-24"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeInUp}>My Approach</motion.h3>
          <motion.h6 variants={fadeInUp}>
            I believe great digital products are created when design and
            engineering work together from the beginning.
          </motion.h6>

          <motion.h5 variants={fadeInUp}>
            <strong>My workflow combines:</strong>
          </motion.h5>
          <motion.ul variants={fadeInUp} className="list-disc list-inside">
            <motion.li variants={fadeInUp}>
              Thoughtful product thinking
            </motion.li>
            <motion.li variants={fadeInUp}>Strong visual design</motion.li>
            <motion.li variants={fadeInUp}>Clean and scalable code</motion.li>
          </motion.ul>

          <motion.h6 variants={fadeInUp}>
            Instead of simply implementing designs, I focus on solving real
            product problems and building experiences that users actually enjoy
            using.
          </motion.h6>

          <motion.h5 variants={fadeInUp}>
            <strong>My core stack includes:</strong>
          </motion.h5>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Button variant="glass" className="pointer-events-none">
              React
            </Button>
            <Button variant="glass" className="pointer-events-none">
              Next.js
            </Button>
            <Button variant="glass" className="pointer-events-none">
              TypeScript
            </Button>
            <Button variant="glass" className="pointer-events-none">
              HTML & modern CSS
            </Button>
            <Button variant="glass" className="pointer-events-none">
              Component-based design systems
            </Button>
            <Button variant="glass" className="pointer-events-none">
              REST APIs
            </Button>
            <Button variant="glass" className="pointer-events-none">
              Performance optimization
            </Button>
          </motion.div>

          <motion.h6 variants={fadeInUp}>
            I’m also passionate about building reusable UI systems and scalable
            frontend architectures.
          </motion.h6>
        </motion.div>
      </TimeLineWrapper>

      <TimeLineWrapper
        index={3}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <motion.div
          className="relative space-y-4 max-w-md mx-auto my-24"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeInUp}
            className="absolute inset-0 bg-gradient-to-r from-aqua-400 to-blue-500 rounded-lg blur-md opacity-80 z-0"
          />
          <motion.h4
            variants={fadeInUp}
            className="relative italic text-background z-10 p-6"
          >
            &quot;Ideas bloom where the mind wanders, not just where the screen
            glows.&quot;
          </motion.h4>
        </motion.div>
      </TimeLineWrapper>

      <TimeLineWrapper
        index={4}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <motion.div
          className="space-y-4 max-w-md mx-auto my-24"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h6 variants={fadeInUp}>
            If you’re looking for a developer who understands both{" "}
            <strong>product design and frontend engineering</strong>, I’d love
            to hear about your project.
          </motion.h6>

          <motion.h6 variants={fadeInUp}>
            Let’s build something great together.
          </motion.h6>

          <Button variant="glass" href="mailto:info@asaeriksson.com">
            <MailIcon className="w-4 h-4" />
            Contact Me
          </Button>
        </motion.div>
      </TimeLineWrapper>

      <TimeLineWrapper
        index={5}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <motion.div
          className="space-y-4 max-w-md mx-auto my-24"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeInUp}>I have worked with</motion.h3>
          <motion.ul variants={fadeInUp} className="list-disc list-inside">
            <motion.li variants={fadeInUp}>Startups</motion.li>
            <motion.li variants={fadeInUp}>Digital products</motion.li>
            <motion.li variants={fadeInUp}>Scalable web applications</motion.li>
            <motion.li variants={fadeInUp}>Design-driven teams</motion.li>
          </motion.ul>
        </motion.div>
      </TimeLineWrapper>

      <TimeLineWrapper
        index={6}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        last={true}
      >
        <motion.div
          className="space-y-4 max-w-md mx-auto my-24"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeInUp}>
            My long experience counts on
          </motion.h3>
          <motion.h6 variants={fadeInUp}>
            {experience + 5}+ years of graphic design
            <br />
            {experience}+ years of frontend development
            <br />
            {experience}+ years of product & UI/UX design
            <br />
            {experience}+ years of design-driven development
            <br />
            {experience}+ years of building scalable web applications
            <br />
          </motion.h6>
        </motion.div>
      </TimeLineWrapper>
    </div>
  );
};

export default AboutPage;
