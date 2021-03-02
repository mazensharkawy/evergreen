"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M14 3c-1.06 0-1.92.83-1.99 1.88l-1.93.97A2.95 2.95 0 008 5c-.56 0-1.08.16-1.52.43L3.97 3.34C3.98 3.23 4 3.12 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.24 0 .47-.05.68-.13l2.51 2.09C5.08 7.29 5 7.63 5 8c0 .96.46 1.81 1.16 2.35l-.56 1.69c-.91.19-1.6.99-1.6 1.96 0 1.1.9 2 2 2s2-.9 2-2c0-.51-.2-.97-.51-1.32l.56-1.69A2.99 2.99 0 0011 8c0-.12-.02-.24-.04-.36l1.94-.97c.32.21.69.33 1.1.33 1.1 0 2-.9 2-2s-.9-2-2-2z'];
var svgPaths20 = ['M17.5 4A2.5 2.5 0 0015 6.5c0 .06.01.12.02.18l-1.9.84C12.38 6.6 11.27 6 10 6c-.83 0-1.59.25-2.23.68L4.91 4.14c.05-.21.09-.42.09-.64a2.5 2.5 0 00-5 0A2.5 2.5 0 002.5 6c.42 0 .81-.11 1.16-.3l2.79 2.48C6.17 8.73 6 9.34 6 10c0 1.41.73 2.64 1.83 3.35l-.56 1.67A2.498 2.498 0 005 17.5a2.5 2.5 0 005 0c0-.74-.32-1.39-.83-1.85l.56-1.68c.09.01.18.03.27.03 2.21 0 4-1.79 4-4 0-.22-.03-.44-.07-.65l2.02-.9c.43.34.96.55 1.55.55a2.5 2.5 0 000-5z'];
var GraphIcon = (0, _react.memo)((0, _react.forwardRef)(function GraphIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "graph"
  }, props));
}));
exports.GraphIcon = GraphIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvR3JhcGhJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiR3JhcGhJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsd1pBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLGliQURpQixDQUFuQjtBQUlPLElBQU1DLFNBQVMsR0FBRyxpQkFDdkIsdUJBQVcsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQ3hDLFNBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFERjtBQVNELENBVkQsQ0FEdUIsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNMTQgM2MtMS4wNiAwLTEuOTIuODMtMS45OSAxLjg4bC0xLjkzLjk3QTIuOTUgMi45NSAwIDAwOCA1Yy0uNTYgMC0xLjA4LjE2LTEuNTIuNDNMMy45NyAzLjM0QzMuOTggMy4yMyA0IDMuMTIgNCAzYzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMmMuMjQgMCAuNDctLjA1LjY4LS4xM2wyLjUxIDIuMDlDNS4wOCA3LjI5IDUgNy42MyA1IDhjMCAuOTYuNDYgMS44MSAxLjE2IDIuMzVsLS41NiAxLjY5Yy0uOTEuMTktMS42Ljk5LTEuNiAxLjk2IDAgMS4xLjkgMiAyIDJzMi0uOSAyLTJjMC0uNTEtLjItLjk3LS41MS0xLjMybC41Ni0xLjY5QTIuOTkgMi45OSAwIDAwMTEgOGMwLS4xMi0uMDItLjI0LS4wNC0uMzZsMS45NC0uOTdjLjMyLjIxLjY5LjMzIDEuMS4zMyAxLjEgMCAyLS45IDItMnMtLjktMi0yLTJ6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xNy41IDRBMi41IDIuNSAwIDAwMTUgNi41YzAgLjA2LjAxLjEyLjAyLjE4bC0xLjkuODRDMTIuMzggNi42IDExLjI3IDYgMTAgNmMtLjgzIDAtMS41OS4yNS0yLjIzLjY4TDQuOTEgNC4xNGMuMDUtLjIxLjA5LS40Mi4wOS0uNjRhMi41IDIuNSAwIDAwLTUgMEEyLjUgMi41IDAgMDAyLjUgNmMuNDIgMCAuODEtLjExIDEuMTYtLjNsMi43OSAyLjQ4QzYuMTcgOC43MyA2IDkuMzQgNiAxMGMwIDEuNDEuNzMgMi42NCAxLjgzIDMuMzVsLS41NiAxLjY3QTIuNDk4IDIuNDk4IDAgMDA1IDE3LjVhMi41IDIuNSAwIDAwNSAwYzAtLjc0LS4zMi0xLjM5LS44My0xLjg1bC41Ni0xLjY4Yy4wOS4wMS4xOC4wMy4yNy4wMyAyLjIxIDAgNC0xLjc5IDQtNCAwLS4yMi0uMDMtLjQ0LS4wNy0uNjVsMi4wMi0uOWMuNDMuMzQuOTYuNTUgMS41NS41NWEyLjUgMi41IDAgMDAwLTV6J1xuXVxuXG5leHBvcnQgY29uc3QgR3JhcGhJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBHcmFwaEljb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvblxuICAgICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgbmFtZT1cImdyYXBoXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG4iXX0=