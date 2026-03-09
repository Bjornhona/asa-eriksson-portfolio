"use client";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";
import BlendImageFilter from "@/components/BlendImageFilter/BlendImageFilter";
import { Button } from "@/ui";

const AboutPage = () => {
  return (
    <div className="relative container pt-[64px] pb-12">
      <div className="relative min-h-screen">
        <motion.div
          className="relative w-[40vw] h-[40vw] aspect-square overflow-hidden rounded-full ml-auto"
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
          />
        </motion.div>
        <div className="absolute top-0 left-0 z-10 flex min-h-screen max-w-2xl flex-col justify-center py-20 sm:py-24 [text-shadow:0_2px_6px_rgba(0,0,0,0.5)]">
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

            <motion.p variants={fadeInUp}>
              With a background in both <strong>design and engineering</strong>,
              I bridge the gap between visual creativity and technical
              execution. My goal is simple: create digital products that are{" "}
              <strong>beautiful, intuitive, and scalable</strong>.
            </motion.p>

            <motion.p variants={fadeInUp}>
              I work with companies and startups around the world to transform
              ideas into <strong>high-quality web experiences</strong>.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="space-y-4 max-w-md mx-auto"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h3 variants={fadeInUp}>My Background</motion.h3>
        <motion.p variants={fadeInUp}>
          My path into tech started from the design side.
        </motion.p>
        <motion.p variants={fadeInUp}>
          I began my career working with{" "}
          <strong>graphic design and user experience</strong>, helping brands
          communicate visually and craft better digital products. Over time, I
          became increasingly interested in the technical side of building those
          experiences.
        </motion.p>
        <motion.p variants={fadeInUp}>
          That curiosity led me to transition into{" "}
          <strong>frontend development</strong>, where I could combine design
          thinking with engineering.
        </motion.p>
        <motion.p variants={fadeInUp}>
          Today, I specialize in building{" "}
          <strong>modern web applications with React and Next.js</strong>,
          focusing on performance, scalability, and exceptional user experience.
        </motion.p>
        <motion.p variants={fadeInUp}>
          With experience working in professional development teams and
          delivering production-ready applications, I understand what it takes
          to build software that is{" "}
          <strong>
            not only visually polished but also maintainable and reliable
          </strong>
          .
        </motion.p>
      </motion.div>

      <motion.div
        className="space-y-4 max-w-md mx-auto my-24"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h3 variants={fadeInUp}>What I Do</motion.h3>

        <motion.p variants={fadeInUp}>
          I help companies design and build modern digital products.
        </motion.p>

        <motion.p variants={fadeInUp}>My work focuses on three areas:</motion.p>

        <motion.h4 variants={fadeInUp}>Frontend Development</motion.h4>
        <motion.p variants={fadeInUp}>
          Building fast, scalable, and maintainable web applications using
          modern technologies.
        </motion.p>
        <motion.ul variants={fadeInUp}>
          <motion.li variants={fadeInUp}>React</motion.li>
          <motion.li variants={fadeInUp}>Next.js</motion.li>
          <motion.li variants={fadeInUp}>TypeScript</motion.li>
          <motion.li variants={fadeInUp}>Modern CSS architectures</motion.li>
          <motion.li variants={fadeInUp}>Performance optimization</motion.li>
        </motion.ul>

        <motion.h4 variants={fadeInUp}>Product & UI Design</motion.h4>
        <motion.p variants={fadeInUp}>
          Designing interfaces that are intuitive, elegant, and user-focused.
        </motion.p>
        <motion.ul variants={fadeInUp}>
          <motion.li variants={fadeInUp}>UI design systems</motion.li>
          <motion.li variants={fadeInUp}>
            UX flows and product thinking
          </motion.li>
          <motion.li variants={fadeInUp}>Responsive design</motion.li>
          <motion.li variants={fadeInUp}>Accessibility and usability</motion.li>
        </motion.ul>

        <motion.h4 variants={fadeInUp}>Design-Driven Development</motion.h4>
        <motion.p variants={fadeInUp}>
          Combining design and development to create products where{" "}
          <strong>form and function work together seamlessly</strong>.
        </motion.p>
      </motion.div>

      <motion.div
        className="space-y-4 max-w-md mx-auto my-24"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h3 variants={fadeInUp}>My Approach</motion.h3>
        <motion.p variants={fadeInUp}>
          I believe great digital products are created when design and
          engineering work together from the beginning.
        </motion.p>

        <motion.p variants={fadeInUp}>My workflow combines:</motion.p>
        <motion.ul variants={fadeInUp}>
          <motion.li variants={fadeInUp}>Thoughtful product thinking</motion.li>
          <motion.li variants={fadeInUp}>Strong visual design</motion.li>
          <motion.li variants={fadeInUp}>Clean and scalable code</motion.li>
        </motion.ul>

        <motion.p variants={fadeInUp}>
          Instead of simply implementing designs, I focus on solving real
          product problems and building experiences that users actually enjoy
          using.
        </motion.p>

        <motion.p variants={fadeInUp}>My core stack includes:</motion.p>

        <motion.ul variants={fadeInUp}>
          <motion.li variants={fadeInUp}>React</motion.li>
          <motion.li variants={fadeInUp}>Next.js</motion.li>
          <motion.li variants={fadeInUp}>TypeScript</motion.li>
          <motion.li variants={fadeInUp}>HTML & modern CSS</motion.li>
          <motion.li variants={fadeInUp}>
            Component-based design systems
          </motion.li>
          <motion.li variants={fadeInUp}>REST APIs</motion.li>
          <motion.li variants={fadeInUp}>Performance optimization</motion.li>
        </motion.ul>

        <motion.p variants={fadeInUp}>
          I’m also passionate about building reusable UI systems and scalable
          frontend architectures.
        </motion.p>
      </motion.div>

      <motion.div
        className="space-y-4 max-w-md mx-auto my-24"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h3 variants={fadeInUp}>A Bit About Me</motion.h3>
        <motion.p variants={fadeInUp}>
          Outside of coding and design, I enjoy spending time near the sea,
          skiing in the mountains, and playing music.
        </motion.p>
        <motion.p variants={fadeInUp}>
          I believe creativity comes from many places, and some of the best
          ideas appear far away from the computer.
        </motion.p>
      </motion.div>

      <motion.div
        className="space-y-4 max-w-md mx-auto my-24"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.p variants={fadeInUp}>
          If you’re looking for a developer who understands both product design
          and frontend engineering, I’d love to hear about your project.
        </motion.p>

        <motion.p variants={fadeInUp}>
          Let’s build something great together.
        </motion.p>

        <Button href="/contact" variant="glass">
          Contact Me
        </Button>
      </motion.div>

      <motion.div
        className="space-y-4 max-w-md mx-auto my-24"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h3 variants={fadeInUp}>I have worked with</motion.h3>
        <motion.ul variants={fadeInUp}>
          <motion.li variants={fadeInUp}>Startups</motion.li>
          <motion.li variants={fadeInUp}>Digital products</motion.li>
          <motion.li variants={fadeInUp}>Scalable web applications</motion.li>
          <motion.li variants={fadeInUp}>Design-driven teams</motion.li>
        </motion.ul>
        <motion.h5 variants={fadeInUp}>
          5+ years building modern web applications
        </motion.h5>
      </motion.div>
    </div>
  );
};

export default AboutPage;
