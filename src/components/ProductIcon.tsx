type ProductIconProps = {
  path: string;
  className?: string;
};

export default function ProductIcon({ path, className = "w-7 h-7" }: ProductIconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d={path}
      />
    </svg>
  );
}
