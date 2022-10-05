import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  ClipPath,
} from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M.162 31.683a31.513 31.513 0 1 0 63.027 0 31.513 31.513 0 0 0-63.027 0Z"
        fill="#3EC9F4"
      />
      <Path
        style={{
          mixBlendMode: "multiply",
        }}
        d="M.162 31.683a31.513 31.513 0 1 0 63.027 0 31.513 31.513 0 0 0-63.027 0Z"
        fill="url(#b)"
      />
      <Path
        style={{
          mixBlendMode: "multiply",
        }}
        d="M.162 31.683a31.513 31.513 0 1 0 63.027 0 31.513 31.513 0 0 0-63.027 0Z"
        fill="url(#c)"
      />
      <Path
        d="M.162 31.683a31.513 31.513 0 1 0 63.027 0 31.513 31.513 0 0 0-63.027 0Z"
        fill="url(#d)"
        style={{
          mixBlendMode: "hard-light",
        }}
      />
      <Path
        style={{
          mixBlendMode: "screen",
        }}
        opacity={0.7}
        d="M51.27 16.718c0 7.779-8.77 14.084-19.595 14.084S12.08 24.497 12.08 16.718c0-7.778 8.775-14.083 19.61-14.083 10.835 0 19.58 6.305 19.58 14.083Z"
        fill="url(#e)"
      />
      <G
        style={{
          mixBlendMode: "screen",
        }}
      >
        <G
          style={{
            mixBlendMode: "overlay",
          }}
        >
          <Path
            d="M52.313 31.627c-.001-1.845-.111-3.688-.33-5.52a43.399 43.399 0 0 0-1.811-8.402 47.172 47.172 0 0 0-1.012-2.803C45.506 6.056 39.038.17 31.69.17c-7.348 0-13.83 5.886-17.485 14.732a33.633 33.633 0 0 0-1.012 2.803 43.414 43.414 0 0 0-1.811 8.401 46.909 46.909 0 0 0-.33 5.521v.056a46.053 46.053 0 0 0 1.61 12.217 34.023 34.023 0 0 0 5.982 12.196c3.542 4.433 8.097 7.085 13.046 7.085 4.95 0 9.494-2.662 13.052-7.085a34.008 34.008 0 0 0 5.982-12.201 45.978 45.978 0 0 0 1.609-12.212l-.02-.056Z"
            fill="url(#f)"
            fillOpacity={0.2}
            style={{
              mixBlendMode: "screen",
            }}
          />
        </G>
      </G>
      <Path
        opacity={0.95}
        d="M44.2 10.565c-.192 1.108-1.66 1.77-3.279 1.518-1.62-.253-2.778-1.402-2.586-2.53.192-1.13 1.66-1.772 3.28-1.488 1.619.283 2.773 1.396 2.585 2.5Z"
        fill="#fff"
      />
      <Path
        d="M44.813 54.527a53.69 53.69 0 0 1-26.093 0c-4.869-1.26-9.08-3.203-12.242-5.617a31.513 31.513 0 0 0 50.582 0c-3.163 2.414-7.374 4.357-12.247 5.617Z"
        fill="#3B97D9"
        style={{
          mixBlendMode: "screen",
        }}
        opacity={0.4}
      />
      <Path
        d="M31.769 21.683v20M41.769 31.683h-20"
        stroke="#0A0D3A"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="d"
        x1={0.162}
        y1={36.935}
        x2={63.188}
        y2={36.96}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7DCE8A" />
        <Stop offset={1} stopColor="#4D7CFE" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={23.856}
        y1={37.007}
        x2={39.696}
        y2={-4.091}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.12} />
        <Stop offset={0.26} stopColor="#343434" />
        <Stop offset={0.57} stopColor="#A0A0A0" />
        <Stop offset={0.79} stopColor="#E4E4E4" />
        <Stop offset={0.88} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={31.675}
        y1={63.191}
        x2={31.675}
        y2={-20.093}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#696969" />
        <Stop offset={0.02} stopColor="#898989" />
        <Stop offset={0.07} stopColor="#DADADA" />
        <Stop offset={0.09} stopColor="#fff" />
        <Stop offset={0.12} stopColor="#F3F3F3" />
        <Stop offset={0.17} stopColor="#D4D4D4" />
        <Stop offset={0.24} stopColor="#A2A2A2" />
        <Stop offset={0.32} stopColor="#5B5B5B" />
        <Stop offset={0.41} />
        <Stop offset={0.48} stopColor="#040404" />
        <Stop offset={0.56} stopColor="#101010" />
        <Stop offset={0.63} stopColor="#252525" />
        <Stop offset={0.71} stopColor="#414141" />
        <Stop offset={0.78} stopColor="#666" />
        <Stop offset={0.86} stopColor="#939393" />
        <Stop offset={0.93} stopColor="#C8C8C8" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-55.6427 0 0 -40.6192 31.361 19.543)"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.24} stopColor="#FDFEFE" />
        <Stop offset={0.33} stopColor="#F6F8FA" />
        <Stop offset={0.39} stopColor="#EAEFF2" />
        <Stop offset={0.44} stopColor="#DAE2E8" />
        <Stop offset={0.48} stopColor="#C4D1DA" />
        <Stop offset={0.52} stopColor="#A8BCC9" />
        <Stop offset={0.55} stopColor="#88A2B5" />
        <Stop offset={0.59} stopColor="#62859E" />
        <Stop offset={0.61} stopColor="#396584" />
        <Stop offset={0.63} stopColor="#1D4F73" />
        <Stop offset={0.81} stopColor="#205D7D" />
        <Stop offset={0.91} stopColor="#44A5BA" />
        <Stop offset={1} stopColor="#57D9E8" />
      </RadialGradient>
      <RadialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(180 15.764 -.014) scale(46.2297)"
      >
        <Stop offset={0.23} stopColor="#3B97D9" />
        <Stop offset={0.24} stopColor="#3D98D9" />
        <Stop offset={0.52} stopColor="#8FC4E9" />
        <Stop offset={0.74} stopColor="#CBE4F5" />
        <Stop offset={0.91} stopColor="#F1F7FC" />
        <Stop offset={1} stopColor="#fff" />
      </RadialGradient>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(.162 .17)"
          d="M0 0h63.016v63.016H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
