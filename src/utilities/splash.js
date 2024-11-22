const splashContainerElement = document.querySelector('#splash-screen');
const onBoardingElementContainer = document.querySelector('#onboarding-section');

if (splashContainerElement) {
    onBoardingElementContainer.style.display = 'none';

    setTimeout(() => {
        splashContainerElement.style.display = 'none';
        onBoardingElementContainer.style.display = 'flex';
    }, 3000);
}