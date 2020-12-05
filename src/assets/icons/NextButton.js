import * as React from 'react';
import Svg, {Mask, Path, G, Defs, LinearGradient, Stop} from 'react-native-svg';

export function NextButton(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 24c0 19.2 4.8 24 24 24s24-4.8 24-24S43.2 0 24 0 0 4.8 0 24z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill="url(#prefix__paint0_linear)" d="M0 0h48v48H0z" />
      </G>
      <Mask
        id="prefix__b"
        maskUnits="userSpaceOnUse"
        x={21}
        y={18}
        width={7}
        height={12}>
        <Path
          d="M21.295 29.295a.998.998 0 01-.001-1.41L25.17 24l-3.876-3.885a.998.998 0 011.411-1.41l4.588 4.588a1 1 0 010 1.414l-4.588 4.588a.998.998 0 01-1.41 0z"
          fill="#fff"
        />
      </Mask>
      <G fill="#fff" mask="url(#prefix__b)">
        <Path fill="#fff" d="M12 12h24v24H12z" />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={-24}
          y1={24}
          x2={24}
          y2={72}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2B8DDC" />
          <Stop offset={1} stopColor="#733CF6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
