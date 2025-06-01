import { TextUnderlineProps } from "../types/TextUnderline.type";

export default function TextUnderline({
                                        href,
                                        children,
                                        className = "",
                                        isHoveredOrFocused = false,
                                      }: TextUnderlineProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-bold inline-block default-text-color underline decoration-wavy underline-offset-8 transition-colors ${
        isHoveredOrFocused ? "decoration-cyan-500" : ""
      } ${className}`}
    >
      {children}
    </a>
  );
}
