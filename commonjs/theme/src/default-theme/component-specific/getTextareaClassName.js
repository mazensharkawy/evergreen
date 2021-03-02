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

var Appearances = {};
Appearances["default"] = _themer.Themer.createInputAppearance({
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
Appearances.neutral = _themer.Themer.createInputAppearance({
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
Appearances.editableCell = _themer.Themer.createInputAppearance({
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
    boxShadow: "0 0 0 2px ".concat(_scales["default"].blue.B7)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
/**
 * Get the appearance of a `TextInput`.
 * @param {string} appearance
 * @return {Object} the appearance object.
 */

var getTextareaAppearance = function getTextareaAppearance(appearance) {
  switch (appearance) {
    case 'neutral':
      return Appearances.neutral;

    case 'editable-cell':
      return Appearances.editableCell;

    default:
      return Appearances["default"];
  }
};
/**
 * Get the className of a `TextInput`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getTextareaAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGV4dGFyZWFDbGFzc05hbWUuanMiXSwibmFtZXMiOlsiQXBwZWFyYW5jZXMiLCJUaGVtZXIiLCJjcmVhdGVJbnB1dEFwcGVhcmFuY2UiLCJiYXNlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93Iiwic2NhbGVzIiwibmV1dHJhbCIsIk41QSIsIk40QSIsImludmFsaWQiLCJwYWxldHRlIiwicmVkIiwicGxhY2Vob2xkZXIiLCJjb2xvciIsIk42QSIsImZvY3VzIiwib3V0bGluZSIsImJsdWUiLCJCNyIsIkI0QSIsImRpc2FibGVkIiwiTjIiLCJOMkEiLCJCNkEiLCJlZGl0YWJsZUNlbGwiLCJnZXRUZXh0YXJlYUFwcGVhcmFuY2UiLCJhcHBlYXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsRUFBcEI7QUFFQUEsV0FBVyxXQUFYLEdBQXNCQyxlQUFPQyxxQkFBUCxDQUE2QjtBQUNqREMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLGVBQWUsRUFBRSxPQURiO0FBRUpDLElBQUFBLFNBQVMsNEJBQXFCQyxtQkFBT0MsT0FBUCxDQUFlQyxHQUFwQywrQkFBNERGLG1CQUFPQyxPQUFQLENBQWVFLEdBQTNFO0FBRkwsR0FEMkM7QUFLakRDLEVBQUFBLE9BQU8sRUFBRTtBQUNQTCxJQUFBQSxTQUFTLDRCQUFxQk0sb0JBQVFDLEdBQVIsQ0FBWVQsSUFBakMsK0JBQTBERyxtQkFBT0MsT0FBUCxDQUFlRSxHQUF6RTtBQURGLEdBTHdDO0FBUWpESSxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsS0FBSyxFQUFFUixtQkFBT0MsT0FBUCxDQUFlUTtBQURYLEdBUm9DO0FBV2pEQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFLE1BREo7QUFFTFosSUFBQUEsU0FBUywwQkFBbUJDLG1CQUFPQyxPQUFQLENBQWVFLEdBQWxDLCtCQUEwREgsbUJBQU9ZLElBQVAsQ0FBWUMsRUFBdEUseUJBQXVGYixtQkFBT1ksSUFBUCxDQUFZRSxHQUFuRztBQUZKLEdBWDBDO0FBZWpEQyxFQUFBQSxRQUFRLEVBQUU7QUFDUmhCLElBQUFBLFNBQVMsNEJBQXFCQyxtQkFBT0MsT0FBUCxDQUFlRSxHQUFwQyxDQUREO0FBRVJMLElBQUFBLGVBQWUsRUFBRUUsbUJBQU9DLE9BQVAsQ0FBZWU7QUFGeEI7QUFmdUMsQ0FBN0IsQ0FBdEI7QUFxQkF0QixXQUFXLENBQUNPLE9BQVosR0FBc0JOLGVBQU9DLHFCQUFQLENBQTZCO0FBQ2pEQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsZUFBZSxFQUFFRSxtQkFBT0MsT0FBUCxDQUFlZ0I7QUFENUIsR0FEMkM7QUFJakRiLEVBQUFBLE9BQU8sRUFBRTtBQUNQTCxJQUFBQSxTQUFTLDRCQUFxQk0sb0JBQVFDLEdBQVIsQ0FBWVQsSUFBakM7QUFERixHQUp3QztBQU9qRFUsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLEtBQUssRUFBRVIsbUJBQU9DLE9BQVAsQ0FBZVE7QUFEWCxHQVBvQztBQVVqREMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLE9BQU8sRUFBRSxNQURKO0FBRUxiLElBQUFBLGVBQWUsRUFBRSxPQUZaO0FBR0xDLElBQUFBLFNBQVMsc0JBQWVDLG1CQUFPWSxJQUFQLENBQVlNLEdBQTNCO0FBSEosR0FWMEM7QUFlakRILEVBQUFBLFFBQVEsRUFBRTtBQUNSaEIsSUFBQUEsU0FBUyw0QkFBcUJDLG1CQUFPQyxPQUFQLENBQWVFLEdBQXBDLENBREQ7QUFFUkwsSUFBQUEsZUFBZSxFQUFFRSxtQkFBT0MsT0FBUCxDQUFlZTtBQUZ4QjtBQWZ1QyxDQUE3QixDQUF0QjtBQXFCQXRCLFdBQVcsQ0FBQ3lCLFlBQVosR0FBMkJ4QixlQUFPQyxxQkFBUCxDQUE2QjtBQUN0REMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLGVBQWUsRUFBRUUsbUJBQU9DLE9BQVAsQ0FBZWdCO0FBRDVCLEdBRGdEO0FBSXREYixFQUFBQSxPQUFPLEVBQUU7QUFDUEwsSUFBQUEsU0FBUyw0QkFBcUJNLG9CQUFRQyxHQUFSLENBQVlULElBQWpDO0FBREYsR0FKNkM7QUFPdERVLEVBQUFBLFdBQVcsRUFBRTtBQUNYQyxJQUFBQSxLQUFLLEVBQUVSLG1CQUFPQyxPQUFQLENBQWVRO0FBRFgsR0FQeUM7QUFVdERDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUUsTUFESjtBQUVMYixJQUFBQSxlQUFlLEVBQUUsT0FGWjtBQUdMQyxJQUFBQSxTQUFTLHNCQUFlQyxtQkFBT1ksSUFBUCxDQUFZQyxFQUEzQjtBQUhKLEdBVitDO0FBZXRERSxFQUFBQSxRQUFRLEVBQUU7QUFDUmhCLElBQUFBLFNBQVMsNEJBQXFCQyxtQkFBT0MsT0FBUCxDQUFlRSxHQUFwQyxDQUREO0FBRVJMLElBQUFBLGVBQWUsRUFBRUUsbUJBQU9DLE9BQVAsQ0FBZWU7QUFGeEI7QUFmNEMsQ0FBN0IsQ0FBM0I7QUFxQkE7Ozs7OztBQUtBLElBQU1JLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQUMsVUFBVSxFQUFJO0FBQzFDLFVBQVFBLFVBQVI7QUFDRSxTQUFLLFNBQUw7QUFDRSxhQUFPM0IsV0FBVyxDQUFDTyxPQUFuQjs7QUFDRixTQUFLLGVBQUw7QUFDRSxhQUFPUCxXQUFXLENBQUN5QixZQUFuQjs7QUFDRjtBQUNFLGFBQU96QixXQUFXLFdBQWxCO0FBTko7QUFRRCxDQVREO0FBV0E7Ozs7Ozs7ZUFLZSxrQ0FBaUIwQixxQkFBakIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBBcHBlYXJhbmNlcyA9IHt9XG5cbkFwcGVhcmFuY2VzLmRlZmF1bHQgPSBUaGVtZXIuY3JlYXRlSW5wdXRBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONUF9LCBpbnNldCAwIDFweCAycHggJHtzY2FsZXMubmV1dHJhbC5ONEF9YFxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX0sIGluc2V0IDAgMXB4IDJweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gXG4gIH0sXG4gIHBsYWNlaG9sZGVyOiB7XG4gICAgY29sb3I6IHNjYWxlcy5uZXV0cmFsLk42QVxuICB9LFxuICBmb2N1czoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMnB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLmJsdWUuQjd9LCAwIDAgMCAzcHggJHtzY2FsZXMuYmx1ZS5CNEF9YFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJcbiAgfVxufSlcblxuQXBwZWFyYW5jZXMubmV1dHJhbCA9IFRoZW1lci5jcmVhdGVJbnB1dEFwcGVhcmFuY2Uoe1xuICBiYXNlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMkFcbiAgfSxcbiAgaW52YWxpZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3BhbGV0dGUucmVkLmJhc2V9YFxuICB9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIGNvbG9yOiBzY2FsZXMubmV1dHJhbC5ONkFcbiAgfSxcbiAgZm9jdXM6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIGJveFNoYWRvdzogYDAgMCAwIDJweCAke3NjYWxlcy5ibHVlLkI2QX1gXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfWAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMlxuICB9XG59KVxuXG5BcHBlYXJhbmNlcy5lZGl0YWJsZUNlbGwgPSBUaGVtZXIuY3JlYXRlSW5wdXRBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJBXG4gIH0sXG4gIGludmFsaWQ6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtwYWxldHRlLnJlZC5iYXNlfWBcbiAgfSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBjb2xvcjogc2NhbGVzLm5ldXRyYWwuTjZBXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBib3hTaGFkb3c6IGAwIDAgMCAycHggJHtzY2FsZXMuYmx1ZS5CN31gXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfWAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMlxuICB9XG59KVxuXG4vKipcbiAqIEdldCB0aGUgYXBwZWFyYW5jZSBvZiBhIGBUZXh0SW5wdXRgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRUZXh0YXJlYUFwcGVhcmFuY2UgPSBhcHBlYXJhbmNlID0+IHtcbiAgc3dpdGNoIChhcHBlYXJhbmNlKSB7XG4gICAgY2FzZSAnbmV1dHJhbCc6XG4gICAgICByZXR1cm4gQXBwZWFyYW5jZXMubmV1dHJhbFxuICAgIGNhc2UgJ2VkaXRhYmxlLWNlbGwnOlxuICAgICAgcmV0dXJuIEFwcGVhcmFuY2VzLmVkaXRhYmxlQ2VsbFxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gQXBwZWFyYW5jZXMuZGVmYXVsdFxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgVGV4dElucHV0YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0VGV4dGFyZWFBcHBlYXJhbmNlKVxuIl19