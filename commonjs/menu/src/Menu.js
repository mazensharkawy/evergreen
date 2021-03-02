"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _MenuDivider = _interopRequireDefault(require("./MenuDivider"));

var _MenuGroup = _interopRequireDefault(require("./MenuGroup"));

var _MenuOption = _interopRequireDefault(require("./MenuOption"));

var _MenuOptionsGroup = _interopRequireDefault(require("./MenuOptionsGroup"));

var Menu = (0, _react.memo)(function Menu(props) {
  var menuRef = (0, _react.useRef)(null);
  var firstItem = (0, _react.useRef)();
  var lastItem = (0, _react.useRef)();
  var menuItems = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var currentMenuRef = menuRef.current;
    menuItems.current = currentMenuRef ? (0, _toConsumableArray2["default"])(currentMenuRef.querySelectorAll('[role="menuitemradio"]:not([disabled]), [role="menuitem"]:not([disabled])')) : [];

    if (menuItems.current.length === 0) {
      throw new Error('The menu has no menu items');
    }

    firstItem.current = menuItems.current[0];
    lastItem.current = menuItems.current[menuItems.current.length - 1]; // Go to next/previous item if it exists
    // or loop around

    var focusNext = function focusNext(currentItem, startItem) {
      // Determine which item is the startItem (first or last)
      var goingDown = startItem === firstItem.current; // Helper function for getting next legitimate element

      var move = function move(elem) {
        var indexOfItem = menuItems.current.indexOf(elem);

        if (goingDown) {
          if (indexOfItem < menuItems.current.length - 1) {
            return menuItems.current[indexOfItem + 1];
          }

          return startItem;
        }

        if (indexOfItem - 1 > -1) {
          return menuItems.current[indexOfItem - 1];
        }

        return startItem;
      }; // Make first move


      var nextItem = move(currentItem); // Focus the first one that's not disabled

      nextItem.focus();
    };

    function onKeyPressListener(e) {
      var target = e.target;
      var menuItem = menuItems.current && menuItems.current.find(function (item) {
        return item === target;
      });

      if (!menuItem) {
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        focusNext(menuItem, firstItem.current);
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        focusNext(menuItem, lastItem.current);
      }

      if (e.key === 'Home') {
        e.preventDefault();
        firstItem.current.focus();
      }

      if (e.key === 'End') {
        e.preventDefault();
        lastItem.current.focus();
      }
    }

    currentMenuRef.addEventListener('keydown', onKeyPressListener);
    return function () {
      currentMenuRef.removeEventListener('keydown', onKeyPressListener);
    };
  }, [menuRef]);
  var children = props.children;
  return _react["default"].createElement(_layers.Pane, {
    is: "nav",
    ref: menuRef,
    role: "menu",
    outline: "none"
  }, children);
});
Menu.Item = _MenuItem["default"];
Menu.Divider = _MenuDivider["default"];
Menu.Group = _MenuGroup["default"];
Menu.Divider = _MenuDivider["default"];
Menu.Group = _MenuGroup["default"];
Menu.Option = _MenuOption["default"];
Menu.OptionsGroup = _MenuOptionsGroup["default"];
Menu.propTypes = {
  /**
   * The children of the component.
   */
  children: _propTypes["default"].node
};
var _default = Menu;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51LmpzIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsIm1lbnVSZWYiLCJmaXJzdEl0ZW0iLCJsYXN0SXRlbSIsIm1lbnVJdGVtcyIsImN1cnJlbnRNZW51UmVmIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJFcnJvciIsImZvY3VzTmV4dCIsImN1cnJlbnRJdGVtIiwic3RhcnRJdGVtIiwiZ29pbmdEb3duIiwibW92ZSIsImVsZW0iLCJpbmRleE9mSXRlbSIsImluZGV4T2YiLCJuZXh0SXRlbSIsImZvY3VzIiwib25LZXlQcmVzc0xpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1lbnVJdGVtIiwiZmluZCIsIml0ZW0iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJJdGVtIiwiTWVudUl0ZW0iLCJEaXZpZGVyIiwiTWVudURpdmlkZXIiLCJHcm91cCIsIk1lbnVHcm91cCIsIk9wdGlvbiIsIk1lbnVPcHRpb24iLCJPcHRpb25zR3JvdXAiLCJNZW51T3B0aW9uc0dyb3VwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxpQkFBSyxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDckMsTUFBTUMsT0FBTyxHQUFHLG1CQUFPLElBQVAsQ0FBaEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsb0JBQWxCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLG9CQUFqQjtBQUVBLE1BQU1DLFNBQVMsR0FBRyxvQkFBbEI7QUFFQSx3QkFBVSxZQUFNO0FBQ2QsUUFBTUMsY0FBYyxHQUFHSixPQUFPLENBQUNLLE9BQS9CO0FBRUFGLElBQUFBLFNB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Q0FBaUJhLEtBQWpCO0FBQ0Q7QUFDRjs7QUFFRGQsSUFBQUEsY0FBYyxDQUFDdUIsZ0JBQWYsQ0FBZ0MsU0FBaEMsRUFBMkNSLGtCQUEzQztBQUVBLFdBQU8sWUFBTTtBQUNYZixNQUFBQSxjQUFjLENBQUN3QixtQkFBZixDQUFtQyxTQUFuQyxFQUE4Q1Qsa0JBQTlDO0FBQ0QsS0FGRDtBQUdELEdBckZELEVBcUZHLENBQUNuQixPQUFELENBckZIO0FBUHFDLE1BOEY3QjZCLFFBOUY2QixHQThGaEI5QixLQTlGZ0IsQ0E4RjdCOEIsUUE5RjZCO0FBK0ZyQyxTQUNFLGdDQUFDLFlBQUQ7QUFBTSxJQUFBLEVBQUUsRUFBQyxLQUFUO0FBQWUsSUFBQSxHQUFHLEVBQUU3QixPQUFwQjtBQUE2QixJQUFBLElBQUksRUFBQyxNQUFsQztBQUF5QyxJQUFBLE9BQU8sRUFBQztBQUFqRCxLQUNHNkIsUUFESCxDQURGO0FBS0QsQ0FwR1ksQ0FBYjtBQXNHQS9CLElBQUksQ0FBQ2dDLElBQUwsR0FBWUMsb0JBQVo7QUFDQWpDLElBQUksQ0FBQ2tDLE9BQUwsR0FBZUMsdUJBQWY7QUFDQW5DLElBQUksQ0FBQ29DLEtBQUwsR0FBYUMscUJBQWI7QUFDQXJDLElBQUksQ0FBQ2tDLE9BQUwsR0FBZUMsdUJBQWY7QUFDQW5DLElBQUksQ0FBQ29DLEtBQUwsR0FBYUMscUJBQWI7QUFDQXJDLElBQUksQ0FBQ3NDLE1BQUwsR0FBY0Msc0JBQWQ7QUFDQXZDLElBQUksQ0FBQ3dDLFlBQUwsR0FBb0JDLDRCQUFwQjtBQUVBekMsSUFBSSxDQUFDMEMsU0FBTCxHQUFpQjtBQUNmOzs7QUFHQVgsRUFBQUEsUUFBUSxFQUFFWSxzQkFBVUM7QUFKTCxDQUFqQjtlQU9lNUMsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJ1xuaW1wb3J0IE1lbnVEaXZpZGVyIGZyb20gJy4vTWVudURpdmlkZXInXG5pbXBvcnQgTWVudUdyb3VwIGZyb20gJy4vTWVudUdyb3VwJ1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSAnLi9NZW51T3B0aW9uJ1xuaW1wb3J0IE1lbnVPcHRpb25zR3JvdXAgZnJvbSAnLi9NZW51T3B0aW9uc0dyb3VwJ1xuXG5jb25zdCBNZW51ID0gbWVtbyhmdW5jdGlvbiBNZW51KHByb3BzKSB7XG4gIGNvbnN0IG1lbnVSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgZmlyc3RJdGVtID0gdXNlUmVmKClcbiAgY29uc3QgbGFzdEl0ZW0gPSB1c2VSZWYoKVxuXG4gIGNvbnN0IG1lbnVJdGVtcyA9IHVzZVJlZigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50TWVudVJlZiA9IG1lbnVSZWYuY3VycmVudFxuXG4gICAgbWVudUl0ZW1zLmN1cnJlbnQgPSBjdXJyZW50TWVudVJlZlxuICAgICAgPyBbXG4gICAgICAgICAgLi4uY3VycmVudE1lbnVSZWYucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICdbcm9sZT1cIm1lbnVpdGVtcmFkaW9cIl06bm90KFtkaXNhYmxlZF0pLCBbcm9sZT1cIm1lbnVpdGVtXCJdOm5vdChbZGlzYWJsZWRdKSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIDogW11cblxuICAgIGlmIChtZW51SXRlbXMuY3VycmVudC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG1lbnUgaGFzIG5vIG1lbnUgaXRlbXMnKVxuICAgIH1cblxuICAgIGZpcnN0SXRlbS5jdXJyZW50ID0gbWVudUl0ZW1zLmN1cnJlbnRbMF1cbiAgICBsYXN0SXRlbS5jdXJyZW50ID0gbWVudUl0ZW1zLmN1cnJlbnRbbWVudUl0ZW1zLmN1cnJlbnQubGVuZ3RoIC0gMV1cblxuICAgIC8vIEdvIHRvIG5leHQvcHJldmlvdXMgaXRlbSBpZiBpdCBleGlzdHNcbiAgICAvLyBvciBsb29wIGFyb3VuZFxuICAgIGNvbnN0IGZvY3VzTmV4dCA9IChjdXJyZW50SXRlbSwgc3RhcnRJdGVtKSA9PiB7XG4gICAgICAvLyBEZXRlcm1pbmUgd2hpY2ggaXRlbSBpcyB0aGUgc3RhcnRJdGVtIChmaXJzdCBvciBsYXN0KVxuICAgICAgY29uc3QgZ29pbmdEb3duID0gc3RhcnRJdGVtID09PSBmaXJzdEl0ZW0uY3VycmVudFxuXG4gICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGdldHRpbmcgbmV4dCBsZWdpdGltYXRlIGVsZW1lbnRcbiAgICAgIGNvbnN0IG1vdmUgPSBlbGVtID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhPZkl0ZW0gPSBtZW51SXRlbXMuY3VycmVudC5pbmRleE9mKGVsZW0pXG5cbiAgICAgICAgaWYgKGdvaW5nRG93bikge1xuICAgICAgICAgIGlmIChpbmRleE9mSXRlbSA8IG1lbnVJdGVtcy5jdXJyZW50Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBtZW51SXRlbXMuY3VycmVudFtpbmRleE9mSXRlbSArIDFdXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0YXJ0SXRlbVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4T2ZJdGVtIC0gMSA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIG1lbnVJdGVtcy5jdXJyZW50W2luZGV4T2ZJdGVtIC0gMV1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFydEl0ZW1cbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBmaXJzdCBtb3ZlXG4gICAgICBjb25zdCBuZXh0SXRlbSA9IG1vdmUoY3VycmVudEl0ZW0pXG5cbiAgICAgIC8vIEZvY3VzIHRoZSBmaXJzdCBvbmUgdGhhdCdzIG5vdCBkaXNhYmxlZFxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5UHJlc3NMaXN0ZW5lcihlKSB7XG4gICAgICBjb25zdCB7IHRhcmdldCB9ID0gZVxuICAgICAgY29uc3QgbWVudUl0ZW0gPVxuICAgICAgICBtZW51SXRlbXMuY3VycmVudCAmJiBtZW51SXRlbXMuY3VycmVudC5maW5kKGl0ZW0gPT4gaXRlbSA9PT0gdGFyZ2V0KVxuXG4gICAgICBpZiAoIW1lbnVJdGVtKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBmb2N1c05leHQobWVudUl0ZW0sIGZpcnN0SXRlbS5jdXJyZW50KVxuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZm9jdXNOZXh0KG1lbnVJdGVtLCBsYXN0SXRlbS5jdXJyZW50KVxuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09ICdIb21lJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZmlyc3RJdGVtLmN1cnJlbnQuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbmQnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsYXN0SXRlbS5jdXJyZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjdXJyZW50TWVudVJlZi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlQcmVzc0xpc3RlbmVyKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGN1cnJlbnRNZW51UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleVByZXNzTGlzdGVuZXIpXG4gICAgfVxuICB9LCBbbWVudVJlZl0pXG5cbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8UGFuZSBpcz1cIm5hdlwiIHJlZj17bWVudVJlZn0gcm9sZT1cIm1lbnVcIiBvdXRsaW5lPVwibm9uZVwiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUGFuZT5cbiAgKVxufSlcblxuTWVudS5JdGVtID0gTWVudUl0ZW1cbk1lbnUuRGl2aWRlciA9IE1lbnVEaXZpZGVyXG5NZW51Lkdyb3VwID0gTWVudUdyb3VwXG5NZW51LkRpdmlkZXIgPSBNZW51RGl2aWRlclxuTWVudS5Hcm91cCA9IE1lbnVHcm91cFxuTWVudS5PcHRpb24gPSBNZW51T3B0aW9uXG5NZW51Lk9wdGlvbnNHcm91cCA9IE1lbnVPcHRpb25zR3JvdXBcblxuTWVudS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51XG4iXX0=