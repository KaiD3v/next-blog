import React from "react";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full my-10 mx-auto max-w-[1280px] break-words">
      {children}
    </main>
  );
}
