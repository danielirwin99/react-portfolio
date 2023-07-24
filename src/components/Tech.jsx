import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-col text-center">
      <motion.div variants={textVariant()} className="mb-10">
        <p className={styles.sectionSubText}>Tech Stack</p>
        <h2 className={styles.heroHeadText}>Tools That I Use</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {technologies.map((technology) => (
          <div className="w-28 h-28 relative" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
