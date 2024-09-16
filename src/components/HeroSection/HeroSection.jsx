import { HERO_SECTION_BUTTONS, HERO_SECTION_DATA } from "../../assets/data.js";
import PageContainer from "../PageContainer/PageContainer";
import ThemedButton from "../ThemedButton/ThemedButton.jsx";
import NavBar from './../NavBar/NavBar.jsx'
import './HeroSection.css'

export default function HeroSection () {
    const rightContainerContent = <></>;

    const leftButtonContainer = (
        <ThemedButton isInvertButtonType={false}>
            {HERO_SECTION_BUTTONS.PURCHASE_UI_KIT}
        </ThemedButton>
    );

    const rightButtonContainer = (
        <ThemedButton isInvertButtonType={true}>
            {HERO_SECTION_BUTTONS.LEARN_MORE}
        </ThemedButton>
    );

    const leftContainerContent = (
        <>
            <h1>{HERO_SECTION_DATA.heading}</h1>
            <p>{HERO_SECTION_DATA.body[0]}</p>
            <p>{HERO_SECTION_DATA.body[1]}</p>
            <div id="hero-button-container">
                <PageContainer leftContainer={leftButtonContainer} rightContainer={rightButtonContainer} />
            </div>
        </>
    )
    return (
        <section className="hero-section">
            <NavBar />
            <div className="hero-section-container">
                <PageContainer leftContainer={leftContainerContent} rightContainer={rightContainerContent} />
            </div>
        </section>
    );
}