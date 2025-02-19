"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M5 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 001 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 005 12zm3-9h7c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm7 2H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0 8H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z'];
var svgPaths20 = ['M19 16h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0-5h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM7 15c-.28 0-.53.11-.71.29L5 16.59V11c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 15.3A.965.965 0 001 15a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 007 15zM19 1h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 5h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z'];
var SortIcon = (0, _react.memo)((0, _react.forwardRef)(function SortIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "sort"
  }, props));
}));
exports.SortIcon = SortIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU29ydEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJTb3J0SWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLHNiQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQiwwZkFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxRQUFRLEdBQUcsaUJBQ3RCLHVCQUFXLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUN2QyxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZELENBRHNCLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTUgMTJjLS4yOCAwLS41My4xMS0uNzEuMjlsLS4yOS4zVjljMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2My41OWwtLjI5LS4yOUEuOTY1Ljk2NSAwIDAwMSAxMmExLjAwMyAxLjAwMyAwIDAwLS43MSAxLjcxbDIgMmMuMTguMTguNDMuMjkuNzEuMjlzLjUzLS4xMS43MS0uMjlsMi0yQTEuMDAzIDEuMDAzIDAgMDA1IDEyem0zLTloN2MuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMUg4Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxem03IDJIOGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWg3Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xem0wIDhIOGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWg3Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xem0wLTRIOGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWg3Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xeidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNMTkgMTZoLTljLS41NSAwLTEgLjQ1LTEgMXYxYzAgLjU1LjQ1IDEgMSAxaDljLjU1IDAgMS0uNDUgMS0xdi0xYzAtLjU1LS40NS0xLTEtMXptMC01aC05Yy0uNTUgMC0xIC40NS0xIDF2MWMwIC41NS40NSAxIDEgMWg5Yy41NSAwIDEtLjQ1IDEtMXYtMWMwLS41NS0uNDUtMS0xLTF6TTcgMTVjLS4yOCAwLS41My4xMS0uNzEuMjlMNSAxNi41OVYxMWMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY1LjU5TDEuNzEgMTUuM0EuOTY1Ljk2NSAwIDAwMSAxNWExLjAwMyAxLjAwMyAwIDAwLS43MSAxLjcxbDMgM2MuMTguMTguNDMuMjkuNzEuMjlzLjUzLS4xMS43MS0uMjlsMy0zQTEuMDAzIDEuMDAzIDAgMDA3IDE1ek0xOSAxaC05Yy0uNTUgMC0xIC40NS0xIDF2MWMwIC41NS40NSAxIDEgMWg5Yy41NSAwIDEtLjQ1IDEtMVYyYzAtLjU1LS40NS0xLTEtMXptMCA1aC05Yy0uNTUgMC0xIC40NS0xIDF2MWMwIC41NS40NSAxIDEgMWg5Yy41NSAwIDEtLjQ1IDEtMVY3YzAtLjU1LS40NS0xLTEtMXonXG5dXG5cbmV4cG9ydCBjb25zdCBTb3J0SWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gU29ydEljb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvblxuICAgICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgbmFtZT1cInNvcnRcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcbiJdfQ==