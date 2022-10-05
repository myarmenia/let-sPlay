import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m1 1.463 14 14M15 1.463l-14 14"
      stroke="#B3B7C2"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
)

export default SvgComponent
