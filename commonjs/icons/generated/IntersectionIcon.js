"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntersectionIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M10 3c-.92 0-1.76.26-2.5.69C6.76 3.26 5.92 3 5 3 2.24 3 0 5.24 0 8s2.24 5 5 5c.92 0 1.76-.26 2.5-.69.74.43 1.58.69 2.5.69 2.76 0 5-2.24 5-5s-2.24-5-5-5zm-4.1 7.85c-.29.09-.59.15-.9.15-1.66 0-3-1.34-3-3s1.34-3 3-3c.31 0 .61.06.9.15C5.33 5.96 5 6.94 5 8s.33 2.04.9 2.85zM10 11c-.31 0-.61-.06-.9-.15.57-.81.9-1.79.9-2.85s-.33-2.04-.9-2.85c.29-.09.59-.15.9-.15 1.66 0 3 1.34 3 3s-1.34 3-3 3z'];
var svgPaths20 = ['M13 4c-1.31 0-2.51.43-3.5 1.14A5.977 5.977 0 006 4c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.31 0 2.51-.43 3.5-1.14.99.71 2.19 1.14 3.5 1.14 3.31 0 6-2.69 6-6s-2.69-6-6-6zm-4.93 9.41c-.61.37-1.31.59-2.07.59-2.21 0-4-1.79-4-4s1.79-4 4-4c.76 0 1.46.22 2.07.59C7.4 7.56 7 8.73 7 10s.4 2.44 1.07 3.41zM13 14c-.76 0-1.46-.22-2.07-.59C11.6 12.44 12 11.27 12 10s-.4-2.44-1.07-3.41C11.54 6.22 12.24 6 13 6c2.21 0 4 1.79 4 4s-1.79 4-4 4z'];
var IntersectionIcon = (0, _react.memo)((0, _react.forwardRef)(function IntersectionIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "intersection"
  }, props));
}));
exports.IntersectionIcon = IntersectionIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvSW50ZXJzZWN0aW9uSWNvbi5qcyJdLCJuYW1lcyI6WyJzdmdQYXRoczE2Iiwic3ZnUGF0aHMyMCIsIkludGVyc2VjdGlvbkljb24iLCJwcm9wcyIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQixxWUFEaUIsQ0FBbkI7QUFHQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIsb2FBRGlCLENBQW5CO0FBSU8sSUFBTUMsZ0JBQWdCLEdBQUcsaUJBQzlCLHVCQUFXLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDL0MsU0FDRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURGO0FBU0QsQ0FWRCxDQUQ4QixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00xMCAzYy0uOTIgMC0xLjc2LjI2LTIuNS42OUM2Ljc2IDMuMjYgNS45MiAzIDUgMyAyLjI0IDMgMCA1LjI0IDAgOHMyLjI0IDUgNSA1Yy45MiAwIDEuNzYtLjI2IDIuNS0uNjkuNzQuNDMgMS41OC42OSAyLjUuNjkgMi43NiAwIDUtMi4yNCA1LTVzLTIuMjQtNS01LTV6bS00LjEgNy44NWMtLjI5LjA5LS41OS4xNS0uOS4xNS0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zYy4zMSAwIC42MS4wNi45LjE1QzUuMzMgNS45NiA1IDYuOTQgNSA4cy4zMyAyLjA0LjkgMi44NXpNMTAgMTFjLS4zMSAwLS42MS0uMDYtLjktLjE1LjU3LS44MS45LTEuNzkuOS0yLjg1cy0uMzMtMi4wNC0uOS0yLjg1Yy4yOS0uMDkuNTktLjE1LjktLjE1IDEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzeidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNMTMgNGMtMS4zMSAwLTIuNTEuNDMtMy41IDEuMTRBNS45NzcgNS45NzcgMCAwMDYgNGMtMy4zMSAwLTYgMi42OS02IDZzMi42OSA2IDYgNmMxLjMxIDAgMi41MS0uNDMgMy41LTEuMTQuOTkuNzEgMi4xOSAxLjE0IDMuNSAxLjE0IDMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02em0tNC45MyA5LjQxYy0uNjEuMzctMS4zMS41OS0yLjA3LjU5LTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTRjLjc2IDAgMS40Ni4yMiAyLjA3LjU5QzcuNCA3LjU2IDcgOC43MyA3IDEwcy40IDIuNDQgMS4wNyAzLjQxek0xMyAxNGMtLjc2IDAtMS40Ni0uMjItMi4wNy0uNTlDMTEuNiAxMi40NCAxMiAxMS4yNyAxMiAxMHMtLjQtMi40NC0xLjA3LTMuNDFDMTEuNTQgNi4yMiAxMi4yNCA2IDEzIDZjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDR6J1xuXVxuXG5leHBvcnQgY29uc3QgSW50ZXJzZWN0aW9uSWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gSW50ZXJzZWN0aW9uSWNvbihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uXG4gICAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBuYW1lPVwiaW50ZXJzZWN0aW9uXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG4iXX0=