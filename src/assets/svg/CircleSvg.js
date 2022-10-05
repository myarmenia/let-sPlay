import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={25}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12.5} cy={12.963} r={12.5} fill="url(#a)" />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        y1={15.046}
        x2={25}
        y2={15.056}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7DCE8A" />
        <Stop offset={1} stopColor="#4D7CFE" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
