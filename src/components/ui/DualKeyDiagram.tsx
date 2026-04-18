type Props = {
  className?: string;
};

/**
 * Mini SVG diagram explaining the Dual-Key concept at a glance:
 * one unit, split into two lockable halves — one you live in, one you rent.
 */
export function DualKeyDiagram({ className }: Props) {
  return (
    <figure className={className}>
      <svg
        viewBox="0 0 200 64"
        className="w-full"
        role="img"
        aria-label="Dual-Key layout diagram: one unit split into two lockable halves — you stay in one, rent the other"
      >
        {/* Outer unit boundary */}
        <rect
          x="2"
          y="8"
          width="196"
          height="48"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Left half — YOU */}
        <rect
          x="6"
          y="12"
          width="90"
          height="40"
          rx="2"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <text
          x="51"
          y="30"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="8"
          fontWeight="600"
          letterSpacing="2"
          fill="currentColor"
          fillOpacity="0.85"
        >
          YOU STAY
        </text>
        <text
          x="51"
          y="44"
          textAnchor="middle"
          fontFamily="ui-serif, Georgia, serif"
          fontStyle="italic"
          fontSize="8"
          fill="currentColor"
          fillOpacity="0.55"
        >
          1 lockable half
        </text>

        {/* Center divider with lock glyph */}
        <line
          x1="100"
          y1="16"
          x2="100"
          y2="48"
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="32"
          r="6"
          fill="#E37A3C"
          fillOpacity="0.9"
        />
        <path
          d="M97 30 v-2 a3 3 0 0 1 6 0 v2 M96 30 h8 v5 h-8 z"
          fill="none"
          stroke="#FAF6EE"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Right half — RENT */}
        <rect
          x="104"
          y="12"
          width="90"
          height="40"
          rx="2"
          fill="#E37A3C"
          fillOpacity="0.12"
        />
        <text
          x="149"
          y="30"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="8"
          fontWeight="600"
          letterSpacing="2"
          fill="#B35520"
        >
          YOU RENT
        </text>
        <text
          x="149"
          y="44"
          textAnchor="middle"
          fontFamily="ui-serif, Georgia, serif"
          fontStyle="italic"
          fontSize="8"
          fill="#B35520"
          fillOpacity="0.7"
        >
          passive income
        </text>
      </svg>
    </figure>
  );
}
