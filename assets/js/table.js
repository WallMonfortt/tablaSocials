let table = document.querySelector("#users-table tbody")

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'Youtube', url: 'youtube/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

function createTable(usersList) {
    for (let index = 0; index < usersList.length; index++) {
        let userEmail = usersList[index].email;
        let userSocial = usersList[index].social;
        if (userEmail.endsWith("@academlo.com")) {

            let socialMs = [];

            for (let i = 0; i < userSocial.length; i++) {
                socialMs.push(usersList[index].social[i].url);
        }
         
            table.innerHTML += `<tr>
                                    <td>${usersList[index].name}</td>
                                    <td>${usersList[index].email}</td>
                                    <td>${usersList[index].age}</td>
                                    <td>${usersList[index].gender}</td>
                                    <td>${socialMs}</td>
                                </tr>`                      
        }        
    }
}

createTable(users)