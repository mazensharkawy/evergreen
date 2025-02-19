"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M16 15c0-.28-.12-.52-.31-.69l.02-.02-3.12-3.12 3.41-.84-8.05-2.86c.03-.09.05-.17.05-.27V2c0-.55-.45-1-1-1H3c0-.55-.45-1-1-1S1 .45 1 1c-.55 0-1 .45-1 1s.45 1 1 1v4c0 .55.45 1 1 1h5.2c.1 0 .18-.02.27-.05L10.33 16l.85-3.41 3.12 3.12.02-.02c.16.19.4.31.68.31.04 0 .07-.02.1-.02s.06.02.1.02c.44 0 .8-.36.8-.8 0-.04-.02-.07-.02-.1s.02-.06.02-.1zM6 6H3V3h3v3z'];
var svgPaths20 = ['M19.71 18.29l-4.25-4.25L20 12.91 9.93 9.33c.04-.1.07-.21.07-.33V3c0-.55-.45-1-1-1H4V1c0-.55-.45-1-1-1S2 .45 2 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 .55.45 1 1 1h6c.12 0 .23-.03.34-.07L12.91 20l1.14-4.54 4.25 4.25c.17.18.42.29.7.29a1.003 1.003 0 00.71-1.71zM8 8H4V4h4v4z'];
var SelectIcon = (0, _react.memo)((0, _react.forwardRef)(function SelectIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "select"
  }, props));
}));
exports.SelectIcon = SelectIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU2VsZWN0SWNvbi5qcyJdLCJuYW1lcyI6WyJzdmdQYXRoczE2Iiwic3ZnUGF0aHMyMCIsIlNlbGVjdEljb24iLCJwcm9wcyIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQixrV0FEaUIsQ0FBbkI7QUFHQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIsZ1JBRGlCLENBQW5CO0FBSU8sSUFBTUMsVUFBVSxHQUFHLGlCQUN4Qix1QkFBVyxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDekMsU0FDRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURGO0FBU0QsQ0FWRCxDQUR3QixDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00xNiAxNWMwLS4yOC0uMTItLjUyLS4zMS0uNjlsLjAyLS4wMi0zLjEyLTMuMTIgMy40MS0uODQtOC4wNS0yLjg2Yy4wMy0uMDkuMDUtLjE3LjA1LS4yN1YyYzAtLjU1LS40NS0xLTEtMUgzYzAtLjU1LS40NS0xLTEtMVMxIC40NSAxIDFjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDF2NGMwIC41NS40NSAxIDEgMWg1LjJjLjEgMCAuMTgtLjAyLjI3LS4wNUwxMC4zMyAxNmwuODUtMy40MSAzLjEyIDMuMTIuMDItLjAyYy4xNi4xOS40LjMxLjY4LjMxLjA0IDAgLjA3LS4wMi4xLS4wMnMuMDYuMDIuMS4wMmMuNDQgMCAuOC0uMzYuOC0uOCAwLS4wNC0uMDItLjA3LS4wMi0uMXMuMDItLjA2LjAyLS4xek02IDZIM1YzaDN2M3onXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTE5LjcxIDE4LjI5bC00LjI1LTQuMjVMMjAgMTIuOTEgOS45MyA5LjMzYy4wNC0uMS4wNy0uMjEuMDctLjMzVjNjMC0uNTUtLjQ1LTEtMS0xSDRWMWMwLS41NS0uNDUtMS0xLTFTMiAuNDUgMiAxdjFIMWMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWgxdjVjMCAuNTUuNDUgMSAxIDFoNmMuMTIgMCAuMjMtLjAzLjM0LS4wN0wxMi45MSAyMGwxLjE0LTQuNTQgNC4yNSA0LjI1Yy4xNy4xOC40Mi4yOS43LjI5YTEuMDAzIDEuMDAzIDAgMDAuNzEtMS43MXpNOCA4SDRWNGg0djR6J1xuXVxuXG5leHBvcnQgY29uc3QgU2VsZWN0SWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gU2VsZWN0SWNvbihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uXG4gICAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBuYW1lPVwic2VsZWN0XCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG4iXX0=