"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _canUseDom = _interopRequireDefault(require("../../lib/canUseDom"));

var _ToastManager = _interopRequireDefault(require("./ToastManager"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * The Toaster manages the interactions between
 * the ToasterManger and the toast API.
 */
var Toaster = function Toaster() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Toaster);
  (0, _defineProperty2["default"])(this, "_bindNotify", function (handler) {
    _this.notifyHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "_bindRemove", function (handler) {
    _this.removeHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "_bindGetToasts", function (handler) {
    _this.getToastsHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "_bindCloseAll", function (handler) {
    _this.closeAllHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "getToasts", function () {
    return _this.getToastsHandler();
  });
  (0, _defineProperty2["default"])(this, "closeAll", function () {
    return _this.closeAllHandler();
  });
  (0, _defineProperty2["default"])(this, "notify", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'none'
    }));
  });
  (0, _defineProperty2["default"])(this, "success", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'success'
    }));
  });
  (0, _defineProperty2["default"])(this, "warning", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'warning'
    }));
  });
  (0, _defineProperty2["default"])(this, "danger", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'danger'
    }));
  });
  (0, _defineProperty2["default"])(this, "remove", function (id) {
    return _this.removeHandler(id);
  });
  if (!_canUseDom["default"]) return;
  var container = document.createElement('div');
  container.setAttribute('data-evergreen-toaster-container', '');
  document.body.appendChild(container);

  _reactDom["default"].render(_react["default"].createElement(_ToastManager["default"], {
    bindNotify: this._bindNotify,
    bindRemove: this._bindRemove,
    bindGetToasts: this._bindGetToasts,
    bindCloseAll: this._bindCloseAll
  }), container);
};

exports["default"] = Toaster;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdGVyLmpzIl0sIm5hbWVzIjpbIlRvYXN0ZXIiLCJoYW5kbGVyIiwibm90aWZ5SGFuZGxlciIsInJlbW92ZUhhbmRsZXIiLCJnZXRUb2FzdHNIYW5kbGVyIiwiY2xvc2VBbGxIYW5kbGVyIiwidGl0bGUiLCJzZXR0aW5ncyIsImludGVudCIsImlkIiwiY2FuVXNlRG9tIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJfYmluZE5vdGlmeSIsIl9iaW5kUmVtb3ZlIiwiX2JpbmRHZXRUb2FzdHMiLCJfYmluZENsb3NlQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7O0lBSXFCQSxPLEdBQ25CLG1CQUFjO0FBQUE7O0FBQUE7QUFBQSx3REFrQkEsVUFBQUMsT0FBTyxFQUFJO0FBQ3ZCLElBQUEsS0FBSSxDQUFDQyxhQUFMLEdBQXFCRCxPQUFyQjtBQUNELEdBcEJhO0FBQUEsd0RBc0JBLFVBQUFBLE9BQU8sRUFBSTtBQUN2QixJQUFBLEtBQUksQ0FBQ0UsYUFBTCxHQUFxQkYsT0FBckI7QUFDRCxHQXhCYTtBQUFBLDJEQTBCRyxVQUFBQSxPQUFPLEVBQUk7QUFDMUIsSUFBQSxLQUFJLENBQUNHLGdCQUFMLEdBQXdCSCxPQUF4QjtBQUNELEdBNUJhO0FBQUEsMERBOEJFLFVBQUFBLE9BQU8sRUFBSTtBQUN6QixJQUFBLEtBQUksQ0FBQ0ksZUFBTCxHQUF1QkosT0FBdkI7QUFDRCxHQWhDYTtBQUFBLHNEQWtDRixZQUFNO0FBQ2hCLFdBQU8sS0FBSSxDQUFDRyxnQkFBTCxFQUFQO0FBQ0QsR0FwQ2E7QUFBQSxxREFzQ0gsWUFBTTtBQUNmLFdBQU8sS0FBSSxDQUFDQyxlQUFMLEVBQVA7QUFDRCxHQXhDYTtBQUFBLG1EQTBDTCxVQUFDQyxLQUFELEVBQTBCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87QUFDakMsV0FBTyxLQUFJLENBQUNMLGFBQUwsQ0FBbUJJLEtBQW5CLGtDQUErQkMsUUFBL0I7QUFBeUNDLE1BQUFBLE1BQU0sRUFBRTtBQUFqRCxPQUFQO0FBQ0QsR0E1Q2E7QUFBQSxvREE4Q0osVUFBQ0YsS0FBRCxFQUEwQjtBQUFBLFFBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0FBQ2xDLFdBQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixrQ0FBK0JDLFFBQS9CO0FBQXlDQyxNQUFBQSxNQUFNLEVBQUU7QUFBakQsT0FBUDtBQUNELEdBaERhO0FBQUEsb0RBa0RKLFVBQUNGLEtBQUQsRUFBMEI7QUFBQSxRQUFsQkMsUUFBa0IsdUVBQVAsRUFBTztBQUNsQyxXQUFPLEtBQUksQ0FBQ0wsYUFBTCxDQUFtQkksS0FBbkIsa0NBQStCQyxRQUEvQjtBQUF5Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQWpELE9BQVA7QUFDRCxHQXBEYTtBQUFBLG1EQXNETCxVQUFDRixLQUFELEVBQTBCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87QUFDakMsV0FBTyxLQUFJLENBQUNMLGFBQUwsQ0FBbUJJLEtBQW5CLGtDQUErQkMsUUFBL0I7QUFBeUNDLE1BQUFBLE1BQU0sRUFBRTtBQUFqRCxPQUFQO0FBQ0QsR0F4RGE7QUFBQSxtREEwREwsVUFBQUMsRUFBRSxFQUFJO0FBQ2IsV0FBTyxLQUFJLENBQUNOLGFBQUwsQ0FBbUJNLEVBQW5CLENBQVA7QUFDRCxHQTVEYTtBQUNaLE1BQUksQ0FBQ0MscUJBQUwsRUFBZ0I7QUFFaEIsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQUYsRUFBQUEsU0FBUyxDQUFDRyxZQUFWLENBQXVCLGtDQUF2QixFQUEyRCxFQUEzRDtBQUNBRixFQUFBQSxRQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsU0FBMUI7O0FBRUFNLHVCQUFTQyxNQUFULENBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRSxLQUFLQyxXQURuQjtBQUVFLElBQUEsVUFBVSxFQUFFLEtBQUtDLFdBRm5CO0FBR0UsSUFBQSxhQUFhLEVBQUUsS0FBS0MsY0FIdEI7QUFJRSxJQUFBLFlBQVksRUFBRSxLQUFLQztBQUpyQixJQURGLEVBT0VYLFNBUEY7QUFTRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjYW5Vc2VEb20gZnJvbSAnLi4vLi4vbGliL2NhblVzZURvbSdcbmltcG9ydCBUb2FzdE1hbmFnZXIgZnJvbSAnLi9Ub2FzdE1hbmFnZXInXG5cbi8qKlxuICogVGhlIFRvYXN0ZXIgbWFuYWdlcyB0aGUgaW50ZXJhY3Rpb25zIGJldHdlZW5cbiAqIHRoZSBUb2FzdGVyTWFuZ2VyIGFuZCB0aGUgdG9hc3QgQVBJLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCFjYW5Vc2VEb20pIHJldHVyblxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWV2ZXJncmVlbi10b2FzdGVyLWNvbnRhaW5lcicsICcnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgPFRvYXN0TWFuYWdlclxuICAgICAgICBiaW5kTm90aWZ5PXt0aGlzLl9iaW5kTm90aWZ5fVxuICAgICAgICBiaW5kUmVtb3ZlPXt0aGlzLl9iaW5kUmVtb3ZlfVxuICAgICAgICBiaW5kR2V0VG9hc3RzPXt0aGlzLl9iaW5kR2V0VG9hc3RzfVxuICAgICAgICBiaW5kQ2xvc2VBbGw9e3RoaXMuX2JpbmRDbG9zZUFsbH1cbiAgICAgIC8+LFxuICAgICAgY29udGFpbmVyXG4gICAgKVxuICB9XG5cbiAgX2JpbmROb3RpZnkgPSBoYW5kbGVyID0+IHtcbiAgICB0aGlzLm5vdGlmeUhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cblxuICBfYmluZFJlbW92ZSA9IGhhbmRsZXIgPT4ge1xuICAgIHRoaXMucmVtb3ZlSGFuZGxlciA9IGhhbmRsZXJcbiAgfVxuXG4gIF9iaW5kR2V0VG9hc3RzID0gaGFuZGxlciA9PiB7XG4gICAgdGhpcy5nZXRUb2FzdHNIYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgX2JpbmRDbG9zZUFsbCA9IGhhbmRsZXIgPT4ge1xuICAgIHRoaXMuY2xvc2VBbGxIYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgZ2V0VG9hc3RzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdldFRvYXN0c0hhbmRsZXIoKVxuICB9XG5cbiAgY2xvc2VBbGwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xvc2VBbGxIYW5kbGVyKClcbiAgfVxuXG4gIG5vdGlmeSA9ICh0aXRsZSwgc2V0dGluZ3MgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUhhbmRsZXIodGl0bGUsIHsgLi4uc2V0dGluZ3MsIGludGVudDogJ25vbmUnIH0pXG4gIH1cblxuICBzdWNjZXNzID0gKHRpdGxlLCBzZXR0aW5ncyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5SGFuZGxlcih0aXRsZSwgeyAuLi5zZXR0aW5ncywgaW50ZW50OiAnc3VjY2VzcycgfSlcbiAgfVxuXG4gIHdhcm5pbmcgPSAodGl0bGUsIHNldHRpbmdzID0ge30pID0+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlIYW5kbGVyKHRpdGxlLCB7IC4uLnNldHRpbmdzLCBpbnRlbnQ6ICd3YXJuaW5nJyB9KVxuICB9XG5cbiAgZGFuZ2VyID0gKHRpdGxlLCBzZXR0aW5ncyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5SGFuZGxlcih0aXRsZSwgeyAuLi5zZXR0aW5ncywgaW50ZW50OiAnZGFuZ2VyJyB9KVxuICB9XG5cbiAgcmVtb3ZlID0gaWQgPT4ge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUhhbmRsZXIoaWQpXG4gIH1cbn1cbiJdfQ==