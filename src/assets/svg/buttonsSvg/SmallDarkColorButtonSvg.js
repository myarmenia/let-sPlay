import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SmallDarkColorButtonSvg = (props) => (
  <Svg
    width={144}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.5 11.666c-.001-1.4.278-2.785.821-4.079a10.647 10.647 0 0 1 2.346-3.46c1.006-.99 2.2-1.777 3.516-2.314A10.99 10.99 0 0 1 11.333 1h121.333V.5l.001.5c1.423 0 2.833.276 4.148.812a10.838 10.838 0 0 1 3.515 2.312 10.645 10.645 0 0 1 2.347 3.457c.544 1.292.823 2.677.823 4.076v13.695a10.567 10.567 0 0 1-3.173 7.527 10.922 10.922 0 0 1-7.66 3.121H11.334a10.925 10.925 0 0 1-7.664-3.124A10.57 10.57 0 0 1 .5 25.343V11.666Z"
      fill="#142A5C"
      stroke="url(#a)"
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

export default SmallDarkColorButtonSvg
