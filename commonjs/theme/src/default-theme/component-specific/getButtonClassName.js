"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _helpers = require("../helpers");

var _shared = require("../shared");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Disabled styles are all the same for all buttons.
 */
var disabled = _shared.defaultControlStyles.disabled;
/**
 * Get button appearance.
 * @param {string} appearance - default, primary, minimal.
 * @param {string} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */

var getButtonAppearance = function getButtonAppearance(appearance, intent) {
  switch (appearance) {
    case 'primary':
      {
        var _getPrimaryButtonStyl = (0, _helpers.getPrimaryButtonStylesForIntent)(intent),
            linearGradient = _getPrimaryButtonStyl.linearGradient,
            focusColor = _getPrimaryButtonStyl.focusColor;

        return _themer.Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: 'white',
            backgroundColor: 'white',
            backgroundImage: linearGradient.base,
            boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
          },
          hover: {
            backgroundImage: linearGradient.hover
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N5A)
          },
          active: {
            backgroundImage: linearGradient.active,
            boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
          },
          focusAndActive: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N4A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
          }
        });
      }

    case 'minimal':
      {
        var intentTextColor = (0, _helpers.getTextColorForIntent)(intent, _scales["default"].blue.B9);
        return _themer.Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: intentTextColor,
            backgroundColor: 'transparent'
          },
          hover: {
            backgroundColor: _scales["default"].neutral.N2A
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(_scales["default"].blue.B5A)
          },
          active: {
            backgroundImage: 'none',
            backgroundColor: _scales["default"].blue.B3A
          },
          focusAndActive: {}
        });
      }

    case 'default':
    default:
      {
        var _intentTextColor = (0, _helpers.getTextColorForIntent)(intent);

        return _themer.Themer.createButtonAppearance({
          disabled: disabled,
          base: _objectSpread({
            color: _intentTextColor
          }, _shared.defaultControlStyles.base),
          hover: _shared.defaultControlStyles.hover,
          focus: _shared.defaultControlStyles.focus,
          active: _shared.defaultControlStyles.active,
          focusAndActive: _shared.defaultControlStyles.focusAndActive
        });
      }
  }
};
/**
 * Get the className of a `Button`|`IconButton`.
 * @param {string} appearance - default, primary, minimal.
 * @param {Intent} intent - none, success, warning, danger.
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getButtonAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QnV0dG9uQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbImRpc2FibGVkIiwiZGVmYXVsdENvbnRyb2xTdHlsZXMiLCJnZXRCdXR0b25BcHBlYXJhbmNlIiwiYXBwZWFyYW5jZSIsImludGVudCIsImxpbmVhckdyYWRpZW50IiwiZm9jdXNDb2xvciIsIlRoZW1lciIsImNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UiLCJiYXNlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3hTaGFkb3ciLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjVBIiwiTjJBIiwiaG92ZXIiLCJmb2N1cyIsIk40QSIsImFjdGl2ZSIsImZvY3VzQW5kQWN0aXZlIiwiaW50ZW50VGV4dENvbG9yIiwiYmx1ZSIsIkI5IiwiQjVBIiwiQjNBIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUlBOzs7Ozs7QUFFQTs7O0lBR1FBLFEsR0FBYUMsNEIsQ0FBYkQsUTtBQUVSOzs7Ozs7O0FBTUEsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxVQUFELEVBQWFDLE1BQWIsRUFBd0I7QUFDbEQsVUFBUUQsVUFBUjtBQUNFLFNBQUssU0FBTDtBQUFnQjtBQUFBLG9DQUN5Qiw4Q0FDckNDLE1BRHFDLENBRHpCO0FBQUEsWUFDTkMsY0FETSx5QkFDTkEsY0FETTtBQUFBLFlBQ1VDLFVBRFYseUJBQ1VBLFVBRFY7O0FBSWQsZUFBT0MsZUFBT0Msc0JBQVAsQ0FBOEI7QUFDbkNSLFVBQUFBLFFBQVEsRUFBUkEsUUFEbUM7QUFFbkNTLFVBQUFBLElBQUksRUFBRTtBQUNKQyxZQUFBQSxLQUFLLEVBQUUsT0FESDtBQUVKQyxZQUFBQSxlQUFlLEVBQUUsT0FGYjtBQUdKQyxZQUFBQSxlQUFlLEVBQUVQLGNBQWMsQ0FBQ0ksSUFINUI7QUFJSkksWUFBQUEsU0FBUyw0QkFBcUJDLG1CQUFPQyxPQUFQLENBQWVDLEdBQXBDLGtDQUErREYsbUJBQU9DLE9BQVAsQ0FBZUUsR0FBOUU7QUFKTCxXQUY2QjtBQVFuQ0MsVUFBQUEsS0FBSyxFQUFFO0FBQ0xOLFlBQUFBLGVBQWUsRUFBRVAsY0FBYyxDQUFDYTtBQUQzQixXQVI0QjtBQVduQ0MsVUFBQUEsS0FBSyxFQUFFO0FBQ0xOLFlBQUFBLFNBQVMsc0JBQWVQLFVBQWYsK0JBQThDUSxtQkFBT0MsT0FBUCxDQUFlSyxHQUE3RCxrQ0FBd0ZOLG1CQUFPQyxPQUFQLENBQWVDLEdBQXZHO0FBREosV0FYNEI7QUFjbkNLLFVBQUFBLE1BQU0sRUFBRTtBQUNOVCxZQUFBQSxlQUFlLEVBQUVQLGNBQWMsQ0FBQ2dCLE1BRDFCO0FBRU5SLFlBQUFBLFNBQVMsNEJBQXFCQyxtQkFBT0MsT0FBUCxDQUFlSyxHQUFwQyxpQ0FBOEROLG1CQUFPQyxPQUFQLENBQWVFLEdBQTdFO0FBRkgsV0FkMkI7QUFrQm5DSyxVQUFBQSxjQUFjLEVBQUU7QUFDZFQsWUFBQUEsU0FBUyxzQkFBZVAsVUFBZiwrQkFBOENRLG1CQUFPQyxPQUFQLENBQWVLLEdBQTdELGlDQUF1Rk4sbUJBQU9DLE9BQVAsQ0FBZUUsR0FBdEc7QUFESztBQWxCbUIsU0FBOUIsQ0FBUDtBQXNCRDs7QUFFRCxTQUFLLFNBQUw7QUFBZ0I7QUFDZCxZQUFNTSxlQUFlLEdBQUcsb0NBQXNCbkIsTUFBdEIsRUFBOEJVLG1CQUFPVSxJQUFQLENBQVlDLEVBQTFDLENBQXhCO0FBQ0EsZUFBT2xCLGVBQU9DLHNCQUFQLENBQThCO0FBQ25DUixVQUFBQSxRQUFRLEVBQVJBLFFBRG1DO0FBRW5DUyxVQUFBQSxJQUFJLEVBQUU7QUFDSkMsWUFBQUEsS0FBSyxFQUFFYSxlQURIO0FBRUpaLFlBQUFBLGVBQWUsRUFBRTtBQUZiLFdBRjZCO0FBTW5DTyxVQUFBQSxLQUFLLEVBQUU7QUFDTFAsWUFBQUEsZUFBZSxFQUFFRyxtQkFBT0MsT0FBUCxDQUFlRTtBQUQzQixXQU40QjtBQVNuQ0UsVUFBQUEsS0FBSyxFQUFFO0FBQ0xOLFlBQUFBLFNBQVMsc0JBQWVDLG1CQUFPVSxJQUFQLENBQVlFLEdBQTNCO0FBREosV0FUNEI7QUFZbkNMLFVBQUFBLE1BQU0sRUFBRTtBQUNOVCxZQUFBQSxlQUFlLEVBQUUsTUFEWDtBQUVORCxZQUFBQSxlQUFlLEVBQUVHLG1CQUFPVSxJQUFQLENBQVlHO0FBRnZCLFdBWjJCO0FBZ0JuQ0wsVUFBQUEsY0FBYyxFQUFFO0FBaEJtQixTQUE5QixDQUFQO0FBa0JEOztBQUVELFNBQUssU0FBTDtBQUNBO0FBQVM7QUFDUCxZQUFNQyxnQkFBZSxHQUFHLG9DQUFzQm5CLE1BQXRCLENBQXhCOztBQUNBLGVBQU9HLGVBQU9DLHNCQUFQLENBQThCO0FBQ25DUixVQUFBQSxRQUFRLEVBQVJBLFFBRG1DO0FBRW5DUyxVQUFBQSxJQUFJO0FBQ0ZDLFlBQUFBLEtBQUssRUFBRWE7QUFETCxhQUVDdEIsNkJBQXFCUSxJQUZ0QixDQUYrQjtBQU1uQ1MsVUFBQUEsS0FBSyxFQUFFakIsNkJBQXFCaUIsS0FOTztBQU9uQ0MsVUFBQUEsS0FBSyxFQUFFbEIsNkJBQXFCa0IsS0FQTztBQVFuQ0UsVUFBQUEsTUFBTSxFQUFFcEIsNkJBQXFCb0IsTUFSTTtBQVNuQ0MsVUFBQUEsY0FBYyxFQUFFckIsNkJBQXFCcUI7QUFURixTQUE5QixDQUFQO0FBV0Q7QUFqRUg7QUFtRUQsQ0FwRUQ7QUFzRUE7Ozs7Ozs7O2VBTWUsa0NBQWlCcEIsbUJBQWpCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcbmltcG9ydCB7XG4gIGdldFRleHRDb2xvckZvckludGVudCxcbiAgZ2V0UHJpbWFyeUJ1dHRvblN0eWxlc0ZvckludGVudFxufSBmcm9tICcuLi9oZWxwZXJzJ1xuaW1wb3J0IHsgZGVmYXVsdENvbnRyb2xTdHlsZXMgfSBmcm9tICcuLi9zaGFyZWQnXG5cbi8qKlxuICogRGlzYWJsZWQgc3R5bGVzIGFyZSBhbGwgdGhlIHNhbWUgZm9yIGFsbCBidXR0b25zLlxuICovXG5jb25zdCB7IGRpc2FibGVkIH0gPSBkZWZhdWx0Q29udHJvbFN0eWxlc1xuXG4vKipcbiAqIEdldCBidXR0b24gYXBwZWFyYW5jZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gZGVmYXVsdCwgcHJpbWFyeSwgbWluaW1hbC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnRlbnQgLSBub25lLCBzdWNjZXNzLCB3YXJuaW5nLCBkYW5nZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uXG4gKi9cbmNvbnN0IGdldEJ1dHRvbkFwcGVhcmFuY2UgPSAoYXBwZWFyYW5jZSwgaW50ZW50KSA9PiB7XG4gIHN3aXRjaCAoYXBwZWFyYW5jZSkge1xuICAgIGNhc2UgJ3ByaW1hcnknOiB7XG4gICAgICBjb25zdCB7IGxpbmVhckdyYWRpZW50LCBmb2N1c0NvbG9yIH0gPSBnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50KFxuICAgICAgICBpbnRlbnRcbiAgICAgIClcbiAgICAgIHJldHVybiBUaGVtZXIuY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSh7XG4gICAgICAgIGRpc2FibGVkLFxuICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogbGluZWFyR3JhZGllbnQuYmFzZSxcbiAgICAgICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONUF9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogbGluZWFyR3JhZGllbnQuaG92ZXJcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtmb2N1c0NvbG9yfSwgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjVBfWBcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBsaW5lYXJHcmFkaWVudC5hY3RpdmUsXG4gICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAxcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICAgICAgICB9LFxuICAgICAgICBmb2N1c0FuZEFjdGl2ZToge1xuICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke2ZvY3VzQ29sb3J9LCBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIDFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk4yQX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSAnbWluaW1hbCc6IHtcbiAgICAgIGNvbnN0IGludGVudFRleHRDb2xvciA9IGdldFRleHRDb2xvckZvckludGVudChpbnRlbnQsIHNjYWxlcy5ibHVlLkI5KVxuICAgICAgcmV0dXJuIFRoZW1lci5jcmVhdGVCdXR0b25BcHBlYXJhbmNlKHtcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICBjb2xvcjogaW50ZW50VGV4dENvbG9yLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJBXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7c2NhbGVzLmJsdWUuQjVBfWBcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZScsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMuYmx1ZS5CM0FcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNBbmRBY3RpdmU6IHt9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IGludGVudFRleHRDb2xvciA9IGdldFRleHRDb2xvckZvckludGVudChpbnRlbnQpXG4gICAgICByZXR1cm4gVGhlbWVyLmNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2Uoe1xuICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgYmFzZToge1xuICAgICAgICAgIGNvbG9yOiBpbnRlbnRUZXh0Q29sb3IsXG4gICAgICAgICAgLi4uZGVmYXVsdENvbnRyb2xTdHlsZXMuYmFzZVxuICAgICAgICB9LFxuICAgICAgICBob3ZlcjogZGVmYXVsdENvbnRyb2xTdHlsZXMuaG92ZXIsXG4gICAgICAgIGZvY3VzOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5mb2N1cyxcbiAgICAgICAgYWN0aXZlOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5hY3RpdmUsXG4gICAgICAgIGZvY3VzQW5kQWN0aXZlOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5mb2N1c0FuZEFjdGl2ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBCdXR0b25gfGBJY29uQnV0dG9uYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gZGVmYXVsdCwgcHJpbWFyeSwgbWluaW1hbC5cbiAqIEBwYXJhbSB7SW50ZW50fSBpbnRlbnQgLSBub25lLCBzdWNjZXNzLCB3YXJuaW5nLCBkYW5nZXIuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0QnV0dG9uQXBwZWFyYW5jZSlcbiJdfQ==