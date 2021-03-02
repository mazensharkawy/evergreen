"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _palette = _interopRequireDefault(require("../foundational-styles/palette"));

var TagInputAppearances = {};
TagInputAppearances["default"] = _themer.Themer.createTagInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  focus: {
    boxShadow: "inset 0 0 2px ".concat(_scales["default"].neutral.N4A, ", inset 0 0 0 1px ").concat(_scales["default"].blue.B7, ", 0 0 0 3px ").concat(_scales["default"].blue.B4A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
/**
 * Get the appearance of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {Object} the appearance object.
 */

var getTextInputAppearance = function getTextInputAppearance() {
  return TagInputAppearances["default"];
};
/**
 * Get the className of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getTextInputAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGFnSW5wdXRDbGFzc05hbWUuanMiXSwibmFtZXMiOlsiVGFnSW5wdXRBcHBlYXJhbmNlcyIsIlRoZW1lciIsImNyZWF0ZVRhZ0lucHV0QXBwZWFyYW5jZSIsImJhc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjVBIiwiTjRBIiwiaW52YWxpZCIsInBhbGV0dGUiLCJyZWQiLCJmb2N1cyIsImJsdWUiLCJCNyIsIkI0QSIsImRpc2FibGVkIiwiTjIiLCJnZXRUZXh0SW5wdXRBcHBlYXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxFQUE1QjtBQUVBQSxtQkFBbUIsV0FBbkIsR0FBOEJDLGVBQU9DLHdCQUFQLENBQWdDO0FBQzVEQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsZUFBZSxFQUFFLE9BRGI7QUFFSkMsSUFBQUEsU0FBUyw0QkFBcUJDLG1CQUFPQyxPQUFQLENBQWVDLEdBQXBDLCtCQUE0REYsbUJBQU9DLE9BQVAsQ0FBZUUsR0FBM0U7QUFGTCxHQURzRDtBQUs1REMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BMLElBQUFBLFNBQVMsNEJBQXFCTSxvQkFBUUMsR0FBUixDQUFZVCxJQUFqQywrQkFBMERHLG1CQUFPQyxPQUFQLENBQWVFLEdBQXpFO0FBREYsR0FMbUQ7QUFRNURJLEVBQUFBLEtBQUssRUFBRTtBQUNMUixJQUFBQSxTQUFTLDBCQUFtQkMsbUJBQU9DLE9BQVAsQ0FBZUUsR0FBbEMsK0JBQTBESCxtQkFBT1EsSUFBUCxDQUFZQyxFQUF0RSx5QkFBdUZULG1CQUFPUSxJQUFQLENBQVlFLEdBQW5HO0FBREosR0FScUQ7QUFXNURDLEVBQUFBLFFBQVEsRUFBRTtBQUNSWixJQUFBQSxTQUFTLDRCQUFxQkMsbUJBQU9DLE9BQVAsQ0FBZUUsR0FBcEMsQ0FERDtBQUVSTCxJQUFBQSxlQUFlLEVBQUVFLG1CQUFPQyxPQUFQLENBQWVXO0FBRnhCO0FBWGtELENBQWhDLENBQTlCO0FBaUJBOzs7Ozs7QUFLQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07QUFDbkMsU0FBT25CLG1CQUFtQixXQUExQjtBQUNELENBRkQ7QUFJQTs7Ozs7OztlQUtlLGtDQUFpQm1CLHNCQUFqQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IFRhZ0lucHV0QXBwZWFyYW5jZXMgPSB7fVxuXG5UYWdJbnB1dEFwcGVhcmFuY2VzLmRlZmF1bHQgPSBUaGVtZXIuY3JlYXRlVGFnSW5wdXRBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONUF9LCBpbnNldCAwIDFweCAycHggJHtzY2FsZXMubmV1dHJhbC5ONEF9YFxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX0sIGluc2V0IDAgMXB4IDJweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDJweCAke3NjYWxlcy5uZXV0cmFsLk40QX0sIGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5ibHVlLkI3fSwgMCAwIDAgM3B4ICR7c2NhbGVzLmJsdWUuQjRBfWBcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9YCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yXG4gIH1cbn0pXG5cbi8qKlxuICogR2V0IHRoZSBhcHBlYXJhbmNlIG9mIGEgYFRhZ0lucHV0YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gdGhlIGFwcGVhcmFuY2UgbmFtZVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgYXBwZWFyYW5jZSBvYmplY3QuXG4gKi9cbmNvbnN0IGdldFRleHRJbnB1dEFwcGVhcmFuY2UgPSAoKSA9PiB7XG4gIHJldHVybiBUYWdJbnB1dEFwcGVhcmFuY2VzLmRlZmF1bHRcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBUYWdJbnB1dGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIHRoZSBhcHBlYXJhbmNlIG5hbWVcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2UgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNsYXNzTmFtZShnZXRUZXh0SW5wdXRBcHBlYXJhbmNlKVxuIl19