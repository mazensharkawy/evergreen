"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _helpers = require("../helpers");

var primaryStyle = (0, _helpers.getPrimaryButtonStylesForIntent)();

var defaultAppearance = _themer.Themer.createCheckboxAppearance({
  base: {
    color: 'white',
    backgroundColor: 'white',
    backgroundImage: "linear-gradient(to top, ".concat(_scales["default"].neutral.N2A, ", white)"),
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N3A)
  },
  disabled: {
    cursor: 'not-allowed',
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2A,
    backgroundImage: 'none'
  },
  hover: {
    backgroundImage: "linear-gradient(to top, ".concat(_scales["default"].neutral.N2A, ", ").concat(_scales["default"].neutral.N1A, ")"),
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  focus: {
    boxShadow: "0 0 0 2px ".concat(_scales["default"].blue.B4A, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N3A)
  },
  active: {
    backgroundImage: 'none',
    backgroundColor: _scales["default"].blue.B3A,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].blue.B5A)
  },
  checked: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.base,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  checkedHover: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.hover,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  checkedDisabled: {
    color: _scales["default"].neutral.N6A,
    backgroundImage: "linear-gradient(to top, ".concat(_scales["default"].neutral.N2A, ", ").concat(_scales["default"].neutral.N1A, ")"),
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  checkedActive: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.active,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  }
});
/**
 * There is only a single appearance in the default theme.
 * @param {String} appearance.
 * @return {Object} the appearance of the checkbox.
 */


