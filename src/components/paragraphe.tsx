import React from "react";

type ParagraphePropsType = {
  children: React.ReactNode;
  className?: string;
};

export function Paragraphe({ children, className }: ParagraphePropsType) {
  return <div className={className}>{children}</div>;
}
