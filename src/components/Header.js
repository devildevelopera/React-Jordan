import './header.scss';

const Header = () => {
    return (
        <div className="top-bar">
            <div className="close"><span >✕</span></div>
            <div className="top-nav">
                <h4>🔒 LOGINS</h4>
                <h4>📧 CONTACT</h4>
            </div>
        </div>
    )
}

export default Header;
