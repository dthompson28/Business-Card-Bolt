import React from 'react';

    function LandingPage() {
      return (
        <div>
          <h1>Welcome to the Digital Business Card Builder</h1>
          <div className="card-example">
            <div className="header">
              <img src="https://storage.googleapis.com/msgsndr/k2RYl5ovpeYkLh1QBDHE/media/676da3d7a28a50e2e0d848cb.png" alt="Logo" />
              <img className="profile-pic" src="https://storage.googleapis.com/msgsndr/k2RYl5ovpeYkLh1QBDHE/media/676b8a847a5c4cf761681d1a.png" alt="Profile" />
              <h2>Kali McCue</h2>
              <p>The Trendsetters Club</p>
              <p>HeyDay Collective</p>
            </div>
            <div className="card-content">
              <p>Welcome to The Trendsetters Club at HeyDay Collective! We're dedicated to creating beautiful, trendsetting styles that make you feel confident and amazing.</p>
              <div className="contact-info">
                <a href="https://kalimccue.com/the-trendsetters-club-heyday" target="_blank" rel="noopener noreferrer">🌐 Website</a>
                <a href="#">📘 Facebook</a>
                <a href="#">📸 Instagram</a>
                <a href="#">🔗 LinkedIn</a>
              </div>
            </div>
            <div className="buttons">
              <button>Share</button>
              <button>Save Contact</button>
            </div>
          </div>
          <div className="card-example">
            <div className="full-photo-header"></div>
            <div className="card-content">
              <h2>Kali McCue</h2>
              <p>The Trendsetters Club</p>
              <p>HeyDay Collective</p>
              <p>Welcome to The Trendsetters Club at HeyDay Collective! We're dedicated to creating beautiful, trendsetting styles that make you feel confident and amazing.</p>
              <div className="contact-info">
                <a href="https://kalimccue.com/the-trendsetters-club-heyday" target="_blank" rel="noopener noreferrer">🌐 Website</a>
                <a href="#">📘 Facebook</a>
                <a href="#">📸 Instagram</a>
                <a href="#">🔗 LinkedIn</a>
              </div>
            </div>
            <div className="buttons">
              <button>Share</button>
              <button>Save Contact</button>
            </div>
          </div>
        </div>
      );
    }

    export default LandingPage;
