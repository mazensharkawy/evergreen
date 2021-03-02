import _extends from "@babel/runtime/helpers/esm/extends";
import React, { memo, forwardRef } from 'react';
import Icon from '../src/Icon';
var svgPaths16 = ['M1 7c.51 0 .935.388.993.884L2 8v3c0 .51.388.935.884.993L3 12h1.59l-.3-.29a1.003 1.003 0 011.324-1.504l.096.084 2 2c.18.18.29.43.29.71 0 .233-.076.446-.206.614l-.084.096-2 2A1.003 1.003 0 014 15c0-.24.08-.458.224-.629l.076-.081.29-.29H3a2.996 2.996 0 01-2.995-2.823L0 11V8c0-.55.45-1 1-1zm5.388-7c.629 0 1.338.21 1.838.6.48.38.85.91 1.019 1.52.04.13.07.27.09.4.09.48.14 1.22.14 1.73v.07c.18.08.34.27.37.67.03.32-.09.59-.16.71-.06.28-.21.58-.48.63-.03.13-.07.26-.12.39 0 .01-.01.04-.01.04-.22.58-.55 1.08-.949 1.45v.18c.04.45-.12.77 1.059 1.3 1.179.53 2.947 1.09 3.307 1.95.37.86.22 1.36.22 1.36H9c0-.539-.21-1.045-.583-1.417l-2-2A1.997 1.997 0 005 9c-.149 0-.296-.015-.442-.045.099-.19.082-.37.101-.575 0-.05.01-.11.01-.17-.41-.35-.75-.86-.969-1.45v-.01s-.01-.01-.01-.02c-.04-.12-.09-.26-.12-.39-.28-.05-.44-.36-.5-.64-.06-.12-.19-.39-.16-.71.04-.41.21-.6.39-.68v-.06c0-.51.05-1.26.14-1.74.02-.13.05-.27.09-.4.17-.6.54-1.13 1.02-1.51C5.048.21 5.757 0 6.387 0zm4.625 2.04c.49 0 1.05.16 1.439.46.38.29.67.7.8 1.17.03.1.05.21.07.31.07.37.11.94.11 1.33v.05c.139.06.269.21.289.51.02.25-.07.45-.13.54-.05.21-.16.44-.38.48a1.711 1.711 0 01-.1.33c-.17.44-.43.83-.749 1.11v.14c.03.35-.09.59.83 1 .929.41 2.317.84 2.597 1.5.29.66.17 1.04.17 1.04H13.66v.01c-.05-.24-.14-.5-.25-.76-.36-.86-1.119-1.33-2.687-2-.14-.06-.59-.25-.6-.25-.21-.09-.36-.15-.5-.22.02-.1.02-.2.03-.31 0-.04.01-.08.01-.13-.07-.06-.13-.12-.19-.19.22-.32.4-.67.54-1.05.02-.06.02-.06.03-.1.29-.23.48-.57.59-.96.16-.33.25-.73.21-1.16-.03-.4-.16-.76-.37-1.03-.02-.53-.07-1.13-.15-1.54-.01-.06-.02-.12-.03-.19.23-.06.48-.09.72-.09z'];
var svgPaths20 = ['M1 9c.55 0 1 .45 1 1v4c0 1.1.9 2 2 2h2.59l-.3-.29a1.003 1.003 0 011.42-1.42l2 2c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2 2A1.003 1.003 0 016 19c0-.28.11-.53.3-.71l.29-.29H4c-2.21 0-4-1.79-4-4v-4c0-.55.45-1 1-1zm6.996-9c.79 0 1.68.25 2.309.73a3.63 3.63 0 011.4 2.36c.11.6.17 1.52.17 2.15v.09c.22.09.42.32.47.82.03.39-.12.73-.2.87-.07.34-.27.71-.61.78-.04.16-.09.33-.15.48-.01.01-.02.05-.02.05-.27.71-.68 1.33-1.19 1.78 0 .08 0 .16.01.23.05.55-.15.95 1.33 1.6 1.469.66 3.698 1.35 4.178 2.39.45 1.05.27 1.67.27 1.67h-5.227a1.982 1.982 0 00-.319-.417l-2-2A2.003 2.003 0 005 15H4c-.548 0-1-.452-1-1v-1.462c.511-.213 1.023-.413 1.468-.608 1.479-.65 1.329-1.05 1.379-1.59l.01-.21c-.52-.45-.95-1.08-1.22-1.8l-.01-.01-.01-.03c-.07-.15-.12-.32-.16-.49-.34-.06-.54-.43-.62-.78-.08-.14-.24-.48-.2-.87.05-.51.26-.74.49-.83v-.08c0-.64.05-1.55.17-2.15a3.648 3.648 0 011.4-2.36C6.317.25 7.207 0 7.996 0zm5.997 3c.59 0 1.26.19 1.73.55.46.35.8.85.97 1.4.04.13.07.25.08.38.08.45.13 1.14.13 1.61v.07c.16.07.31.24.35.62.02.29-.09.55-.15.65-.05.26-.2.53-.46.59-.03.12-.07.25-.11.36-.01.01-.01.04-.01.04-.2.53-.51 1-.89 1.34 0 .06 0 .12.01.17.04.41-.11.71 1 1.19 1.099.5 2.768 1.01 3.128 1.79.34.79.2 1.25.2 1.25h-3.039V15c-.06-.33-.17-.69-.33-1.06-.45-.97-1.37-1.52-3.238-2.3-.17-.07-.76-.31-.77-.32-.1-.04-.2-.08-.28-.12.05-.14.04-.29.06-.45l.01-.16c-.25-.21-.47-.48-.65-.79.22-.34.41-.71.56-1.12l.028-.078-.002.013-.006.035.06-.15c.36-.26.6-.67.72-1.13.18-.37.29-.82.25-1.3-.05-.5-.21-.92-.47-1.22-.02-.53-.06-1.11-.12-1.59.38-.17.83-.26 1.24-.26z'];
export var InheritedGroupIcon = memo(forwardRef(function InheritedGroupIcon(props, ref) {
  return React.createElement(Icon, _extends({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "inherited-group"
  }, props));
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvSW5oZXJpdGVkR3JvdXBJY29uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJJY29uIiwic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJJbmhlcml0ZWRHcm91cEljb24iLCJwcm9wcyIsInJlZiJdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxVQUF0QixRQUF3QyxPQUF4QztBQUNBLE9BQU9DLElBQVAsTUFBaUIsYUFBakI7QUFFQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIsa2pEQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQiwwL0NBRGlCLENBQW5CO0FBSUEsT0FBTyxJQUFNQyxrQkFBa0IsR0FBR0wsSUFBSSxDQUNwQ0MsVUFBVSxDQUFDLFNBQVNJLGtCQUFULENBQTRCQyxLQUE1QixFQUFtQ0MsR0FBbkMsRUFBd0M7QUFDakQsU0FDRSxvQkFBQyxJQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZTLENBRDBCLENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTEgN2MuNTEgMCAuOTM1LjM4OC45OTMuODg0TDIgOHYzYzAgLjUxLjM4OC45MzUuODg0Ljk5M0wzIDEyaDEuNTlsLS4zLS4yOWExLjAwMyAxLjAwMyAwIDAxMS4zMjQtMS41MDRsLjA5Ni4wODQgMiAyYy4xOC4xOC4yOS40My4yOS43MSAwIC4yMzMtLjA3Ni40NDYtLjIwNi42MTRsLS4wODQuMDk2LTIgMkExLjAwMyAxLjAwMyAwIDAxNCAxNWMwLS4yNC4wOC0uNDU4LjIyNC0uNjI5bC4wNzYtLjA4MS4yOS0uMjlIM2EyLjk5NiAyLjk5NiAwIDAxLTIuOTk1LTIuODIzTDAgMTFWOGMwLS41NS40NS0xIDEtMXptNS4zODgtN2MuNjI5IDAgMS4zMzguMjEgMS44MzguNi40OC4zOC44NS45MSAxLjAxOSAxLjUyLjA0LjEzLjA3LjI3LjA5LjQuMDkuNDguMTQgMS4yMi4xNCAxLjczdi4wN2MuMTguMDguMzQuMjcuMzcuNjcuMDMuMzItLjA5LjU5LS4xNi43MS0uMDYuMjgtLjIxLjU4LS40OC42My0uMDMuMTMtLjA3LjI2LS4xMi4zOSAwIC4wMS0uMDEuMDQtLjAxLjA0LS4yMi41OC0uNTUgMS4wOC0uOTQ5IDEuNDV2LjE4Yy4wNC40NS0uMTIuNzcgMS4wNTkgMS4zIDEuMTc5LjUzIDIuOTQ3IDEuMDkgMy4zMDcgMS45NS4zNy44Ni4yMiAxLjM2LjIyIDEuMzZIOWMwLS41MzktLjIxLTEuMDQ1LS41ODMtMS40MTdsLTItMkExLjk5NyAxLjk5NyAwIDAwNSA5Yy0uMTQ5IDAtLjI5Ni0uMDE1LS40NDItLjA0NS4wOTktLjE5LjA4Mi0uMzcuMTAxLS41NzUgMC0uMDUuMDEtLjExLjAxLS4xNy0uNDEtLjM1LS43NS0uODYtLjk2OS0xLjQ1di0uMDFzLS4wMS0uMDEtLjAxLS4wMmMtLjA0LS4xMi0uMDktLjI2LS4xMi0uMzktLjI4LS4wNS0uNDQtLjM2LS41LS42NC0uMDYtLjEyLS4xOS0uMzktLjE2LS43MS4wNC0uNDEuMjEtLjYuMzktLjY4di0uMDZjMC0uNTEuMDUtMS4yNi4xNC0xLjc0LjAyLS4xMy4wNS0uMjcuMDktLjQuMTctLjYuNTQtMS4xMyAxLjAyLTEuNTFDNS4wNDguMjEgNS43NTcgMCA2LjM4NyAwem00LjYyNSAyLjA0Yy40OSAwIDEuMDUuMTYgMS40MzkuNDYuMzguMjkuNjcuNy44IDEuMTcuMDMuMS4wNS4yMS4wNy4zMS4wNy4zNy4xMS45NC4xMSAxLjMzdi4wNWMuMTM5LjA2LjI2OS4yMS4yODkuNTEuMDIuMjUtLjA3LjQ1LS4xMy41NC0uMDUuMjEtLjE2LjQ0LS4zOC40OGExLjcxMSAxLjcxMSAwIDAxLS4xLjMzYy0uMTcuNDQtLjQzLjgzLS43NDkgMS4xMXYuMTRjLjAzLjM1LS4wOS41OS44MyAxIC45MjkuNDEgMi4zMTcuODQgMi41OTcgMS41LjI5LjY2LjE3IDEuMDQuMTcgMS4wNEgxMy42NnYuMDFjLS4wNS0uMjQtLjE0LS41LS4yNS0uNzYtLjM2LS44Ni0xLjExOS0xLjMzLTIuNjg3LTItLjE0LS4wNi0uNTktLjI1LS42LS4yNS0uMjEtLjA5LS4zNi0uMTUtLjUtLjIyLjAyLS4xLjAyLS4yLjAzLS4zMSAwLS4wNC4wMS0uMDguMDEtLjEzLS4wNy0uMDYtLjEzLS4xMi0uMTktLjE5LjIyLS4zMi40LS42Ny41NC0xLjA1LjAyLS4wNi4wMi0uMDYuMDMtLjEuMjktLjIzLjQ4LS41Ny41OS0uOTYuMTYtLjMzLjI1LS43My4yMS0xLjE2LS4wMy0uNC0uMTYtLjc2LS4zNy0xLjAzLS4wMi0uNTMtLjA3LTEuMTMtLjE1LTEuNTQtLjAxLS4wNi0uMDItLjEyLS4wMy0uMTkuMjMtLjA2LjQ4LS4wOS43Mi0uMDl6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xIDljLjU1IDAgMSAuNDUgMSAxdjRjMCAxLjEuOSAyIDIgMmgyLjU5bC0uMy0uMjlhMS4wMDMgMS4wMDMgMCAwMTEuNDItMS40MmwyIDJjLjE4LjE4LjI5LjQzLjI5LjcxIDAgLjI4LS4xMS41My0uMjkuNzFsLTIgMkExLjAwMyAxLjAwMyAwIDAxNiAxOWMwLS4yOC4xMS0uNTMuMy0uNzFsLjI5LS4yOUg0Yy0yLjIxIDAtNC0xLjc5LTQtNHYtNGMwLS41NS40NS0xIDEtMXptNi45OTYtOWMuNzkgMCAxLjY4LjI1IDIuMzA5LjczYTMuNjMgMy42MyAwIDAxMS40IDIuMzZjLjExLjYuMTcgMS41Mi4xNyAyLjE1di4wOWMuMjIuMDkuNDIuMzIuNDcuODIuMDMuMzktLjEyLjczLS4yLjg3LS4wNy4zNC0uMjcuNzEtLjYxLjc4LS4wNC4xNi0uMDkuMzMtLjE1LjQ4LS4wMS4wMS0uMDIuMDUtLjAyLjA1LS4yNy43MS0uNjggMS4zMy0xLjE5IDEuNzggMCAuMDggMCAuMTYuMDEuMjMuMDUuNTUtLjE1Ljk1IDEuMzMgMS42IDEuNDY5LjY2IDMuNjk4IDEuMzUgNC4xNzggMi4zOS40NSAxLjA1LjI3IDEuNjcuMjcgMS42N2gtNS4yMjdhMS45ODIgMS45ODIgMCAwMC0uMzE5LS40MTdsLTItMkEyLjAwMyAyLjAwMyAwIDAwNSAxNUg0Yy0uNTQ4IDAtMS0uNDUyLTEtMXYtMS40NjJjLjUxMS0uMjEzIDEuMDIzLS40MTMgMS40NjgtLjYwOCAxLjQ3OS0uNjUgMS4zMjktMS4wNSAxLjM3OS0xLjU5bC4wMS0uMjFjLS41Mi0uNDUtLjk1LTEuMDgtMS4yMi0xLjhsLS4wMS0uMDEtLjAxLS4wM2MtLjA3LS4xNS0uMTItLjMyLS4xNi0uNDktLjM0LS4wNi0uNTQtLjQzLS42Mi0uNzgtLjA4LS4xNC0uMjQtLjQ4LS4yLS44Ny4wNS0uNTEuMjYtLjc0LjQ5LS44M3YtLjA4YzAtLjY0LjA1LTEuNTUuMTctMi4xNWEzLjY0OCAzLjY0OCAwIDAxMS40LTIuMzZDNi4zMTcuMjUgNy4yMDcgMCA3Ljk5NiAwem01Ljk5NyAzYy41OSAwIDEuMjYuMTkgMS43My41NS40Ni4zNS44Ljg1Ljk3IDEuNC4wNC4xMy4wNy4yNS4wOC4zOC4wOC40NS4xMyAxLjE0LjEzIDEuNjF2LjA3Yy4xNi4wNy4zMS4yNC4zNS42Mi4wMi4yOS0uMDkuNTUtLjE1LjY1LS4wNS4yNi0uMi41My0uNDYuNTktLjAzLjEyLS4wNy4yNS0uMTEuMzYtLjAxLjAxLS4wMS4wNC0uMDEuMDQtLjIuNTMtLjUxIDEtLjg5IDEuMzQgMCAuMDYgMCAuMTIuMDEuMTcuMDQuNDEtLjExLjcxIDEgMS4xOSAxLjA5OS41IDIuNzY4IDEuMDEgMy4xMjggMS43OS4zNC43OS4yIDEuMjUuMiAxLjI1aC0zLjAzOVYxNWMtLjA2LS4zMy0uMTctLjY5LS4zMy0xLjA2LS40NS0uOTctMS4zNy0xLjUyLTMuMjM4LTIuMy0uMTctLjA3LS43Ni0uMzEtLjc3LS4zMi0uMS0uMDQtLjItLjA4LS4yOC0uMTIuMDUtLjE0LjA0LS4yOS4wNi0uNDVsLjAxLS4xNmMtLjI1LS4yMS0uNDctLjQ4LS42NS0uNzkuMjItLjM0LjQxLS43MS41Ni0xLjEybC4wMjgtLjA3OC0uMDAyLjAxMy0uMDA2LjAzNS4wNi0uMTVjLjM2LS4yNi42LS42Ny43Mi0xLjEzLjE4LS4zNy4yOS0uODIuMjUtMS4zLS4wNS0uNS0uMjEtLjkyLS40Ny0xLjIyLS4wMi0uNTMtLjA2LTEuMTEtLjEyLTEuNTkuMzgtLjE3LjgzLS4yNiAxLjI0LS4yNnonXG5dXG5cbmV4cG9ydCBjb25zdCBJbmhlcml0ZWRHcm91cEljb24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIEluaGVyaXRlZEdyb3VwSWNvbihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uXG4gICAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBuYW1lPVwiaW5oZXJpdGVkLWdyb3VwXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG4iXX0=