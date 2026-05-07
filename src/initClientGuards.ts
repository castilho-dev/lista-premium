/**
 * Restrições pedidas para o app: sem zoom (mobile/desktop comuns) e sem menu do botão direito.
 * Nota: não afeta iframes de terceiros (ex.: player VTurb).
 */
export function initClientGuards() {
  const block = (e: Event) => {
    e.preventDefault();
  };

  document.addEventListener('contextmenu', block, { capture: true });

  document.addEventListener(
    'wheel',
    (e) => {
      if (e.ctrlKey) e.preventDefault();
    },
    { passive: false, capture: true }
  );

  document.addEventListener(
    'keydown',
    (e) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      if (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0') e.preventDefault();
    },
    { capture: true }
  );

  document.addEventListener('gesturestart', block, { capture: true });
  document.addEventListener('gesturechange', block, { capture: true });
  document.addEventListener('gestureend', block, { capture: true });
}
