import "./batong_1.css";
import renderButton from "./batong_1.njk";
/**
 * @param {Object} args
 * @param {string} args.label
 * @param {boolean} [args.primary]
 * @param {string} [args.size="medium"]
 */
export const createButton = (args = {}) => {
  args.size = args.size || "medium";

  // Setting a `storybookArgs` context variable causes the render() macro to
  // be called automatically 📕✨
  return renderButton({
    storybookArgs: args,
  });
};
