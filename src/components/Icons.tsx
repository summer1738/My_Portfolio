import type { SVGProps } from "react";

export function IconWeb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function IconBackend(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="2" y="3" width="20" height="6" rx="1" />
      <rect x="2" y="15" width="20" height="6" rx="1" />
      <path d="M6 9v6M10 9v6M14 9v6M18 9v6" />
    </svg>
  );
}

export function IconUI(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
    </svg>
  );
}

export function IconGfx(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M4 19l4-6 4 4 4-8 4 6" />
      <path d="M4 5h16" />
    </svg>
  );
}

export function IconMobile(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function IconIoT(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M8 16h8M8 12h8M10 8h4" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

const map = {
  web: IconWeb,
  backend: IconBackend,
  ui: IconUI,
  gfx: IconGfx,
  mobile: IconMobile,
  iot: IconIoT,
} as const;

export function SkillIcon({ name, className }: { name: keyof typeof map; className?: string }) {
  const C = map[name];
  return <C className={className} />;
}
