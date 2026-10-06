export function initTerminalCLI() {
  const termBtns = document.querySelectorAll('.term-btn');
  const termOutput = document.getElementById('terminalOutput');

  if (!termBtns.length || !termOutput) return;

  const termResponses = {
    projects: `
      <div class="term-line prompt-line"><span class="term-usr">rudra@system:~$</span> <span class="term-cmd">./projects.sh</span></div>
      <div class="term-line highlight-green">1. PUGMARK (FastAPI + OpenCV + YOLOv8 + SIFT) - Pench Wildlife Intelligence</div>
      <div class="term-line">2. Hospital Patient Record System (JSP + Servlets + SHA-256 + DAO)</div>
      <div class="term-line">3. SarvaVote (Voice-Guided Digital Voting - Byte Quest Top 25)</div>
      <div class="term-line">4. ATM Engine Simulation (6-state State Machine Pattern)</div>
      <div class="term-line text-muted">Scroll down to view detailed project cards & live GitHub repos ↓</div>
    `,
    skills: `
      <div class="term-line prompt-line"><span class="term-usr">rudra@system:~$</span> <span class="term-cmd">./skills.sh</span></div>
      <div class="term-line">LANGUAGES : Java, Python, C, JavaScript, Solidity</div>
      <div class="term-line">BACKEND   : JSP, Servlets, JDBC, DAO Pattern, FastAPI, Spring Boot</div>
      <div class="term-line">DATABASE  : MySQL, Oracle DB, PostgreSQL</div>
      <div class="term-line highlight-green">SECURITY  : SHA-256 Salting, Session Mgmt, SQLi Defense</div>
    `,
    hackathons: `
      <div class="term-line prompt-line"><span class="term-usr">rudra@system:~$</span> <span class="term-cmd">./awards.sh</span></div>
      <div class="term-line highlight-green">🥈 2nd Place : Cygnus HackTara (Interstellar Simulator)</div>
      <div class="term-line">🏆 Top 25    : Byte Quest GFG RBU (SarvaVote)</div>
      <div class="term-line">🏆 Top 17    : CodeCon 2025 (Legalizer AI)</div>
      <div class="term-line">🏆 Top 50    : CodeRush 1.0 (EEG Schizophrenia AI)</div>
    `,
    clear: `
      <div class="term-line prompt-line"><span class="term-usr">rudra@system:~$</span> <span class="term-cmd">clear</span></div>
      <div class="term-line info-line text-muted">Terminal cleared. Click buttons below to run scripts.</div>
    `
  };

  termBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.cmd;
      if (termResponses[cmd]) {
        termOutput.innerHTML = termResponses[cmd] + `
          <div class="term-line prompt-line mt-2">
            <span class="term-usr">rudra@system:~$</span> <span class="term-cursor">█</span>
          </div>
        `;
        termOutput.scrollTop = termOutput.scrollHeight;
      }
    });
  });
}
