// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 20000)

// console.log(3);
const context = {
    users: null,
}

window.onload = async () => {
await getUsers();
renderUsers();
viewUser();
}

const getUsers = async () => {
    const res = await fetch('https://reqres.in/api/users');
    const users = await res.json();
    context.users = users.data;

}

const renderUsers = () => {
    let userDiv = document.getElementById('container');
    context.users.forEach((user, index) => {
    let userElment =
     `
     <div id="users-${index}">
     <img src=${user,avatar}>
     <b>Full name: </b>${user.last_name}${user.first_name}
     <b>Email: </b>${user.email}
     </div>
    `
     userDiv.innerHTML += userElement;
    })
}

const viewUser = () => {
    for(let index=0; index < context.users.length ; index++){
        let users = document.getElementById('user-${index}');
        let userDetail = document.getElementById('user-detail')
        user.addEventListener('click', (event)=> {
            console.log(event);
            userDetail.innerHTML = '';
            userDetail.innerHTML += user.innerHTML;
        })
    }
}












