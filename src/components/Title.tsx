import { PropsWithChildren } from "react";

export type TitleProps = PropsWithChildren<{
  className?: string;
}>;

export function Title({ children, className }: TitleProps) {
  return (
    <h1 className={`text-left text-[24px] font-semibold ${className}`}>
      {children}
    </h1>
  );
}
