"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeConsumer = exports.ThemeProvider = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _defaultTheme = _interopRequireDefault(require("./default-theme"));

/**
 * Use React 16.3+ createContext API.
 */
var ThemeContext = _react["default"].createContext(_defaultTheme["default"]);

var ThemeProvider = ThemeContext.Provider,
    ThemeConsumer = ThemeContext.Consumer;
exports.ThemeConsumer = ThemeConsumer;
exports.ThemeProvider = ThemeProvider;
var _default = ThemeContext;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZS9zcmMvVGhlbWVDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlRoZW1lQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImRlZmF1bHRUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJQcm92aWRlciIsIlRoZW1lQ29uc3VtZXIiLCJDb25zdW1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7OztBQUdBLElBQU1BLFlBQVksR0FBR0Msa0JBQU1DLGFBQU4sQ0FBb0JDLHdCQUFwQixDQUFyQjs7SUFDa0JDLGEsR0FBMkNKLFksQ0FBckRLLFE7SUFBbUNDLGEsR0FBa0JOLFksQ0FBNUJPLFE7OztlQUVsQlAsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0LXRoZW1lJ1xuXG4vKipcbiAqIFVzZSBSZWFjdCAxNi4zKyBjcmVhdGVDb250ZXh0IEFQSS5cbiAqL1xuY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0VGhlbWUpXG5jb25zdCB7IFByb3ZpZGVyOiBUaGVtZVByb3ZpZGVyLCBDb25zdW1lcjogVGhlbWVDb25zdW1lciB9ID0gVGhlbWVDb250ZXh0XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQ29udGV4dFxuZXhwb3J0IHsgVGhlbWVQcm92aWRlciwgVGhlbWVDb25zdW1lciB9XG4iXX0=