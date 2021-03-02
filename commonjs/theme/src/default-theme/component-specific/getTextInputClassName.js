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

var InputAppearances = {};
InputAppearances["default"] = _themer.Themer.createInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  placeholder: {
    color: _scales["default"].neutral.N6A
  },
  focus: {
    outline: 'none',
    boxShadow: "inset 0 0 2px ".concat(_scales["default"].neutral.N4A, ", inset 0 0 0 1px ").concat(_scales["default"].blue.B7, ", 0 0 0 3px ").concat(_scales["default"].blue.B4A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
InputAppearances.neutral = _themer.Themer.createInputAppearance({
  base: {
    backgroundColor: _scales["default"].neutral.N2A
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base)
  },
  placeholder: {
    color: _scales["default"].neutral.N6A
  },
  focus: {
    outline: 'none',
    backgroundColor: 'white',
    boxShadow: "0 0 0 2px ".concat(_scales["default"].blue.B6A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
InputAppearances.none = _themer.Themer.createInputAppearance({
  base: {
    backgroundColor: 'white'
  },
  invalid: {},
  placeholder: {
    color: _scales["default"].neutral.N6A
  },
  focus: {
    outline: 'none'
  },
  disabled: {
    backgroundColor: _scales["default"].neutral.N2
  }
});
/**
 * Get the appearance of a `TextInput`.
 * @param {string} appearance - the appearance name
 * @return {Object} the appearance object.
 */

var getTextInputAppearance = function getTextInputAppearance(appearance) {
  switch (appearance) {
    case 'neutral':
      return InputAppearances.neutral;

    case 'none':
      return InputAppearances.none;

    default:
      return InputAppearances["default"];
  }
};
/**
 * Get the className of a `TextInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getTextInputAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGV4dElucHV0Q2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIklucHV0QXBwZWFyYW5jZXMiLCJUaGVtZXIiLCJjcmVhdGVJbnB1dEFwcGVhcmFuY2UiLCJiYXNlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93Iiwic2NhbGVzIiwibmV1dHJhbCIsIk41QSIsIk40QSIsImludmFsaWQiLCJwYWxldHRlIiwicmVkIiwicGxhY2Vob2xkZXIiLCJjb2xvciIsIk42QSIsImZvY3VzIiwib3V0bGluZSIsImJsdWUiLCJCNyIsIkI0QSIsImRpc2FibGVkIiwiTjIiLCJOMkEiLCJCNkEiLCJub25lIiwiZ2V0VGV4dElucHV0QXBwZWFyYW5jZSIsImFwcGVhcmFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLEVBQXpCO0FBRUFBLGdCQUFnQixXQUFoQixHQUEyQkMsZUFBT0MscUJBQVAsQ0FBNkI7QUFDdERDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxlQUFlLEVBQUUsT0FEYjtBQUVKQyxJQUFBQSxTQUFTLDRCQUFxQkMsbUJBQU9DLE9BQVAsQ0FBZUMsR0FBcEMsK0JBQTRERixtQkFBT0MsT0FBUCxDQUFlRSxHQUEzRTtBQUZMLEdBRGdEO0FBS3REQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEwsSUFBQUEsU0FBUyw0QkFBcUJNLG9CQUFRQyxHQUFSLENBQVlULElBQWpDLCtCQUEwREcsbUJBQU9DLE9BQVAsQ0FBZUUsR0FBekU7QUFERixHQUw2QztBQVF0REksRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLEtBQUssRUFBRVIsbUJBQU9DLE9BQVAsQ0FBZVE7QUFEWCxHQVJ5QztBQVd0REMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLE9BQU8sRUFBRSxNQURKO0FBRUxaLElBQUFBLFNBQVMsMEJBQW1CQyxtQkFBT0MsT0FBUCxDQUFlRSxHQUFsQywrQkFBMERILG1CQUFPWSxJQUFQLENBQVlDLEVBQXRFLHlCQUF1RmIsbUJBQU9ZLElBQVAsQ0FBWUUsR0FBbkc7QUFGSixHQVgrQztBQWV0REMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JoQixJQUFBQSxTQUFTLDRCQUFxQkMsbUJBQU9DLE9BQVAsQ0FBZUUsR0FBcEMsQ0FERDtBQUVSTCxJQUFBQSxlQUFlLEVBQUVFLG1CQUFPQyxPQUFQLENBQWVlO0FBRnhCO0FBZjRDLENBQTdCLENBQTNCO0FBcUJBdEIsZ0JBQWdCLENBQUNPLE9BQWpCLEdBQTJCTixlQUFPQyxxQkFBUCxDQUE2QjtBQUN0REMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLGVBQWUsRUFBRUUsbUJBQU9DLE9BQVAsQ0FBZWdCO0FBRDVCLEdBRGdEO0FBSXREYixFQUFBQSxPQUFPLEVBQUU7QUFDUEwsSUFBQUEsU0FBUyw0QkFBcUJNLG9CQUFRQyxHQUFSLENBQVlULElBQWpDO0FBREYsR0FKNkM7QUFPdERVLEVBQUFBLFdBQVcsRUFBRTtBQUNYQyxJQUFBQSxLQUFLLEVBQUVSLG1CQUFPQyxPQUFQLENBQWVRO0FBRFgsR0FQeUM7QUFVdERDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUUsTUFESjtBQUVMYixJQUFBQSxlQUFlLEVBQUUsT0FGWjtBQUdMQyxJQUFBQSxTQUFTLHNCQUFlQyxtQkFBT1ksSUFBUCxDQUFZTSxHQUEzQjtBQUhKLEdBVitDO0FBZXRESCxFQUFBQSxRQUFRLEVBQUU7QUFDUmhCLElBQUFBLFNBQVMsNEJBQXFCQyxtQkFBT0MsT0FBUCxDQUFlRSxHQUFwQyxDQUREO0FBRVJMLElBQUFBLGVBQWUsRUFBRUUsbUJBQU9DLE9BQVAsQ0FBZWU7QUFGeEI7QUFmNEMsQ0FBN0IsQ0FBM0I7QUFxQkF0QixnQkFBZ0IsQ0FBQ3lCLElBQWpCLEdBQXdCeEIsZUFBT0MscUJBQVAsQ0FBNkI7QUFDbkRDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxlQUFlLEVBQUU7QUFEYixHQUQ2QztBQUluRE0sRUFBQUEsT0FBTyxFQUFFLEVBSjBDO0FBS25ERyxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsS0FBSyxFQUFFUixtQkFBT0MsT0FBUCxDQUFlUTtBQURYLEdBTHNDO0FBUW5EQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFO0FBREosR0FSNEM7QUFXbkRJLEVBQUFBLFFBQVEsRUFBRTtBQUNSakIsSUFBQUEsZUFBZSxFQUFFRSxtQkFBT0MsT0FBUCxDQUFlZTtBQUR4QjtBQVh5QyxDQUE3QixDQUF4QjtBQWdCQTs7Ozs7O0FBS0EsSUFBTUksc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFBQyxVQUFVLEVBQUk7QUFDM0MsVUFBUUEsVUFBUjtBQUNFLFNBQUssU0FBTDtBQUNFLGFBQU8zQixnQkFBZ0IsQ0FBQ08sT0FBeEI7O0FBQ0YsU0FBSyxNQUFMO0FBQ0UsYUFBT1AsZ0JBQWdCLENBQUN5QixJQUF4Qjs7QUFDRjtBQUNFLGFBQU96QixnQkFBZ0IsV0FBdkI7QUFOSjtBQVFELENBVEQ7QUFXQTs7Ozs7OztlQUtlLGtDQUFpQjBCLHNCQUFqQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IElucHV0QXBwZWFyYW5jZXMgPSB7fVxuXG5JbnB1dEFwcGVhcmFuY2VzLmRlZmF1bHQgPSBUaGVtZXIuY3JlYXRlSW5wdXRBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONUF9LCBpbnNldCAwIDFweCAycHggJHtzY2FsZXMubmV1dHJhbC5ONEF9YFxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX0sIGluc2V0IDAgMXB4IDJweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gXG4gIH0sXG4gIHBsYWNlaG9sZGVyOiB7XG4gICAgY29sb3I6IHNjYWxlcy5uZXV0cmFsLk42QVxuICB9LFxuICBmb2N1czoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMnB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLmJsdWUuQjd9LCAwIDAgMCAzcHggJHtzY2FsZXMuYmx1ZS5CNEF9YFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJcbiAgfVxufSlcblxuSW5wdXRBcHBlYXJhbmNlcy5uZXV0cmFsID0gVGhlbWVyLmNyZWF0ZUlucHV0QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yQVxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX1gXG4gIH0sXG4gIHBsYWNlaG9sZGVyOiB7XG4gICAgY29sb3I6IHNjYWxlcy5uZXV0cmFsLk42QVxuICB9LFxuICBmb2N1czoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYm94U2hhZG93OiBgMCAwIDAgMnB4ICR7c2NhbGVzLmJsdWUuQjZBfWBcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9YCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yXG4gIH1cbn0pXG5cbklucHV0QXBwZWFyYW5jZXMubm9uZSA9IFRoZW1lci5jcmVhdGVJbnB1dEFwcGVhcmFuY2Uoe1xuICBiYXNlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG4gIH0sXG4gIGludmFsaWQ6IHt9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIGNvbG9yOiBzY2FsZXMubmV1dHJhbC5ONkFcbiAgfSxcbiAgZm9jdXM6IHtcbiAgICBvdXRsaW5lOiAnbm9uZSdcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yXG4gIH1cbn0pXG5cbi8qKlxuICogR2V0IHRoZSBhcHBlYXJhbmNlIG9mIGEgYFRleHRJbnB1dGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIHRoZSBhcHBlYXJhbmNlIG5hbWVcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRUZXh0SW5wdXRBcHBlYXJhbmNlID0gYXBwZWFyYW5jZSA9PiB7XG4gIHN3aXRjaCAoYXBwZWFyYW5jZSkge1xuICAgIGNhc2UgJ25ldXRyYWwnOlxuICAgICAgcmV0dXJuIElucHV0QXBwZWFyYW5jZXMubmV1dHJhbFxuICAgIGNhc2UgJ25vbmUnOlxuICAgICAgcmV0dXJuIElucHV0QXBwZWFyYW5jZXMubm9uZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gSW5wdXRBcHBlYXJhbmNlcy5kZWZhdWx0XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBUZXh0SW5wdXRgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2UgLSB0aGUgYXBwZWFyYW5jZSBuYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0VGV4dElucHV0QXBwZWFyYW5jZSlcbiJdfQ==