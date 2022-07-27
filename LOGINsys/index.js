function userLogin (userName, UserEmail, UserPassword) {

    var user = {    // create a user object
        userName: userName,
        userEmail: UserEmail,
        userPassword: UserPassword
    }

    var fetchvar = fetch("https://MrT-tak.github.io/LOGINsys/checkLogin/", {
        method: "GET",
        x-www-form-urlencoded: `${user}`
    })

    if(fetchvar.correct === true) {
        localStorage.setItem('user', JSON.stringify(user));
        console.log(`logined to user ${user.userName}`)
        console.table(user);
        return `logined to user ${user.userName}`;
    }
    return "exited with code 01"
}
