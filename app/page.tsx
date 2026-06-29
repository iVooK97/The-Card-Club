import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="brand">
          <div className="logo">TCC</div>
          <div>
            <h1>THE CARD CLUB</h1>
            <p>Play. Compete. Win. Repeat.</p>
          </div>
        </div>
        <nav className="nav">
          <Link href="#games">Games</Link>
          <Link href="#rankings">Rankings</Link>
          <Link href="#tournaments">Tournaments</Link>
          <Link href="#membership">Membership</Link>
          <Link href="/app"><button>Launch Demo</button></Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">Competitive skill card games</p>
            <h2 className="big">Welcome to<br/>The Club.</h2>
            <p className="sub">
              The Card Club is the competitive home for Shnarps and Cribbage.
              Build your profile, climb world and regional rankings, enter tournaments,
              and earn rewards that cannot be bought.
            </p>
            <div className="actions">
              <Link href="/app"><button>Launch Demo</button></Link>
              <a href="#tournaments"><button className="secondary">View Tournaments</button></a>
            </div>
          </div>

          <div className="player-card">
            <div className="topline"><span>PLAYER CARD</span><span className="badge">Founder</span></div>
            <h3>JonnyEvans</h3>
            <p className="muted">🇨🇦 Canada · Member #000001</p>
            <div className="rankgrid">
              <div><strong>#41</strong><span>World</span></div>
              <div><strong>#3</strong><span>Canada</span></div>
              <div><strong>#1</strong><span>BC</span></div>
              <div><strong>2487</strong><span>Rating</span></div>
            </div>
          </div>
        </section>

        <section id="games" className="section">
          <div className="section-title">
            <p className="eyebrow">Launch games</p>
            <h2>Choose Your Table</h2>
          </div>
          <div className="grid2">
            <div className="game-card">
              <h2>🃏 Shnarps</h2>
              <p className="muted">Solo competitive tables, private lobbies, official rules, and seasonal tournaments.</p>
            </div>
            <div className="game-card">
              <h2>♣ Cribbage</h2>
              <p className="muted">Classic 1v1 ranked play with tournaments and future prize matches where allowed.</p>
            </div>
          </div>
        </section>

        <section id="rankings" className="section">
          <div className="section-title">
            <p className="eyebrow">Leaderboards</p>
            <h2>World, Country, Province, City.</h2>
          </div>
          <div className="panel">
            <table className="table">
              <thead><tr><th>Rank</th><th>Member</th><th>Region</th><th>Rating</th></tr></thead>
              <tbody>
                <tr><td>#1</td><td>CardKing</td><td>USA</td><td>2582</td></tr>
                <tr><td>#2</td><td>TrickMaster</td><td>Canada</td><td>2521</td></tr>
                <tr><td>#3</td><td>JonnyEvans</td><td>BC</td><td>2487</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="tournaments" className="section">
          <div className="section-title">
            <p className="eyebrow">Competition</p>
            <h2>Upcoming Tournaments</h2>
          </div>
          <div className="grid3">
            <div className="tournament"><span className="badge">Tonight</span><h3>Friday Night Championship</h3><p className="muted">64 players · $20 entry · $1,280 pool</p></div>
            <div className="tournament"><span className="badge">Members</span><h3>Sunday Club Cup</h3><p className="muted">Member-only event with exclusive badges.</p></div>
            <div className="tournament"><span className="badge">Season</span><h3>Season One Finals</h3><p className="muted">Champion earns custom deck, title, and intro.</p></div>
          </div>
        </section>

        <section id="membership" className="section">
          <div className="section-title">
            <p className="eyebrow">Club Membership</p>
            <h2>$2.99/month</h2>
            <p className="muted">Early tournament registration, advanced stats, cosmetics, member events, and Club Bonus eligibility.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <strong>THE CARD CLUB</strong>
        <span>Play. Compete. Win. Repeat.</span>
      </footer>
    </>
  );
}
