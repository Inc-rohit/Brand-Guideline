export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { password } = req.body;

  if (password === 'incisiv26') {
    res.setHeader('Set-Cookie', `auth=incisiv26; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`);
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ error: 'Invalid password' });
}
