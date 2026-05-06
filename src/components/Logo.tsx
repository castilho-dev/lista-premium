type Props = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 36, className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lista Premium"
    >
      <defs>
        <linearGradient id="lp-gold" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D9B382" />
          <stop offset="55%" stopColor="#B88A56" />
          <stop offset="100%" stopColor="#8C5E33" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" stroke="url(#lp-gold)" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="25" stroke="url(#lp-gold)" strokeWidth="0.75" opacity="0.6" />
      <path
        d="M32 14 L36 28 L50 28 L38.5 36.5 L43 50 L32 41.5 L21 50 L25.5 36.5 L14 28 L28 28 Z"
        fill="url(#lp-gold)"
      />
    </svg>
  );
}
