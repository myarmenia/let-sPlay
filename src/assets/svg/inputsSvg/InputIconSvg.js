import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const InputIconSvg = (props) => (
  <Svg
    width={16}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#818181">
      <Path d="M15.673 10.49a.762.762 0 0 1-.112-.074l-4.604-4.25a.614.614 0 0 0-.08-.057c.043-.044.065-.07.09-.093 1.533-1.465 3.067-2.928 4.601-4.388.034-.03.07-.058.105-.084v8.946ZM15.14.637l-7.302 6.96L.402.735C.562.59.762.502.975.48c.092-.009.184-.013.275-.012h13.194c.237 0 .468.018.696.169Z" />
      <Path d="m10.156 6.8 4.954 4.58a1.12 1.12 0 0 1-.63.152H1.238c-.161 0-.322-.027-.482-.042l-.012-.046 4.795-4.575c.203.186.397.364.591.544L7.431 8.61c.284.261.54.26.82-.007l1.769-1.681c.043-.04.085-.072.136-.122ZM0 10.672v-8.9l4.783 4.403-4.734 4.512L0 10.672Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(0 .468)"
          d="M0 0h15.673v11.063H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
)

export default InputIconSvg
