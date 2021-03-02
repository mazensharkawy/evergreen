import React from 'react';
/**
 * React hook that returns the previous value
 * @param {any} value
 */

export function usePrevious(value, initialValue) {
  var ref = React.useRef(initialValue); // Store current value in ref, only update if the value changes

  React.useEffect(function () {
    ref.current = value;
  }, [value]); // Return previous value (happens before update in useEffect above)

  return ref.current;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2UtcHJldmlvdXMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VQcmV2aW91cyIsInZhbHVlIiwiaW5pdGlhbFZhbHVlIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUVBOzs7OztBQUlBLE9BQU8sU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEJDLFlBQTVCLEVBQTBDO0FBQy9DLE1BQU1DLEdBQUcsR0FBR0osS0FBSyxDQUFDSyxNQUFOLENBQWFGLFlBQWIsQ0FBWixDQUQrQyxDQUcvQzs7QUFDQUgsRUFBQUEsS0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEJGLElBQUFBLEdBQUcsQ0FBQ0csT0FBSixHQUFjTCxLQUFkO0FBQ0QsR0FGRCxFQUVHLENBQUNBLEtBQUQsQ0FGSCxFQUorQyxDQVEvQzs7QUFDQSxTQUFPRSxHQUFHLENBQUNHLE9BQVg7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBSZWFjdCBob29rIHRoYXQgcmV0dXJucyB0aGUgcHJldmlvdXMgdmFsdWVcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUsIGluaXRpYWxWYWx1ZSkge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYoaW5pdGlhbFZhbHVlKVxuXG4gIC8vIFN0b3JlIGN1cnJlbnQgdmFsdWUgaW4gcmVmLCBvbmx5IHVwZGF0ZSBpZiB0aGUgdmFsdWUgY2hhbmdlc1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWVcbiAgfSwgW3ZhbHVlXSlcblxuICAvLyBSZXR1cm4gcHJldmlvdXMgdmFsdWUgKGhhcHBlbnMgYmVmb3JlIHVwZGF0ZSBpbiB1c2VFZmZlY3QgYWJvdmUpXG4gIHJldHVybiByZWYuY3VycmVudFxufVxuIl19