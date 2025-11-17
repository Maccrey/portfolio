import "@testing-library/jest-dom";
import React from "react";

// Next.js compiles pages/components assuming React is in scope when using the classic runtime.
// Provide a global for the Vitest environment so client components can render without additional imports.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).React = React;
