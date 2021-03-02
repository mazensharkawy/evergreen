"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PredictiveAnalysisIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M16 6.41c0-1.01-.49-1.94-1.29-2.49-.43-1.92-2.07-3.28-4-3.28-.46 0-.92.08-1.35.24C8.83.31 8.11 0 7.34 0c-.9 0-1.74.44-2.28 1.16-.12-.01-.24-.02-.36-.02-1.31 0-2.42.89-2.77 2.17C.78 3.72 0 4.84 0 6.13c0 .38.07.76.21 1.12C.07 7.6 0 7.98 0 8.36c0 1.11.58 2.11 1.51 2.63.54.56 1.27.87 2.03.87.49 0 .95-.12 1.37-.36a2.85 2.85 0 002.18 1.04c.52 0 1.03-.14 1.47-.42.49.39 1.07.65 1.69.73 1.04 1.15 1.84 2.63 1.84 2.64 0 0 .28.49.26.49.77 0 1.41-.16 1.32-1.04 0 .02-.73-2.31-.73-2.31.41-.21.75-.55.97-.98.9-.52 1.47-1.53 1.47-2.61 0-.24-.03-.48-.08-.71.45-.52.7-1.21.7-1.92zm-1.23 1.02l-.15-.16-.61-.67c-.27-.29-.54-.94-.58-1.39l-.1-1.01c-.05-.59-.94-.58-.91.11 0 .02.1 1.01.1 1.01.03.29.12.62.24.93-.06-.01-.12-.02-.18-.02 0 0-2.06-.1-2.05-.11-.58-.02-.71.97-.04 1l2.05.11c.42.02 1.04.3 1.29.58l.49.54.02.05c.08.21.12.44.12.66 0 .74-.41 1.41-1.07 1.75l-.16.08-.07.18c-.15.38-.48.66-.88.74l-.54.11.7 2.2c-.38-.61-.95-1.43-1.62-2.14l-.12-.13-.17-.01c-.41-.03-.8-.17-1.14-.38l1.36-1.18c.35-.31.83-.44.99-.39 0 0 .63.17.62.18.63.16.83-.74.23-.97l-.62-.18c-.55-.16-1.33.18-1.79.58l-1.53 1.33-.31.26c-.35.29-.75.44-1.2.44-.64 0-1.23-.33-1.58-.86V9.15c0-.4.17-.79.27-.85 0 0 .52-.34.51-.35.71-.53.18-1.23-.49-.89 0-.01-.52.35-.52.35-.26.15-.45.44-.58.77-.11-.11-.22-.2-.34-.28 0 0-1.53-1.01-1.53-1.02-.65-.45-1.2.51-.49.89 0-.01 1.51 1.02 1.51 1.02.37.24.62.78.62 1.09v.67c-.34.19-.63.29-.99.29-.54 0-1.05-.23-1.41-.63l-.05-.06-.07-.04c-.65-.34-1.05-1-1.05-1.73 0-.3.07-.6.2-.87l.12-.25L1.15 7c-.13-.27-.2-.56-.2-.87 0-.9.61-1.68 1.48-1.89l.31-.08.05-.34a1.926 1.926 0 012.38-1.58l.32.08.18-.31c.35-.6.99-.97 1.67-.97.44 0 .86.15 1.2.42l-.36.36v-.01l-.25.26c-.33.27-.74.42-.89.4 0 0-.67-.1-.67-.11-.67-.13-.87.86-.14 1.02.01 0 .67.11.67.11.02 0 .05 0 .07.01-.11.37-.15.77-.1 1.12 0 0 .17.99.15.99.11.52 1.06.36.93-.18 0-.01-.15-.99-.15-.99-.05-.37.12-.94.36-1.19l.39-.4c.05-.05.1-.09.15-.14l.74-.76c.4-.18.83-.27 1.27-.27 1.55 0 2.86 1.12 3.11 2.67l.04.25.21.12c.61.35.98 1 .98 1.7 0 .36-.1.7-.28 1.01z'];
var svgPaths20 = ['M20 8.01c0-1.26-.61-2.43-1.61-3.12C17.86 2.5 15.8.79 13.4.79c-.58 0-1.14.1-1.69.29A3.533 3.533 0 009.17 0C8.05 0 7 .55 6.32 1.45c-.15-.02-.3-.03-.45-.03-1.63 0-3.03 1.12-3.46 2.71C.97 4.65 0 6.05 0 7.66c0 .48.09.95.26 1.4-.17.44-.26.91-.26 1.39 0 1.38.72 2.64 1.89 3.29.67.7 1.59 1.09 2.54 1.09.61 0 1.19-.15 1.71-.45.68.82 1.68 1.3 2.73 1.3.66 0 1.28-.18 1.83-.52.61.49 1.34.81 2.11.91 1.3 1.43 2.3 3.28 2.31 3.3 0 0 .35.61.33.61.96-.01 1.77-.2 1.64-1.3.01.02-.92-2.89-.92-2.89.52-.26.94-.69 1.21-1.23 1.12-.66 1.84-1.91 1.84-3.26 0-.3-.03-.6-.1-.89.57-.64.88-1.51.88-2.4zm-1.54 1.28l-.18-.2-.77-.84c-.33-.37-.67-1.17-.73-1.73 0 0-.13-1.25-.13-1.26-.06-.74-1.17-.73-1.13.14 0 .02.13 1.26.13 1.26.04.36.15.77.3 1.17-.08-.01-.15-.02-.22-.02 0 0-2.57-.12-2.57-.13-.73-.03-.89 1.22-.05 1.25l2.57.13c.53.03 1.29.37 1.61.72l.61.67.02.06c.1.27.14.55.14.83 0 .93-.51 1.77-1.34 2.18l-.2.1-.09.23c-.19.48-.6.82-1.1.93l-.67.14.87 2.75c-.48-.76-1.19-1.79-2.02-2.67l-.15-.16-.21-.02c-.51-.04-.99-.21-1.42-.48l1.7-1.48c.44-.39 1.04-.55 1.24-.49 0 0 .78.22.78.23.78.2 1.03-.92.29-1.21l-.78-.23c-.69-.2-1.67.22-2.24.72l-1.91 1.66-.39.32c-.44.36-.93.55-1.5.55-.8 0-1.54-.41-1.97-1.07v-1.88c0-.5.21-.98.34-1.07 0 0 .65-.43.64-.43.87-.69.21-1.57-.64-1.14 0-.01-.65.43-.65.43-.31.2-.54.56-.7.97-.13-.13-.28-.25-.43-.35 0 0-1.91-1.26-1.91-1.28-.81-.56-1.5.63-.61 1.11 0-.02 1.89 1.28 1.89 1.28.46.31.77.97.77 1.36v.84c-.43.24-.78.36-1.24.36-.67 0-1.31-.29-1.77-.79l-.07-.08-.09-.05a2.425 2.425 0 01-1.31-2.16c0-.38.09-.74.25-1.08l.15-.31-.14-.33c-.17-.34-.25-.7-.25-1.08 0-1.13.76-2.1 1.85-2.37l.39-.09.07-.43a2.41 2.41 0 012.39-2.05c.19 0 .39.02.58.07l.4.1.22-.38A2.41 2.41 0 019.17 1.3c.55 0 1.08.19 1.5.53l-.44.45-.01-.01-.31.31c-.41.35-.92.53-1.11.5 0 0-.84-.13-.84-.14-.83-.15-1.09 1.08-.18 1.29.01 0 .84.14.84.14.03 0 .06 0 .09.01-.14.46-.18.96-.12 1.4 0 0 .21 1.24.19 1.23.13.65 1.32.44 1.16-.22 0-.01-.19-1.23-.19-1.23-.07-.48.15-1.19.45-1.5l.48-.5c.07-.06.13-.12.19-.18l.93-.95c.5-.23 1.04-.34 1.59-.34 1.93 0 3.57 1.4 3.89 3.34l.05.31.26.15a2.445 2.445 0 01.87 3.4z'];
var PredictiveAnalysisIcon = (0, _react.memo)((0, _react.forwardRef)(function PredictiveAnalysisIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "predictive-analysis"
  }, props));
}));
exports.PredictiveAnalysisIcon = PredictiveAnalysisIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvUHJlZGljdGl2ZUFuYWx5c2lzSWNvbi5qcyJdLCJuYW1lcyI6WyJzdmdQYXRoczE2Iiwic3ZnUGF0aHMyMCIsIlByZWRpY3RpdmVBbmFseXNpc0ljb24iLCJwcm9wcyIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQixzOERBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLHlnRUFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxzQkFBc0IsR0FBRyxpQkFDcEMsdUJBQVcsU0FBU0Esc0JBQVQsQ0FBZ0NDLEtBQWhDLEVBQXVDQyxHQUF2QyxFQUE0QztBQUNyRCxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZELENBRG9DLENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTE2IDYuNDFjMC0xLjAxLS40OS0xLjk0LTEuMjktMi40OS0uNDMtMS45Mi0yLjA3LTMuMjgtNC0zLjI4LS40NiAwLS45Mi4wOC0xLjM1LjI0QzguODMuMzEgOC4xMSAwIDcuMzQgMGMtLjkgMC0xLjc0LjQ0LTIuMjggMS4xNi0uMTItLjAxLS4yNC0uMDItLjM2LS4wMi0xLjMxIDAtMi40Mi44OS0yLjc3IDIuMTdDLjc4IDMuNzIgMCA0Ljg0IDAgNi4xM2MwIC4zOC4wNy43Ni4yMSAxLjEyQy4wNyA3LjYgMCA3Ljk4IDAgOC4zNmMwIDEuMTEuNTggMi4xMSAxLjUxIDIuNjMuNTQuNTYgMS4yNy44NyAyLjAzLjg3LjQ5IDAgLjk1LS4xMiAxLjM3LS4zNmEyLjg1IDIuODUgMCAwMDIuMTggMS4wNGMuNTIgMCAxLjAzLS4xNCAxLjQ3LS40Mi40OS4zOSAxLjA3LjY1IDEuNjkuNzMgMS4wNCAxLjE1IDEuODQgMi42MyAxLjg0IDIuNjQgMCAwIC4yOC40OS4yNi40OS43NyAwIDEuNDEtLjE2IDEuMzItMS4wNCAwIC4wMi0uNzMtMi4zMS0uNzMtMi4zMS40MS0uMjEuNzUtLjU1Ljk3LS45OC45LS41MiAxLjQ3LTEuNTMgMS40Ny0yLjYxIDAtLjI0LS4wMy0uNDgtLjA4LS43MS40NS0uNTIuNy0xLjIxLjctMS45MnptLTEuMjMgMS4wMmwtLjE1LS4xNi0uNjEtLjY3Yy0uMjctLjI5LS41NC0uOTQtLjU4LTEuMzlsLS4xLTEuMDFjLS4wNS0uNTktLjk0LS41OC0uOTEuMTEgMCAuMDIuMSAxLjAxLjEgMS4wMS4wMy4yOS4xMi42Mi4yNC45My0uMDYtLjAxLS4xMi0uMDItLjE4LS4wMiAwIDAtMi4wNi0uMS0yLjA1LS4xMS0uNTgtLjAyLS43MS45Ny0uMDQgMWwyLjA1LjExYy40Mi4wMiAxLjA0LjMgMS4yOS41OGwuNDkuNTQuMDIuMDVjLjA4LjIxLjEyLjQ0LjEyLjY2IDAgLjc0LS40MSAxLjQxLTEuMDcgMS43NWwtLjE2LjA4LS4wNy4xOGMtLjE1LjM4LS40OC42Ni0uODguNzRsLS41NC4xMS43IDIuMmMtLjM4LS42MS0uOTUtMS40My0xLjYyLTIuMTRsLS4xMi0uMTMtLjE3LS4wMWMtLjQxLS4wMy0uOC0uMTctMS4xNC0uMzhsMS4zNi0xLjE4Yy4zNS0uMzEuODMtLjQ0Ljk5LS4zOSAwIDAgLjYzLjE3LjYyLjE4LjYzLjE2LjgzLS43NC4yMy0uOTdsLS42Mi0uMThjLS41NS0uMTYtMS4zMy4xOC0xLjc5LjU4bC0xLjUzIDEuMzMtLjMxLjI2Yy0uMzUuMjktLjc1LjQ0LTEuMi40NC0uNjQgMC0xLjIzLS4zMy0xLjU4LS44NlY5LjE1YzAtLjQuMTctLjc5LjI3LS44NSAwIDAgLjUyLS4zNC41MS0uMzUuNzEtLjUzLjE4LTEuMjMtLjQ5LS44OSAwLS4wMS0uNTIuMzUtLjUyLjM1LS4yNi4xNS0uNDUuNDQtLjU4Ljc3LS4xMS0uMTEtLjIyLS4yLS4zNC0uMjggMCAwLTEuNTMtMS4wMS0xLjUzLTEuMDItLjY1LS40NS0xLjIuNTEtLjQ5Ljg5IDAtLjAxIDEuNTEgMS4wMiAxLjUxIDEuMDIuMzcuMjQuNjIuNzguNjIgMS4wOXYuNjdjLS4zNC4xOS0uNjMuMjktLjk5LjI5LS41NCAwLTEuMDUtLjIzLTEuNDEtLjYzbC0uMDUtLjA2LS4wNy0uMDRjLS42NS0uMzQtMS4wNS0xLTEuMDUtMS43MyAwLS4zLjA3LS42LjItLjg3bC4xMi0uMjVMMS4xNSA3Yy0uMTMtLjI3LS4yLS41Ni0uMi0uODcgMC0uOS42MS0xLjY4IDEuNDgtMS44OWwuMzEtLjA4LjA1LS4zNGExLjkyNiAxLjkyNiAwIDAxMi4zOC0xLjU4bC4zMi4wOC4xOC0uMzFjLjM1LS42Ljk5LS45NyAxLjY3LS45Ny40NCAwIC44Ni4xNSAxLjIuNDJsLS4zNi4zNnYtLjAxbC0uMjUuMjZjLS4zMy4yNy0uNzQuNDItLjg5LjQgMCAwLS42Ny0uMS0uNjctLjExLS42Ny0uMTMtLjg3Ljg2LS4xNCAxLjAyLjAxIDAgLjY3LjExLjY3LjExLjAyIDAgLjA1IDAgLjA3LjAxLS4xMS4zNy0uMTUuNzctLjEgMS4xMiAwIDAgLjE3Ljk5LjE1Ljk5LjExLjUyIDEuMDYuMzYuOTMtLjE4IDAtLjAxLS4xNS0uOTktLjE1LS45OS0uMDUtLjM3LjEyLS45NC4zNi0xLjE5bC4zOS0uNGMuMDUtLjA1LjEtLjA5LjE1LS4xNGwuNzQtLjc2Yy40LS4xOC44My0uMjcgMS4yNy0uMjcgMS41NSAwIDIuODYgMS4xMiAzLjExIDIuNjdsLjA0LjI1LjIxLjEyYy42MS4zNS45OCAxIC45OCAxLjcgMCAuMzYtLjEuNy0uMjggMS4wMXonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTIwIDguMDFjMC0xLjI2LS42MS0yLjQzLTEuNjEtMy4xMkMxNy44NiAyLjUgMTUuOC43OSAxMy40Ljc5Yy0uNTggMC0xLjE0LjEtMS42OS4yOUEzLjUzMyAzLjUzMyAwIDAwOS4xNyAwQzguMDUgMCA3IC41NSA2LjMyIDEuNDVjLS4xNS0uMDItLjMtLjAzLS40NS0uMDMtMS42MyAwLTMuMDMgMS4xMi0zLjQ2IDIuNzFDLjk3IDQuNjUgMCA2LjA1IDAgNy42NmMwIC40OC4wOS45NS4yNiAxLjQtLjE3LjQ0LS4yNi45MS0uMjYgMS4zOSAwIDEuMzguNzIgMi42NCAxLjg5IDMuMjkuNjcuNyAxLjU5IDEuMDkgMi41NCAxLjA5LjYxIDAgMS4xOS0uMTUgMS43MS0uNDUuNjguODIgMS42OCAxLjMgMi43MyAxLjMuNjYgMCAxLjI4LS4xOCAxLjgzLS41Mi42MS40OSAxLjM0LjgxIDIuMTEuOTEgMS4zIDEuNDMgMi4zIDMuMjggMi4zMSAzLjMgMCAwIC4zNS42MS4zMy42MS45Ni0uMDEgMS43Ny0uMiAxLjY0LTEuMy4wMS4wMi0uOTItMi44OS0uOTItMi44OS41Mi0uMjYuOTQtLjY5IDEuMjEtMS4yMyAxLjEyLS42NiAxLjg0LTEuOTEgMS44NC0zLjI2IDAtLjMtLjAzLS42LS4xLS44OS41Ny0uNjQuODgtMS41MS44OC0yLjR6bS0xLjU0IDEuMjhsLS4xOC0uMi0uNzctLjg0Yy0uMzMtLjM3LS42Ny0xLjE3LS43My0xLjczIDAgMC0uMTMtMS4yNS0uMTMtMS4yNi0uMDYtLjc0LTEuMTctLjczLTEuMTMuMTQgMCAuMDIuMTMgMS4yNi4xMyAxLjI2LjA0LjM2LjE1Ljc3LjMgMS4xNy0uMDgtLjAxLS4xNS0uMDItLjIyLS4wMiAwIDAtMi41Ny0uMTItMi41Ny0uMTMtLjczLS4wMy0uODkgMS4yMi0uMDUgMS4yNWwyLjU3LjEzYy41My4wMyAxLjI5LjM3IDEuNjEuNzJsLjYxLjY3LjAyLjA2Yy4xLjI3LjE0LjU1LjE0LjgzIDAgLjkzLS41MSAxLjc3LTEuMzQgMi4xOGwtLjIuMS0uMDkuMjNjLS4xOS40OC0uNi44Mi0xLjEuOTNsLS42Ny4xNC44NyAyLjc1Yy0uNDgtLjc2LTEuMTktMS43OS0yLjAyLTIuNjdsLS4xNS0uMTYtLjIxLS4wMmMtLjUxLS4wNC0uOTktLjIxLTEuNDItLjQ4bDEuNy0xLjQ4Yy40NC0uMzkgMS4wNC0uNTUgMS4yNC0uNDkgMCAwIC43OC4yMi43OC4yMy43OC4yIDEuMDMtLjkyLjI5LTEuMjFsLS43OC0uMjNjLS42OS0uMi0xLjY3LjIyLTIuMjQuNzJsLTEuOTEgMS42Ni0uMzkuMzJjLS40NC4zNi0uOTMuNTUtMS41LjU1LS44IDAtMS41NC0uNDEtMS45Ny0xLjA3di0xLjg4YzAtLjUuMjEtLjk4LjM0LTEuMDcgMCAwIC42NS0uNDMuNjQtLjQzLjg3LS42OS4yMS0xLjU3LS42NC0xLjE0IDAtLjAxLS42NS40My0uNjUuNDMtLjMxLjItLjU0LjU2LS43Ljk3LS4xMy0uMTMtLjI4LS4yNS0uNDMtLjM1IDAgMC0xLjkxLTEuMjYtMS45MS0xLjI4LS44MS0uNTYtMS41LjYzLS42MSAxLjExIDAtLjAyIDEuODkgMS4yOCAxLjg5IDEuMjguNDYuMzEuNzcuOTcuNzcgMS4zNnYuODRjLS40My4yNC0uNzguMzYtMS4yNC4zNi0uNjcgMC0xLjMxLS4yOS0xLjc3LS43OWwtLjA3LS4wOC0uMDktLjA1YTIuNDI1IDIuNDI1IDAgMDEtMS4zMS0yLjE2YzAtLjM4LjA5LS43NC4yNS0xLjA4bC4xNS0uMzEtLjE0LS4zM2MtLjE3LS4zNC0uMjUtLjctLjI1LTEuMDggMC0xLjEzLjc2LTIuMSAxLjg1LTIuMzdsLjM5LS4wOS4wNy0uNDNhMi40MSAyLjQxIDAgMDEyLjM5LTIuMDVjLjE5IDAgLjM5LjAyLjU4LjA3bC40LjEuMjItLjM4QTIuNDEgMi40MSAwIDAxOS4xNyAxLjNjLjU1IDAgMS4wOC4xOSAxLjUuNTNsLS40NC40NS0uMDEtLjAxLS4zMS4zMWMtLjQxLjM1LS45Mi41My0xLjExLjUgMCAwLS44NC0uMTMtLjg0LS4xNC0uODMtLjE1LTEuMDkgMS4wOC0uMTggMS4yOS4wMSAwIC44NC4xNC44NC4xNC4wMyAwIC4wNiAwIC4wOS4wMS0uMTQuNDYtLjE4Ljk2LS4xMiAxLjQgMCAwIC4yMSAxLjI0LjE5IDEuMjMuMTMuNjUgMS4zMi40NCAxLjE2LS4yMiAwLS4wMS0uMTktMS4yMy0uMTktMS4yMy0uMDctLjQ4LjE1LTEuMTkuNDUtMS41bC40OC0uNWMuMDctLjA2LjEzLS4xMi4xOS0uMThsLjkzLS45NWMuNS0uMjMgMS4wNC0uMzQgMS41OS0uMzQgMS45MyAwIDMuNTcgMS40IDMuODkgMy4zNGwuMDUuMzEuMjYuMTVhMi40NDUgMi40NDUgMCAwMS44NyAzLjR6J1xuXVxuXG5leHBvcnQgY29uc3QgUHJlZGljdGl2ZUFuYWx5c2lzSWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gUHJlZGljdGl2ZUFuYWx5c2lzSWNvbihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uXG4gICAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBuYW1lPVwicHJlZGljdGl2ZS1hbmFseXNpc1wiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuIl19