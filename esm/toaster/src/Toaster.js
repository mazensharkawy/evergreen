import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import ReactDOM from 'react-dom';
import canUseDom from '../../lib/canUseDom';
import ToastManager from './ToastManager';
/**
 * The Toaster manages the interactions between
 * the ToasterManger and the toast API.
 */

var Toaster = function Toaster() {
  var _this = this;

  _classCallCheck(this, Toaster);

  _defineProperty(this, "_bindNotify", function (handler) {
    _this.notifyHandler = handler;
  });

  _defineProperty(this, "_bindRemove", function (handler) {
    _this.removeHandler = handler;
  });

  _defineProperty(this, "_bindGetToasts", function (handler) {
    _this.getToastsHandler = handler;
  });

  _defineProperty(this, "_bindCloseAll", function (handler) {
    _this.closeAllHandler = handler;
  });

  _defineProperty(this, "getToasts", function () {
    return _this.getToastsHandler();
  });

  _defineProperty(this, "closeAll", function () {
    return _this.closeAllHandler();
  });

  _defineProperty(this, "notify", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'none'
    }));
  });

  _defineProperty(this, "success", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'success'
    }));
  });

  _defineProperty(this, "warning", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'warning'
    }));
  });

  _defineProperty(this, "danger", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'danger'
    }));
  });

  _defineProperty(this, "remove", function (id) {
    return _this.removeHandler(id);
  });

  if (!canUseDom) return;
  var container = document.createElement('div');
  container.setAttribute('data-evergreen-toaster-container', '');
  document.body.appendChild(container);
  ReactDOM.render(React.createElement(ToastManager, {
    bindNotify: this._bindNotify,
    bindRemove: this._bindRemove,
    bindGetToasts: this._bindGetToasts,
    bindCloseAll: this._bindCloseAll
  }), container);
};

