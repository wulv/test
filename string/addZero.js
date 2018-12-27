"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 如果数字小于10前面自动添加0
 * @param {number} num 数字
 * @return {string} 处理后的字符串
 * @example
 * addZero(9);
 * // '09'
 * addZero(11);
 * // '11'
 */
function addZero(num) {
  return num >= 0 && num < 10 ? "0".concat(num) : String(num);
}

var _default = addZero;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;