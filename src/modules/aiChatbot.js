export function initAIChatbot() {
  const aiChatToggle = document.getElementById('aiChatToggle');
  const aiChatModal = document.getElementById('aiChatModal');
  const aiChatClose = document.getElementById('aiChatClose');
  const aiChatForm = document.getElementById('aiChatForm');
  const aiChatInput = document.getElementById('aiChatInput');
  const aiChatBody = document.getElementById('aiChatBody');
  const suggestions = document.querySelectorAll('.suggestion-chip');

  if (!aiChatToggle || !aiChatModal) return;

  aiChatToggle.addEventListener('click', () => {
    const isOpen = aiChatModal.classList.contains('open');
    aiChatModal.classList.toggle('open');
    aiChatModal.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
    if (!isOpen) aiChatInput.focus();
  });

  if (aiChatClose) {
    aiChatClose.addEventListener('click', () => {
      aiChatModal.classList.remove('open');
      aiChatModal.setAttribute('aria-hidden', 'true');
    });
  }

  suggestions.forEach((chip) => {
    chip.addEventListener('click', () => {
      const prompt = chip.dataset.prompt;
      handleUserMessage(prompt);
    });
  });

  if (aiChatForm) {
    aiChatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = aiChatInput.value.trim();
      if (text) {
        handleUserMessage(text);
        aiChatInput.value = '';
      }
    });
  }

  function appendMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-message ${sender}`;
    const bubble = document.createElement('div');
    bubble.className = 'ai-msg-bubble';
    bubble.innerHTML = text;
    msgDiv.appendChild(bubble);
    aiChatBody.appendChild(msgDiv);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;
  }

  async function handleUserMessage(query) {
    appendMessage('user', query);

    // Try live FastAPI backend first
    try {
      const res = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });
      if (res.ok) {
        const data = await res.json();
        appendMessage('bot', data.response.replace(/\n/g, '<br/>'));
        return;
      }
    } catch(err) {
      console.log('Using local brain fallback');
    }

    // Local Brain fallback
    setTimeout(() => {
      const reply = generateLocalResponse(query);
      appendMessage('bot', reply);
    }, 400);
  }

  function generateLocalResponse(query) {
    const q = query.toLowerCase();
    if (q.includes('project') || q.includes('work') || q.includes('top projects')) {
      return `🚀 <strong>Rudra's Featured Systems:</strong><br/>
      1. 🐅 <strong>PUGMARK:</strong> Tiger Reserve intelligence system with MegaDetector V6, SIFT pattern matching & 95% KDE territory mapping.<br/>
      2. 🏥 <strong>Hospital Record System:</strong> Security-focused backend with JSP, Servlets, MySQL, and SHA-256 password hashing.<br/>
      3. 🎙️ <strong>SarvaVote:</strong> Voice-guided voting platform for accessible digital voting (Top 25 at Byte Quest).<br/>
      4. 💳 <strong>ATM Simulation System:</strong> 6-state Java engine with security audit logging & lockouts.`;
    } else if (q.includes('hackathon') || q.includes('win') || q.includes('award')) {
      return `🏆 <strong>Hackathon Accolades:</strong><br/>
      • 🥈 <strong>2nd Place:</strong> Cygnus HackTara (Interstellar Simulator)<br/>
      • 🏆 <strong>Top 25 / 500+ teams:</strong> Byte Quest GFG RBU (SarvaVote)<br/>
      • 🏆 <strong>Top 17 Finalist:</strong> CodeCon 2025 (Legalizer)<br/>
      • 🏆 <strong>Top 50 / 1350+:</strong> CodeRush 1.0 (EEG Schizophrenia AI)`;
    } else if (q.includes('cgpa') || q.includes('education') || q.includes('rbu')) {
      return `🎓 <strong>Academic Record & Standing:</strong><br/>
      Rudra is pursuing a <strong>B.Tech in Computer Science & Engineering</strong> at <strong>Ramdeobaba University (RBU Nagpur)</strong>.<br/>
      • 📊 <strong>CGPA:</strong> 9.2 / 10.0 (High Distinction)<br/>
      • 💼 <strong>Internships:</strong> 2 Java backend internships completed<br/>
      • 📜 <strong>Certifications:</strong> 8+ verified credentials in Java, Web3 (Cyfrin Updraft), and AI (IBM/Google).`;
    } else {
      return `🤖 Thanks for asking! Rudra is a Computer Science student at Ramdeobaba University (CGPA 9.2) specializing in Java backend architecture, AI engineering, and Web3.<br/><br/>Try asking about his <strong>projects</strong>, <strong>hackathon wins</strong>, or <strong>contact info</strong>!`;
    }
  }
}
