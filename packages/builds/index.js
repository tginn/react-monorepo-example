const common = require('./webpack/common.config');
const app = require('./webpack/app.config');

module.exports = {
    webpack: {
        common,
        app
    }
};