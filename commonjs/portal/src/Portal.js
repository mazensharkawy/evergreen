"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = require("react");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _canUseDom = _interopRequireDefault(require("../../lib/canUseDom"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var portalContainer;

var Portal = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Portal, _Component);

  var _super = _createSuper(Portal);

  function Portal() {
    var _this;

    (0, _classCallCheck2["default"])(this, Portal);
    _this = _super.call(this); // This fixes SSR

    if (!_canUseDom["default"]) return (0, _possibleConstructorReturn2["default"])(_this);

    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.setAttribute('evergreen-portal-container', '');
      document.body.appendChild(portalContainer);
    }

    _this.el = document.createElement('div');
    portalContainer.appendChild(_this.el);
    return _this;
  }

  (0, _createClass2["default"])(Portal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      portalContainer.removeChild(this.el);
    }
  }, {
    key: "render",
    value: function render() {
      // This fixes SSR
      if (!_canUseDom["default"]) return null;
      return _reactDom["default"].createPortal(this.props.children, this.el);
    }
  }]);
  return Portal;
}(_react.Component);

exports["default"] = Portal;
Portal.displayName = "Portal";
Portal.propTypes = {
  children: _propTypes["default"].node.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3J0YWwvc3JjL1BvcnRhbC5qcyJdLCJuYW1lcyI6WyJwb3J0YWxDb250YWluZXIiLCJQb3J0YWwiLCJjYW5Vc2VEb20iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbCIsInJlbW92ZUNoaWxkIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJwcm9wcyIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsZUFBSjs7SUFFcUJDLE07Ozs7O0FBQ25CLG9CQUFjO0FBQUE7O0FBQUE7QUFDWiw4QkFEWSxDQUdaOztBQUNBLFFBQUksQ0FBQ0MscUJBQUwsRUFBZ0I7O0FBRWhCLFFBQUksQ0FBQ0YsZUFBTCxFQUFzQjtBQUNwQkEsTUFBQUEsZUFBZSxHQUFHRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQUosTUFBQUEsZUFBZSxDQUFDSyxZQUFoQixDQUE2Qiw0QkFBN0IsRUFBMkQsRUFBM0Q7QUFDQUYsTUFBQUEsUUFBUSxDQUFDRyxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLGVBQTFCO0FBQ0Q7O0FBRUQsVUFBS1EsRUFBTCxHQUFVTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBSixJQUFBQSxlQUFlLENBQUNPLFdBQWhCLENBQTRCLE1BQUtDLEVBQWpDO0FBYlk7QUFjYjs7OzsyQ0FFc0I7QUFDckJSLE1BQUFBLGVBQWUsQ0FBQ1MsV0FBaEIsQ0FBNEIsS0FBS0QsRUFBakM7QUFDRDs7OzZCQUVRO0FBQ1A7QUFDQSxVQUFJLENBQUNOLHFCQUFMLEVBQWdCLE9BQU8sSUFBUDtBQUNoQixhQUFPUSxxQkFBU0MsWUFBVCxDQUFzQixLQUFLQyxLQUFMLENBQVdDLFFBQWpDLEVBQTJDLEtBQUtMLEVBQWhELENBQVA7QUFDRDs7O0VBekJpQ00sZ0I7OztBQUFmYixNO0FBNEJyQkEsTUFBTSxDQUFDYyxTQUFQLEdBQW1CO0FBQ2pCRixFQUFBQSxRQUFRLEVBQUVHLHNCQUFVQyxJQUFWLENBQWVDO0FBRFIsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2FuVXNlRG9tIGZyb20gJy4uLy4uL2xpYi9jYW5Vc2VEb20nXG5cbmxldCBwb3J0YWxDb250YWluZXJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9ydGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLy8gVGhpcyBmaXhlcyBTU1JcbiAgICBpZiAoIWNhblVzZURvbSkgcmV0dXJuXG5cbiAgICBpZiAoIXBvcnRhbENvbnRhaW5lcikge1xuICAgICAgcG9ydGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHBvcnRhbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2V2ZXJncmVlbi1wb3J0YWwtY29udGFpbmVyJywgJycpXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcnRhbENvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwb3J0YWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHBvcnRhbENvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmVsKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIFRoaXMgZml4ZXMgU1NSXG4gICAgaWYgKCFjYW5Vc2VEb20pIHJldHVybiBudWxsXG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLmVsKVxuICB9XG59XG5cblBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59XG4iXX0=