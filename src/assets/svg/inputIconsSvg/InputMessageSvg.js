import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={17}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#657AC5">
      <Path d="M16.316 10.11a.772.772 0 0 1-.112-.074L11.6 5.786a.622.622 0 0 0-.08-.056c.043-.044.065-.07.09-.094 1.533-1.465 3.067-2.927 4.601-4.387.033-.031.07-.058.105-.085v8.946ZM15.782.256 8.48 7.218 1.045.354c.159-.143.36-.232.573-.254.091-.009.183-.013.275-.012h13.193c.238 0 .468.018.696.168Z" />
      <Path d="M10.799 6.42 15.752 11a1.12 1.12 0 0 1-.629.152H1.88c-.16 0-.32-.027-.481-.041l-.012-.047 4.795-4.575.591.544 1.3 1.198c.285.261.541.26.821-.007l1.768-1.681c.044-.04.086-.071.137-.122ZM.643 10.293V1.392l4.782 4.404-4.734 4.51-.048-.013Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(.643 .088)"
          d="M0 0h15.673v11.063H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
