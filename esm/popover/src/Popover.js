import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef, useRef, useState, useEffect, useImperativeHandle, useCallback, useMemo } from 'react';
import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import PropTypes from 'prop-types';
import { Positioner } from '../../positioner';
import { Tooltip } from '../../tooltip';
import { Position } from '../../constants';
import { useMergedRef } from '../../hooks';
import PopoverStateless from './PopoverStateless';

var noop = function noop() {};

var emptyProps = {};
var Popover = memo(forwardRef(function Popover(_ref, forwardedRef) {
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
      position = _ref$position === void 0 ? Position.BOTTOM : _ref$position,
      _ref$shouldCloseOnExt = _ref.shouldCloseOnExternalClick,
      shouldCloseOnExternalClick = _ref$shouldCloseOnExt === void 0 ? true : _ref$shouldCloseOnExt,
      _ref$statelessProps = _ref.statelessProps,
      statelessProps = _ref$statelessProps === void 0 ? emptyProps : _ref$statelessProps,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'click' : _ref$trigger,
      props = _objectWithoutProperties(_ref, ["animationDuration", "bringFocusInside", "children", "content", "display", "minHeight", "minWidth", "onBodyClick", "onClose", "onCloseComplete", "onOpen", "onOpenComplete", "position", "shouldCloseOnExternalClick", "statelessProps", "trigger"]);

  var _useState = useState(props.isShown),
      _useState2 = _slicedToArray(_useState, 2),
      isShown = _useState2[0],
      setIsShown = _useState2[1];

  var popoverNode = useRef();
  var setPopoverNode = useMergedRef(popoverNode);
  var targetRef = useRef();
  var setTargetRef = useMergedRef(targetRef);
  useImperativeHandle(forwardedRef, function () {
    return {
      open: open,
      close: close
    };
  }, [popoverNode.current]);
  /**
   * Methods borrowed from BlueprintJS
   * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
   */

  var bringFocusInside = useCallback(function (e) {
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
  var bringFocusBackToTarget = useCallback(function () {
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
  var open = useCallback(function () {
    if (isShown) {
      return;
    }

    setIsShown(true);
    onOpen();
  }, [setIsShown, onOpen, isShown]);
  var close = useCallback(function () {
    if (!isShown) {
      return;
    }

    setIsShown(false);
    bringFocusBackToTarget();
    onClose();
  }, [setIsShown, bringFocusBackToTarget, onClose, isShown]); // If `props.isShown` is a boolean, treat as a controlled component
  // `open` and `close` should be applied when it changes

  useEffect(function () {
    if (typeof props.isShown !== 'boolean' || props.isShown === isShown) {
      return;
    }

    if (props.isShown) {
      open();
    } else {
      close();
    }
  }, [props.isShown, isShown]);
  var toggle = useCallback(function () {
    return isShown ? close() : open();
  }, [isShown, close, open]);
  var handleOpenHover = useMemo(function () {
    return trigger === 'hover' ? open : undefined;
  }, [trigger, open]);
  var handleCloseHover = useMemo(function () {
    return trigger === 'hover' ? close : undefined;
  }, [trigger, close]);
  var handleKeyDown = useCallback(function (event) {
    return event.key === 'ArrowDown' ? bringFocusInside(event) : undefined;
  }, [bringFocusInside]);
  var onEsc = useCallback(function (event) {
    return event.key === 'Escape' ? close() : undefined;
  }, [close]);
  var handleBodyClick = useCallback(function (event) {
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
  var handleOpenComplete = useCallback(function () {
    if (shouldBringFocusInside) bringFocusInside();
    onOpenComplete();
  }, [shouldBringFocusInside, bringFocusInside, onOpenComplete]);
  useEffect(function () {
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
  var renderTarget = useCallback(function (_ref2) {
    var getRef = _ref2.getRef,
        isShown = _ref2.isShown;
    var isTooltipInside = children && children.type === Tooltip;

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
      return React.cloneElement(children, {
        popoverProps: _objectSpread({
          getTargetRef: getTargetRef,
          isShown: isShown
        }, popoverTargetProps)
      });
    }
    /**
     * With normal usage only popover props end up on the target.
     */


    return React.cloneElement(children, _objectSpread({
      ref: getTargetRef
    }, popoverTargetProps));
  }, [children, setTargetRef, toggle, handleOpenHover, handleKeyDown]); // If `props.isShown` is a boolean, popover is controlled manually, not via mouse events

  var shown = typeof props.isShown === 'boolean' ? props.isShown : isShown;
  var contentToRender = useMemo(function () {
    return typeof content === 'function' ? content({
      close: close
    }) : content;
  }, [content, close]);
  return React.createElement(Positioner, {
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
    return React.createElement(PopoverStateless, _extends({
      ref: function ref(_ref4) {
        setPopoverNode(_ref4);
        getRef(_ref4);
      },
      "data-state": state,
      display: display,
      minWidth: minWidth,
      minHeight: minHeight
    }, statelessProps, {
      className: cx(statelessProps.className, glamorCss(css, style, statelessProps.style).toString()) // Overwrite `statelessProps.style` since we are including it via className
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
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * When true, the Popover is manually shown.
   */
  isShown: PropTypes.bool,

  /**
   * Open the Popover based on click or hover. Default is click.
   */
  trigger: PropTypes.oneOf(['click', 'hover']),

  /**
   * The content of the Popover.
   */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The target button of the Popover.
   * When a function the following arguments are passed:
   * ({ toggle: Function -> Void, getRef: Function -> Ref, isShown: Bool })
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,

  /**
   * The display property passed to the Popover card.
   */
  display: PropTypes.string,

  /**
   * The min width of the Popover card.
   */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The min height of the Popover card.
   */
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Properties passed through to the Popover card.
   */
  statelessProps: PropTypes.shape(PopoverStateless.propTypes),

  /**
   * Duration of the animation.
   */
  animationDuration: PropTypes.number,

  /**
   * Function called when the Popover opens.
   */
  onOpen: PropTypes.func,

  /**
   * Function fired when Popover closes.
   */
  onClose: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the body is clicked.
   */
  onBodyClick: PropTypes.func,

  /**
   * When true, bring focus inside of the Popover on open.
   */
  bringFocusInside: PropTypes.bool,

  /**
   * Boolean indicating if clicking outside the dialog should close the dialog.
   */
  shouldCloseOnExternalClick: PropTypes.bool
};
export default Popover;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJjeCIsImNzcyIsImdsYW1vckNzcyIsIlByb3BUeXBlcyIsIlBvc2l0aW9uZXIiLCJUb29sdGlwIiwiUG9zaXRpb24iLCJ1c2VNZXJnZWRSZWYiLCJQb3BvdmVyU3RhdGVsZXNzIiwibm9vcCIsImVtcHR5UHJvcHMiLCJQb3BvdmVyIiwiZm9yd2FyZGVkUmVmIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJicmluZ0ZvY3VzSW5zaWRlIiwic2hvdWxkQnJpbmdGb2N1c0luc2lkZSIsImNoaWxkcmVuIiwiY29udGVudCIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsIm9uQm9keUNsaWNrIiwib25DbG9zZSIsIm9uQ2xvc2VDb21wbGV0ZSIsIm9uT3BlbiIsIm9uT3BlbkNvbXBsZXRlIiwicG9zaXRpb24iLCJCT1RUT00iLCJzaG91bGRDbG9zZU9uRXh0ZXJuYWxDbGljayIsInN0YXRlbGVzc1Byb3BzIiwidHJpZ2dlciIsInByb3BzIiwiaXNTaG93biIsInNldElzU2hvd24iLCJwb3BvdmVyTm9kZSIsInNldFBvcG92ZXJOb2RlIiwidGFyZ2V0UmVmIiwic2V0VGFyZ2V0UmVmIiwib3BlbiIsImNsb3NlIiwiY3VycmVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImlzRm9jdXNPdXRzaWRlTW9kYWwiLCJjb250YWlucyIsImF1dG9mb2N1c0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJ3cmFwcGVyRWxlbWVudCIsImJ1dHRvbkVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImJyaW5nRm9jdXNCYWNrVG9UYXJnZXQiLCJpc0ZvY3VzSW5zaWRlTW9kYWwiLCJib2R5IiwidG9nZ2xlIiwiaGFuZGxlT3BlbkhvdmVyIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2xvc2VIb3ZlciIsImhhbmRsZUtleURvd24iLCJldmVudCIsImtleSIsIm9uRXNjIiwiaGFuZGxlQm9keUNsaWNrIiwidGFyZ2V0IiwiaGFuZGxlT3BlbkNvbXBsZXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXJUYXJnZXQiLCJnZXRSZWYiLCJpc1Rvb2x0aXBJbnNpZGUiLCJ0eXBlIiwiZ2V0VGFyZ2V0UmVmIiwicmVmIiwicG9wb3ZlclRhcmdldFByb3BzIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uS2V5RG93biIsInJvbGUiLCJjbG9uZUVsZW1lbnQiLCJwb3BvdmVyUHJvcHMiLCJzaG93biIsImNvbnRlbnRUb1JlbmRlciIsInN0eWxlIiwic3RhdGUiLCJjbGFzc05hbWUiLCJ0b1N0cmluZyIsInByb3BUeXBlcyIsIm9uZU9mIiwiVE9QIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJCT1RUT01fTEVGVCIsIkJPVFRPTV9SSUdIVCIsIkxFRlQiLCJSSUdIVCIsImJvb2wiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJlbGVtZW50Iiwic3RyaW5nIiwibnVtYmVyIiwic2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFDRUMsSUFERixFQUVFQyxVQUZGLEVBR0VDLE1BSEYsRUFJRUMsUUFKRixFQUtFQyxTQUxGLEVBTUVDLG1CQU5GLEVBT0VDLFdBUEYsRUFRRUMsT0FSRixRQVNPLE9BVFA7QUFVQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLEdBQUcsSUFBSUMsU0FBaEIsUUFBaUMsUUFBakM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsVUFB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QUFFVixTQUFTLENBQUN1RyxNQTNEWDs7QUE2RGxCOzs7QUFHQWxGLEVBQUFBLE1BQU0sRUFBRXJCLFNBQVMsQ0FBQ21HLElBaEVBOztBQWtFbEI7OztBQUdBaEYsRUFBQUEsT0FBTyxFQUFFbkIsU0FBUyxDQUFDbUcsSUFyRUQ7O0FBdUVsQjs7O0FBR0E3RSxFQUFBQSxjQUFjLEVBQUV0QixTQUFTLENBQUNtRyxJQTFFUjs7QUE0RWxCOzs7QUFHQS9FLEVBQUFBLGVBQWUsRUFBRXBCLFNBQVMsQ0FBQ21HLElBL0VUOztBQWlGbEI7OztBQUdBakYsRUFBQUEsV0FBVyxFQUFFbEIsU0FBUyxDQUFDbUcsSUFwRkw7O0FBc0ZsQjs7O0FBR0F4RixFQUFBQSxnQkFBZ0IsRUFBRVgsU0FBUyxDQUFDZ0csSUF6RlY7O0FBMkZsQjs7O0FBR0F2RSxFQUFBQSwwQkFBMEIsRUFBRXpCLFNBQVMsQ0FBQ2dHO0FBOUZwQixDQUFwQjtBQWlHQSxlQUFleEYsT0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBtZW1vLFxuICBmb3J3YXJkUmVmLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VNZW1vXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUG9zaXRpb25lciB9IGZyb20gJy4uLy4uL3Bvc2l0aW9uZXInXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnLi4vLi4vdG9vbHRpcCdcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgUG9wb3ZlclN0YXRlbGVzcyBmcm9tICcuL1BvcG92ZXJTdGF0ZWxlc3MnXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgZW1wdHlQcm9wcyA9IHt9XG5cbmNvbnN0IFBvcG92ZXIgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFBvcG92ZXIoXG4gICAge1xuICAgICAgYW5pbWF0aW9uRHVyYXRpb24gPSAzMDAsXG4gICAgICBicmluZ0ZvY3VzSW5zaWRlOiBzaG91bGRCcmluZ0ZvY3VzSW5zaWRlID0gZmFsc2UsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbnRlbnQsXG4gICAgICBkaXNwbGF5LFxuICAgICAgbWluSGVpZ2h0ID0gNDAsXG4gICAgICBtaW5XaWR0aCA9IDIwMCxcbiAgICAgIG9uQm9keUNsaWNrID0gbm9vcCxcbiAgICAgIG9uQ2xvc2UgPSBub29wLFxuICAgICAgb25DbG9zZUNvbXBsZXRlID0gbm9vcCxcbiAgICAgIG9uT3BlbiA9IG5vb3AsXG4gICAgICBvbk9wZW5Db21wbGV0ZSA9IG5vb3AsXG4gICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLkJPVFRPTSxcbiAgICAgIHNob3VsZENsb3NlT25FeHRlcm5hbENsaWNrID0gdHJ1ZSxcbiAgICAgIHN0YXRlbGVzc1Byb3BzID0gZW1wdHlQcm9wcyxcbiAgICAgIHRyaWdnZXIgPSAnY2xpY2snLFxuICAgICAgLi4ucHJvcHNcbiAgICB9LFxuICAgIGZvcndhcmRlZFJlZlxuICApIHtcbiAgICBjb25zdCBbaXNTaG93biwgc2V0SXNTaG93bl0gPSB1c2VTdGF0ZShwcm9wcy5pc1Nob3duKVxuICAgIGNvbnN0IHBvcG92ZXJOb2RlID0gdXNlUmVmKClcbiAgICBjb25zdCBzZXRQb3BvdmVyTm9kZSA9IHVzZU1lcmdlZFJlZihwb3BvdmVyTm9kZSlcbiAgICBjb25zdCB0YXJnZXRSZWYgPSB1c2VSZWYoKVxuICAgIGNvbnN0IHNldFRhcmdldFJlZiA9IHVzZU1lcmdlZFJlZih0YXJnZXRSZWYpXG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKFxuICAgICAgZm9yd2FyZGVkUmVmLFxuICAgICAgKCkgPT4gKHtcbiAgICAgICAgb3BlbixcbiAgICAgICAgY2xvc2VcbiAgICAgIH0pLFxuICAgICAgW3BvcG92ZXJOb2RlLmN1cnJlbnRdXG4gICAgKVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kcyBib3Jyb3dlZCBmcm9tIEJsdWVwcmludEpTXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iL3JlbGVhc2UvMi4wLjAvcGFja2FnZXMvY29yZS9zcmMvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkudHN4XG4gICAgICovXG4gICAgY29uc3QgYnJpbmdGb2N1c0luc2lkZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgZSA9PiB7XG4gICAgICAgIGlmIChpc1Nob3duICYmIGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgICAvLyBBbHdheXMgZGVsYXkgZm9jdXMgbWFuaXB1bGF0aW9uIHRvIGp1c3QgYmVmb3JlIHJlcGFpbnQgdG8gcHJldmVudCBzY3JvbGwganVtcGluZ1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIC8vIENvbnRhaW5lciByZWYgbWF5IGJlIHVuZGVmaW5lZCBiZXR3ZWVuIGNvbXBvbmVudCBtb3VudGluZyBhbmQgUG9ydGFsIHJlbmRlcmluZ1xuXG4gICAgICAgICAgLy8gQWN0aXZlRWxlbWVudCBtYXkgYmUgdW5kZWZpbmVkIGluIHNvbWUgcmFyZSBjYXNlcyBpbiBJRVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcG9wb3Zlck5vZGUuY3VycmVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgICAgICFpc1Nob3duXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc0ZvY3VzT3V0c2lkZU1vZGFsID0gIXBvcG92ZXJOb2RlLmN1cnJlbnQuY29udGFpbnMoXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgICAgKVxuICAgICAgICAgIGlmIChpc0ZvY3VzT3V0c2lkZU1vZGFsKSB7XG4gICAgICAgICAgICAvLyBFbGVtZW50IG1hcmtlZCBhdXRvZm9jdXMgaGFzIGhpZ2hlciBwcmlvcml0eSB0aGFuIHRoZSBvdGhlciBlbGVtZW50c1xuICAgICAgICAgICAgY29uc3QgYXV0b2ZvY3VzRWxlbWVudCA9IHBvcG92ZXJOb2RlLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ1thdXRvZm9jdXNdOm5vdChbZGlzYWJsZWRdKSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChhdXRvZm9jdXNFbGVtZW50KSB7XG4gICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSB0byBhdm9pZCB1bm5lY2Vzc2FyeSBkb20gcXVlcmllc1xuICAgICAgICAgICAgICByZXR1cm4gYXV0b2ZvY3VzRWxlbWVudC5mb2N1cygpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gcG9wb3Zlck5vZGUuY3VycmVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnW3RhYmluZGV4XTpub3QoW2Rpc2FibGVkXSknXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAod3JhcHBlckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXJFbGVtZW50LmZvY3VzKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudHMgPSBwb3BvdmVyTm9kZS5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICdidXR0b246bm90KFtkaXNhYmxlZF0pLCBhOm5vdChbZGlzYWJsZWRdKSwgW3JvbGU9XCJtZW51aXRlbVwiXTpub3QoW2Rpc2FibGVkXSksIFtyb2xlPVwibWVudWl0ZW1yYWRpb1wiXTpub3QoW2Rpc2FibGVkXSknXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAoYnV0dG9uRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uRWxlbWVudHNbMF0uZm9jdXMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBbaXNTaG93biwgcG9wb3Zlck5vZGUuY3VycmVudF1cbiAgICApXG5cbiAgICBjb25zdCBicmluZ0ZvY3VzQmFja1RvVGFyZ2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0YXJnZXRSZWYuY3VycmVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICAgcG9wb3Zlck5vZGUuY3VycmVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNGb2N1c0luc2lkZU1vZGFsID0gcG9wb3Zlck5vZGUuY3VycmVudC5jb250YWlucyhcbiAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIClcblxuICAgICAgICAvLyBCcmluZyBiYWNrIGZvY3VzIG9uIHRoZSB0YXJnZXQuXG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IGlzRm9jdXNJbnNpZGVNb2RhbCkge1xuICAgICAgICAgIHRhcmdldFJlZi5jdXJyZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCBbcG9wb3Zlck5vZGUuY3VycmVudCwgdGFyZ2V0UmVmLmN1cnJlbnRdKVxuXG4gICAgY29uc3Qgb3BlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIGlmIChpc1Nob3duKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzZXRJc1Nob3duKHRydWUpXG4gICAgICBvbk9wZW4oKVxuICAgIH0sIFtzZXRJc1Nob3duLCBvbk9wZW4sIGlzU2hvd25dKVxuXG4gICAgY29uc3QgY2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBpZiAoIWlzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHNldElzU2hvd24oZmFsc2UpXG4gICAgICBicmluZ0ZvY3VzQmFja1RvVGFyZ2V0KClcbiAgICAgIG9uQ2xvc2UoKVxuICAgIH0sIFtzZXRJc1Nob3duLCBicmluZ0ZvY3VzQmFja1RvVGFyZ2V0LCBvbkNsb3NlLCBpc1Nob3duXSlcblxuICAgIC8vIElmIGBwcm9wcy5pc1Nob3duYCBpcyBhIGJvb2xlYW4sIHRyZWF0IGFzIGEgY29udHJvbGxlZCBjb21wb25lbnRcbiAgICAvLyBgb3BlbmAgYW5kIGBjbG9zZWAgc2hvdWxkIGJlIGFwcGxpZWQgd2hlbiBpdCBjaGFuZ2VzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuaXNTaG93biAhPT0gJ2Jvb2xlYW4nIHx8IHByb3BzLmlzU2hvd24gPT09IGlzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5pc1Nob3duKSB7XG4gICAgICAgIG9wZW4oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvc2UoKVxuICAgICAgfVxuICAgIH0sIFtwcm9wcy5pc1Nob3duLCBpc1Nob3duXSlcblxuICAgIGNvbnN0IHRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHJldHVybiBpc1Nob3duID8gY2xvc2UoKSA6IG9wZW4oKVxuICAgIH0sIFtpc1Nob3duLCBjbG9zZSwgb3Blbl0pXG5cbiAgICBjb25zdCBoYW5kbGVPcGVuSG92ZXIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIHJldHVybiB0cmlnZ2VyID09PSAnaG92ZXInID8gb3BlbiA6IHVuZGVmaW5lZFxuICAgIH0sIFt0cmlnZ2VyLCBvcGVuXSlcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlSG92ZXIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIHJldHVybiB0cmlnZ2VyID09PSAnaG92ZXInID8gY2xvc2UgOiB1bmRlZmluZWRcbiAgICB9LCBbdHJpZ2dlciwgY2xvc2VdKVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICByZXR1cm4gZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyA/IGJyaW5nRm9jdXNJbnNpZGUoZXZlbnQpIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgW2JyaW5nRm9jdXNJbnNpZGVdXG4gICAgKVxuXG4gICAgY29uc3Qgb25Fc2MgPSB1c2VDYWxsYmFjayhcbiAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgPyBjbG9zZSgpIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgW2Nsb3NlXVxuICAgIClcblxuICAgIGNvbnN0IGhhbmRsZUJvZHlDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAvLyBJZ25vcmUgY2xpY2tzIG9uIHRoZSBwb3BvdmVyIG9yIGJ1dHRvblxuICAgICAgICBpZiAodGFyZ2V0UmVmLmN1cnJlbnQgJiYgdGFyZ2V0UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvcG92ZXJOb2RlLmN1cnJlbnQgJiYgcG9wb3Zlck5vZGUuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3RpZnkgYm9keSBjbGlja1xuICAgICAgICBvbkJvZHlDbGljayhldmVudClcblxuICAgICAgICBpZiAoc2hvdWxkQ2xvc2VPbkV4dGVybmFsQ2xpY2sgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY2xvc2UoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBvbkJvZHlDbGljayxcbiAgICAgICAgc2hvdWxkQ2xvc2VPbkV4dGVybmFsQ2xpY2ssXG4gICAgICAgIGNsb3NlLFxuICAgICAgICB0YXJnZXRSZWYuY3VycmVudCxcbiAgICAgICAgcG9wb3Zlck5vZGUuY3VycmVudFxuICAgICAgXVxuICAgIClcblxuICAgIGNvbnN0IGhhbmRsZU9wZW5Db21wbGV0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIGlmIChzaG91bGRCcmluZ0ZvY3VzSW5zaWRlKSBicmluZ0ZvY3VzSW5zaWRlKClcbiAgICAgIG9uT3BlbkNvbXBsZXRlKClcbiAgICB9LCBbc2hvdWxkQnJpbmdGb2N1c0luc2lkZSwgYnJpbmdGb2N1c0luc2lkZSwgb25PcGVuQ29tcGxldGVdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChpc1Nob3duKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVCb2R5Q2xpY2ssIGZhbHNlKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkVzYywgZmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm9keUNsaWNrLCBmYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2MsIGZhbHNlKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm9keUNsaWNrLCBmYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2MsIGZhbHNlKVxuICAgICAgfVxuICAgIH0sIFtpc1Nob3duLCBoYW5kbGVCb2R5Q2xpY2ssIG9uRXNjXSlcblxuICAgIGNvbnN0IHJlbmRlclRhcmdldCA9IHVzZUNhbGxiYWNrKFxuICAgICAgKHsgZ2V0UmVmLCBpc1Nob3duIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXNUb29sdGlwSW5zaWRlID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4udHlwZSA9PT0gVG9vbHRpcFxuXG4gICAgICAgIGNvbnN0IGdldFRhcmdldFJlZiA9IHJlZiA9PiB7XG4gICAgICAgICAgc2V0VGFyZ2V0UmVmKHJlZilcbiAgICAgICAgICBnZXRSZWYocmVmKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwYXNzZWQsIHlvdSBjYW4gY29udHJvbCB0aGUgUG9wb3ZlciBtYW51YWxseS5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgICAgICAgZ2V0UmVmOiBnZXRUYXJnZXRSZWYsXG4gICAgICAgICAgICBpc1Nob3duLFxuICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBvcG92ZXJUYXJnZXRQcm9wcyA9IHtcbiAgICAgICAgICBvbkNsaWNrOiB0b2dnbGUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiBoYW5kbGVPcGVuSG92ZXIsXG4gICAgICAgICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAgICdhcmlhLWV4cGFuZGVkJzogaXNTaG93bixcbiAgICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb29sdGlwcyBjYW4gYmUgdXNlZCB3aXRoaW4gYSBQb3BvdmVyIChub3QgdGhlIG90aGVyIHdheSBhcm91bmQpXG4gICAgICAgICAqIEluIHRoaXMgY2FzZSB0aGUgY2hpbGRyZW4gaXMgdGhlIFRvb2x0aXAgaW5zdGVhZCBvZiBhIGJ1dHRvbi5cbiAgICAgICAgICogUGFzcyB0aGUgcHJvcGVydGllcyB0byB0aGUgVG9vbHRpcCBhbmQgbGV0IHRoZSBUb29sdGlwXG4gICAgICAgICAqIGFkZCB0aGUgcHJvcGVydGllcyB0byB0aGUgdGFyZ2V0LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGlzVG9vbHRpcEluc2lkZSkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgICAgICBnZXRUYXJnZXRSZWYsXG4gICAgICAgICAgICAgIGlzU2hvd24sXG5cbiAgICAgICAgICAgICAgLy8gVGhlc2UgcHJvcGV0aWVzIHdpbGwgYmUgc3ByZWFkIGFzIGBwb3BvdmVyVGFyZ2V0UHJvcHNgXG4gICAgICAgICAgICAgIC8vIGluIHRoZSBUb29sdGlwIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgLi4ucG9wb3ZlclRhcmdldFByb3BzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaXRoIG5vcm1hbCB1c2FnZSBvbmx5IHBvcG92ZXIgcHJvcHMgZW5kIHVwIG9uIHRoZSB0YXJnZXQuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgcmVmOiBnZXRUYXJnZXRSZWYsXG4gICAgICAgICAgLi4ucG9wb3ZlclRhcmdldFByb3BzXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgW2NoaWxkcmVuLCBzZXRUYXJnZXRSZWYsIHRvZ2dsZSwgaGFuZGxlT3BlbkhvdmVyLCBoYW5kbGVLZXlEb3duXVxuICAgIClcblxuICAgIC8vIElmIGBwcm9wcy5pc1Nob3duYCBpcyBhIGJvb2xlYW4sIHBvcG92ZXIgaXMgY29udHJvbGxlZCBtYW51YWxseSwgbm90IHZpYSBtb3VzZSBldmVudHNcbiAgICBjb25zdCBzaG93biA9IHR5cGVvZiBwcm9wcy5pc1Nob3duID09PSAnYm9vbGVhbicgPyBwcm9wcy5pc1Nob3duIDogaXNTaG93blxuXG4gICAgY29uc3QgY29udGVudFRvUmVuZGVyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicgPyBjb250ZW50KHsgY2xvc2UgfSkgOiBjb250ZW50XG4gICAgfSwgW2NvbnRlbnQsIGNsb3NlXSlcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9zaXRpb25lclxuICAgICAgICB0YXJnZXQ9e3JlbmRlclRhcmdldH1cbiAgICAgICAgaXNTaG93bj17c2hvd259XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249e2FuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICBvbk9wZW5Db21wbGV0ZT17aGFuZGxlT3BlbkNvbXBsZXRlfVxuICAgICAgICBvbkNsb3NlQ29tcGxldGU9e29uQ2xvc2VDb21wbGV0ZX1cbiAgICAgID5cbiAgICAgICAgeyh7IGNzcywgc3R5bGUsIHN0YXRlLCBnZXRSZWYgfSkgPT4gKFxuICAgICAgICAgIDxQb3BvdmVyU3RhdGVsZXNzXG4gICAgICAgICAgICByZWY9e3JlZiA9PiB7XG4gICAgICAgICAgICAgIHNldFBvcG92ZXJOb2RlKHJlZilcbiAgICAgICAgICAgICAgZ2V0UmVmKHJlZilcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIGRpc3BsYXk9e2Rpc3BsYXl9XG4gICAgICAgICAgICBtaW5XaWR0aD17bWluV2lkdGh9XG4gICAgICAgICAgICBtaW5IZWlnaHQ9e21pbkhlaWdodH1cbiAgICAgICAgICAgIHsuLi5zdGF0ZWxlc3NQcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgIHN0YXRlbGVzc1Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgZ2xhbW9yQ3NzKGNzcywgc3R5bGUsIHN0YXRlbGVzc1Byb3BzLnN0eWxlKS50b1N0cmluZygpXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgLy8gT3ZlcndyaXRlIGBzdGF0ZWxlc3NQcm9wcy5zdHlsZWAgc2luY2Ugd2UgYXJlIGluY2x1ZGluZyBpdCB2aWEgY2xhc3NOYW1lXG4gICAgICAgICAgICBzdHlsZT17dW5kZWZpbmVkfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVDbG9zZUhvdmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb250ZW50VG9SZW5kZXJ9XG4gICAgICAgICAgPC9Qb3BvdmVyU3RhdGVsZXNzPlxuICAgICAgICApfVxuICAgICAgPC9Qb3NpdGlvbmVyPlxuICAgIClcbiAgfSlcbilcblxuUG9wb3Zlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gdGhlIFBvcG92ZXIgaXMgb24uIFNtYXJ0IHBvc2l0aW9uaW5nIG1pZ2h0IG92ZXJyaWRlIHRoaXMuXG4gICAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBQb3NpdGlvbi5UT1AsXG4gICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICBQb3NpdGlvbi5CT1RUT01fUklHSFQsXG4gICAgUG9zaXRpb24uTEVGVCxcbiAgICBQb3NpdGlvbi5SSUdIVFxuICBdKSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgUG9wb3ZlciBpcyBtYW51YWxseSBzaG93bi5cbiAgICovXG4gIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogT3BlbiB0aGUgUG9wb3ZlciBiYXNlZCBvbiBjbGljayBvciBob3Zlci4gRGVmYXVsdCBpcyBjbGljay5cbiAgICovXG4gIHRyaWdnZXI6IFByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ2hvdmVyJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgUG9wb3Zlci5cbiAgICovXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgYnV0dG9uIG9mIHRoZSBQb3BvdmVyLlxuICAgKiBXaGVuIGEgZnVuY3Rpb24gdGhlIGZvbGxvd2luZyBhcmd1bWVudHMgYXJlIHBhc3NlZDpcbiAgICogKHsgdG9nZ2xlOiBGdW5jdGlvbiAtPiBWb2lkLCBnZXRSZWY6IEZ1bmN0aW9uIC0+IFJlZiwgaXNTaG93bjogQm9vbCB9KVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBkaXNwbGF5IHByb3BlcnR5IHBhc3NlZCB0byB0aGUgUG9wb3ZlciBjYXJkLlxuICAgKi9cbiAgZGlzcGxheTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIG1pbiB3aWR0aCBvZiB0aGUgUG9wb3ZlciBjYXJkLlxuICAgKi9cbiAgbWluV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogVGhlIG1pbiBoZWlnaHQgb2YgdGhlIFBvcG92ZXIgY2FyZC5cbiAgICovXG4gIG1pbkhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBQb3BvdmVyIGNhcmQuXG4gICAqL1xuICBzdGF0ZWxlc3NQcm9wczogUHJvcFR5cGVzLnNoYXBlKFBvcG92ZXJTdGF0ZWxlc3MucHJvcFR5cGVzKSxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbi5cbiAgICovXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgUG9wb3ZlciBvcGVucy5cbiAgICovXG4gIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGZpcmVkIHdoZW4gUG9wb3ZlciBjbG9zZXMuXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICovXG4gIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgYm9keSBpcyBjbGlja2VkLlxuICAgKi9cbiAgb25Cb2R5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGJyaW5nIGZvY3VzIGluc2lkZSBvZiB0aGUgUG9wb3ZlciBvbiBvcGVuLlxuICAgKi9cbiAgYnJpbmdGb2N1c0luc2lkZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyBvdXRzaWRlIHRoZSBkaWFsb2cgc2hvdWxkIGNsb3NlIHRoZSBkaWFsb2cuXG4gICAqL1xuICBzaG91bGRDbG9zZU9uRXh0ZXJuYWxDbGljazogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclxuIl19