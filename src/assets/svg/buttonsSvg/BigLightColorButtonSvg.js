import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const BigLightColorButtonSvg = (props) => (
  <Svg
    width={266}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.42 0h237.974c1.769 0 3.522.384 5.156 1.132a13.476 13.476 0 0 1 4.372 3.224 15.064 15.064 0 0 1 2.92 4.827 16.234 16.234 0 0 1 1.025 5.693v18.26c-.002 3.944-1.423 7.725-3.949 10.512-2.527 2.787-5.952 4.353-9.524 4.352H14.42c-3.574 0-7-1.567-9.527-4.357C2.366 40.853.947 37.069.947 33.124V14.888a16.232 16.232 0 0 1 1.022-5.696 15.067 15.067 0 0 1 2.92-4.83A13.47 13.47 0 0 1 9.26 1.133 12.379 12.379 0 0 1 14.42 0Z"
      fill="url(#a)"
    />
    <Path
      d="M244.802 3.942H20.085c-4.261.013-8.344 1.888-11.358 5.214-3.013 3.327-4.711 7.835-4.724 12.54v2.13c0 1.385.148 2.765.44 4.112H9.86v-1.066c.012-4.705 1.71-9.213 4.724-12.54 3.013-3.326 7.096-5.2 11.357-5.214h224.724a14.66 14.66 0 0 1 6.808 1.704c-1.498-2.137-3.418-3.868-5.614-5.06a14.83 14.83 0 0 0-7.057-1.82Z"
      fill="url(#b)"
    />
    <Path
      d="M261.979 31.502c-1.085 3.507-3.134 6.553-5.861 8.714-2.727 2.16-5.997 3.328-9.354 3.34H22.054c-3.018-.01-5.973-.957-8.527-2.732-2.554-1.776-4.604-4.308-5.917-7.308-.205-.212-.421-.417-.617-.64 1.142 3.396 3.197 6.327 5.888 8.4 2.69 2.075 5.89 3.193 9.172 3.206H246.77c3.357-.012 6.627-1.18 9.354-3.341 2.727-2.162 4.776-5.208 5.861-8.716 0 0 1.003-2.795.961-9.318-.055 5.866-.966 8.395-.966 8.395Z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.947}
        y1={28}
        x2={265.867}
        y2={28.567}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7DCE8A" />
        <Stop offset={1} stopColor="#4D7CFE" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={128.319}
        y1={-10.007}
        x2={130.967}
        y2={14.911}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.44} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default BigLightColorButtonSvg
