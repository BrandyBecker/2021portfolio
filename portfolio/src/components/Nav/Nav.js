import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
        <div class="nav-header">
            <a class="contact" href="#" target="_blank">contact</a>
            <h3>brandy becker : software engineer</h3>
            <div class="nav-socials">
                <a class="fb" href="#" target="_blank">facebook</a>
                <a class="gh" href="#" target="_blank">github</a>
                <a class="li" href="#" target="_blank">linked in</a>
            </div>
        </div>
        <div class="nav-footer">
            <a class="projects" href="#" target="_blank">projects</a>
            <a class="blog" href="#" target="_blank">blog</a>
            <a class="about" href="#" target="_blank">about</a>
        </div>
    </div>
  );
}

export default Nav;
