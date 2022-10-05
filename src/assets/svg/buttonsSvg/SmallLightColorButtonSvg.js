import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SmallLightColorButtonSvg = (props) => (
  <Svg
    width={144}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.334.5h121.332c1.489 0 2.963.288 4.338.849a11.341 11.341 0 0 1 3.677 2.418 11.161 11.161 0 0 1 2.457 3.62c.569 1.354.862 2.805.862 4.27v13.695a11.07 11.07 0 0 1-3.322 7.884 11.425 11.425 0 0 1-8.012 3.264H11.334a11.425 11.425 0 0 1-8.014-3.268A11.07 11.07 0 0 1 0 25.343V11.666a11.006 11.006 0 0 1 .86-4.272A11.147 11.147 0 0 1 3.316 3.77a11.347 11.347 0 0 1 3.678-2.42A11.49 11.49 0 0 1 11.334.5Z"
      fill="url(#a)"
    />
    <Path
      d="M128.583 3.456H16.099a13.676 13.676 0 0 0-9.554 3.911 13.251 13.251 0 0 0-3.974 9.405v1.597c0 1.04.125 2.074.371 3.085h4.556v-.8c.01-3.529 1.44-6.91 3.974-9.405a13.676 13.676 0 0 1 9.554-3.91h112.489a13.54 13.54 0 0 1 5.726 1.278 13.463 13.463 0 0 0-4.722-3.796 13.682 13.682 0 0 0-5.936-1.365Z"
      fill="url(#b)"
    />
    <Path
      d="M138.826 24.127a13.38 13.38 0 0 1-4.93 6.535 13.723 13.723 0 0 1-7.869 2.505H17.755a13.698 13.698 0 0 1-7.172-2.05 13.403 13.403 0 0 1-4.978-5.48c-.172-.16-.354-.312-.52-.48a13.387 13.387 0 0 0 4.954 6.3 13.716 13.716 0 0 0 7.716 2.404h108.276a13.716 13.716 0 0 0 7.869-2.506 13.376 13.376 0 0 0 4.93-6.536s.844-2.096.809-6.988c-.046 4.398-.813 6.296-.813 6.296Z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        y1={21.5}
        x2={144}
        y2={21.723}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7DCE8A" />
        <Stop offset={1} stopColor="#4D7CFE" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={107.146}
        y1={-7.005}
        x2={108.921}
        y2={11.726}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.44} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SmallLightColorButtonSvg
