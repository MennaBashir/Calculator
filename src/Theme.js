import "./App.css";
const r = document.querySelector(':root');
function THEMES1() {
    return (
        r.style.setProperty('--main-background', 'hsl(222, 26%, 31%)'),
        r.style.setProperty('--toggle-background', 'hsl(223, 31%, 20%)'),
        r.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)'),
        r.style.setProperty('--key-background', 'hsl(225, 21%, 49%)'),
        r.style.setProperty('--Light-orange', ' hsl(30, 25%, 89%)'),
        r.style.setProperty('--Grayish-orange', 'hsl(28, 16%, 65%)'),
        r.style.setProperty('--Very-dark', 'hsl(221, 14%, 31%)'),
        r.style.setProperty('--key-shadow2', 'hsl(224, 28%, 35%)'),
        r.style.setProperty('--Hover', 'hsl(222deg 43% 74%)'),
        r.style.setProperty('--White', 'hsl(0, 0%, 100%)'),
        r.style.setProperty('--key-shadow', 'hsl(6, 70%, 34%)'),
        r.style.setProperty('--Right', '-10px'),
        r.style.setProperty('--key-toggle', 'hsl(6, 63%, 50%)'),
        r.style.setProperty('--Hover2', 'tomato'),
        r.style.setProperty('--Hover3', 'white')
    )

}
function THEMES2() {
    return (
        r.style.setProperty('--main-background', 'hsl(0, 0%, 90%)'),
        r.style.setProperty('--toggle-background', 'hsl(0, 5%, 81%)'),
        r.style.setProperty('--screen-background', 'hsl(0, 0%, 93%)'),
        r.style.setProperty('--key-background', 'hsl(185, 42%, 37%)'),
        r.style.setProperty('--Light-orange', 'hsl(45, 7%, 89%)'),
        r.style.setProperty('--Grayish-orange', 'hsl(35, 11%, 61%)'),
        r.style.setProperty('--Very-dark', 'hsl(60, 10%, 19%)'),
        r.style.setProperty('--key-shadow', 'hsl(25, 99%, 27%)'),
        r.style.setProperty('--key-shadow2', 'hsl(185, 58%, 25%)'),
        r.style.setProperty('--Hover', ' hsl(185deg 34% 45% / 82%)'),
        r.style.setProperty('--White', 'hsl(60, 10%, 19%)'),
        r.style.setProperty('--Right', '-25px'),
        r.style.setProperty('--key-toggle', 'hsl(25, 98%, 40%)'),
        r.style.setProperty('--Hover2', 'hsl(25deg 74% 50%)'),
        r.style.setProperty('--Hover3', 'white')

    )

}
function THEMES3() {
    return (
        r.style.setProperty('--main-background', 'hsl(268, 75%, 9%)'),
        r.style.setProperty('--toggle-background', 'hsl(268, 47%, 21%)'),
        r.style.setProperty('--screen-background', 'hsl(268, 71%, 12%)'),
        r.style.setProperty('--key-background', 'hsl(281, 89%, 26%)'),
        r.style.setProperty('--key-toggle', 'hsl(176, 100%, 44%)'),
        r.style.setProperty('--Light-orange', 'hsl(268, 47%, 21%)'),
        r.style.setProperty('--Grayish-orange', 'hsl(290deg 70% 36% / 27%)'),
        r.style.setProperty('--Very-dark', 'hsl(52, 100%, 62%)'),
        r.style.setProperty('--key-shadow', ' hsl(177, 92%, 70%)'),
        r.style.setProperty('--key-shadow2', ' hsl(290deg 46% 23% / 68%)'),
        r.style.setProperty('--Hover', ' hsl(274deg 50% 46% / 88%)'),
        r.style.setProperty('--White', 'hsl(52, 100%, 62%)'),
        r.style.setProperty('--Right', '-25px'),
        r.style.setProperty('--Hover2', 'hsl(176deg 81% 83%)'),
        r.style.setProperty('--Hover3', 'hsl(268deg 62% 38% / 87%)'),
        r.style.setProperty('--Right', '-44px')
    )

}
export { THEMES1, THEMES2, THEMES3 };
