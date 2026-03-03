import { NextResponse } from 'next/server';

const PASSWORD = 'incisiv26';
const COOKIE = 'auth';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const cookie = req.cookies.get(COOKIE)?.value;

  // Already authenticated
  if (cookie === PASSWORD) return NextResponse.next();

  // Handle login form submission
  if (req.method === 'POST') {
    return NextResponse.next();
  }

  // Serve login page for unauthenticated requests
  const loginHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Incisiv Brand Guideline — Access</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #000;
      color: #fff;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .box {
      width: 100%;
      max-width: 380px;
      padding: 48px 40px;
      border: 1px solid #222;
      border-radius: 12px;
      text-align: center;
    }
    .logo { font-size: 13px; font-weight: 700; letter-spacing: 0.15em; color: #FA9628; margin-bottom: 24px; text-transform: uppercase; }
    h1 { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
    p { font-size: 13px; color: #888; margin-bottom: 28px; }
    input {
      width: 100%;
      padding: 12px 16px;
      background: #111;
      border: 1px solid #333;
      border-radius: 6px;
      color: #fff;
      font-size: 14px;
      margin-bottom: 12px;
      outline: none;
    }
    input:focus { border-color: #FA9628; }
    button {
      width: 100%;
      padding: 12px;
      background: #FA9628;
      border: none;
      border-radius: 6px;
      color: #000;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }
    button:hover { background: #e8872a; }
    .error { font-size: 12px; color: #e55; margin-top: 10px; display: none; }
    .error.show { display: block; }
  </style>
</head>
<body>
  <div class="box">
    <div class="logo">Incisiv</div>
    <h1>Brand Guideline 2026</h1>
    <p>Enter the access password to continue.</p>
    <form id="form">
      <input type="password" id="pwd" placeholder="Password" autofocus />
      <button type="submit">Enter</button>
      <div class="error" id="err">Incorrect password. Please try again.</div>
    </form>
  </div>
  <script>
    document.getElementById('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const pwd = document.getElementById('pwd').value;
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pwd })
      });
      if (res.ok) {
        window.location.reload();
      } else {
        document.getElementById('err').classList.add('show');
      }
    });
  </script>
</body>
</html>`;

  return new NextResponse(loginHtml, {
    status: 401,
    headers: { 'Content-Type': 'text/html' },
  });
}

export const config = {
  matcher: ['/((?!api/auth|_next).*)'],
};
