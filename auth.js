// ================================
// SIGN UP
// ================================

const signupForm =
    document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const user = {

                name:
                    document.getElementById(
                        "signupName"
                    ).value,

                email:
                    document.getElementById(
                        "signupEmail"
                    ).value,

                collegeId:
                    document.getElementById(
                        "signupId"
                    ).value,

                department:
                    document.getElementById(
                        "signupDepartment"
                    ).value,

                password:
                    document.getElementById(
                        "signupPassword"
                    ).value

            };


            let users =
                JSON.parse(
                    localStorage.getItem(
                        "users"
                    )
                ) || [];


            const exists =
                users.some(
                    item =>
                        item.email === user.email
                );


            if (exists) {

                showAuthMessage(
                    "signupMessage",
                    "Account already exists.",
                    "error"
                );

                return;
            }


            users.push(user);


            localStorage.setItem(
                "users",
                JSON.stringify(users)
            );


            showAuthMessage(
                "signupMessage",
                "Account created successfully! Redirecting...",
                "success"
            );


            setTimeout(
                () => {

                    window.location.href =
                        "login.html";

                },
                1500
            );

        }
    );

}


// ================================
// LOGIN
// ================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value;

            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const users =
                JSON.parse(
                    localStorage.getItem(
                        "users"
                    )
                ) || [];


            const user =
                users.find(
                    item =>
                        item.email === email &&
                        item.password === password
                );


            if (!user) {

                showAuthMessage(
                    "loginMessage",
                    "Invalid email or password.",
                    "error"
                );

                return;
            }


            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );


            showAuthMessage(
                "loginMessage",
                "Login successful! Redirecting...",
                "success"
            );


            setTimeout(
                () => {

                    window.location.href =
                        "dashboard.html";

                },
                1000
            );

        }
    );

}


// ================================
// MESSAGE
// ================================

function showAuthMessage(
    elementId,
    message,
    type
) {

    const element =
        document.getElementById(
            elementId
        );


    if (!element) return;


    element.textContent = message;

    element.style.marginTop = "15px";

    element.style.fontWeight = "bold";


    if (type === "success") {

        element.style.color = "green";

    } else {

        element.style.color = "red";

    }

}