export { Toaster as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjYW5Vc2VEb20iLCJUb2FzdE1hbmFnZXIiLCJUb2FzdGVyIiwiaGFuZGxlciIsIm5vdGlmeUhhbmRsZXIiLCJyZW1vdmVIYW5kbGVyIiwiZ2V0VG9hc3RzSGFuZGxlciIsImNsb3NlQWxsSGFuZGxlciIsInRpdGxlIiwic2V0dGluZ3MiLCJpbnRlbnQiLCJpZCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsIl9iaW5kTm90aWZ5IiwiX2JpbmRSZW1vdmUiLCJfYmluZEdldFRvYXN0cyIsIl9iaW5kQ2xvc2VBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IscUJBQXRCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixnQkFBekI7QUFFQTs7Ozs7SUFJcUJDLE8sR0FDbkIsbUJBQWM7QUFBQTs7QUFBQTs7QUFBQSx1Q0FrQkEsVUFBQUMsT0FBTyxFQUFJO0FBQ3ZCLElBQUEsS0FBSSxDQUFDQyxhQUFMLEdBQXFCRCxPQUFyQjtBQUNELEdBcEJhOztBQUFBLHVDQXNCQSxVQUFBQSxPQUFPLEVBQUk7QUFDdkIsSUFBQSxLQUFJLENBQUNFLGFBQUwsR0FBcUJGLE9BQXJCO0FBQ0QsR0F4QmE7O0FBQUEsMENBMEJHLFVBQUFBLE9BQU8sRUFBSTtBQUMxQixJQUFBLEtBQUksQ0FBQ0csZ0JBQUwsR0FBd0JILE9BQXhCO0FBQ0QsR0E1QmE7O0FBQUEseUNBOEJFLFVBQUFBLE9BQU8sRUFBSTtBQUN6QixJQUFBLEtBQUksQ0FBQ0ksZUFBTCxHQUF1QkosT0FBdkI7QUFDRCxHQWhDYTs7QUFBQSxxQ0FrQ0YsWUFBTTtBQUNoQixXQUFPLEtBQUksQ0FBQ0csZ0JBQUwsRUFBUDtBQUNELEdBcENhOztBQUFBLG9DQXNDSCxZQUFNO0FBQ2YsV0FBTyxLQUFJLENBQUNDLGVBQUwsRUFBUDtBQUNELEdBeENhOztBQUFBLGtDQTBDTCxVQUFDQyxLQUFELEVBQTBCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87QUFDakMsV0FBTyxLQUFJLENBQUNMLGFBQUwsQ0FBbUJJLEtBQW5CLGtDQUErQkMsUUFBL0I7QUFBeUNDLE1BQUFBLE1BQU0sRUFBRTtBQUFqRCxPQUFQO0FBQ0QsR0E1Q2E7O0FBQUEsbUNBOENKLFVBQUNGLEtBQUQsRUFBMEI7QUFBQSxRQUFsQkMsUUFBa0IsdUVBQVAsRUFBTztBQUNsQyxXQUFPLEtBQUksQ0FBQ0wsYUFBTCxDQUFtQkksS0FBbkIsa0NBQStCQyxRQUEvQjtBQUF5Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQWpELE9BQVA7QUFDRCxHQWhEYTs7QUFBQSxtQ0FrREosVUFBQ0YsS0FBRCxFQUEwQjtBQUFBLFFBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0FBQ2xDLFdBQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixrQ0FBK0JDLFFBQS9CO0FBQXlDQyxNQUFBQSxNQUFNLEVBQUU7QUFBakQsT0FBUDtBQUNELEdBcERhOztBQUFBLGtDQXNETCxVQUFDRixLQUFELEVBQTBCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87QUFDakMsV0FBTyxLQUFJLENBQUNMLGFBQUwsQ0FBbUJJLEtBQW5CLGtDQUErQkMsUUFBL0I7QUFBeUNDLE1BQUFBLE1BQU0sRUFBRTtBQUFqRCxPQUFQO0FBQ0QsR0F4RGE7O0FBQUEsa0NBMERMLFVBQUFDLEVBQUUsRUFBSTtBQUNiLFdBQU8sS0FBSSxDQUFDTixhQUFMLENBQW1CTSxFQUFuQixDQUFQO0FBQ0QsR0E1RGE7O0FBQ1osTUFBSSxDQUFDWCxTQUFMLEVBQWdCO0FBRWhCLE1BQU1ZLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FGLEVBQUFBLFNBQVMsQ0FBQ0csWUFBVixDQUF1QixrQ0FBdkIsRUFBMkQsRUFBM0Q7QUFDQUYsRUFBQUEsUUFBUSxDQUFDRyxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLFNBQTFCO0FBRUFiLEVBQUFBLFFBQVEsQ0FBQ21CLE1BQVQsQ0FDRSxvQkFBQyxZQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUUsS0FBS0MsV0FEbkI7QUFFRSxJQUFBLFVBQVUsRUFBRSxLQUFLQyxXQUZuQjtBQUdFLElBQUEsYUFBYSxFQUFFLEtBQUtDLGNBSHRCO0FBSUUsSUFBQSxZQUFZLEVBQUUsS0FBS0M7QUFKckIsSUFERixFQU9FVixTQVBGO0FBU0QsQzs7U0FqQmtCVixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjYW5Vc2VEb20gZnJvbSAnLi4vLi4vbGliL2NhblVzZURvbSdcbmltcG9ydCBUb2FzdE1hbmFnZXIgZnJvbSAnLi9Ub2FzdE1hbmFnZXInXG5cbi8qKlxuICogVGhlIFRvYXN0ZXIgbWFuYWdlcyB0aGUgaW50ZXJhY3Rpb25zIGJldHdlZW5cbiAqIHRoZSBUb2FzdGVyTWFuZ2VyIGFuZCB0aGUgdG9hc3QgQVBJLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCFjYW5Vc2VEb20pIHJldHVyblxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWV2ZXJncmVlbi10b2FzdGVyLWNvbnRhaW5lcicsICcnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgPFRvYXN0TWFuYWdlclxuICAgICAgICBiaW5kTm90aWZ5PXt0aGlzLl9iaW5kTm90aWZ5fVxuICAgICAgICBiaW5kUmVtb3ZlPXt0aGlzLl9iaW5kUmVtb3ZlfVxuICAgICAgICBiaW5kR2V0VG9hc3RzPXt0aGlzLl9iaW5kR2V0VG9hc3RzfVxuICAgICAgICBiaW5kQ2xvc2VBbGw9e3RoaXMuX2JpbmRDbG9zZUFsbH1cbiAgICAgIC8+LFxuICAgICAgY29udGFpbmVyXG4gICAgKVxuICB9XG5cbiAgX2JpbmROb3RpZnkgPSBoYW5kbGVyID0+IHtcbiAgICB0aGlzLm5vdGlmeUhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cblxuICBfYmluZFJlbW92ZSA9IGhhbmRsZXIgPT4ge1xuICAgIHRoaXMucmVtb3ZlSGFuZGxlciA9IGhhbmRsZXJcbiAgfVxuXG4gIF9iaW5kR2V0VG9hc3RzID0gaGFuZGxlciA9PiB7XG4gICAgdGhpcy5nZXRUb2FzdHNIYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgX2JpbmRDbG9zZUFsbCA9IGhhbmRsZXIgPT4ge1xuICAgIHRoaXMuY2xvc2VBbGxIYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgZ2V0VG9hc3RzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdldFRvYXN0c0hhbmRsZXIoKVxuICB9XG5cbiAgY2xvc2VBbGwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xvc2VBbGxIYW5kbGVyKClcbiAgfVxuXG4gIG5vdGlmeSA9ICh0aXRsZSwgc2V0dGluZ3MgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUhhbmRsZXIodGl0bGUsIHsgLi4uc2V0dGluZ3MsIGludGVudDogJ25vbmUnIH0pXG4gIH1cblxuICBzdWNjZXNzID0gKHRpdGxlLCBzZXR0aW5ncyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5SGFuZGxlcih0aXRsZSwgeyAuLi5zZXR0aW5ncywgaW50ZW50OiAnc3VjY2VzcycgfSlcbiAgfVxuXG4gIHdhcm5pbmcgPSAodGl0bGUsIHNldHRpbmdzID0ge30pID0+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlIYW5kbGVyKHRpdGxlLCB7IC4uLnNldHRpbmdzLCBpbnRlbnQ6ICd3YXJuaW5nJyB9KVxuICB9XG5cbiAgZGFuZ2VyID0gKHRpdGxlLCBzZXR0aW5ncyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5SGFuZGxlcih0aXRsZSwgeyAuLi5zZXR0aW5ncywgaW50ZW50OiAnZGFuZ2VyJyB9KVxuICB9XG5cbiAgcmVtb3ZlID0gaWQgPT4ge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUhhbmRsZXIoaWQpXG4gIH1cbn1cbiJdfQ==