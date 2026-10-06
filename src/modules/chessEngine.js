export function initChessEngine() {
  const playChessBtn = document.getElementById('playChessBtn');
  const bentoPlayBtn = document.getElementById('bentoPlayBtn');
  const chessModal = document.getElementById('chessModal');
  const chessModalClose = document.getElementById('chessModalClose');
  const chessBoard = document.getElementById('chessBoard');
  const chessStatus = document.getElementById('chessStatus');
  const chessResetBtn = document.getElementById('chessResetBtn');

  if (!chessBoard || !chessModal) return;

  let selectedSquare = null;
  const initialBoard = [
    ['r','n','b','q','k','b','n','r'],
    ['p','p','p','p','p','p','p','p'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['P','P','P','P','P','P','P','P'],
    ['R','N','B','Q','K','B','N','R']
  ];

  const pieceUnicode = {
    'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
    'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟'
  };

  let currentBoardState = JSON.parse(JSON.stringify(initialBoard));

  function renderBoard() {
    chessBoard.innerHTML = '';
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const sq = document.createElement('div');
        const isLight = (r + c) % 2 === 0;
        sq.className = `chess-square ${isLight ? 'light' : 'dark'}`;
        sq.dataset.row = r;
        sq.dataset.col = c;
        const piece = currentBoardState[r][c];
        if (piece) {
          sq.textContent = pieceUnicode[piece] || piece;
        }

        sq.addEventListener('click', () => handleSquareClick(r, c));
        chessBoard.appendChild(sq);
      }
    }
  }

  function handleSquareClick(r, c) {
    if (selectedSquare === null) {
      if (currentBoardState[r][c] !== '') {
        selectedSquare = { r, c };
        highlightSquare(r, c);
      }
    } else {
      const from = selectedSquare;
      if (from.r === r && from.c === c) {
        selectedSquare = null;
        renderBoard();
        return;
      }

      currentBoardState[r][c] = currentBoardState[from.r][from.c];
      currentBoardState[from.r][from.c] = '';
      selectedSquare = null;
      renderBoard();
      chessStatus.textContent = "Bot thinking...";

      setTimeout(() => {
        makeBotMove();
      }, 500);
    }
  }

  function highlightSquare(r, c) {
    renderBoard();
    const sq = chessBoard.querySelector(`[data-row="${r}"][data-col="${c}"]`);
    if (sq) sq.classList.add('selected');
  }

  function makeBotMove() {
    let blackPieces = [];
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if ('pknbrq'.includes(currentBoardState[r][c])) {
          blackPieces.push({ r, c });
        }
      }
    }

    if (blackPieces.length > 0) {
      const p = blackPieces[Math.floor(Math.random() * blackPieces.length)];
      const targetRow = Math.min(7, p.r + 1);
      const targetCol = Math.max(0, p.c + (Math.random() > 0.5 ? 1 : -1));
      currentBoardState[targetRow][targetCol] = currentBoardState[p.r][p.c];
      currentBoardState[p.r][p.c] = '';
      renderBoard();
      chessStatus.textContent = "Bot moved. Your Turn (White).";
    }
  }

  function openChessModal() {
    chessModal.classList.add('open');
    chessModal.setAttribute('aria-hidden', 'false');
    currentBoardState = JSON.parse(JSON.stringify(initialBoard));
    renderBoard();
  }

  if (playChessBtn) playChessBtn.addEventListener('click', openChessModal);
  if (bentoPlayBtn) bentoPlayBtn.addEventListener('click', openChessModal);

  if (chessModalClose) {
    chessModalClose.addEventListener('click', () => {
      chessModal.classList.remove('open');
      chessModal.setAttribute('aria-hidden', 'true');
    });
  }

  if (chessResetBtn) {
    chessResetBtn.addEventListener('click', () => {
      currentBoardState = JSON.parse(JSON.stringify(initialBoard));
      renderBoard();
      chessStatus.textContent = "New game started! Your Turn (White).";
    });
  }
}
