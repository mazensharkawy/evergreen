"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeedIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M1.99 11.99c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zm1-4c-.55 0-1 .45-1 1s.45 1 1 1c1.66 0 3 1.34 3 3 0 .55.45 1 1 1s1-.45 1-1c0-2.76-2.24-5-5-5zm0-4c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7 3.13 7 7 0 .55.45 1 1 1s1-.45 1-1a9 9 0 00-9-9zm0-4c-.55 0-1 .45-1 1s.45 1 1 1c6.08 0 11 4.92 11 11 0 .55.45 1 1 1s1-.45 1-1c0-7.18-5.82-13-13-13z'];
var svgPaths20 = ['M2.5 15a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm.5-5c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5 2.24 5 5 0 .55.45 1 1 1s1-.45 1-1c0-3.87-3.13-7-7-7zM3 0c-.55 0-1 .45-1 1s.45 1 1 1c8.28 0 15 6.72 15 15 0 .55.45 1 1 1s1-.45 1-1C20 7.61 12.39 0 3 0zm0 5c-.55 0-1 .45-1 1s.45 1 1 1c5.52 0 10 4.48 10 10 0 .55.45 1 1 1s1-.45 1-1C15 10.37 9.63 5 3 5z'];
var FeedIcon = (0, _react.memo)((0, _react.forwardRef)(function FeedIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "feed"
  }, props));
}));
exports.FeedIcon = FeedIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvRmVlZEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJGZWVkSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLGtWQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQiw0VUFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxRQUFRLEdBQUcsaUJBQ3RCLHVCQUFXLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUN2QyxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZELENBRHNCLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTEuOTkgMTEuOTljLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS44OS0yLTItMnptMS00Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxYzEuNjYgMCAzIDEuMzQgMyAzIDAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMWMwLTIuNzYtMi4yNC01LTUtNXptMC00Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxYzMuODcgMCA3IDMuMTMgNyA3IDAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMWE5IDkgMCAwMC05LTl6bTAtNGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWM2LjA4IDAgMTEgNC45MiAxMSAxMSAwIC41NS40NSAxIDEgMXMxLS40NSAxLTFjMC03LjE4LTUuODItMTMtMTMtMTN6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00yLjUgMTVhMi41IDIuNSAwIDAwMCA1IDIuNSAyLjUgMCAwMDAtNXptLjUtNWMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWMyLjc2IDAgNSAyLjI0IDUgNSAwIC41NS40NSAxIDEgMXMxLS40NSAxLTFjMC0zLjg3LTMuMTMtNy03LTd6TTMgMGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWM4LjI4IDAgMTUgNi43MiAxNSAxNSAwIC41NS40NSAxIDEgMXMxLS40NSAxLTFDMjAgNy42MSAxMi4zOSAwIDMgMHptMCA1Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxYzUuNTIgMCAxMCA0LjQ4IDEwIDEwIDAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMUMxNSAxMC4zNyA5LjYzIDUgMyA1eidcbl1cblxuZXhwb3J0IGNvbnN0IEZlZWRJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBGZWVkSWNvbihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uXG4gICAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBuYW1lPVwiZmVlZFwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuIl19