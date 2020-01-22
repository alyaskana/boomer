function preloader() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    })
}

preloader().then(() => {
    let preloaderEl = document.getElementById('preloader');
    let root = document.getElementById('root');

    preloaderEl.classList.add('preloader-show');
    preloaderEl.classList.remove('preloader-visible');
    root.classList.remove('preloader-scroll-hidden');

});

export default preloader;
