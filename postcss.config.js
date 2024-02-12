export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// Additional plugins can be added directly inside the default export
import postcssApply from 'postcss-apply';

export const plugins = [
  postcssApply
];
