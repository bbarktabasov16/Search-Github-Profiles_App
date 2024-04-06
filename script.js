const input = document.querySelector("input");
const btn = document.querySelector(".searchBtn");

const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName");
const joined = document.querySelector(".githubJoinedDate");
const repo = document.querySelector(".repoTotal");
const follower = document.querySelector(".followerTotal");
const followings = document.querySelector(".followingTotal");
const locations = document.querySelector(".locations");
const twitter = document.querySelector(".twit");
const websites = document.querySelector(".websites");
const companies = document.querySelector(".companies");
const githubBio = document.querySelector("input");
let img = document.createElement("img");
let block = document.querySelector(".mainImg");

btn.addEventListener("click", function () {

    document.body.querySelector(".resultBody").style.display = "block"

  const url = `https://api.github.com/users/${input.value}`;
  async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();
    const dateData = data.created_at.slice(0, data.created_at.length - 10);

    img.src = data.avatar_url;
    block.appendChild(img);
    block.style.border = "none";

    user.innerHTML = data.name;
    login.innerHTML = `@${data.login}`;
    joined.innerHTML = `Joined ${dateData}`;
    repo.innerHTML = data.public_repos;
    follower.innerHTML = data.followers;
    followings.innerHTML = data.following;

    locations.innerHTML =
      data.location === "" || data.location === null
        ? "No location"
        : data.location;
    twitter.innerHTML =
      data.twitter_username === "" || data.twitter_username === null
        ? "No Twitter"
        : data.twitter_username;
    websites.innerHTML =
      data.blog === "" || data.blog === null ? "No Website" : data.blog;
    companies.innerHTML =
      data.company === "" || data.company === null
        ? "No Company"
        : data.company;

    githubBio.innerHTML =
      data.bio === "" || data.bio === null
        ? "This profile has no bio"
        : data.bio;
  }
  getUrl();
  input.value = "";

});

const toggleBody = () => {
  document.body.classList.toggle("dark-body");

  if (document.querySelector("body").getAttribute("class")) {
    document.querySelector(".light--hidden").style.display = "block";
    document.querySelector(".dark--hidden").style.display = "none";
  } else {
    document.querySelector(".dark--hidden").style.display = "block";
    document.querySelector(".light--hidden").style.display = "none";
  }
};