// Load registration count

function loadAdminStats() {

    const registrations =
        JSON.parse(
            localStorage.getItem(
                "registrations"
            )
        ) || [];


    const element =
        document.getElementById(
            "adminRegistrations"
        );


    if (element) {

        element.textContent =
            registrations.length;

    }

}


loadAdminStats();


// Add event

function addEvent() {

    const name =
        prompt(
            "Enter new event name:"
        );


    if (!name) {

        return;

    }


    alert(
        `"${name}" has been added to the demo system.`
    );

}


// Edit event

function editEvent(eventName) {

    const newName =
        prompt(
            "Edit event name:",
            eventName
        );


    if (!newName) {

        return;

    }


    alert(
        `Event updated to "${newName}".`
    );

}
