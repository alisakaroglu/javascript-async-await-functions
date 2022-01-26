document.querySelector("#btn").addEventListener("click",fetchPosts);

async function fetchPosts(){
    let list = document.getElementById("list");
    const response = await fetch("https://api.github.com/users").then(res => res.json());
    let output = "<ul>";
    response.forEach(res => {
        output += `<li>${res.id}) ${res.login} - ${res.url}</li>`;
    });
    output += "</ul> <hr>";
    list.innerHTML = output;
}