var getCheckboxAppearance = function getCheckboxAppearance() {
  return defaultAppearance;
};
/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getCheckboxAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0Q2hlY2tib3hDbGFzc05hbWUuanMiXSwibmFtZXMiOlsicHJpbWFyeVN0eWxlIiwiZGVmYXVsdEFwcGVhcmFuY2UiLCJUaGVtZXIiLCJjcmVhdGVDaGVja2JveEFwcGVhcmFuY2UiLCJiYXNlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjJBIiwiYm94U2hhZG93IiwiTjRBIiwiTjNBIiwiZGlzYWJsZWQiLCJjdXJzb3IiLCJob3ZlciIsIk4xQSIsImZvY3VzIiwiYmx1ZSIsIkI0QSIsIk41QSIsImFjdGl2ZSIsIkIzQSIsIkI1QSIsImNoZWNrZWQiLCJsaW5lYXJHcmFkaWVudCIsImNoZWNrZWRIb3ZlciIsImNoZWNrZWREaXNhYmxlZCIsIk42QSIsImNoZWNrZWRBY3RpdmUiLCJnZXRDaGVja2JveEFwcGVhcmFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRywrQ0FBckI7O0FBRUEsSUFBTUMsaUJBQWlCLEdBQUdDLGVBQU9DLHdCQUFQLENBQWdDO0FBQ3hEQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsS0FBSyxFQUFFLE9BREg7QUFFSkMsSUFBQUEsZUFBZSxFQUFFLE9BRmI7QUFHSkMsSUFBQUEsZUFBZSxvQ0FBNkJDLG1CQUFPQyxPQUFQLENBQWVDLEdBQTVDLGFBSFg7QUFJSkMsSUFBQUEsU0FBUyw0QkFBcUJILG1CQUFPQyxPQUFQLENBQWVHLEdBQXBDLGtDQUErREosbUJBQU9DLE9BQVAsQ0FBZUksR0FBOUU7QUFKTCxHQURrRDtBQU94REMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxhQURBO0FBRVJKLElBQUFBLFNBQVMsNEJBQXFCSCxtQkFBT0MsT0FBUCxDQUFlRyxHQUFwQyxDQUZEO0FBR1JOLElBQUFBLGVBQWUsRUFBRUUsbUJBQU9DLE9BQVAsQ0FBZUMsR0FIeEI7QUFJUkgsSUFBQUEsZUFBZSxFQUFFO0FBSlQsR0FQOEM7QUFheERTLEVBQUFBLEtBQUssRUFBRTtBQUNMVCxJQUFBQSxlQUFlLG9DQUE2QkMsbUJBQU9DLE9BQVAsQ0FBZUMsR0FBNUMsZUFBb0RGLG1CQUFPQyxPQUFQLENBQWVRLEdBQW5FLE1BRFY7QUFFTE4sSUFBQUEsU0FBUyw0QkFBcUJILG1CQUFPQyxPQUFQLENBQWVHLEdBQXBDLGtDQUErREosbUJBQU9DLE9BQVAsQ0FBZUMsR0FBOUU7QUFGSixHQWJpRDtBQWlCeERRLEVBQUFBLEtBQUssRUFBRTtBQUNMUCxJQUFBQSxTQUFTLHNCQUFlSCxtQkFBT1csSUFBUCxDQUFZQyxHQUEzQiwrQkFBbURaLG1CQUFPQyxPQUFQLENBQWVZLEdBQWxFLGtDQUE2RmIsbUJBQU9DLE9BQVAsQ0FBZUksR0FBNUc7QUFESixHQWpCaUQ7QUFvQnhEUyxFQUFBQSxNQUFNLEVBQUU7QUFDTmYsSUFBQUEsZUFBZSxFQUFFLE1BRFg7QUFFTkQsSUFBQUEsZUFBZSxFQUFFRSxtQkFBT1csSUFBUCxDQUFZSSxHQUZ2QjtBQUdOWixJQUFBQSxTQUFTLDRCQUFxQkgsbUJBQU9XLElBQVAsQ0FBWUssR0FBakM7QUFISCxHQXBCZ0Q7QUF5QnhEQyxFQUFBQSxPQUFPLEVBQUU7QUFDUHBCLElBQUFBLEtBQUssRUFBRSxPQURBO0FBRVBFLElBQUFBLGVBQWUsRUFBRVAsWUFBWSxDQUFDMEIsY0FBYixDQUE0QnRCLElBRnRDO0FBR1BPLElBQUFBLFNBQVMsNEJBQXFCSCxtQkFBT0MsT0FBUCxDQUFlWSxHQUFwQyxrQ0FBK0RiLG1CQUFPQyxPQUFQLENBQWVDLEdBQTlFO0FBSEYsR0F6QitDO0FBOEJ4RGlCLEVBQUFBLFlBQVksRUFBRTtBQUNadEIsSUFBQUEsS0FBSyxFQUFFLE9BREs7QUFFWkUsSUFBQUEsZUFBZSxFQUFFUCxZQUFZLENBQUMwQixjQUFiLENBQTRCVixLQUZqQztBQUdaTCxJQUFBQSxTQUFTLDRCQUFxQkgsbUJBQU9DLE9BQVAsQ0FBZVksR0FBcEMsa0NBQStEYixtQkFBT0MsT0FBUCxDQUFlQyxHQUE5RTtBQUhHLEdBOUIwQztBQW1DeERrQixFQUFBQSxlQUFlLEVBQUU7QUFDZnZCLElBQUFBLEtBQUssRUFBRUcsbUJBQU9DLE9BQVAsQ0FBZW9CLEdBRFA7QUFFZnRCLElBQUFBLGVBQWUsb0NBQTZCQyxtQkFBT0MsT0FBUCxDQUFlQyxHQUE1QyxlQUFvREYsbUJBQU9DLE9BQVAsQ0FBZVEsR0FBbkUsTUFGQTtBQUdmTixJQUFBQSxTQUFTLDRCQUFxQkgsbUJBQU9DLE9BQVAsQ0FBZUcsR0FBcEMsa0NBQStESixtQkFBT0MsT0FBUCxDQUFlQyxHQUE5RTtBQUhNLEdBbkN1QztBQXdDeERvQixFQUFBQSxhQUFhLEVBQUU7QUFDYnpCLElBQUFBLEtBQUssRUFBRSxPQURNO0FBRWJFLElBQUFBLGVBQWUsRUFBRVAsWUFBWSxDQUFDMEIsY0FBYixDQUE0QkosTUFGaEM7QUFHYlgsSUFBQUEsU0FBUyw0QkFBcUJILG1CQUFPQyxPQUFQLENBQWVHLEdBQXBDLGtDQUErREosbUJBQU9DLE9BQVAsQ0FBZUMsR0FBOUU7QUFISTtBQXhDeUMsQ0FBaEMsQ0FBMUI7QUErQ0E7Ozs7Ozs7QUFLQSxJQUFNcUIscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDLFNBQU85QixpQkFBUDtBQUNELENBRkQ7QUFJQTs7Ozs7OztlQUtlLGtDQUFpQjhCLHFCQUFqQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQgeyBnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50IH0gZnJvbSAnLi4vaGVscGVycydcblxuY29uc3QgcHJpbWFyeVN0eWxlID0gZ2V0UHJpbWFyeUJ1dHRvblN0eWxlc0ZvckludGVudCgpXG5cbmNvbnN0IGRlZmF1bHRBcHBlYXJhbmNlID0gVGhlbWVyLmNyZWF0ZUNoZWNrYm94QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJHtzY2FsZXMubmV1dHJhbC5OMkF9LCB3aGl0ZSlgLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX0sIGluc2V0IDAgLTFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk4zQX1gXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJBLFxuICAgIGJhY2tncm91bmRJbWFnZTogJ25vbmUnXG4gIH0sXG4gIGhvdmVyOiB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJHtzY2FsZXMubmV1dHJhbC5OMkF9LCAke3NjYWxlcy5uZXV0cmFsLk4xQX0pYCxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICB9LFxuICBmb2N1czoge1xuICAgIGJveFNoYWRvdzogYDAgMCAwIDJweCAke3NjYWxlcy5ibHVlLkI0QX0sIGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk41QX0sIGluc2V0IDAgLTFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk4zQX1gXG4gIH0sXG4gIGFjdGl2ZToge1xuICAgIGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjNBLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5ibHVlLkI1QX1gXG4gIH0sXG4gIGNoZWNrZWQ6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHByaW1hcnlTdHlsZS5saW5lYXJHcmFkaWVudC5iYXNlLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk41QX0sIGluc2V0IDAgLTFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk4yQX1gXG4gIH0sXG4gIGNoZWNrZWRIb3Zlcjoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRJbWFnZTogcHJpbWFyeVN0eWxlLmxpbmVhckdyYWRpZW50LmhvdmVyLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk41QX0sIGluc2V0IDAgLTFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk4yQX1gXG4gIH0sXG4gIGNoZWNrZWREaXNhYmxlZDoge1xuICAgIGNvbG9yOiBzY2FsZXMubmV1dHJhbC5ONkEsXG4gICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJHtzY2FsZXMubmV1dHJhbC5OMkF9LCAke3NjYWxlcy5uZXV0cmFsLk4xQX0pYCxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICB9LFxuICBjaGVja2VkQWN0aXZlOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZEltYWdlOiBwcmltYXJ5U3R5bGUubGluZWFyR3JhZGllbnQuYWN0aXZlLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX0sIGluc2V0IDAgLTFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk4yQX1gXG4gIH1cbn0pXG5cbi8qKlxuICogVGhlcmUgaXMgb25seSBhIHNpbmdsZSBhcHBlYXJhbmNlIGluIHRoZSBkZWZhdWx0IHRoZW1lLlxuICogQHBhcmFtIHtTdHJpbmd9IGFwcGVhcmFuY2UuXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGVja2JveC5cbiAqL1xuY29uc3QgZ2V0Q2hlY2tib3hBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gZGVmYXVsdEFwcGVhcmFuY2Vcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBDaGVja2JveGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldENoZWNrYm94QXBwZWFyYW5jZSlcbiJdfQ==