import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={14}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.09 16.943c-3.478 0-6.447-.541-6.447-2.709 0-2.167 2.95-4.168 6.447-4.168 3.478 0 6.447 1.982 6.447 4.149 0 2.166-2.95 2.728-6.447 2.728ZM7.083 8.346A4.132 4.132 0 1 0 2.95 4.214a4.117 4.117 0 0 0 4.104 4.132h.03Z"
      fill="#657AC5"
    />
  </Svg>
)

export default SvgComponent
