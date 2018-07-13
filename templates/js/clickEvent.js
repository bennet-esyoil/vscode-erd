function addClickEvent(element, onclick, ondblclick) {
    let flag = false;
    let e;
    element.addEventListener("mousedown", e => {
        flag = true;
        mevent = e;
    });
    element.addEventListener("mousemove", e => {
        if (flag & e.buttons) flag = false;
    });
    document.body.addEventListener("mouseup", e => {
        if (ondblclick)
            setTimeout(tryClick, 200);
        else
            tryClick();

        function tryClick() {
            if (!flag) return;
            // console.log("click event:", mevent);
            flag = false;
            onclick(mevent);
        }
    });
    if (ondblclick) {
        element.addEventListener("dblclick", e => {
            // console.log("dblclick event:", e);
            flag = false;
            ondblclick(e);
        });
    }
}