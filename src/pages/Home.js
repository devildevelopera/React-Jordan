import './Home.scss';
const Home = () => {
    return (
        <div className="container">
            <div className="top-bar">
                <div className="close"><span >✕</span></div>
                <div className="top-nav">
                    <h4>🔒 LOGINS</h4>
                    <h4>📧 CONTACT</h4>
                </div>
            </div>
            <div className="main">
                <div className="side-nav">
                    <h2>HOME</h2>
                    <p>Features</p>
                    <p>Mission & Values</p>
                    <p>Application</p>
                    <p>Why Us?</p>
                    <p>Implementations</p>
                    <p>FAQ</p>
                </div>
                <div className="card-area">
                    <div className="circle">JORDAN</div>
                    <h2>FEATURES EVENTS</h2>
                    <div className="two-cards">
                        <div className="rectangle">
                            29 Apr WebRTC Upgrades
                        </div>
                        <div className="rectangle">
                            29 Apr WebRTC Upgrades
                        </div>
                    </div>
                    <div className="btn-area">
                        <span>FULL EVENTS</span>
                        <span className="arrow">◀</span>
                        <span className="arrow">▶</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
