export function initCursorEngine() {
  const customCursor = document.getElementById('customCursor');
  const cursorLabel = document.getElementById('cursorLabel');

  if (!customCursor || !window.matchMedia('(min-width: 1024px)').matches) return;

  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  const interactiveEls = document.querySelectorAll('a, button, .bento-card, .project-card, .term-btn, .sticker-badge');
  interactiveEls.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      customCursor.classList.add('hovering');
      if (el.tagName === 'A' || el.classList.contains('project-card')) {
        cursorLabel.textContent = 'VIEW';
      } else if (el.id === 'playChessBtn' || el.id === 'bentoPlayBtn') {
        cursorLabel.textContent = 'PLAY';
      } else if (el.classList.contains('btn-primary') || el.classList.contains('btn-hot-accent')) {
        cursorLabel.textContent = 'HIRE ME';
      } else if (el.classList.contains('term-btn')) {
        cursorLabel.textContent = 'CLI';
      } else {
        cursorLabel.textContent = 'EXPLORE';
      }
    });

    el.addEventListener('mouseleave', () => {
      customCursor.classList.remove('hovering');
      cursorLabel.textContent = '';
    });
  });
}
