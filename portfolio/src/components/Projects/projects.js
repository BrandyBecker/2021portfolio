import './projects.css';

function Projects() {
  return (
    <div className="Projects">
        <div class="project">
            <h3 class="title">Connect Our Kids</h3>
            <div class="techstack section">
                <h4>TechStack:</h4>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>TypeScript</li>
                    <li>Apollo/GraphQL</li>
                    <li>Expo</li>
                    <li>Jest</li>
                </ul>
            </div>
            <div class="linktos">
                <a href="https://apps.apple.com/us/app/connect-our-kids/id1471038972?mt=8" target="_blank">
                    <i class="fab fa-apple"></i>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.connectOurKids&hl=en_US" target="_blank">
                    <i class="fab fa-google-play"></i>
                </a>
                <a href="https://trello.com/b/CAIeAMhU/labs23-connect-our-kids" target="_blank">
                    <i class="fab fa-trello"></i>
                </a>
            </div>
            <div class="description section">
                <h4>Description:</h4>
                <div class="desc">I was assigned to this project during my time in Lambda School's Web Development curriculum - it was a two month long group-project in which our team had a chance to put our training to use in a real-world setting. The app was pretty far in development at this point but had not yet been deployed to the App Store or Google Play. Our job was to make the mobile app achieve feature parity with the completed web app on the company's website.
                Part of what made this project such a great challenge for us was being exposed to a completely new tech stack. No one on our team had any experience whatsoever in any of the frameworks being used aside from Jest, so we had to spend about a week familiarizing ourselves with them through online tutorials and the documentation. It certainly helped that a lot our training in React made React Native feel like an additional layer rather than something completely new - but working in the mobile sphere certainly presented it's own unique obstacles. While I'm glad for having some time to prepare for the project, most of the learning came on the fly during the project itself.
                </div>
            </div>
            <div class="featuresbuilt section">
                <h4>Features Built:</h4>
                <ol>
                    <li>Screen Improvements to "My Account"</li>
                        <ul>
                            <li>Displaying a users avatar correctly with Auth0</li>
                            <li>Reformatting text & layout of screen to match look & feel of rest of app</li>
                            <li>Adding a "Help Documents" section</li>
                        </ul>
                    <li>Creates "New Case" button </li>
                        <ul>
                            <li>adds a button to route users to a new screen to add New Cases </li>
                        </ul>
                    <li>Person Details Improvements </li>
                        <ul>
                            <li>styling changes to icons </li>
                            <li>terinary to not show social medias if sections are empty </li>
                            <li>shows check mark next to verified details </li>
                        </ul>
                </ol>
            </div>
        </div>

        <div class="project">
            <h3 class="title">John Conway's Game of Life</h3>
            <div class="techstack section">
                <h4>TechStack:</h4>
                <ul>
                    <li>- React</li>
                    <li>- Redux</li>
                    <li>- Python</li>
                    <li>- JavaScript</li>
                    <li>- CSS</li>
                </ul>
            </div>
            <div class="linktos">
                <a href="https://github.com/BrandyBecker/Game-of-Life" target="_blank">
                    <i class="fab fa-github-square"></i>
                </a>
                <a href="https://bb-game-of-life.vercel.app/" target="_blank">
                    <i class="fas fa-external-link-square-alt"></i>
                </a>
            </div>
            <div class="description section">
                <h4>Description:</h4>
                <div class="desc">

                </div>
            </div>
            <div class="featuresbuilt section">
                <h4>Features Built:</h4>
                <ul>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                </ul>
            </div>
        </div>

        <div class="project">
            <h3 class="title">NASA ApOD</h3>
            <div class="techstack section">
                <h4>TechStack:</h4>
                <ul>
                    <li>- React</li>
                    <li>- Redux</li>
                    <li>- CSS</li>
                    <li>- JavaScript</li>
                </ul>
            </div>
            <div class="linktos">
                <a href="https://github.com/BrandyBecker/NASA-aPOD" target="_blank">
                    <i class="fab fa-github-square"></i>
                </a>
                <a href="https://bb-nasa-apod-7kbvdzzdq.vercel.app/" target="_blank">
                    <i class="fas fa-external-link-square-alt"></i>
                </a>
            </div>
            <div class="description section">
                <h4>Description:</h4>
                <div class="desc">
                    
                </div>
            </div>
            <div class="featuresbuilt section">
                <h4>Features Built:</h4>
                <ul>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                </ul>
            </div>
        </div> 

    </div>
  );
}

export default Projects;
