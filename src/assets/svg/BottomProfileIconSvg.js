import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={21}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M10.224 26.022c-5.156 0-9.56-.802-9.56-4.016 0-3.213 4.376-6.18 9.56-6.18 5.156 0 9.56 2.938 9.56 6.152 0 3.212-4.376 4.044-9.56 4.044ZM10.213 13.275A6.127 6.127 0 1 0 4.087 7.15a6.105 6.105 0 0 0 6.084 6.126h.043Z"
      stroke="#657AC5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
