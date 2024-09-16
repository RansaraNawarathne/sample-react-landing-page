import { HERO_SECTION_BUTTONS } from '../../assets/data';
import ThemedButton from '../ThemedButton/ThemedButton';
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <nav className="nav-bar">
                <div>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 id='landing-page-title'>Landing</h3>
                </div>
                <div>
                    <ThemedButton isInvertButtonType={false}>
                        {HERO_SECTION_BUTTONS.BUY_NOW}
                    </ThemedButton>
                </div>
            </nav>
        </>
    );
}