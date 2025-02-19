import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import canUseDom from '../../lib/canUseDom';
var portalContainer;

var Portal = /*#__PURE__*/function (_Component) {
  _inherits(Portal, _Component);

  var _super = _createSuper(Portal);

  function Portal() {
    var _this;

    _classCallCheck(this, Portal);

    _this = _super.call(this); // This fixes SSR

    if (!canUseDom) return _possibleConstructorReturn(_this);

    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.setAttribute('evergreen-portal-container', '');
      document.body.appendChild(portalContainer);
    }

    _this.el = document.createElement('div');
    portalContainer.appendChild(_this.el);
    return _this;
  }

  _createClass(Portal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      portalContainer.removeChild(this.el);
    }
  }, {
    key: "render",
    value: function render() {
      // This fixes SSR
      if (!canUseDom) return null;
      return ReactDOM.createPortal(this.props.children, this.el);
    }
  }]);

  return Portal;
}(Component);

Portal.displayName = "Portal";
export { Portal as default };
Portal.propTypes = {
  children: PropTypes.node.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3J0YWwvc3JjL1BvcnRhbC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJSZWFjdERPTSIsIlByb3BUeXBlcyIsImNhblVzZURvbSIsInBvcnRhbENvbnRhaW5lciIsIlBvcnRhbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVsIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVQb3J0YWwiLCJwcm9wcyIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxTQUFULFFBQTBCLE9BQTFCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHFCQUF0QjtBQUVBLElBQUlDLGVBQUo7O0lBRXFCQyxNOzs7OztBQUNuQixvQkFBYztBQUFBOztBQUFBOztBQUNaLDhCQURZLENBR1o7O0FBQ0EsUUFBSSxDQUFDRixTQUFMLEVBQWdCOztBQUVoQixRQUFJLENBQUNDLGVBQUwsRUFBc0I7QUFDcEJBLE1BQUFBLGVBQWUsR0FBR0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FILE1BQUFBLGVBQWUsQ0FBQ0ksWUFBaEIsQ0FBNkIsNEJBQTdCLEVBQTJELEVBQTNEO0FBQ0FGLE1BQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLENBQTBCTixlQUExQjtBQUNEOztBQUVELFVBQUtPLEVBQUwsR0FBVUwsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQUgsSUFBQUEsZUFBZSxDQUFDTSxXQUFoQixDQUE0QixNQUFLQyxFQUFqQztBQWJZO0FBY2I7Ozs7MkNBRXNCO0FBQ3JCUCxNQUFBQSxlQUFlLENBQUNRLFdBQWhCLENBQTRCLEtBQUtELEVBQWpDO0FBQ0Q7Ozs2QkFFUTtBQUNQO0FBQ0EsVUFBSSxDQUFDUixTQUFMLEVBQWdCLE9BQU8sSUFBUDtBQUNoQixhQUFPRixRQUFRLENBQUNZLFlBQVQsQ0FBc0IsS0FBS0MsS0FBTCxDQUFXQyxRQUFqQyxFQUEyQyxLQUFLSixFQUFoRCxDQUFQO0FBQ0Q7Ozs7RUF6QmlDWCxTOztBQUFmSyxNO1NBQUFBLE07QUE0QnJCQSxNQUFNLENBQUNXLFNBQVAsR0FBbUI7QUFDakJELEVBQUFBLFFBQVEsRUFBRWIsU0FBUyxDQUFDZSxJQUFWLENBQWVDO0FBRFIsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2FuVXNlRG9tIGZyb20gJy4uLy4uL2xpYi9jYW5Vc2VEb20nXG5cbmxldCBwb3J0YWxDb250YWluZXJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9ydGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLy8gVGhpcyBmaXhlcyBTU1JcbiAgICBpZiAoIWNhblVzZURvbSkgcmV0dXJuXG5cbiAgICBpZiAoIXBvcnRhbENvbnRhaW5lcikge1xuICAgICAgcG9ydGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHBvcnRhbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2V2ZXJncmVlbi1wb3J0YWwtY29udGFpbmVyJywgJycpXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcnRhbENvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwb3J0YWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHBvcnRhbENvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmVsKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIFRoaXMgZml4ZXMgU1NSXG4gICAgaWYgKCFjYW5Vc2VEb20pIHJldHVybiBudWxsXG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLmVsKVxuICB9XG59XG5cblBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59XG4iXX0=