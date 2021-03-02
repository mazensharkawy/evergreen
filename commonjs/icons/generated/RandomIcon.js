"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RandomIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M11.48 4h1.11l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H11c-.32 0-.59.16-.77.38l-.01-.01L8.28 4.8l1.28 1.6L11.48 4zm2.23 6.29a1.003 1.003 0 00-1.42 1.42l.3.29h-1.11l-7.7-9.62h-.01A.996.996 0 003 2H1c-.55 0-1 .45-1 1s.45 1 1 1h1.52l7.7 9.62.01-.01c.18.23.45.39.77.39h1.59l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2zM2.52 12H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.32 0 .59-.16.77-.38l.01.01 1.94-2.42L4.44 9.6 2.52 12z'];
var svgPaths20 = ['M14.47 5h2.12L15.3 6.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 00-1.42 1.42L16.59 3H14c-.31 0-.57.15-.76.37l-.01-.01-2.93 3.52 1.3 1.56L14.47 5zm2.24 7.29a1.003 1.003 0 00-1.42 1.42l1.3 1.29h-2.12L4.77 3.36l-.01.01A.998.998 0 004 3H1c-.55 0-1 .45-1 1s.45 1 1 1h2.53l9.7 11.64.01-.01c.19.22.45.37.76.37h2.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3zM3.53 15H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.31 0 .57-.15.76-.37l.01.01 2.93-3.52-1.3-1.56L3.53 15z'];
var RandomIcon = (0, _react.memo)((0, _react.forwardRef)(function RandomIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "random"
  }, props));
}));
exports.RandomIcon = RandomIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvUmFuZG9tSWNvbi5qcyJdLCJuYW1lcyI6WyJzdmdQYXRoczE2Iiwic3ZnUGF0aHMyMCIsIlJhbmRvbUljb24iLCJwcm9wcyIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQix5akJBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLHdrQkFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxVQUFVLEdBQUcsaUJBQ3hCLHVCQUFXLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCQyxHQUEzQixFQUFnQztBQUN6QyxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZELENBRHdCLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTExLjQ4IDRoMS4xMWwtLjI5LjI5Yy0uMTkuMTgtLjMuNDMtLjMuNzFhMS4wMDMgMS4wMDMgMCAwMDEuNzEuNzFsMi0yYy4xOC0uMTguMjktLjQzLjI5LS43MSAwLS4yOC0uMTEtLjUzLS4yOS0uNzFsLTItMmExLjAwMyAxLjAwMyAwIDAwLTEuNDIgMS40MmwuMy4yOUgxMWMtLjMyIDAtLjU5LjE2LS43Ny4zOGwtLjAxLS4wMUw4LjI4IDQuOGwxLjI4IDEuNkwxMS40OCA0em0yLjIzIDYuMjlhMS4wMDMgMS4wMDMgMCAwMC0xLjQyIDEuNDJsLjMuMjloLTEuMTFsLTcuNy05LjYyaC0uMDFBLjk5Ni45OTYgMCAwMDMgMkgxYy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDEuNTJsNy43IDkuNjIuMDEtLjAxYy4xOC4yMy40NS4zOS43Ny4zOWgxLjU5bC0uMjkuMjljLS4xOS4xOC0uMy40My0uMy43MWExLjAwMyAxLjAwMyAwIDAwMS43MS43MWwyLTJjLjE4LS4xOC4yOS0uNDMuMjktLjcxIDAtLjI4LS4xMS0uNTMtLjI5LS43MWwtMi0yek0yLjUyIDEySDFjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFoMmMuMzIgMCAuNTktLjE2Ljc3LS4zOGwuMDEuMDEgMS45NC0yLjQyTDQuNDQgOS42IDIuNTIgMTJ6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xNC40NyA1aDIuMTJMMTUuMyA2LjI5Yy0uMTkuMTgtLjMuNDMtLjMuNzFhMS4wMDMgMS4wMDMgMCAwMDEuNzEuNzFsMy0zYy4xOC0uMTguMjktLjQzLjI5LS43MSAwLS4yOC0uMTEtLjUzLS4yOS0uNzFsLTMtM2ExLjAwMyAxLjAwMyAwIDAwLTEuNDIgMS40MkwxNi41OSAzSDE0Yy0uMzEgMC0uNTcuMTUtLjc2LjM3bC0uMDEtLjAxLTIuOTMgMy41MiAxLjMgMS41NkwxNC40NyA1em0yLjI0IDcuMjlhMS4wMDMgMS4wMDMgMCAwMC0xLjQyIDEuNDJsMS4zIDEuMjloLTIuMTJMNC43NyAzLjM2bC0uMDEuMDFBLjk5OC45OTggMCAwMDQgM0gxYy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDIuNTNsOS43IDExLjY0LjAxLS4wMWMuMTkuMjIuNDUuMzcuNzYuMzdoMi41OWwtMS4yOSAxLjI5Yy0uMTkuMTgtLjMuNDMtLjMuNzFhMS4wMDMgMS4wMDMgMCAwMDEuNzEuNzFsMy0zYy4xOC0uMTguMjktLjQzLjI5LS43MSAwLS4yOC0uMTEtLjUzLS4yOS0uNzFsLTMtM3pNMy41MyAxNUgxYy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDNjLjMxIDAgLjU3LS4xNS43Ni0uMzdsLjAxLjAxIDIuOTMtMy41Mi0xLjMtMS41NkwzLjUzIDE1eidcbl1cblxuZXhwb3J0IGNvbnN0IFJhbmRvbUljb24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFJhbmRvbUljb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvblxuICAgICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgbmFtZT1cInJhbmRvbVwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuIl19