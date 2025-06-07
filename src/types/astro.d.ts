// src/types/astro.d.ts
/// <reference types="astro/client" />

declare namespace Astro {
  interface Props extends Record<string, any> {}
}