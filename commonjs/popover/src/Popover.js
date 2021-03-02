"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _positioner = require("../../positioner");

var _tooltip = require("../../tooltip");

var _constants = require("../../constants");

var _hooks = require("../../hooks");

var _PopoverStateless = _interopRequireDefault(require("./PopoverStateless"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var noop = function noop() {};

var emptyProps = {};
var Popover = (0, _react.memo)((0, _react.forwardRef)(function Popover(_ref, forwardedRef) {
  var _ref$animationDuratio = _ref.animationDuration,
      animationDuration = _ref$animationDuratio === void 0 ? 300 : _ref$animationDuratio,
      _ref$bringFocusInside = _ref.bringFocusInside,
      shouldBringFocusInside = _ref$bringFocusInside === void 0 ? false : _ref$bringFocusInside,
      children = _ref.children,
      content = _ref.content,
      display = _ref.display,
      _ref$minHeight = _ref.minHeight,
      minHeight = _ref$minHeight === void 0 ? 40 : _ref$minHeight,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? 200 : _ref$minWidth,
      _ref$onBodyClick = _ref.onBodyClick,
      onBodyClick = _ref$onBodyClick === void 0 ? noop : _ref$onBodyClick,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? noop : _ref$onClose,
      _ref$onCloseComplete = _ref.onCloseComplete,
      onCloseComplete = _ref$onCloseComplete === void 0 ? noop : _ref$onCloseComplete,
      _ref$onOpen = _ref.onOpen,
      onOpen = _ref$onOpen === void 0 ? noop : _ref$onOpen,
      _ref$onOpenComplete = _ref.onOpenComplete,
      onOpenComplete = _ref$onOpenComplete === void 0 ? noop : _ref$onOpenComplete,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? _constants.Position.BOTTOM : _ref$position,
      _ref$shouldCloseOnExt = _ref.shouldCloseOnExternalClick,
      shouldCloseOnExternalClick = _ref$shouldCloseOnExt === void 0 ? true : _ref$shouldCloseOnExt,
      _ref$statelessProps = _ref.statelessProps,
      statelessProps = _ref$statelessProps === void 0 ? emptyProps : _ref$statelessProps,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'click' : _ref$trigger,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["animationDuration", "bringFocusInside", "children", "content", "display", "minHeight", "minWidth", "onBodyClick", "onClose", "onCloseComplete", "onOpen", "onOpenComplete", "position", "shouldCloseOnExternalClick", "statelessProps", "trigger"]);

  var _useState = (0, _react.useState)(props.isShown),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isShown = _useState2[0],
      setIsShown = _useState2[1];

  var popoverNode = (0, _react.useRef)();
  var setPopoverNode = (0, _hooks.useMergedRef)(popoverNode);
  var targetRef = (0, _react.useRef)();
  var setTargetRef = (0, _hooks.useMergedRef)(targetRef);
  (0, _react.useImperativeHandle)(forwardedRef, function () {
    return {
      open: open,
      close: close
    };
  }, [popoverNode.current]);
  /**
   * Methods borrowed from BlueprintJS
   * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
   */

  var bringFocusInside = (0, _react.useCallback)(function (e) {
    if (isShown && e) {
      e.preventDefault();
    } // Always delay focus manipulation to just before repaint to prevent scroll jumping


    return requestAnimationFrame(function () {
      // Container ref may be undefined between component mounting and Portal rendering
      // ActiveElement may be undefined in some rare cases in IE
      if (popoverNode.current == null || // eslint-disable-line eqeqeq, no-eq-null
      document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
      !isShown) {
        return;
      }

      var isFocusOutsideModal = !popoverNode.current.contains(document.activeElement);

      if (isFocusOutsideModal) {
        // Element marked autofocus has higher priority than the other elements
        var autofocusElement = popoverNode.current.querySelector('[autofocus]:not([disabled])');

        if (autofocusElement) {
          // Return early to avoid unnecessary dom queries
          return autofocusElement.focus();
        }

        var wrapperElement = popoverNode.current.querySelector('[tabindex]:not([disabled])');

        if (wrapperElement) {
          return wrapperElement.focus();
        }

        var buttonElements = popoverNode.current.querySelectorAll('button:not([disabled]), a:not([disabled]), [role="menuitem"]:not([disabled]), [role="menuitemradio"]:not([disabled])');

        if (buttonElements.length > 0) {
          return buttonElements[0].focus();
        }
      }
    });
  }, [isShown, popoverNode.current]);
  var bringFocusBackToTarget = (0, _react.useCallback)(function () {
    return requestAnimationFrame(function () {
      if (targetRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
      popoverNode.current == null || // eslint-disable-line eqeqeq, no-eq-null
      document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
      ) {
          return;
        }

      var isFocusInsideModal = popoverNode.current.contains(document.activeElement); // Bring back focus on the target.

      if (document.activeElement === document.body || isFocusInsideModal) {
        targetRef.current.focus();
      }
    });
  }, [popoverNode.current, targetRef.current]);
  var open = (0, _react.useCallback)(function () {
    if (isShown) {
      return;
    }

    setIsShown(true);
    onOpen();
  }, [setIsShown, onOpen, isShown]);
  var close = (0, _react.useCallback)(function () {
    if (!isShown) {
      return;
    }

    setIsShown(false);
    bringFocusBackToTarget();
    onClose();
  }, [setIsShown, bringFocusBackToTarget, onClose, isShown]); // If `props.isShown` is a boolean, treat as a controlled component
  // `open` and `close` should be applied when it changes

  (0, _react.useEffect)(function () {
    if (typeof props.isShown !== 'boolean' || props.isShown === isShown) {
      return;
    }

    if (props.isShown) {
      open();
    } else {
      close();
    }
  }, [props.isShown, isShown]);
  var toggle = (0, _react.useCallback)(function () {
    return isShown ? close() : open();
  }, [isShown, close, open]);
  var handleOpenHover = (0, _react.useMemo)(function () {
    return trigger === 'hover' ? open : undefined;
  }, [trigger, open]);
  var handleCloseHover = (0, _react.useMemo)(function () {
    return trigger === 'hover' ? close : undefined;
  }, [trigger, close]);
  var handleKeyDown = (0, _react.useCallback)(function (event) {
    return event.key === 'ArrowDown' ? bringFocusInside(event) : undefined;
  }, [bringFocusInside]);
  var onEsc = (0, _react.useCallback)(function (event) {
    return event.key === 'Escape' ? close() : undefined;
  }, [close]);
  var handleBodyClick = (0, _react.useCallback)(function (event) {
    // Ignore clicks on the popover or button
    if (targetRef.current && targetRef.current.contains(event.target)) {
      return;
    }

    if (popoverNode.current && popoverNode.current.contains(event.target)) {
      return;
    } // Notify body click


    onBodyClick(event);

    if (shouldCloseOnExternalClick !== false) {
      close();
    }
  }, [onBodyClick, shouldCloseOnExternalClick, close, targetRef.current, popoverNode.current]);
  var handleOpenComplete = (0, _react.useCallback)(function () {
    if (shouldBringFocusInside) bringFocusInside();
    onOpenComplete();
  }, [shouldBringFocusInside, bringFocusInside, onOpenComplete]);
  (0, _react.useEffect)(function () {
    if (isShown) {
      document.body.addEventListener('click', handleBodyClick, false);
      document.body.addEventListener('keydown', onEsc, false);
    } else {
      document.body.removeEventListener('click', handleBodyClick, false);
      document.body.removeEventListener('keydown', onEsc, false);
    }

    return function () {
      document.body.removeEventListener('click', handleBodyClick, false);
      document.body.removeEventListener('keydown', onEsc, false);
    };
  }, [isShown, handleBodyClick, onEsc]);
  var renderTarget = (0, _react.useCallback)(function (_ref2) {
    var getRef = _ref2.getRef,
        isShown = _ref2.isShown;
    var isTooltipInside = children && children.type === _tooltip.Tooltip;

    var getTargetRef = function getTargetRef(ref) {
      setTargetRef(ref);
      getRef(ref);
    };
    /**
     * When a function is passed, you can control the Popover manually.
     */


    if (typeof children === 'function') {
      return children({
        getRef: getTargetRef,
        isShown: isShown,
        toggle: toggle
      });
    }

    var popoverTargetProps = {
      onClick: toggle,
      onMouseEnter: handleOpenHover,
      onKeyDown: handleKeyDown,
      role: 'button',
      'aria-expanded': isShown,
      'aria-haspopup': true
    };
    /**
     * Tooltips can be used within a Popover (not the other way around)
     * In this case the children is the Tooltip instead of a button.
     * Pass the properties to the Tooltip and let the Tooltip
     * add the properties to the target.
     */

    if (isTooltipInside) {
      return _react["default"].cloneElement(children, {
        popoverProps: _objectSpread({
          getTargetRef: getTargetRef,
          isShown: isShown
        }, popoverTargetProps)
      });
    }
    /**
     * With normal usage only popover props end up on the target.
     */


    return _react["default"].cloneElement(children, _objectSpread({
      ref: getTargetRef
    }, popoverTargetProps));
  }, [children, setTargetRef, toggle, handleOpenHover, handleKeyDown]); // If `props.isShown` is a boolean, popover is controlled manually, not via mouse events

  var shown = typeof props.isShown === 'boolean' ? props.isShown : isShown;
  var contentToRender = (0, _react.useMemo)(function () {
    return typeof content === 'function' ? content({
      close: close
    }) : content;
  }, [content, close]);
  return _react["default"].createElement(_positioner.Positioner, {
    target: renderTarget,
    isShown: shown,
    position: position,
    animationDuration: animationDuration,
    onOpenComplete: handleOpenComplete,
    onCloseComplete: onCloseComplete
  }, function (_ref3) {
    var css = _ref3.css,
        style = _ref3.style,
        state = _ref3.state,
        getRef = _ref3.getRef;
    return _react["default"].createElement(_PopoverStateless["default"], (0, _extends2["default"])({
      ref: function ref(_ref4) {
        setPopoverNode(_ref4);
        getRef(_ref4);
      },
      "data-state": state,
      display: display,
      minWidth: minWidth,
      minHeight: minHeight
    }, statelessProps, {
      className: (0, _classnames["default"])(statelessProps.className, (0, _glamor.css)(css, style, statelessProps.style).toString()) // Overwrite `statelessProps.style` since we are including it via className
      ,
      style: undefined,
      onMouseLeave: handleCloseHover
    }), contentToRender);
  });
}));
Popover.propTypes = {
  /**
   * The position the Popover is on. Smart positioning might override this.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]),

  /**
   * When true, the Popover is manually shown.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Open the Popover based on click or hover. Default is click.
   */
  trigger: _propTypes["default"].oneOf(['click', 'hover']),

  /**
   * The content of the Popover.
   */
  content: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * The target button of the Popover.
   * When a function the following arguments are passed:
   * ({ toggle: Function -> Void, getRef: Function -> Ref, isShown: Bool })
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]).isRequired,

  /**
   * The display property passed to the Popover card.
   */
  display: _propTypes["default"].string,

  /**
   * The min width of the Popover card.
   */
  minWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /**
   * The min height of the Popover card.
   */
  minHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /**
   * Properties passed through to the Popover card.
   */
  statelessProps: _propTypes["default"].shape(_PopoverStateless["default"].propTypes),

  /**
   * Duration of the animation.
   */
  animationDuration: _propTypes["default"].number,

  /**
   * Function called when the Popover opens.
   */
  onOpen: _propTypes["default"].func,

  /**
   * Function fired when Popover closes.
   */
  onClose: _propTypes["default"].func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the body is clicked.
   */
  onBodyClick: _propTypes["default"].func,

  /**
   * When true, bring focus inside of the Popover on open.
   */
  bringFocusInside: _propTypes["default"].bool,

  /**
   * Boolean indicating if clicking outside the dialog should close the dialog.
   */
  shouldCloseOnExternalClick: _propTypes["default"].bool
};
var _default = Popover;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJlbXB0eVByb3BzIiwiUG9wb3ZlciIsImZvcndhcmRlZFJlZiIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYnJpbmdGb2N1c0luc2lkZSIsInNob3VsZEJyaW5nRm9jdXNJbnNpZGUiLCJjaGlsZHJlbiIsImNvbnRlbnQiLCJkaXNwbGF5IiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJvbkJvZHlDbGljayIsIm9uQ2xvc2UiLCJvbkNsb3NlQ29tcGxldGUiLCJvbk9wZW4iLCJvbk9wZW5Db21wbGV0ZSIsInBvc2l0aW9uIiwiUG9zaXRpb24iLCJCT1RUT00iLCJzaG91bGRDbG9zZU9uRXh0ZXJuYWxDbGljayIsInN0YXRlbGVzc1Byb3BzIiwidHJpZ2dlciIsInByb3BzIiwiaXNTaG93biIsInNldElzU2hvd24iLCJwb3BvdmVyTm9kZSIsInNldFBvcG92ZXJOb2RlIiwidGFyZ2V0UmVmIiwic2V0VGFyZ2V0UmVmIiwib3BlbiIsImNsb3NlIiwiY3VycmVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImlzRm9jdXNPdXRzaWRlTW9kYWwiLCJjb250YWlucyIsImF1dG9mb2N1c0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJ3cmFwcGVyRWxlbWVudCIsImJ1dHRvbkVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImJyaW5nRm9jdXNCYWNrVG9UYXJnZXQiLCJpc0ZvY3VzSW5zaWRlTW9kYWwiLCJib2R5IiwidG9nZ2xlIiwiaGFuZGxlT3BlbkhvdmVyIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2xvc2VIb3ZlciIsImhhbmRsZUtleURvd24iLCJldmVudCIsImtleSIsIm9uRXNjIiwiaGFuZGxlQm9keUNsaWNrIiwidGFyZ2V0IiwiaGFuZGxlT3BlbkNvbXBsZXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXJUYXJnZXQiLCJnZXRSZWYiLCJpc1Rvb2x0aXBJbnNpZGUiLCJ0eXBlIiwiVG9vbHRpcCIsImdldFRhcmdldFJlZiIsInJlZiIsInBvcG92ZXJUYXJnZXRQcm9wcyIsIm9uQ2xpY2siLCJvbk1vdXNlRW50ZXIiLCJvbktleURvd24iLCJyb2xlIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJwb3BvdmVyUHJvcHMiLCJzaG93biIsImNvbnRlbnRUb1JlbmRlciIsImNzcyIsInN0eWxlIiwic3RhdGUiLCJjbGFzc05hbWUiLCJ0b1N0cmluZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiVE9QIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJCT1RUT01fTEVGVCIsIkJPVFRPTV9SSUdIVCIsIkxFRlQiLCJSSUdIVCIsImJvb2wiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJlbGVtZW50Iiwic3RyaW5nIiwibnVtYmVyIiwic2hhcGUiLCJQb3BvdmVyU3RhdGVsZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxVQUFVLEdBQUcsRUFBbkI7QUFFQSxJQUFNQyxPQUFPLEdBQUcsaUJBQ2QsdUJBQVcsU0FBU0EsT0FBVCxPQW9CVEMsWUFwQlMsRUFxQlQ7QUFBQSxtQ0FuQkVDLGlCQW1CRjtBQUFBLE1BbkJFQSxpQkFtQkYsc0NBbkJzQixHQW1CdEI7QUFBQSxtQ0FsQkVDLGdCQWtCRjtBQUFBLE1BbEJvQkMsc0JBa0JwQixzQ0FsQjZDLEtBa0I3QztBQUFBLE1BakJFQyxRQWlCRixRQWpCRUEsUUFpQkY7QUFBQSxNQWhCRUMsT0FnQkYs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OztBQUdBaEYsRUFBQUEsY0FBYyxFQUFFaUUsc0JBQVVpQixLQUFWLENBQWdCQyw2QkFBaUJuQixTQUFqQyxDQXRERTs7QUF3RGxCOzs7QUFHQWpGLEVBQUFBLGlCQUFpQixFQUFFa0Ysc0JBQVVnQixNQTNEWDs7QUE2RGxCOzs7QUFHQXZGLEVBQUFBLE1BQU0sRUFBRXVFLHNCQUFVWSxJQWhFQTs7QUFrRWxCOzs7QUFHQXJGLEVBQUFBLE9BQU8sRUFBRXlFLHNCQUFVWSxJQXJFRDs7QUF1RWxCOzs7QUFHQWxGLEVBQUFBLGNBQWMsRUFBRXNFLHNCQUFVWSxJQTFFUjs7QUE0RWxCOzs7QUFHQXBGLEVBQUFBLGVBQWUsRUFBRXdFLHNCQUFVWSxJQS9FVDs7QUFpRmxCOzs7QUFHQXRGLEVBQUFBLFdBQVcsRUFBRTBFLHNCQUFVWSxJQXBGTDs7QUFzRmxCOzs7QUFHQTdGLEVBQUFBLGdCQUFnQixFQUFFaUYsc0JBQVVTLElBekZWOztBQTJGbEI7OztBQUdBM0UsRUFBQUEsMEJBQTBCLEVBQUVrRSxzQkFBVVM7QUE5RnBCLENBQXBCO2VBaUdlN0YsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBtZW1vLFxuICBmb3J3YXJkUmVmLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VNZW1vXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUG9zaXRpb25lciB9IGZyb20gJy4uLy4uL3Bvc2l0aW9uZXInXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnLi4vLi4vdG9vbHRpcCdcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgUG9wb3ZlclN0YXRlbGVzcyBmcm9tICcuL1BvcG92ZXJTdGF0ZWxlc3MnXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgZW1wdHlQcm9wcyA9IHt9XG5cbmNvbnN0IFBvcG92ZXIgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFBvcG92ZXIoXG4gICAge1xuICAgICAgYW5pbWF0aW9uRHVyYXRpb24gPSAzMDAsXG4gICAgICBicmluZ0ZvY3VzSW5zaWRlOiBzaG91bGRCcmluZ0ZvY3VzSW5zaWRlID0gZmFsc2UsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbnRlbnQsXG4gICAgICBkaXNwbGF5LFxuICAgICAgbWluSGVpZ2h0ID0gNDAsXG4gICAgICBtaW5XaWR0aCA9IDIwMCxcbiAgICAgIG9uQm9keUNsaWNrID0gbm9vcCxcbiAgICAgIG9uQ2xvc2UgPSBub29wLFxuICAgICAgb25DbG9zZUNvbXBsZXRlID0gbm9vcCxcbiAgICAgIG9uT3BlbiA9IG5vb3AsXG4gICAgICBvbk9wZW5Db21wbGV0ZSA9IG5vb3AsXG4gICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLkJPVFRPTSxcbiAgICAgIHNob3VsZENsb3NlT25FeHRlcm5hbENsaWNrID0gdHJ1ZSxcbiAgICAgIHN0YXRlbGVzc1Byb3BzID0gZW1wdHlQcm9wcyxcbiAgICAgIHRyaWdnZXIgPSAnY2xpY2snLFxuICAgICAgLi4ucHJvcHNcbiAgICB9LFxuICAgIGZvcndhcmRlZFJlZlxuICApIHtcbiAgICBjb25zdCBbaXNTaG93biwgc2V0SXNTaG93bl0gPSB1c2VTdGF0ZShwcm9wcy5pc1Nob3duKVxuICAgIGNvbnN0IHBvcG92ZXJOb2RlID0gdXNlUmVmKClcbiAgICBjb25zdCBzZXRQb3BvdmVyTm9kZSA9IHVzZU1lcmdlZFJlZihwb3BvdmVyTm9kZSlcbiAgICBjb25zdCB0YXJnZXRSZWYgPSB1c2VSZWYoKVxuICAgIGNvbnN0IHNldFRhcmdldFJlZiA9IHVzZU1lcmdlZFJlZih0YXJnZXRSZWYpXG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKFxuICAgICAgZm9yd2FyZGVkUmVmLFxuICAgICAgKCkgPT4gKHtcbiAgICAgICAgb3BlbixcbiAgICAgICAgY2xvc2VcbiAgICAgIH0pLFxuICAgICAgW3BvcG92ZXJOb2RlLmN1cnJlbnRdXG4gICAgKVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kcyBib3Jyb3dlZCBmcm9tIEJsdWVwcmludEpTXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iL3JlbGVhc2UvMi4wLjAvcGFja2FnZXMvY29yZS9zcmMvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkudHN4XG4gICAgICovXG4gICAgY29uc3QgYnJpbmdGb2N1c0luc2lkZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgZSA9PiB7XG4gICAgICAgIGlmIChpc1Nob3duICYmIGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgICAvLyBBbHdheXMgZGVsYXkgZm9jdXMgbWFuaXB1bGF0aW9uIHRvIGp1c3QgYmVmb3JlIHJlcGFpbnQgdG8gcHJldmVudCBzY3JvbGwganVtcGluZ1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIC8vIENvbnRhaW5lciByZWYgbWF5IGJlIHVuZGVmaW5lZCBiZXR3ZWVuIGNvbXBvbmVudCBtb3VudGluZyBhbmQgUG9ydGFsIHJlbmRlcmluZ1xuXG4gICAgICAgICAgLy8gQWN0aXZlRWxlbWVudCBtYXkgYmUgdW5kZWZpbmVkIGluIHNvbWUgcmFyZSBjYXNlcyBpbiBJRVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcG9wb3Zlck5vZGUuY3VycmVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgICAgICFpc1Nob3duXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc0ZvY3VzT3V0c2lkZU1vZGFsID0gIXBvcG92ZXJOb2RlLmN1cnJlbnQuY29udGFpbnMoXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgICAgKVxuICAgICAgICAgIGlmIChpc0ZvY3VzT3V0c2lkZU1vZGFsKSB7XG4gICAgICAgICAgICAvLyBFbGVtZW50IG1hcmtlZCBhdXRvZm9jdXMgaGFzIGhpZ2hlciBwcmlvcml0eSB0aGFuIHRoZSBvdGhlciBlbGVtZW50c1xuICAgICAgICAgICAgY29uc3QgYXV0b2ZvY3VzRWxlbWVudCA9IHBvcG92ZXJOb2RlLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ1thdXRvZm9jdXNdOm5vdChbZGlzYWJsZWRdKSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChhdXRvZm9jdXNFbGVtZW50KSB7XG4gICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSB0byBhdm9pZCB1bm5lY2Vzc2FyeSBkb20gcXVlcmllc1xuICAgICAgICAgICAgICByZXR1cm4gYXV0b2ZvY3VzRWxlbWVudC5mb2N1cygpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gcG9wb3Zlck5vZGUuY3VycmVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnW3RhYmluZGV4XTpub3QoW2Rpc2FibGVkXSknXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAod3JhcHBlckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXJFbGVtZW50LmZvY3VzKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudHMgPSBwb3BvdmVyTm9kZS5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICdidXR0b246bm90KFtkaXNhYmxlZF0pLCBhOm5vdChbZGlzYWJsZWRdKSwgW3JvbGU9XCJtZW51aXRlbVwiXTpub3QoW2Rpc2FibGVkXSksIFtyb2xlPVwibWVudWl0ZW1yYWRpb1wiXTpub3QoW2Rpc2FibGVkXSknXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAoYnV0dG9uRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uRWxlbWVudHNbMF0uZm9jdXMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBbaXNTaG93biwgcG9wb3Zlck5vZGUuY3VycmVudF1cbiAgICApXG5cbiAgICBjb25zdCBicmluZ0ZvY3VzQmFja1RvVGFyZ2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0YXJnZXRSZWYuY3VycmVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICAgcG9wb3Zlck5vZGUuY3VycmVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNGb2N1c0luc2lkZU1vZGFsID0gcG9wb3Zlck5vZGUuY3VycmVudC5jb250YWlucyhcbiAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIClcblxuICAgICAgICAvLyBCcmluZyBiYWNrIGZvY3VzIG9uIHRoZSB0YXJnZXQuXG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IGlzRm9jdXNJbnNpZGVNb2RhbCkge1xuICAgICAgICAgIHRhcmdldFJlZi5jdXJyZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCBbcG9wb3Zlck5vZGUuY3VycmVudCwgdGFyZ2V0UmVmLmN1cnJlbnRdKVxuXG4gICAgY29uc3Qgb3BlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIGlmIChpc1Nob3duKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzZXRJc1Nob3duKHRydWUpXG4gICAgICBvbk9wZW4oKVxuICAgIH0sIFtzZXRJc1Nob3duLCBvbk9wZW4sIGlzU2hvd25dKVxuXG4gICAgY29uc3QgY2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBpZiAoIWlzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHNldElzU2hvd24oZmFsc2UpXG4gICAgICBicmluZ0ZvY3VzQmFja1RvVGFyZ2V0KClcbiAgICAgIG9uQ2xvc2UoKVxuICAgIH0sIFtzZXRJc1Nob3duLCBicmluZ0ZvY3VzQmFja1RvVGFyZ2V0LCBvbkNsb3NlLCBpc1Nob3duXSlcblxuICAgIC8vIElmIGBwcm9wcy5pc1Nob3duYCBpcyBhIGJvb2xlYW4sIHRyZWF0IGFzIGEgY29udHJvbGxlZCBjb21wb25lbnRcbiAgICAvLyBgb3BlbmAgYW5kIGBjbG9zZWAgc2hvdWxkIGJlIGFwcGxpZWQgd2hlbiBpdCBjaGFuZ2VzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuaXNTaG93biAhPT0gJ2Jvb2xlYW4nIHx8IHByb3BzLmlzU2hvd24gPT09IGlzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5pc1Nob3duKSB7XG4gICAgICAgIG9wZW4oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvc2UoKVxuICAgICAgfVxuICAgIH0sIFtwcm9wcy5pc1Nob3duLCBpc1Nob3duXSlcblxuICAgIGNvbnN0IHRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHJldHVybiBpc1Nob3duID8gY2xvc2UoKSA6IG9wZW4oKVxuICAgIH0sIFtpc1Nob3duLCBjbG9zZSwgb3Blbl0pXG5cbiAgICBjb25zdCBoYW5kbGVPcGVuSG92ZXIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIHJldHVybiB0cmlnZ2VyID09PSAnaG92ZXInID8gb3BlbiA6IHVuZGVmaW5lZFxuICAgIH0sIFt0cmlnZ2VyLCBvcGVuXSlcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlSG92ZXIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIHJldHVybiB0cmlnZ2VyID09PSAnaG92ZXInID8gY2xvc2UgOiB1bmRlZmluZWRcbiAgICB9LCBbdHJpZ2dlciwgY2xvc2VdKVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICByZXR1cm4gZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyA/IGJyaW5nRm9jdXNJbnNpZGUoZXZlbnQpIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgW2JyaW5nRm9jdXNJbnNpZGVdXG4gICAgKVxuXG4gICAgY29uc3Qgb25Fc2MgPSB1c2VDYWxsYmFjayhcbiAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgPyBjbG9zZSgpIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgW2Nsb3NlXVxuICAgIClcblxuICAgIGNvbnN0IGhhbmRsZUJvZHlDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAvLyBJZ25vcmUgY2xpY2tzIG9uIHRoZSBwb3BvdmVyIG9yIGJ1dHRvblxuICAgICAgICBpZiAodGFyZ2V0UmVmLmN1cnJlbnQgJiYgdGFyZ2V0UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvcG92ZXJOb2RlLmN1cnJlbnQgJiYgcG9wb3Zlck5vZGUuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3RpZnkgYm9keSBjbGlja1xuICAgICAgICBvbkJvZHlDbGljayhldmVudClcblxuICAgICAgICBpZiAoc2hvdWxkQ2xvc2VPbkV4dGVybmFsQ2xpY2sgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY2xvc2UoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBvbkJvZHlDbGljayxcbiAgICAgICAgc2hvdWxkQ2xvc2VPbkV4dGVybmFsQ2xpY2ssXG4gICAgICAgIGNsb3NlLFxuICAgICAgICB0YXJnZXRSZWYuY3VycmVudCxcbiAgICAgICAgcG9wb3Zlck5vZGUuY3VycmVudFxuICAgICAgXVxuICAgIClcblxuICAgIGNvbnN0IGhhbmRsZU9wZW5Db21wbGV0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIGlmIChzaG91bGRCcmluZ0ZvY3VzSW5zaWRlKSBicmluZ0ZvY3VzSW5zaWRlKClcbiAgICAgIG9uT3BlbkNvbXBsZXRlKClcbiAgICB9LCBbc2hvdWxkQnJpbmdGb2N1c0luc2lkZSwgYnJpbmdGb2N1c0luc2lkZSwgb25PcGVuQ29tcGxldGVdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChpc1Nob3duKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVCb2R5Q2xpY2ssIGZhbHNlKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkVzYywgZmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm9keUNsaWNrLCBmYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2MsIGZhbHNlKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm9keUNsaWNrLCBmYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2MsIGZhbHNlKVxuICAgICAgfVxuICAgIH0sIFtpc1Nob3duLCBoYW5kbGVCb2R5Q2xpY2ssIG9uRXNjXSlcblxuICAgIGNvbnN0IHJlbmRlclRhcmdldCA9IHVzZUNhbGxiYWNrKFxuICAgICAgKHsgZ2V0UmVmLCBpc1Nob3duIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXNUb29sdGlwSW5zaWRlID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4udHlwZSA9PT0gVG9vbHRpcFxuXG4gICAgICAgIGNvbnN0IGdldFRhcmdldFJlZiA9IHJlZiA9PiB7XG4gICAgICAgICAgc2V0VGFyZ2V0UmVmKHJlZilcbiAgICAgICAgICBnZXRSZWYocmVmKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwYXNzZWQsIHlvdSBjYW4gY29udHJvbCB0aGUgUG9wb3ZlciBtYW51YWxseS5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgICAgICAgZ2V0UmVmOiBnZXRUYXJnZXRSZWYsXG4gICAgICAgICAgICBpc1Nob3duLFxuICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBvcG92ZXJUYXJnZXRQcm9wcyA9IHtcbiAgICAgICAgICBvbkNsaWNrOiB0b2dnbGUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiBoYW5kbGVPcGVuSG92ZXIsXG4gICAgICAgICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAgICdhcmlhLWV4cGFuZGVkJzogaXNTaG93bixcbiAgICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb29sdGlwcyBjYW4gYmUgdXNlZCB3aXRoaW4gYSBQb3BvdmVyIChub3QgdGhlIG90aGVyIHdheSBhcm91bmQpXG4gICAgICAgICAqIEluIHRoaXMgY2FzZSB0aGUgY2hpbGRyZW4gaXMgdGhlIFRvb2x0aXAgaW5zdGVhZCBvZiBhIGJ1dHRvbi5cbiAgICAgICAgICogUGFzcyB0aGUgcHJvcGVydGllcyB0byB0aGUgVG9vbHRpcCBhbmQgbGV0IHRoZSBUb29sdGlwXG4gICAgICAgICAqIGFkZCB0aGUgcHJvcGVydGllcyB0byB0aGUgdGFyZ2V0LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGlzVG9vbHRpcEluc2lkZSkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgICAgICBnZXRUYXJnZXRSZWYsXG4gICAgICAgICAgICAgIGlzU2hvd24sXG5cbiAgICAgICAgICAgICAgLy8gVGhlc2UgcHJvcGV0aWVzIHdpbGwgYmUgc3ByZWFkIGFzIGBwb3BvdmVyVGFyZ2V0UHJvcHNgXG4gICAgICAgICAgICAgIC8vIGluIHRoZSBUb29sdGlwIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgLi4ucG9wb3ZlclRhcmdldFByb3BzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaXRoIG5vcm1hbCB1c2FnZSBvbmx5IHBvcG92ZXIgcHJvcHMgZW5kIHVwIG9uIHRoZSB0YXJnZXQuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgcmVmOiBnZXRUYXJnZXRSZWYsXG4gICAgICAgICAgLi4ucG9wb3ZlclRhcmdldFByb3BzXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgW2NoaWxkcmVuLCBzZXRUYXJnZXRSZWYsIHRvZ2dsZSwgaGFuZGxlT3BlbkhvdmVyLCBoYW5kbGVLZXlEb3duXVxuICAgIClcblxuICAgIC8vIElmIGBwcm9wcy5pc1Nob3duYCBpcyBhIGJvb2xlYW4sIHBvcG92ZXIgaXMgY29udHJvbGxlZCBtYW51YWxseSwgbm90IHZpYSBtb3VzZSBldmVudHNcbiAgICBjb25zdCBzaG93biA9IHR5cGVvZiBwcm9wcy5pc1Nob3duID09PSAnYm9vbGVhbicgPyBwcm9wcy5pc1Nob3duIDogaXNTaG93blxuXG4gICAgY29uc3QgY29udGVudFRvUmVuZGVyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicgPyBjb250ZW50KHsgY2xvc2UgfSkgOiBjb250ZW50XG4gICAgfSwgW2NvbnRlbnQsIGNsb3NlXSlcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9zaXRpb25lclxuICAgICAgICB0YXJnZXQ9e3JlbmRlclRhcmdldH1cbiAgICAgICAgaXNTaG93bj17c2hvd259XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249e2FuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICBvbk9wZW5Db21wbGV0ZT17aGFuZGxlT3BlbkNvbXBsZXRlfVxuICAgICAgICBvbkNsb3NlQ29tcGxldGU9e29uQ2xvc2VDb21wbGV0ZX1cbiAgICAgID5cbiAgICAgICAgeyh7IGNzcywgc3R5bGUsIHN0YXRlLCBnZXRSZWYgfSkgPT4gKFxuICAgICAgICAgIDxQb3BvdmVyU3RhdGVsZXNzXG4gICAgICAgICAgICByZWY9e3JlZiA9PiB7XG4gICAgICAgICAgICAgIHNldFBvcG92ZXJOb2RlKHJlZilcbiAgICAgICAgICAgICAgZ2V0UmVmKHJlZilcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIGRpc3BsYXk9e2Rpc3BsYXl9XG4gICAgICAgICAgICBtaW5XaWR0aD17bWluV2lkdGh9XG4gICAgICAgICAgICBtaW5IZWlnaHQ9e21pbkhlaWdodH1cbiAgICAgICAgICAgIHsuLi5zdGF0ZWxlc3NQcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgIHN0YXRlbGVzc1Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgZ2xhbW9yQ3NzKGNzcywgc3R5bGUsIHN0YXRlbGVzc1Byb3BzLnN0eWxlKS50b1N0cmluZygpXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgLy8gT3ZlcndyaXRlIGBzdGF0ZWxlc3NQcm9wcy5zdHlsZWAgc2luY2Ugd2UgYXJlIGluY2x1ZGluZyBpdCB2aWEgY2xhc3NOYW1lXG4gICAgICAgICAgICBzdHlsZT17dW5kZWZpbmVkfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVDbG9zZUhvdmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb250ZW50VG9SZW5kZXJ9XG4gICAgICAgICAgPC9Qb3BvdmVyU3RhdGVsZXNzPlxuICAgICAgICApfVxuICAgICAgPC9Qb3NpdGlvbmVyPlxuICAgIClcbiAgfSlcbilcblxuUG9wb3Zlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gdGhlIFBvcG92ZXIgaXMgb24uIFNtYXJ0IHBvc2l0aW9uaW5nIG1pZ2h0IG92ZXJyaWRlIHRoaXMuXG4gICAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBQb3NpdGlvbi5UT1AsXG4gICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICBQb3NpdGlvbi5CT1RUT01fUklHSFQsXG4gICAgUG9zaXRpb24uTEVGVCxcbiAgICBQb3NpdGlvbi5SSUdIVFxuICBdKSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgUG9wb3ZlciBpcyBtYW51YWxseSBzaG93bi5cbiAgICovXG4gIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogT3BlbiB0aGUgUG9wb3ZlciBiYXNlZCBvbiBjbGljayBvciBob3Zlci4gRGVmYXVsdCBpcyBjbGljay5cbiAgICovXG4gIHRyaWdnZXI6IFByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ2hvdmVyJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgUG9wb3Zlci5cbiAgICovXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgYnV0dG9uIG9mIHRoZSBQb3BvdmVyLlxuICAgKiBXaGVuIGEgZnVuY3Rpb24gdGhlIGZvbGxvd2luZyBhcmd1bWVudHMgYXJlIHBhc3NlZDpcbiAgICogKHsgdG9nZ2xlOiBGdW5jdGlvbiAtPiBWb2lkLCBnZXRSZWY6IEZ1bmN0aW9uIC0+IFJlZiwgaXNTaG93bjogQm9vbCB9KVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBkaXNwbGF5IHByb3BlcnR5IHBhc3NlZCB0byB0aGUgUG9wb3ZlciBjYXJkLlxuICAgKi9cbiAgZGlzcGxheTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIG1pbiB3aWR0aCBvZiB0aGUgUG9wb3ZlciBjYXJkLlxuICAgKi9cbiAgbWluV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogVGhlIG1pbiBoZWlnaHQgb2YgdGhlIFBvcG92ZXIgY2FyZC5cbiAgICovXG4gIG1pbkhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBQb3BvdmVyIGNhcmQuXG4gICAqL1xuICBzdGF0ZWxlc3NQcm9wczogUHJvcFR5cGVzLnNoYXBlKFBvcG92ZXJTdGF0ZWxlc3MucHJvcFR5cGVzKSxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbi5cbiAgICovXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgUG9wb3ZlciBvcGVucy5cbiAgICovXG4gIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGZpcmVkIHdoZW4gUG9wb3ZlciBjbG9zZXMuXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICovXG4gIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgYm9keSBpcyBjbGlja2VkLlxuICAgKi9cbiAgb25Cb2R5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGJyaW5nIGZvY3VzIGluc2lkZSBvZiB0aGUgUG9wb3ZlciBvbiBvcGVuLlxuICAgKi9cbiAgYnJpbmdGb2N1c0luc2lkZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyBvdXRzaWRlIHRoZSBkaWFsb2cgc2hvdWxkIGNsb3NlIHRoZSBkaWFsb2cuXG4gICAqL1xuICBzaG91bGRDbG9zZU9uRXh0ZXJuYWxDbGljazogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclxuIl19