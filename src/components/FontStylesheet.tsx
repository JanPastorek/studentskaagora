"use client";

/**
 * Loads the Google Fonts stylesheet without blocking first paint.
 *
 * A plain <link rel="stylesheet" href="...fonts.googleapis.com..."> in <head>
 * blocks rendering until the CSS downloads (this was flagged by PageSpeed
 * Insights as ~3s of render-blocking time). The standard fix ("loadCSS"
 * pattern): request the stylesheet at low priority via media="print" (browser
 * fetches it but doesn't block on it), then flip media to "all" once it has
 * loaded. A <noscript> fallback covers browsers with JS disabled.
 */
export function FontStylesheet({ href }: { href: string }) {
  return (
    <>
      <link
        rel="stylesheet"
        href={href}
        media="print"
        onLoad={(e) => {
          e.currentTarget.media = "all";
        }}
      />
      <noscript>
        <link rel="stylesheet" href={href} />
      </noscript>
    </>
  );
}
