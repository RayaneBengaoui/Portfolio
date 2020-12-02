import { homepageAnim } from "../animation";
import { motion } from "framer-motion";
const Work = () => {
  return (
    <motion.div
      variants={homepageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>Second Page</h2>
    </motion.div>
  );
};

export default Work;
