import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
        <div class="nav-header">
            <a class="contact" href="mailto:Brandy<brandybeckerfsw@gmail.com">
                <i class="far fa-envelope"></i>
            </a>
            
            <h3>brandy becker : software engineer</h3>

            <div class="nav-socials">
                <a class="fb" href="https://www.facebook.com/16brbecker/" target="_blank">
                    <i class="fab fa-facebook-square"></i>
                </a>
                <a class="gh" href="https://github.com/brandybecker/" target="_blank">
                    <i class="fab fa-github-square"></i>
                </a>
                <a class="li" href="https://www.linkedin.com/in/brandybeckerfsw/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
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
