import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={19}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.403 9.513c0 1.362-.022 2.724 0 4.085.06 3.33-1.3 6.022-3.667 8.268a16.236 16.236 0 0 1-4.727 3.103c-.2.088-.497.135-.68.053-2.885-1.286-5.348-3.089-7.03-5.829a9.925 9.925 0 0 1-1.495-5.212c-.02-3.258 0-6.517-.015-9.77 0-.39.122-.509.51-.561C4.103 3.27 6.85 2.693 9.37 1.32a.576.576 0 0 1 .473 0c2.518 1.377 5.267 1.951 8.07 2.335.403.054.503.19.499.57-.018 1.755-.008 3.522-.008 5.287Z"
      fill="#657AC5"
      stroke="#657AC5"
    />
  </Svg>
)

export default SvgComponent
