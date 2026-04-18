import type { ElementType, ReactNode } from "react";

type ProseProps = {
  children: string;
  className?: string;
  as?: "p" | "div" | "span";
  /** Class applied to each sentence block. Override for spacing tweaks. */
  sentenceClassName?: string;
};

/**
 * Renders a multi-sentence string with each sentence on its own line.
 *
 * Design rule for this project: editorial body copy breathes — every
 * complete sentence occupies its own visual line, not auto-wrapped.
 * Single-sentence input renders as a normal paragraph (no wrapping span).
 *
 * Splits on sentence-ending punctuation (`.`, `!`, `?`) followed by whitespace.
 */
export function Prose({
  children,
  className,
  as = "p",
  sentenceClassName = "block",
}: ProseProps) {
  const sentences = children
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const Tag = as as ElementType;

  if (sentences.length <= 1) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={className}>
      {sentences.map((sentence, i) => (
        <span key={i} className={sentenceClassName}>
          {sentence}
        </span>
      )) as ReactNode}
    </Tag>
  );
}
