// https://api.github.com/users

async function github() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  //   console.log(data);
  const parent = document.getElementById("parent");

  for (let user of data) {
    // creating element
    const div = document.createElement("div");
    div.classList.add("user-card");
    const image = document.createElement("img");
    image.setAttribute("src", user?.avatar_url);
    const name = document.createElement("h3");
    name.textContent = user?.login;
    const anchor = document.createElement("a");
    anchor.href = user?.html_url;
    anchor.target = "_blank";
    anchor.textContent = "Visit profile";

    // inserting element
    div.append(image, name, anchor);
    parent.append(div);
  }
}

github();
