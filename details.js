function registerFromDetails() {

    const user =
        localStorage.getItem(
            "currentUser"
        );


    if (!user) {

        alert(
            "Please login before registering."
        );

        window.location.href =
            "login.html";

        return;
    }


    window.location.href =
        "events.html";

}
