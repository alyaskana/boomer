const page = () => {
    let itemLink = document.querySelectorAll('.navigation-menu-list__item-link');
    let clearClass = () => {
        let content = document.getElementById('content').children;

        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove('show-page')
        }

    };

    for (let i = 0; i < itemLink.length; i++) {
        itemLink[i].onclick = (e) => {
            e.preventDefault();
            let pageName = itemLink[i].getAttribute('href').slice(1);
            let spacePage = document.getElementById(pageName);

            clearClass();
            spacePage.classList.add('show-page');

        };
    }
};

export default page

