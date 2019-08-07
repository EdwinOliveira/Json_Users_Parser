/*Module Pattern*/

/*JsonFile Module*/
const JsonFile = (function() {

    let fecthJsonFile = () => {
        fetch("../json/userList.json")
            .then((res) => res.json())
            .then((data) => {
                let userOutput = '<h4 class="font-weight-bold px-3 py-3">File Json</h4>';
                data.forEach((user) => {
                    const { name, phone, email, username } = user
                    userOutput += `
                <div class="row mx-auto">
                    <div class="col-12 col-md-6">
                        <span class="h5 text-muted py-2">Personal Information</span>
                            <p class="label"><span class="font-weight-bold">Name: </span>: ${name}</p>
                            <p class="label"><span class="font-weight-bold">Phone: </span> ${phone}</p>
                    </div>
                    <div class="col-12 col-md-6">
                        <span class="h5 text-muted pb-2">Account Information</span>
                        <p class="label"><span class="font-weight-bold">Email: </span>${email}</p>
                        <p class="label"><span class="font-weight-bold">Username: </span> ${username}</p>
                    </div>
                </div>
                `
                });

                document.querySelector('#usersInfo').innerHTML = userOutput;
            });
    };

    return { fecthJsonFile: fecthJsonFile };
}());

function getJsonApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            let userOutput = '<h4 class="font-weight-bold px-3 py-3">API Json</h4>';
            data.forEach((user) => {
                const { name, phone, email, username } = user
                userOutput += `
                <div class="row mx-auto">
                    <div class="col-12 col-md-6">
                        <span class="h5 text-muted py-2">Personal Information</span>
                            <p class="label"><span class="font-weight-bold">Name: </span>: ${name}</p>
                            <p class="label"><span class="font-weight-bold">Phone: </span> ${phone}</p>
                    </div>
                    <div class="col-12 col-md-6">
                        <span class="h5 text-muted pb-2">Account Information</span>
                        <p class="label"><span class="font-weight-bold">Email: </span>${email}</p>
                        <p class="label"><span class="font-weight-bold">Username: </span> ${username}</p>
                    </div>
                </div>
                `
            });

            document.querySelector('#usersInfo').innerHTML = userOutput;
        })
}

/* EvenHandlers */
document.getElementById('getJsonFile').addEventListener('click', JsonFile.fecthJsonFile);
document.getElementById('getJsonApi').addEventListener('click', getJsonApi);