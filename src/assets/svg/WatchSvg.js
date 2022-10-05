import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={145}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.834.754h121.332c1.489 0 2.963.288 4.338.849a11.342 11.342 0 0 1 3.677 2.418 11.161 11.161 0 0 1 2.457 3.62c.569 1.354.862 2.804.862 4.27v13.695a11.069 11.069 0 0 1-3.322 7.884 11.425 11.425 0 0 1-8.012 3.264H11.834a11.425 11.425 0 0 1-8.014-3.268 11.07 11.07 0 0 1-3.32-7.89V11.92a11.006 11.006 0 0 1 .86-4.272 11.147 11.147 0 0 1 2.456-3.623 11.347 11.347 0 0 1 3.678-2.421 11.49 11.49 0 0 1 4.34-.85Z"
      fill="url(#a)"
    />
    <Path
      d="M129.083 3.71H16.599a13.676 13.676 0 0 0-9.554 3.911 13.251 13.251 0 0 0-3.974 9.404v1.598c0 1.039.125 2.074.371 3.084h4.556v-.8c.01-3.528 1.44-6.909 3.974-9.404a13.676 13.676 0 0 1 9.554-3.91h112.489a13.54 13.54 0 0 1 5.726 1.277 13.463 13.463 0 0 0-4.722-3.795 13.682 13.682 0 0 0-5.936-1.365Z"
      fill="url(#b)"
    />
    <Path
      d="M139.327 24.38a13.381 13.381 0 0 1-4.931 6.536 13.719 13.719 0 0 1-7.868 2.505H18.255a13.698 13.698 0 0 1-7.172-2.05 13.403 13.403 0 0 1-4.978-5.48c-.172-.16-.354-.313-.519-.48a13.387 13.387 0 0 0 4.953 6.3 13.716 13.716 0 0 0 7.716 2.404h108.276a13.716 13.716 0 0 0 7.869-2.506 13.377 13.377 0 0 0 4.93-6.536s.844-2.097.809-6.989c-.046 4.4-.812 6.297-.812 6.297Z"
      fill="#fff"
    />
    <Path
      d="M37.42 16.677h-2.799a2.741 2.741 0 0 0-.313-.966 2.456 2.456 0 0 0-.607-.728 2.672 2.672 0 0 0-.857-.46 3.277 3.277 0 0 0-1.042-.16c-.677 0-1.267.168-1.77.505-.503.332-.893.818-1.17 1.457-.277.635-.416 1.406-.416 2.314 0 .933.139 1.717.416 2.352.281.635.673 1.114 1.176 1.438.503.324 1.085.486 1.745.486.37 0 .714-.049 1.03-.147.319-.098.602-.24.85-.428.247-.192.451-.424.613-.697.166-.273.281-.584.345-.933l2.8.013a5.227 5.227 0 0 1-1.7 3.228 5.446 5.446 0 0 1-1.726 1.035c-.665.252-1.417.377-2.257.377-1.167 0-2.211-.264-3.132-.792-.916-.529-1.64-1.294-2.173-2.295-.529-1.002-.793-2.214-.793-3.637 0-1.428.269-2.642.806-3.644.537-1.001 1.265-1.764 2.186-2.288.92-.528 1.956-.793 3.106-.793.759 0 1.462.107 2.11.32a5.35 5.35 0 0 1 1.732.933c.503.405.912.902 1.227 1.49.32.588.524 1.261.614 2.02Zm7.918 5.497 2.66-6.808h2.07l-3.828 9.818h-1.81l-3.739-9.818h2.065l2.582 6.808Zm-3.202-6.808v9.818h-2.602v-9.818h2.602Zm6.54 9.818v-9.818h2.569v9.818h-2.57Zm9.291.192c-.993 0-1.852-.21-2.576-.633a4.331 4.331 0 0 1-1.668-1.777c-.392-.763-.588-1.647-.588-2.652 0-1.015.196-1.901.588-2.66a4.28 4.28 0 0 1 1.668-1.777c.724-.426 1.583-.639 2.576-.639.993 0 1.85.213 2.57.64a4.268 4.268 0 0 1 1.674 1.776c.392.759.588 1.645.588 2.66 0 1.005-.196 1.89-.588 2.652a4.319 4.319 0 0 1-1.674 1.777c-.72.422-1.577.633-2.57.633Zm.013-2.11c.451 0 .829-.127 1.131-.383.303-.26.53-.613.684-1.06.158-.448.237-.958.237-1.529 0-.57-.08-1.08-.237-1.527-.153-.448-.381-.801-.684-1.061-.302-.26-.68-.39-1.131-.39-.456 0-.84.13-1.15.39-.308.26-.54.613-.698 1.06-.153.448-.23.957-.23 1.528 0 .571.077 1.08.23 1.528.158.448.39.801.697 1.061.311.256.695.384 1.15.384Zm5.82-5.758v-2.142h8.897v2.142h-3.164v7.676h-2.595v-7.677h-3.139Zm10.728 11.358v-13.5h2.684v1.65h.122c.119-.265.292-.533.517-.806a2.73 2.73 0 0 1 .895-.69c.371-.188.831-.282 1.381-.282a3.69 3.69 0 0 1 1.982.563c.605.37 1.088.93 1.45 1.68.363.747.544 1.682.544 2.807 0 1.095-.177 2.02-.53 2.774-.35.75-.827 1.32-1.432 1.707-.601.383-1.275.575-2.02.575-.529 0-.978-.087-1.35-.262a2.791 2.791 0 0 1-.9-.658 3.347 3.347 0 0 1-.537-.812h-.083v5.254h-2.723Zm2.665-8.59c0 .583.081 1.092.243 1.527.162.435.396.773.703 1.016.307.239.68.358 1.119.358.443 0 .818-.121 1.125-.364.306-.247.539-.588.696-1.023.162-.439.243-.944.243-1.515 0-.566-.079-1.065-.236-1.495-.158-.43-.39-.768-.697-1.01-.307-.243-.684-.365-1.131-.365-.444 0-.819.117-1.125.352-.303.234-.535.566-.697.997-.162.43-.243.937-.243 1.521Zm13.38 5.1c-1.01 0-1.88-.204-2.608-.614a4.203 4.203 0 0 1-1.675-1.751c-.392-.758-.588-1.655-.588-2.691 0-1.01.196-1.896.588-2.66a4.347 4.347 0 0 1 1.655-1.783c.716-.426 1.556-.639 2.519-.639.648 0 1.25.105 1.809.314a4.013 4.013 0 0 1 1.47.926c.422.414.75.934.985 1.56.234.622.351 1.35.351 2.186v.748h-8.29v-1.688h5.727c0-.392-.085-.739-.256-1.041a1.832 1.832 0 0 0-.71-.71 2.024 2.024 0 0 0-1.041-.262c-.414 0-.78.096-1.1.288a2.017 2.017 0 0 0-.741.76c-.18.316-.27.667-.275 1.055v1.604c0 .486.09.906.268 1.26.184.353.442.626.774.818.332.191.726.287 1.182.287.303 0 .58-.042.831-.127.252-.086.467-.213.646-.384.179-.17.315-.38.41-.626l2.517.166a3.44 3.44 0 0 1-.786 1.585c-.392.447-.899.797-1.521 1.048-.618.248-1.332.371-2.141.371Zm5.706-7.869v-2.14h8.897v2.14h-3.164v7.677h-2.595v-7.677H96.28Zm12.435.876h2.934c1.299 0 2.314.311 3.042.933.729.618 1.093 1.445 1.093 2.48 0 .674-.164 1.266-.492 1.777-.328.508-.801.904-1.419 1.19-.618.28-1.359.421-2.224.421h-4.641v-9.818h2.602v7.677h2.039c.456 0 .831-.115 1.125-.345a1.09 1.09 0 0 0 .447-.882 1.155 1.155 0 0 0-.447-.927c-.294-.243-.669-.364-1.125-.364h-2.934v-2.142Z"
      fill="#001034"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.5}
        y1={21.754}
        x2={144.5}
        y2={21.977}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7DCE8A" />
        <Stop offset={1} stopColor="#4D7CFE" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={107.646}
        y1={-6.751}
        x2={109.421}
        y2={11.98}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.44} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
