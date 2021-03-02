"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrate = hydrate;
exports["default"] = autoHydrate;

var _uiBox = require("ui-box");

var _glamor = require("glamor");

var _canUseDom = _interopRequireDefault(require("../../lib/canUseDom"));

/**
 * You shouldn't have to manually run this.
 * This is mainly an export for testing purposes.
 */
function hydrate(hydration) {
  if (hydration.uiBoxCache) {
    (0, _uiBox.hydrate)(hydration.uiBoxCache);
  }

  if (hydration.glamorIds) {
    (0, _glamor.rehydrate)(hydration.glamorIds);
  }
}

function autoHydrate() {
  if (_canUseDom["default"]) {
    var hydration = document.querySelector('#evergreen-hydrate');

    if (hydration) {
      try {
        var hydrationObject = JSON.parse(hydration.innerHTML);
        hydrate(hydrationObject);
      } catch (error) {
        console.error('Evergreen automatic hydration object is invalid JSON', error);
      }
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zc3Ivc3JjL2F1dG9IeWRyYXRlLmpzIl0sIm5hbWVzIjpbImh5ZHJhdGUiLCJoeWRyYXRpb24iLCJ1aUJveENhY2hlIiwiZ2xhbW9ySWRzIiwiYXV0b0h5ZHJhdGUiLCJjYW5Vc2VEb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoeWRyYXRpb25PYmplY3QiLCJKU09OIiwicGFyc2UiLCJpbm5lckhUTUwiLCJlcnJvciIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUlPLFNBQVNBLE9BQVQsQ0FBaUJDLFNBQWpCLEVBQTRCO0FBQ2pDLE1BQUlBLFNBQVMsQ0FBQ0MsVUFBZCxFQUEwQjtBQUN4Qix3QkFBV0QsU0FBUyxDQUFDQyxVQUFyQjtBQUNEOztBQUVELE1BQUlELFNBQVMsQ0FBQ0UsU0FBZCxFQUF5QjtBQUN2QiwyQkFBVUYsU0FBUyxDQUFDRSxTQUFwQjtBQUNEO0FBQ0Y7O0FBRWMsU0FBU0MsV0FBVCxHQUF1QjtBQUNwQyxNQUFJQyxxQkFBSixFQUFlO0FBQ2IsUUFBTUosU0FBUyxHQUFHSyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWxCOztBQUVBLFFBQUlOLFNBQUosRUFBZTtBQUNiLFVBQUk7QUFDRixZQUFNTyxlQUFlLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxTQUFTLENBQUNVLFNBQXJCLENBQXhCO0FBQ0FYLFFBQUFBLE9BQU8sQ0FBQ1EsZUFBRCxDQUFQO0FBQ0QsT0FIRCxDQUdFLE9BQU9JLEtBQVAsRUFBYztBQUNkQyxRQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FDRSxzREFERixFQUVFQSxLQUZGO0FBSUQ7QUFDRjtBQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoeWRyYXRlIGFzIGJveEh5ZHJhdGUgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyByZWh5ZHJhdGUgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgY2FuVXNlRG9tIGZyb20gJy4uLy4uL2xpYi9jYW5Vc2VEb20nXG5cbi8qKlxuICogWW91IHNob3VsZG4ndCBoYXZlIHRvIG1hbnVhbGx5IHJ1biB0aGlzLlxuICogVGhpcyBpcyBtYWlubHkgYW4gZXhwb3J0IGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZShoeWRyYXRpb24pIHtcbiAgaWYgKGh5ZHJhdGlvbi51aUJveENhY2hlKSB7XG4gICAgYm94SHlkcmF0ZShoeWRyYXRpb24udWlCb3hDYWNoZSlcbiAgfVxuXG4gIGlmIChoeWRyYXRpb24uZ2xhbW9ySWRzKSB7XG4gICAgcmVoeWRyYXRlKGh5ZHJhdGlvbi5nbGFtb3JJZHMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0b0h5ZHJhdGUoKSB7XG4gIGlmIChjYW5Vc2VEb20pIHtcbiAgICBjb25zdCBoeWRyYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXZlcmdyZWVuLWh5ZHJhdGUnKVxuXG4gICAgaWYgKGh5ZHJhdGlvbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaHlkcmF0aW9uT2JqZWN0ID0gSlNPTi5wYXJzZShoeWRyYXRpb24uaW5uZXJIVE1MKVxuICAgICAgICBoeWRyYXRlKGh5ZHJhdGlvbk9iamVjdClcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ0V2ZXJncmVlbiBhdXRvbWF0aWMgaHlkcmF0aW9uIG9iamVjdCBpcyBpbnZhbGlkIEpTT04nLFxuICAgICAgICAgIGVycm9yXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==