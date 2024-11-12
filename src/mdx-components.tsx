import { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({children}) => (
      <h1 className="text-red-600">{children}</h1>
    ),
    h2: ({children}) => (
      <h2 className="text-green-600">{children}</h2>
    ),
    ...components,
  };
}
