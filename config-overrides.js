const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const globalStyles = require('./globalfile.js');


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
  style: true,
  }),
 addLessLoader({
   javascriptEnabled: true,
   modifyVars: { ...globalStyles },
 }),
);