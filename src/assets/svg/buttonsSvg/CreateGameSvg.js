import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
  <Svg
    width={272}
    height={49}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        d="M256.614 48.259H15.158c-7.409 0-14.415-6.886-14.415-14.17V14.429C.743 7.145 7.75.258 15.158.258h241.456c7.409 0 14.415 8.432 14.415 13.242v20.592c0 7.28-7.006 14.167-14.415 14.167Z"
        fill="url(#b)"
      />
      <Path
        d="M256.614 48.259H15.158c-7.409 0-14.415-6.886-14.415-14.17V14.429C.743 7.145 7.75.258 15.158.258h241.456c7.409 0 14.415 8.432 14.415 13.242v20.592c0 7.28-7.006 14.167-14.415 14.167Z"
        fill="url(#c)"
        fillOpacity={0.2}
      />
      <Path
        d="M85.632 22.207h-2.8a2.741 2.741 0 0 0-.313-.965 2.456 2.456 0 0 0-.607-.729 2.672 2.672 0 0 0-.856-.46 3.277 3.277 0 0 0-1.042-.16c-.678 0-1.268.168-1.77.505-.504.332-.894.818-1.17 1.457-.278.635-.416 1.407-.416 2.314 0 .934.138 1.718.415 2.353.282.635.674 1.114 1.177 1.438.502.324 1.084.486 1.745.486.37 0 .713-.05 1.029-.147.32-.098.603-.241.85-.429.247-.191.452-.424.613-.696.167-.273.282-.584.346-.934l2.8.013a5.224 5.224 0 0 1-1.7 3.228 5.447 5.447 0 0 1-1.727 1.036c-.665.251-1.417.377-2.256.377-1.168 0-2.212-.264-3.132-.793-.916-.528-1.641-1.293-2.174-2.294-.528-1.002-.792-2.214-.792-3.638 0-1.427.268-2.642.805-3.643.537-1.002 1.266-1.764 2.186-2.288.92-.529 1.956-.793 3.107-.793.758 0 1.461.107 2.11.32.651.213 1.229.524 1.731.933.503.405.912.901 1.228 1.49.32.587.524 1.26.613 2.019Zm6.55 8.7c-.993 0-1.852-.211-2.576-.633a4.33 4.33 0 0 1-1.668-1.777c-.392-.763-.588-1.647-.588-2.653 0-1.014.196-1.9.588-2.659a4.279 4.279 0 0 1 1.668-1.777c.724-.426 1.583-.64 2.576-.64.993 0 1.85.214 2.57.64a4.268 4.268 0 0 1 1.674 1.777c.392.759.588 1.645.588 2.66 0 1.005-.196 1.889-.588 2.652a4.318 4.318 0 0 1-1.674 1.777c-.72.422-1.577.633-2.57.633Zm.013-2.11c.452 0 .829-.128 1.131-.383.303-.26.53-.614.684-1.061a4.58 4.58 0 0 0 .237-1.528c0-.571-.08-1.08-.237-1.528-.153-.447-.381-.8-.684-1.06-.302-.26-.68-.39-1.131-.39-.456 0-.84.13-1.15.39-.308.26-.54.613-.698 1.06-.153.448-.23.957-.23 1.528 0 .571.077 1.08.23 1.528.158.447.39.8.697 1.06.311.256.695.384 1.15.384Zm6.265-.863h2.64c.013.324.158.58.435.767.277.188.635.282 1.073.282.444 0 .816-.103 1.119-.307.303-.209.454-.507.454-.895 0-.239-.06-.445-.179-.62a1.215 1.215 0 0 0-.499-.422 1.693 1.693 0 0 0-.741-.153h-1.413v-1.784h1.413c.422 0 .746-.098.971-.294a.925.925 0 0 0 .346-.735.993.993 0 0 0-.358-.799c-.235-.204-.552-.307-.953-.307-.405 0-.741.092-1.01.275-.264.18-.4.413-.409.703h-2.627c.009-.588.185-1.097.53-1.527.35-.43.819-.763 1.407-.998.592-.234 1.255-.351 1.988-.351.801 0 1.491.113 2.071.339.584.221 1.031.539 1.342.952.315.413.473.906.473 1.477 0 .52-.17.954-.511 1.304-.341.349-.818.598-1.432.747v.103a2.45 2.45 0 0 1 1.099.326c.329.192.591.456.787.792.196.333.294.727.294 1.183 0 .61-.179 1.131-.537 1.566-.354.434-.844.77-1.47 1.003-.623.23-1.336.346-2.142.346-.784 0-1.487-.113-2.109-.34-.618-.23-1.11-.566-1.477-1.01-.362-.442-.554-.983-.575-1.623Zm9.393 5.657v-5.037h.754c.217-.136.392-.353.524-.652.136-.298.247-.65.332-1.054.09-.405.158-.842.205-1.31.051-.474.096-.951.134-1.433l.256-3.208h7.53v7.657h1.521v5.037h-2.595v-2.876h-6.002v2.876h-2.659Zm3.464-5.037h3.701v-5.56h-2.646l-.103 1.111c-.072 1.049-.176 1.94-.313 2.672-.136.729-.349 1.321-.639 1.777Zm12.358 2.346c-.626 0-1.184-.108-1.674-.326a2.701 2.701 0 0 1-1.164-.978c-.281-.434-.421-.976-.421-1.623 0-.546.1-1.004.3-1.375.2-.37.473-.669.818-.895a3.965 3.965 0 0 1 1.176-.51 8.974 8.974 0 0 1 1.394-.244c.571-.06 1.031-.115 1.38-.166.35-.055.603-.136.761-.243a.533.533 0 0 0 .237-.473v-.038c0-.405-.128-.718-.384-.94-.251-.221-.609-.332-1.074-.332-.49 0-.88.108-1.17.326a1.505 1.505 0 0 0-.575.805l-2.518-.204a3.424 3.424 0 0 1 .754-1.547 3.621 3.621 0 0 1 1.451-1.01c.597-.239 1.287-.358 2.071-.358.545 0 1.067.064 1.566.192.503.127.948.326 1.336.594.392.268.701.614.927 1.036.226.417.339.918.339 1.502v6.622h-2.583v-1.362h-.077a2.758 2.758 0 0 1-.632.812 2.94 2.94 0 0 1-.953.544c-.37.127-.799.191-1.285.191Zm.78-1.879c.401 0 .755-.079 1.061-.237.307-.162.548-.379.723-.651.174-.273.262-.582.262-.927v-1.042a1.462 1.462 0 0 1-.352.153 6.476 6.476 0 0 1-.492.122 23.57 23.57 0 0 1-.55.095l-.498.07a3.37 3.37 0 0 0-.838.224c-.238.103-.424.241-.556.416-.132.17-.198.384-.198.64 0 .37.134.653.403.85.273.191.618.287 1.035.287Zm6.056-5.983v-2.141h8.898v2.141h-3.164v7.677h-2.595v-7.677h-3.139Zm12.435.876h2.934c1.3 0 2.314.31 3.043.933.729.618 1.093 1.444 1.093 2.48 0 .673-.164 1.266-.492 1.777-.328.507-.801.904-1.419 1.189-.618.281-1.36.422-2.225.422h-4.64v-9.818h2.601v7.677h2.039c.456 0 .831-.116 1.125-.346.294-.23.443-.524.448-.882a1.16 1.16 0 0 0-.448-.927c-.294-.242-.669-.364-1.125-.364h-2.934v-2.141Zm16.003 3.208 3.535-6.225h2.685v9.818h-2.595V24.47l-3.522 6.245h-2.704v-9.818h2.601v6.226Zm15.307-6.225v2.141h-4.078v7.677h-2.646v-9.818h6.724Zm1.84 13.5v-13.5h2.685v1.649h.121c.12-.264.292-.533.518-.806.23-.277.529-.507.895-.69.371-.187.831-.281 1.381-.281.716 0 1.376.187 1.981.562.605.371 1.089.931 1.451 1.681.363.746.544 1.681.544 2.806 0 1.096-.177 2.02-.531 2.775-.349.75-.827 1.319-1.432 1.706a3.675 3.675 0 0 1-2.02.576c-.528 0-.978-.088-1.348-.262a2.794 2.794 0 0 1-.902-.659 3.369 3.369 0 0 1-.537-.812h-.083v5.255h-2.723Zm2.666-8.591c0 .584.081 1.093.243 1.527.162.435.396.774.703 1.017.307.238.68.358 1.118.358.444 0 .819-.122 1.125-.365.307-.247.54-.588.697-1.022.162-.44.243-.944.243-1.515 0-.567-.079-1.066-.236-1.496-.158-.43-.39-.767-.697-1.01-.307-.243-.684-.364-1.132-.364-.443 0-.818.117-1.125.351-.302.235-.534.567-.696.997-.162.43-.243.938-.243 1.522Zm10.27 8.59c-.345 0-.669-.027-.972-.082a3.539 3.539 0 0 1-.741-.199l.613-2.032c.32.098.608.151.863.16.26.008.484-.052.671-.18.192-.127.348-.345.467-.651l.16-.416-3.522-10.1h2.863l2.033 7.21h.102l2.052-7.21h2.883l-3.816 10.88a4.57 4.57 0 0 1-.748 1.38 3.065 3.065 0 0 1-1.182.915c-.478.217-1.053.326-1.726.326Z"
        fill="#1A2848"
      />
    </G>
    <Path
      d="M270.029 31.123c-1.121 2.987-3.239 5.581-6.058 7.421-2.819 1.84-6.198 2.835-9.668 2.845H22.043c-3.12-.009-6.174-.815-8.813-2.327-2.64-1.512-4.76-3.669-6.116-6.224-.212-.18-.436-.355-.639-.545 1.182 2.892 3.305 8.389 6.086 10.155 2.782 1.766 6.09 2.718 9.481 2.73h232.266c3.469-.011 6.849-1.006 9.668-2.846 2.819-1.84 4.937-4.435 6.058-7.423 0 0 1.037-5.38.994-10.935-.057 4.995-.999 7.15-.999 7.15Z"
      fill="#5F6368"
      style={{
        mixBlendMode: "multiply",
      }}
      opacity={0.5}
    />
    <Path
      d="M247.285 3.269H22.558c-4.261.011-8.345 1.529-11.358 4.222-3.013 2.693-4.712 6.342-4.725 10.151v1.725c0 1.121.149 2.238.441 3.329h5.416v-.864c.013-3.808 1.712-7.458 4.725-10.15C20.07 8.987 24.153 7.47 28.415 7.46h224.733c2.356.003 4.681.474 6.808 1.38-1.498-1.73-3.418-3.132-5.614-4.097a17.646 17.646 0 0 0-7.057-1.474Z"
      fill="#5F6368"
      style={{
        mixBlendMode: "overlay",
      }}
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={0.743}
        y1={28.259}
        x2={271.029}
        y2={28.849}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#25977C" />
        <Stop offset={1} stopColor="#0E4291" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={135.886}
        y1={0.259}
        x2={135.886}
        y2={43.643}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.057} />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent