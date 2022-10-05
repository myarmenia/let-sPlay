import * as React from "react"
import Svg, { Path } from "react-native-svg"

const InputArrowSvg = (props) => (
  <Svg
    width={17}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.484 8.982c-.214-.04-.427-.082-.64-.12a2569.836 2569.836 0 0 0-6.01-1.066c-.42-.075-.84-.157-1.26-.229-.107-.018-.149-.064-.171-.168L.026 1.07a1.042 1.042 0 0 1-.005-.44C.093.31.445.17.776.327c.357.17.706.362 1.057.55l9.032 4.756 5.34 2.81c.202.107.367.237.391.491.03.301-.103.496-.36.63a1090.67 1090.67 0 0 0-3.694 1.942C8.661 13.55 4.78 15.592.896 17.632a1.054 1.054 0 0 1-.476.106.407.407 0 0 1-.3-.134.43.43 0 0 1-.113-.314c.013-.25.047-.497.102-.74.428-1.979.86-3.956 1.295-5.932.02-.094.053-.144.157-.162.879-.152 1.757-.313 2.636-.47l2.98-.53c.743-.131 1.485-.264 2.228-.396a.669.669 0 0 0 .076-.024l.003-.054Z"
      fill="#657AC5"
    />
  </Svg>
)

export default InputArrowSvg
