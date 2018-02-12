'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.udevInstallers = exports.latestVersion = exports.installers = exports.DeviceList = exports.DescriptorStream = exports.Device = exports.UnacquiredDevice = exports.Session = undefined;

var _session = require('./session');

Object.defineProperty(exports, 'Session', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_session).default;
    }
});

var _unacquiredDevice = require('./unacquired-device');

Object.defineProperty(exports, 'UnacquiredDevice', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_unacquiredDevice).default;
    }
});

var _device = require('./device');

Object.defineProperty(exports, 'Device', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_device).default;
    }
});

var _descriptorStream = require('./descriptor-stream');

Object.defineProperty(exports, 'DescriptorStream', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_descriptorStream).default;
    }
});

var _deviceList = require('./device-list');

Object.defineProperty(exports, 'DeviceList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_deviceList).default;
    }
});

var _installers = require('./installers');

Object.defineProperty(exports, 'installers', {
    enumerable: true,
    get: function get() {
        return _installers.installers;
    }
});
Object.defineProperty(exports, 'latestVersion', {
    enumerable: true,
    get: function get() {
        return _installers.latestVersion;
    }
});
Object.defineProperty(exports, 'udevInstallers', {
    enumerable: true,
    get: function get() {
        return _installers.udevInstallers;
    }
});

require('unorm');

var _trezorLinkNode = require('trezor-link-node');

var _trezorLinkNode2 = _interopRequireDefault(_trezorLinkNode);

var _deviceList2 = _interopRequireDefault(_deviceList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bridge = _trezorLinkNode2.default.Bridge,
    Fallback = _trezorLinkNode2.default.Fallback,
    Lowlevel = _trezorLinkNode2.default.Lowlevel,
    NodeHid = _trezorLinkNode2.default.NodeHid;


var fetch = require('node-fetch');
_deviceList2.default._setTransport(function () {
    return new Fallback([new Bridge(), new Lowlevel(new NodeHid())]);
});

var myFetch = typeof window === 'undefined' ? fetch : window.fetch;
_deviceList2.default._setFetch(myFetch);
(0, _installers.setFetch)(myFetch);