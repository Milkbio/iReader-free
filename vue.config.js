const path = require('path');
const fs = require('fs');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/global.scss";`
            }
        }
    }
};