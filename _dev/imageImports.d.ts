/** https://stackoverflow.com/questions/45432951/typescript-compiler-cannot-find-module-when-using-webpack-require-for-css-imag */
declare module '*.jpg' { export default '' as string; }
declare module '*.png' { export default '' as string; }
declare module 'react-reveal*' { export default any }
// declare module 'next-page-transitions*' { export default any }