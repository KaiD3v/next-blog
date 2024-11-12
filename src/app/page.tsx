"use client";

import Welcome from "@/markdown/welcome.mdx";
import Welcome2 from "@/markdown/welcome2.mdx";
import { ReactNode, useState } from "react";

function CustomH1({ children }: { children: ReactNode }) {
  return <h1 style={{ color: "blue", fontSize: "100px" }}>{children}</h1>;
}

const overrideComponents = {
  h1: CustomH1,
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return <div>Olá mundo!</div>;
}
