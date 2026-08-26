'use client';

import { useEffect, useRef } from 'react';
import bodyHtml from '../lib/bodyHtml';
import scriptCode from '../lib/scriptCode';

// This page ports a previously built, fully tested single-file HTML prototype
// (a museum touch-wall interactive about the Belgian Antarctic expeditions)
// into a proper Next.js project structure.
//
// The original markup and interaction logic are preserved verbatim rather than
// hand-converted line-by-line into JSX. That conversion (self-closing every SVG
// tag, camel-casing every SVG presentation attribute, moving every getElementById
// call into refs/state, etc.) is a large, error-prone rewrite for a document this
// size — and this app is a fixed, curated dataset with no real interactivity with
// a backend, so there is nothing a rewrite would gain other than risk. Injecting
// the tested markup and running the tested script after mount keeps the exact
// behavior that was already built and verified in a real browser.
//
// The container renders empty on the initial pass (both server and client) and
// is filled imperatively in useEffect. Using dangerouslySetInnerHTML directly on
// the element duplicated the markup here after hydration; setting it manually,
// exactly once, sidesteps that entirely.
export default function Page() {
  const containerRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    containerRef.current.innerHTML = bodyHtml;

    // The script relies on the markup already being present in the DOM
    // (it queries elements by id right away), so it only runs after the
    // line above has committed the markup into the container.
    const scriptEl = document.createElement('script');
    scriptEl.text = `if (!window.__belgicaAppInitialized) { window.__belgicaAppInitialized = true; ${scriptCode} }`;
    containerRef.current.appendChild(scriptEl);

    return () => {
      scriptEl.remove();
    };
  }, []);

  return <div id="belgica-app-root" ref={containerRef} />;
}
