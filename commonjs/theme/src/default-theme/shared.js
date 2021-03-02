"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignore = exports.defaultControlStyles = void 0;

var _helpers = require("./helpers");

var _scales = _interopRequireDefault(require("./foundational-styles/scales"));

var defaultControlStyles = {
  disabled: {
    opacity: 0.8,
    backgroundImage: 'none',
    backgroundColor: _scales["default"].neutral.N2A,
    boxShadow: 'none',
    color: _scales["default"].neutral.N7A,
    pointerEvents: 'none'
  },
  base: {
    backgroundColor: 'white',
    backgroundImage: (0, _helpers.linearGradient)('#FFFFFF', '#F4F5F7'),
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  hover: {
    backgroundImage: (0, _helpers.linearGradient)('#FAFBFB', '#EAECEE')
  },
  focus: {
    boxShadow: "0 0 0 3px ".concat(_scales["default"].blue.B4A, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N4A)
  },
  active: {
    backgroundImage: 'none',
    backgroundColor: _scales["default"].blue.B3A,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  focusAndActive: {
    boxShadow: "0 0 0 3px ".concat(_scales["default"].blue.B4A, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N5A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  }
}; // Can't figure out to disable rule for xo linter.

exports.defaultControlStyles = defaultControlStyles;
var ignore = null;
exports.ignore = ignore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9zaGFyZWQuanMiXSwibmFtZXMiOlsiZGVmYXVsdENvbnRyb2xTdHlsZXMiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjJBIiwiYm94U2hhZG93IiwiY29sb3IiLCJON0EiLCJwb2ludGVyRXZlbnRzIiwiYmFzZSIsIk40QSIsImhvdmVyIiwiZm9jdXMiLCJibHVlIiwiQjRBIiwiTjVBIiwiYWN0aXZlIiwiQjNBIiwiZm9jdXNBbmRBY3RpdmUiLCJpZ25vcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHO0FBQzNCQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFLEdBREQ7QUFFUkMsSUFBQUEsZUFBZSxFQUFFLE1BRlQ7QUFHUkMsSUFBQUEsZUFBZSxFQUFFQyxtQkFBT0MsT0FBUCxDQUFlQyxHQUh4QjtBQUlSQyxJQUFBQSxTQUFTLEVBQUUsTUFKSDtBQUtSQyxJQUFBQSxLQUFLLEVBQUVKLG1CQUFPQyxPQUFQLENBQWVJLEdBTGQ7QUFNUkMsSUFBQUEsYUFBYSxFQUFFO0FBTlAsR0FEaUI7QUFTM0JDLEVBQUFBLElBQUksRUFBRTtBQUNKUixJQUFBQSxlQUFlLEVBQUUsT0FEYjtBQUVKRCxJQUFBQSxlQUFlLEVBQUUsNkJBQWUsU0FBZixFQUEwQixTQUExQixDQUZiO0FBR0pLLElBQUFBLFNBQVMsNEJBQXFCSCxtQkFBT0MsT0FBUCxDQUFlTyxHQUFwQyxrQ0FBK0RSLG1CQUFPQyxPQUFQLENBQWVDLEdBQTlFO0FBSEwsR0FUcUI7QUFjM0JPLEVBQUFBLEtBQUssRUFBRTtBQUNMWCxJQUFBQSxlQUFlLEVBQUUsNkJBQWUsU0FBZixFQUEwQixTQUExQjtBQURaLEdBZG9CO0FBaUIzQlksRUFBQUEsS0FBSyxFQUFFO0FBQ0xQLElBQUFBLFNBQVMsc0JBQWVILG1CQUFPVyxJQUFQLENBQVlDLEdBQTNCLCtCQUFtRFosbUJBQU9DLE9BQVAsQ0FBZVksR0FBbEUsa0NBQTZGYixtQkFBT0MsT0FBUCxDQUFlTyxHQUE1RztBQURKLEdBakJvQjtBQW9CM0JNLEVBQUFBLE1BQU0sRUFBRTtBQUNOaEIsSUFBQUEsZUFBZSxFQUFFLE1BRFg7QUFFTkMsSUFBQUEsZUFBZSxFQUFFQyxtQkFBT1csSUFBUCxDQUFZSSxHQUZ2QjtBQUdOWixJQUFBQSxTQUFTLDRCQUFxQkgsbUJBQU9DLE9BQVAsQ0FBZU8sR0FBcEMsaUNBQThEUixtQkFBT0MsT0FBUCxDQUFlQyxHQUE3RTtBQUhILEdBcEJtQjtBQXlCM0JjLEVBQUFBLGNBQWMsRUFBRTtBQUNkYixJQUFBQSxTQUFTLHNCQUFlSCxtQkFBT1csSUFBUCxDQUFZQyxHQUEzQiwrQkFBbURaLG1CQUFPQyxPQUFQLENBQWVZLEdBQWxFLGlDQUE0RmIsbUJBQU9DLE9BQVAsQ0FBZUMsR0FBM0c7QUFESztBQXpCVyxDQUE3QixDLENBOEJBOzs7QUFDQSxJQUFNZSxNQUFNLEdBQUcsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpbmVhckdyYWRpZW50IH0gZnJvbSAnLi9oZWxwZXJzJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuXG5jb25zdCBkZWZhdWx0Q29udHJvbFN0eWxlcyA9IHtcbiAgZGlzYWJsZWQ6IHtcbiAgICBvcGFjaXR5OiAwLjgsXG4gICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMkEsXG4gICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgY29sb3I6IHNjYWxlcy5uZXV0cmFsLk43QSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSxcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGxpbmVhckdyYWRpZW50KCcjRkZGRkZGJywgJyNGNEY1RjcnKSxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICB9LFxuICBob3Zlcjoge1xuICAgIGJhY2tncm91bmRJbWFnZTogbGluZWFyR3JhZGllbnQoJyNGQUZCRkInLCAnI0VBRUNFRScpXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7c2NhbGVzLmJsdWUuQjRBfSwgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjVBfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjRBfWBcbiAgfSxcbiAgYWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMuYmx1ZS5CM0EsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAxcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICB9LFxuICBmb2N1c0FuZEFjdGl2ZToge1xuICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke3NjYWxlcy5ibHVlLkI0QX0sIGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk41QX0sIGluc2V0IDAgMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjJBfWBcbiAgfVxufVxuXG4vLyBDYW4ndCBmaWd1cmUgb3V0IHRvIGRpc2FibGUgcnVsZSBmb3IgeG8gbGludGVyLlxuY29uc3QgaWdub3JlID0gbnVsbFxuXG5leHBvcnQgeyBkZWZhdWx0Q29udHJvbFN0eWxlcywgaWdub3JlIH1cbiJdfQ==