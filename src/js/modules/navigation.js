const navigation = () => {
    let btnShow = document.getElementById('btnShow');
    let navigationMenu = document.getElementById('navigation-menu');
    let bodyHeight = document.getElementById('root').offsetHeight;
    let mobNavigationHeader = document.querySelector('.mob-navigation-header').offsetHeight;

    btnShow.onclick = () => {
        navigationMenu.style.height = bodyHeight - mobNavigationHeader + 'px';
        navigationMenu.classList.toggle('mob-navigation-menu--show')
    }
};

export default navigation
