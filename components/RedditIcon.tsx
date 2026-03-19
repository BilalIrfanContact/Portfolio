type RedditIconProps = {
  size?: number;
  className?: string;
};

export default function RedditIcon({ size = 18, className }: RedditIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="18.4" cy="6.2" r="1.4" />
      <path d="M14.6 7.2l2.4.6" />
      <path d="M12.2 8.8l1.1-3.3" />
      <path d="M8 10.2c1-.8 2.3-1.2 4-1.2s3 .4 4 1.2" />
      <path d="M6.4 11.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8" />
      <path d="M17.6 11.5c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8" />
      <path d="M7.5 13.3c0 2.2 2 4 4.5 4s4.5-1.8 4.5-4-2-4-4.5-4-4.5 1.8-4.5 4z" />
      <circle cx="10" cy="13.1" r=".7" fill="currentColor" />
      <circle cx="14" cy="13.1" r=".7" fill="currentColor" />
      <path d="M9.5 15.1c.8.8 1.7 1.1 2.5 1.1s1.7-.3 2.5-1.1" />
    </svg>
  );
}
