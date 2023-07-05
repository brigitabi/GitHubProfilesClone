const APIURL = 'https://api.github.com/users'; 

const main = document.getElementById("main");

async function getUser() { 
    const resp = await(APIURL + user);
    const respData = await resp.json();

    createUserCard(respData);

}

function createUserCard(user) { 
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" />
        </div>
        <div>
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul>
                <li>${user.followers}</li>
                <li>${user.following}</li>
                <li>${user.public_repos}</li>
            </ul>
        </div>
    `;
}