import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={17}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m16.822 12.966-4.112-2.215-1.899 2.215c-.738-.21-2.552-1.177-3.797-2.215-1.898-1.582-2.53-3.797-2.53-4.113l2.53-1.582L5.116.943l-4.43.949C.474 3.79.938 8.283 4.482 12.333c3.544 4.05 8.964 4.852 11.39 4.747l.95-4.114Z"
      fill="#657AC5"
    />
  </Svg>
)

export default SvgComponent
