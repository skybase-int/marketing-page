export const SkyLogoColor = ({
  width = 160,
  height = 56,
  color = 'white',
  expanded = true
}: {
  width?: number;
  height?: number;
  color?: string;
  expanded?: boolean;
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 160 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {expanded && (
        <>
          <path
            d="M141.954 55.9997H134.736L141.547 41.1316L129.439 16.1183H137.065L145.214 34.0766L152.84 16.1183H160L141.954 55.9997Z"
            fill={color}
          />
          <path
            d="M126.986 16.1183L115.344 28.1294L127.219 44.5134H118.953L110.629 32.9105L107.136 36.5838V44.5134H100.442V2.29981H107.136V27.6046L118.022 16.1183H126.986Z"
            fill={color}
          />
          <path
            d="M93.3076 12.8532L87.0209 14.8356C86.6134 12.2701 84.4597 8.48025 78.9297 8.48025C74.7385 8.48025 71.828 11.2789 71.828 14.4275C71.828 17.0512 73.4579 19.0336 76.6595 19.7333L82.5969 20.9577C89.8732 22.4154 93.7733 27.0216 93.7733 32.8522C93.7733 39.2658 88.5926 45.388 79.1625 45.388C68.6847 45.388 63.8532 38.6245 63.2129 32.6772L69.7324 30.8115C70.1399 35.1261 73.2251 39.0909 79.1625 39.0909C84.1104 39.0909 86.6716 36.5838 86.6716 33.3769C86.6716 30.6948 84.6925 28.5375 81.1417 27.7795L75.3206 26.5551C69.0339 25.2724 64.8428 21.1327 64.8428 14.9522C64.8428 8.01379 71.1877 2.2998 78.8715 2.2998C88.5926 2.2998 92.3763 8.24702 93.3076 12.8532Z"
            fill={color}
          />
        </>
      )}
      <path
        d="M4.57617 9.88992C5.31386 8.87308 6.13018 7.91586 7.01762 7.0271L7.31536 7.19146L23.8012 23.7905L23.9576 23.9924L4.57617 9.88992Z"
        fill="url(#paint0_radial_2498_3824)"
      />
      <path
        d="M7.01562 7.02677C10.593 3.44406 15.2111 1.08753 20.208 0.294922L20.3737 0.751146L23.9557 23.674V23.992L7.01562 7.02677Z"
        fill="url(#paint1_radial_2498_3824)"
      />
      <path
        d="M34.8358 2.61646C35.9533 3.18686 37.0243 3.84426 38.039 4.58261L37.9961 4.9563L24.0438 23.9231L23.957 23.9926L34.8358 2.61646Z"
        fill="url(#paint2_radial_2498_3824)"
      />
      <path
        d="M47.9138 23.9924C47.9138 26.5101 47.5182 29.012 46.7413 31.4064L46.1747 31.4978L24.1332 24.0823L23.957 23.9924H47.9138Z"
        fill="url(#paint3_radial_2498_3824)"
      />
      <path
        d="M46.7415 31.406C45.9647 33.8005 44.8164 36.0575 43.3388 38.0944L42.7928 38.0017L24.0703 24.1102L23.957 23.9924L46.7415 31.406Z"
        fill="url(#paint4_radial_2498_3824)"
      />
      <path
        d="M31.3589 46.8104C27.7633 47.9804 23.9422 48.2816 20.2081 47.6893L20.0586 47.2294L23.8477 24.4004L23.9558 23.9922L31.3589 46.8104Z"
        fill="url(#paint5_radial_2498_3824)"
      />
      <path
        d="M20.2098 47.6893C18.9702 47.4927 17.748 47.1988 16.5544 46.8104L16.4883 46.2555L23.8209 24.2425L23.9574 23.9922L20.2098 47.6893Z"
        fill="url(#paint6_radial_2498_3824)"
      />
      <path
        d="M16.5534 46.8107C14.1625 46.0326 11.9088 44.8826 9.875 43.4028L9.875 42.9685L23.7118 24.237L23.9565 23.9924L16.5534 46.8107Z"
        fill="url(#paint7_radial_2498_3824)"
      />
      <path
        d="M2.61114 34.885C0.894765 31.5114 5.7086e-07 27.7789 0 23.9926L0.306449 23.8794H23.1818L23.9568 23.9926L2.61114 34.885Z"
        fill="url(#paint8_radial_2498_3824)"
      />
      <path
        d="M20.2077 0.295371C23.9424 -0.297255 27.7641 0.0038807 31.3602 1.17415L23.9568 23.9922L20.2077 0.295371Z"
        fill="url(#paint9_radial_2498_3824)"
      />
      <path
        d="M38.0384 4.582C42.1311 7.55998 45.1774 11.759 46.7409 16.5774L23.9568 23.9922L38.0384 4.582Z"
        fill="url(#paint10_radial_2498_3824)"
      />
      <path
        d="M9.87535 43.4026C7.84155 41.9227 6.05299 40.1315 4.57534 38.0947L23.9568 23.9922L9.87535 43.4026Z"
        fill="url(#paint11_radial_2498_3824)"
      />
      <path
        d="M0 23.9922C2.19774e-07 21.4746 0.395686 18.9726 1.17253 16.5782L23.9568 23.9922L0 23.9922Z"
        fill="url(#paint12_radial_2498_3824)"
      />
      <path
        d="M43.339 38.0937C41.8615 40.1306 40.073 41.9219 38.0393 43.4019L23.9568 23.9922L43.339 38.0937Z"
        fill="url(#paint13_radial_2498_3824)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9576 23.9924) rotate(-139.149) scale(24.1173 24.1225)"
        >
          <stop stopColor="#A273FF" />
          <stop offset="1" stopColor="#4331E9" />
          <stop offset="1" stopColor="#4331E9" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9557 23.992) rotate(-98.9814) scale(24.5675 24.5328)"
        >
          <stop stopColor="#F7A7F9" />
          <stop offset="1" stopColor="#00DDFB" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.957 23.9926) rotate(-180) scale(24.5487 24.5852)"
        >
          <stop stopColor="#FFF3D0" />
          <stop offset="1" stopColor="#FFC044" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.957 23.9924) rotate(-90) scale(24.5434 24.5072)"
        >
          <stop stopColor="#A273FF" />
          <stop offset="0.5" stopColor="#9FAEFF" />
          <stop offset="1" stopColor="#AAF2E1" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.957 23.9924) rotate(36.0309) scale(24.4496 24.4609)"
        >
          <stop stopColor="#0075FF" />
          <stop offset="1" stopColor="#00DDFB" />
        </radialGradient>
        <radialGradient
          id="paint5_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9558 23.9922) rotate(90) scale(24.5636 24.527)"
        >
          <stop stopColor="#FFCD6B" />
          <stop offset="1" stopColor="#EB5EDF" />
        </radialGradient>
        <radialGradient
          id="paint6_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9574 23.9922) rotate(90) scale(24.6144 24.5778)"
        >
          <stop stopColor="#D5FAFF" />
          <stop offset="1" stopColor="#00DDFB" />
        </radialGradient>
        <radialGradient
          id="paint7_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9565 23.9924) rotate(114.14) scale(26.2917 26.2657)"
        >
          <stop stopColor="#FFD2B9" />
          <stop offset="0.289583" stopColor="#C99BED" />
          <stop offset="1" stopColor="#0075FF" />
        </radialGradient>
        <radialGradient
          id="paint8_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9568 23.9926) rotate(-180) scale(31.9108 31.9583)"
        >
          <stop stopColor="#6D28FF" />
          <stop offset="1" stopColor="#F7A7F9" />
        </radialGradient>
        <radialGradient
          id="paint9_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9568 23.9922) rotate(-90) scale(24.5437 24.5072)"
        >
          <stop stopColor="#A273FF" />
          <stop offset="0.5" stopColor="#9FAEFF" />
          <stop offset="1" stopColor="#AAF2E1" />
        </radialGradient>
        <radialGradient
          id="paint10_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9568 23.9922) rotate(90) scale(24.5636 24.527)"
        >
          <stop stopColor="#FFCD6B" />
          <stop offset="1" stopColor="#EB5EDF" />
        </radialGradient>
        <radialGradient
          id="paint11_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9568 23.9923) rotate(-139.149) scale(24.1173 24.1225)"
        >
          <stop stopColor="#A273FF" />
          <stop offset="1" stopColor="#4331E9" />
          <stop offset="1" stopColor="#4331E9" />
        </radialGradient>
        <radialGradient
          id="paint12_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9568 23.9923) rotate(-180) scale(24.5487 24.5852)"
        >
          <stop stopColor="#FFF3D0" />
          <stop offset="1" stopColor="#FFC044" />
        </radialGradient>
        <radialGradient
          id="paint13_radial_2498_3824"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9568 23.9923) rotate(-139.149) scale(24.1173 24.1225)"
        >
          <stop stopColor="#A273FF" />
          <stop offset="1" stopColor="#4331E9" />
          <stop offset="1" stopColor="#4331E9" />
        </radialGradient>
      </defs>
    </svg>
  );
};
