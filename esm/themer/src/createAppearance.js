import isDev from './isDev';
var allowedProperties = ['background', 'backgroundColor', 'backgroundImage', 'borderRadius', 'transition', 'boxShadow', 'opacity', 'color', 'textShadow', 'outline', // Not sure if cursor should be configurable
'cursor', // Added to prevent pointer events on disabled tab
'pointerEvents'];
/**
 * @param {object?} obj - input object that will be filtered against the allowed properties.
 * @return {object} the result will always be a object
 */

function createAppearance() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (allowedProperties.includes(key)) {
      if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
        result[key] = obj[key];
      } else if (isDev) {
        console.error("createAppearance() only accepts strings as properties, key '".concat(key, "' with value '").concat(obj[key], "' is not a string"));
      }
    } else if (isDev) {
      console.error("key '".concat(key, "' is not in the allowed properties for createAppearance():"), allowedProperties);
    }
  });
  return result;
}

export default createAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiaXNEZXYiLCJhbGxvd2VkUHJvcGVydGllcyIsImNyZWF0ZUFwcGVhcmFuY2UiLCJvYmoiLCJyZXN1bHQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImluY2x1ZGVzIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLFNBQWxCO0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsQ0FDeEIsWUFEd0IsRUFFeEIsaUJBRndCLEVBR3hCLGlCQUh3QixFQUt4QixjQUx3QixFQU94QixZQVB3QixFQVF4QixXQVJ3QixFQVN4QixTQVR3QixFQVd4QixPQVh3QixFQVl4QixZQVp3QixFQWN4QixTQWR3QixFQWV4QjtBQUNBLFFBaEJ3QixFQWtCeEI7QUFDQSxlQW5Cd0IsQ0FBMUI7QUFzQkE7Ozs7O0FBSUEsU0FBU0MsZ0JBQVQsR0FBb0M7QUFBQSxNQUFWQyxHQUFVLHVFQUFKLEVBQUk7QUFDbEMsTUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFFQUMsRUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCLFVBQUFDLEdBQUcsRUFBSTtBQUM5QixRQUFJUCxpQkFBaUIsQ0FBQ1EsUUFBbEIsQ0FBMkJELEdBQTNCLENBQUosRUFBcUM7QUFDbkMsVUFBSSxPQUFPTCxHQUFHLENBQUNLLEdBQUQsQ0FBVixLQUFvQixRQUFwQixJQUFnQyxPQUFPTCxHQUFHLENBQUNLLEdBQUQsQ0FBVixLQUFvQixRQUF4RCxFQUFrRTtBQUNoRUosUUFBQUEsTUFBTSxDQUFDSSxHQUFELENBQU4sR0FBY0wsR0FBRyxDQUFDSyxHQUFELENBQWpCO0FBQ0QsT0FGRCxNQUVPLElBQUlSLEtBQUosRUFBVztBQUNoQlUsUUFBQUEsT0FBTyxDQUFDQyxLQUFSLHVFQUNpRUgsR0FEakUsMkJBQ3FGTCxHQUFHLENBQUNLLEdBQUQsQ0FEeEY7QUFHRDtBQUNGLEtBUkQsTUFRTyxJQUFJUixLQUFKLEVBQVc7QUFDaEJVLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixnQkFDVUgsR0FEVixpRUFFRVAsaUJBRkY7QUFJRDtBQUNGLEdBZkQ7QUFpQkEsU0FBT0csTUFBUDtBQUNEOztBQUVELGVBQWVGLGdCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzRGV2IGZyb20gJy4vaXNEZXYnXG5cbmNvbnN0IGFsbG93ZWRQcm9wZXJ0aWVzID0gW1xuICAnYmFja2dyb3VuZCcsXG4gICdiYWNrZ3JvdW5kQ29sb3InLFxuICAnYmFja2dyb3VuZEltYWdlJyxcblxuICAnYm9yZGVyUmFkaXVzJyxcblxuICAndHJhbnNpdGlvbicsXG4gICdib3hTaGFkb3cnLFxuICAnb3BhY2l0eScsXG5cbiAgJ2NvbG9yJyxcbiAgJ3RleHRTaGFkb3cnLFxuXG4gICdvdXRsaW5lJyxcbiAgLy8gTm90IHN1cmUgaWYgY3Vyc29yIHNob3VsZCBiZSBjb25maWd1cmFibGVcbiAgJ2N1cnNvcicsXG5cbiAgLy8gQWRkZWQgdG8gcHJldmVudCBwb2ludGVyIGV2ZW50cyBvbiBkaXNhYmxlZCB0YWJcbiAgJ3BvaW50ZXJFdmVudHMnXG5dXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3Q/fSBvYmogLSBpbnB1dCBvYmplY3QgdGhhdCB3aWxsIGJlIGZpbHRlcmVkIGFnYWluc3QgdGhlIGFsbG93ZWQgcHJvcGVydGllcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIHJlc3VsdCB3aWxsIGFsd2F5cyBiZSBhIG9iamVjdFxuICovXG5mdW5jdGlvbiBjcmVhdGVBcHBlYXJhbmNlKG9iaiA9IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG5cbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGFsbG93ZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvYmpba2V5XSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICAgICAgfSBlbHNlIGlmIChpc0Rldikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBjcmVhdGVBcHBlYXJhbmNlKCkgb25seSBhY2NlcHRzIHN0cmluZ3MgYXMgcHJvcGVydGllcywga2V5ICcke2tleX0nIHdpdGggdmFsdWUgJyR7b2JqW2tleV19JyBpcyBub3QgYSBzdHJpbmdgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRGV2KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBga2V5ICcke2tleX0nIGlzIG5vdCBpbiB0aGUgYWxsb3dlZCBwcm9wZXJ0aWVzIGZvciBjcmVhdGVBcHBlYXJhbmNlKCk6YCxcbiAgICAgICAgYWxsb3dlZFByb3BlcnRpZXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcHBlYXJhbmNlXG4iXX0=