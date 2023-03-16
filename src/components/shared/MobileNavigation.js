import { Link } from "react-router-dom";

import { useState } from "react";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChildReaching,
  faMapLocationDot,
  faUtensils,
  faPizzaSlice,
  faRightToBracket,
  faRightFromBracket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const animatedFrom = { opacity: 0, y: -40};
  const animatedTo = { opacity: 1, y: 0 };

  window.addEventListener("resize", () => setOpen(false));

  return (
    <div className="mobile-navigation items-center">
      <FontAwesomeIcon
        className="cursor-pointer"
        icon={!open ? faBars : faXmark}
        size="2xl"
        onClick={() => setOpen((value) => !value)}
      />
      {open && (
        <div className="flex flex-col gap-2 absolute top-[8vh] right-0 py-5 px-10 bg-blue-900 dark:bg-purple-800 border-t-2 rounded-bl-lg border-white z-10">
          <Link to="/" onClick={() => window.reload()}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.05}}
            >
              <FontAwesomeIcon icon={faChildReaching} size="xl"/>
              <h4>Body</h4>
            </motion.div>
          </Link>
          <Link to="/map" onClick={() => setOpen(false)}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.10}}
            >
              <FontAwesomeIcon icon={faMapLocationDot} size="xl" />
              <h4>Nearest gyms</h4>
            </motion.div>
          </Link>
          <Link to="/bmi" onClick={() => setOpen(false)}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.15}}
            >
              <FontAwesomeIcon icon={faUtensils} size="xl" />
              <h4>Daily calories</h4>
            </motion.div>
          </Link>
          <Link to="/mealPlan" onClick={() => setOpen(false)}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.20}}
            >
              <FontAwesomeIcon icon={faPizzaSlice} size="xl" />
              <h4>Meal plan</h4>
            </motion.div>
          </Link>
          <Link to="login" onClick={() => setOpen(false)}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.25}}
            >
              <FontAwesomeIcon icon={faRightToBracket} size="xl" />
              <h4>Login</h4>
            </motion.div>
          </Link>
          <Link to="/"  onClick={() => setOpen(false)}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.30}}
            >
              <FontAwesomeIcon icon={faRightFromBracket} size="xl" />
              <h4>Logout</h4>
            </motion.div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
