(function() {
    'use strict';

    const PropTypes = require('prop-types');

    const RGB = require('./rgb.js');

    const propTypes = {
        color: PropTypes.instanceOf(RGB).isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
        margin: PropTypes.shape({
            top: PropTypes.number.isRequired,
            right: PropTypes.number.isRequired,
            bottom: PropTypes.number.isRequired,
            left: PropTypes.number.isRequired,
        }),
    };

    const defaultProps = {
        // color (required),
        width: 1200,
        height: 100,
        margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    };

    const config = {
        propTypes,
        defaultProps,
    }

    module.exports = config;
}());