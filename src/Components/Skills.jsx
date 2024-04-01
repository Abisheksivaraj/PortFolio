import React from "react";
import { IonIcon } from "@ionic/react";
import { logoHtml5, logoCss3, logoJavascript, logoReact } from "ionicons/icons";
import TailwindCSSIcon from "../assets/tail.png";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      logo: <IonIcon icon={logoHtml5} />,
      level: "Advance",
      count: 86,
    },
    {
      name: "Css",
      logo: <IonIcon icon={logoCss3} />,
      level: "Expert",
      count: 90,
    },
    {
      name: "Tailwind Css",
      logo: (
        <img src={TailwindCSSIcon} alt="Tailwind CSS" className="w-12 h-10" />
      ),
      level: "Expert",
      count: 90,
    },
    {
      name: "JavaScript",
      logo: <IonIcon icon={logoJavascript} />,
      level: "Intermediate",
      count: 80,
    },
    {
      name: "React",
      logo: <IonIcon icon={logoReact} />,
      level: "Intermediate",
      count: 80,
    },
  ];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10  absolute top-[143rem] md:top-[81rem]"
      >
        <div className="mt-8 text-gray-100 text-center">
          <h3 className="text-4xl font-semibold">
            My <span className="text-gray-100">Skills</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center justify-center mt-12 gap-10 flex-wrap"
          >
            {skills?.map((skill, i) => (
              <div
                key={i}
                className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
              >
                {/* <div className="Text-white text-center p-2">{skill.name}</div> */}
                <div
                  style={{
                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                  }}
                  className="w-32 h-32 flex items-center justify-center rounded-full"
                >
                  <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                    {skill.logo}
                  </div>
                </div>
                <p className="text-xl mt-3">{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
