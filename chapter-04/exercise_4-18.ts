const addClickEventListner = (listener: () => void) => {
    document.addEventListener("click", listener);
};

addClickEventListner(() => {
    console.log("Clicked!");
});