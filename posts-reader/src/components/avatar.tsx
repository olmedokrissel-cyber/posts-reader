import type { ReactNode } from "react";

const Avatar = ({ children }: { children: ReactNode }) => {
 return (
 <span
 aria-hidden
 className="flex size-8 shrink-0 items-center justify-center rounded-ful
l bg-muted text-xs font-medium tabular-nums text-muted-foreground"
 >
 {children}
 </span>
 );
};

export default Avatar;