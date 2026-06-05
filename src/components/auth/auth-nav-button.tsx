"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

type AuthNavButtonProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

/**
 * In-app navigation styled as a text link. Uses a <button> instead of
 * <a> so browser extensions that inject attributes onto anchors before
 * hydration do not trigger React mismatch warnings.
 */
export function AuthNavButton({
  href,
  className,
  children,
}: AuthNavButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={className}
      onClick={() => router.push(href)}
    >
      {children}
    </button>
  );
}
