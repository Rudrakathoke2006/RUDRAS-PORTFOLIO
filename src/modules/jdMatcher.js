/* ===================================================
   jdMatcher.js — Semantic Job Description Matcher
   =================================================== */

export function initJDMatcher() {
  const jdInput = document.getElementById('jdInput');
  const jdMatchBtn = document.getElementById('jdMatchBtn');
  const jdResults = document.getElementById('jdResults');

  if (!jdMatchBtn || !jdInput || !jdResults) return;

  jdMatchBtn.addEventListener('click', async () => {
    const text = jdInput.value.trim();
    if (!text) {
      jdResults.style.display = 'block';
      jdResults.innerHTML = '<div class="jd-alert error">Please paste a job description or keyword list first.</div>';
      return;
    }

    jdMatchBtn.disabled = true;
    jdMatchBtn.textContent = 'Analyzing Fit (TF-IDF & Embeddings)...';
    jdResults.style.display = 'block';
    jdResults.innerHTML = '<div class="jd-loading"><span class="spinner">⚡</span> Querying FastAPI vector matching backend...</div>';

    try {
      const response = await fetch('http://localhost:8000/api/jd-match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ job_description: text })
      });

      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();

      let html = `<div class="jd-summary-banner">
        <div>
          <span class="jd-score-pill">Top Fit: ${data.top_match}</span>
          <span class="jd-avg-pill">Avg Match Fit: ${data.avg_fit}%</span>
        </div>
      </div><div class="jd-matches-list">`;

      data.matches.forEach(item => {
        html += `
          <div class="jd-match-card">
            <div class="jd-match-header">
              <span class="jd-match-title">${item.title}</span>
              <span class="jd-match-score">${item.match_score}% MATCH</span>
            </div>
            <div class="jd-score-bar-track">
              <div class="jd-score-bar-fill" style="width: ${item.match_score}%;"></div>
            </div>
            <p class="jd-match-exp">${item.explanation}</p>
            <div class="jd-match-tags">
              ${item.skills.map(s => `<span class="jd-tag">${s}</span>`).join('')}
            </div>
          </div>
        `;
      });

      html += `</div>`;
      jdResults.innerHTML = html;
    } catch (err) {
      // Fallback local matching calculation if offline backend
      const lower = text.toLowerCase();
      const localMatches = [
        {
          title: "PUGMARK — Pench Wildlife Intelligence",
          score: lower.includes("python") || lower.includes("ai") || lower.includes("vision") ? 94 : 72,
          exp: "Built with Python, OpenCV, YOLOv8 & FastAPI. Implements computer vision, deep learning object detection, and spatial analytics.",
          skills: ["Python", "FastAPI", "OpenCV", "YOLOv8"]
        },
        {
          title: "Hospital Patient Record System (SyntecxHub)",
          score: lower.includes("java") || lower.includes("backend") || lower.includes("sql") ? 92 : 68,
          exp: "Multi-tier Java web application with JSP, Servlets, MySQL, and DAO pattern implementing role-based authorization & SHA-256 security.",
          skills: ["Java", "JSP", "Servlets", "MySQL"]
        },
        {
          title: "SarvaVote — Accessible Digital Voting",
          score: lower.includes("web") || lower.includes("fastapi") || lower.includes("speech") ? 88 : 65,
          exp: "Voice-guided full-stack platform using Web Speech API, Python/FastAPI backend, and secure OTP verification.",
          skills: ["Python", "FastAPI", "Web Speech API"]
        }
      ];

      localMatches.sort((a, b) => b.score - a.score);

      let html = `<div class="jd-summary-banner">
        <div>
          <span class="jd-score-pill">Top Fit: ${localMatches[0].title}</span>
          <span class="jd-avg-pill">Match Score: ${localMatches[0].score}%</span>
        </div>
      </div><div class="jd-matches-list">`;

      localMatches.forEach(item => {
        html += `
          <div class="jd-match-card">
            <div class="jd-match-header">
              <span class="jd-match-title">${item.title}</span>
              <span class="jd-match-score">${item.score}% MATCH</span>
            </div>
            <div class="jd-score-bar-track">
              <div class="jd-score-bar-fill" style="width: ${item.score}%;"></div>
            </div>
            <p class="jd-match-exp">${item.exp}</p>
            <div class="jd-match-tags">
              ${item.skills.map(s => `<span class="jd-tag">${s}</span>`).join('')}
            </div>
          </div>
        `;
      });
      html += `</div>`;
      jdResults.innerHTML = html;
    } finally {
      jdMatchBtn.disabled = false;
      jdMatchBtn.textContent = '🎯 Rank My Projects for this JD';
    }
  });
}
