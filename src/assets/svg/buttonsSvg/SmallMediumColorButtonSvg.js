import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SmallMediumColorButtonSvg = (props) => (
  <Svg
    width={144}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M136.32 36H7.68C3.732 36 0 30.835 0 25.373V10.627C0 5.165 3.732 0 7.68 0h128.64c3.948 0 7.68 6.324 7.68 9.931v15.444c0 5.46-3.732 10.625-7.68 10.625Z"
      fill="url(#a)"
    />
    <Path
      d="M136.32 36H7.68C3.732 36 0 30.835 0 25.373V10.627C0 5.165 3.732 0 7.68 0h128.64c3.948 0 7.68 6.324 7.68 9.931v15.444c0 5.46-3.732 10.625-7.68 10.625Z"
      fill="url(#b)"
      fillOpacity={0.2}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        y1={21}
        x2={144}
        y2={21.223}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#25977C" />
        <Stop offset={1} stopColor="#0E4291" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={72}
        y1={0}
        x2={72}
        y2={32.538}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.057} />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SmallMediumColorButtonSvg
