"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeatmapIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M2 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3 4.5A2.5 2.5 0 0013.5 6c-.98 0-1.82.57-2.23 1.39-.6-.78-1.51-1.3-2.56-1.36.18-.49.29-.99.29-1.53C9 2.01 6.99 0 4.5 0S0 2.01 0 4.5 2.01 9 4.5 9c.19 0 .37-.03.56-.06-.03.19-.06.37-.06.56C5 11.43 6.57 13 8.5 13c1.63 0 2.98-1.11 3.37-2.62.44.38 1 .62 1.63.62A2.5 2.5 0 0016 8.5zM14.5 13c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'];
var svgPaths20 = ['M6 0a6 6 0 100 12A6 6 0 106 0z', 'M10.5 8a4.5 4.5 0 100 9 4.5 4.5 0 100-9z', 'M16.5 7a3.5 3.5 0 100 7 3.5 3.5 0 100-7zM18 16a2 2 0 100 4 2 2 0 100-4zM2.5 14a2.5 2.5 0 100 5 2.5 2.5 0 100-5zM16.5 0a2.5 2.5 0 100 5 2.5 2.5 0 100-5z'];
var HeatmapIcon = (0, _react.memo)((0, _react.forwardRef)(function HeatmapIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "heatmap"
  }, props));
}));
exports.HeatmapIcon = HeatmapIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvSGVhdG1hcEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJIZWF0bWFwSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLHVjQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixnQ0FEaUIsRUFFakIsMENBRmlCLEVBR2pCLHlKQUhpQixDQUFuQjtBQU1PLElBQU1DLFdBQVcsR0FBRyxpQkFDekIsdUJBQVcsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzFDLFNBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFERjtBQVNELENBVkQsQ0FEeUIsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNMiAxMWMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTExLTdjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0zIDQuNUEyLjUgMi41IDAgMDAxMy41IDZjLS45OCAwLTEuODIuNTctMi4yMyAxLjM5LS42LS43OC0xLjUxLTEuMy0yLjU2LTEuMzYuMTgtLjQ5LjI5LS45OS4yOS0xLjUzQzkgMi4wMSA2Ljk5IDAgNC41IDBTMCAyLjAxIDAgNC41IDIuMDEgOSA0LjUgOWMuMTkgMCAuMzctLjAzLjU2LS4wNi0uMDMuMTktLjA2LjM3LS4wNi41NkM1IDExLjQzIDYuNTcgMTMgOC41IDEzYzEuNjMgMCAyLjk4LTEuMTEgMy4zNy0yLjYyLjQ0LjM4IDEgLjYyIDEuNjMuNjJBMi41IDIuNSAwIDAwMTYgOC41ek0xNC41IDEzYy0uODMgMC0xLjUuNjctMS41IDEuNXMuNjcgMS41IDEuNSAxLjUgMS41LS42NyAxLjUtMS41LS42Ny0xLjUtMS41LTEuNXonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTYgMGE2IDYgMCAxMDAgMTJBNiA2IDAgMTA2IDB6JyxcbiAgJ00xMC41IDhhNC41IDQuNSAwIDEwMCA5IDQuNSA0LjUgMCAxMDAtOXonLFxuICAnTTE2LjUgN2EzLjUgMy41IDAgMTAwIDcgMy41IDMuNSAwIDEwMC03ek0xOCAxNmEyIDIgMCAxMDAgNCAyIDIgMCAxMDAtNHpNMi41IDE0YTIuNSAyLjUgMCAxMDAgNSAyLjUgMi41IDAgMTAwLTV6TTE2LjUgMGEyLjUgMi41IDAgMTAwIDUgMi41IDIuNSAwIDEwMC01eidcbl1cblxuZXhwb3J0IGNvbnN0IEhlYXRtYXBJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBIZWF0bWFwSWNvbihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uXG4gICAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBuYW1lPVwiaGVhdG1hcFwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuIl19