export const scrollToAnchor = (anchor, offset) => { 
    const $anchor = document.getElementById(anchor);
    if ($anchor) {
        const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
        window.scroll({ top: offsetTop - offset, behavior: "smooth" });
    }
};