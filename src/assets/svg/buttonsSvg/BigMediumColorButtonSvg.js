import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const BigMediumColorButtonSvg = (props) => (
  <Svg
    width={266}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M251.388 48H15.055C7.803 48 .947 41.114.947 33.83V14.17C.947 6.885 7.803 0 15.055 0h236.333c7.252 0 14.109 8.432 14.109 13.242v20.591c0 7.28-6.857 14.167-14.109 14.167Z"
      fill="url(#a)"
    />
    <Path
      d="M251.388 48H15.055C7.803 48 .947 41.114.947 33.83V14.17C.947 6.885 7.803 0 15.055 0h236.333c7.252 0 14.109 8.432 14.109 13.242v20.591c0 7.28-6.857 14.167-14.109 14.167Z"
      fill="url(#b)"
      fillOpacity={0.2}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.947}
        y1={28}
        x2={265.497}
        y2={28.565}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#25977C" />
        <Stop offset={1} stopColor="#0E4291" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={133.222}
        y1={0}
        x2={133.222}
        y2={43.385}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.057} />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default BigMediumColorButtonSvg
