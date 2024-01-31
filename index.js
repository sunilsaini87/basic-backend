require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000;

const githubData ={
  "login": "episteme63",
  "id": 75264116,
  "node_id": "MDQ6VXNlcjc1MjY0MTE2",
  "avatar_url": "https://avatars.githubusercontent.com/u/75264116?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/episteme63",
  "html_url": "https://github.com/episteme63",
  "followers_url": "https://api.github.com/users/episteme63/followers",
  "following_url": "https://api.github.com/users/episteme63/following{/other_user}",
  "gists_url": "https://api.github.com/users/episteme63/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/episteme63/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/episteme63/subscriptions",
  "organizations_url": "https://api.github.com/users/episteme63/orgs",
  "repos_url": "https://api.github.com/users/episteme63/repos",
  "events_url": "https://api.github.com/users/episteme63/events{/privacy}",
  "received_events_url": "https://api.github.com/users/episteme63/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Sunil Saini",
  "company": null,
  "blog": "",
  "location": "New Delhi",
  "email": null,
  "hireable": null,
  "bio": "...........",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 1,
  "following": 4,
  "created_at": "2020-11-30T15:25:31Z",
  "updated_at": "2024-01-10T17:11:31Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/a", (req, res) => {
  res.send("Sunil");
});
app.get("/github", (req, res) => {
  res.json(githubData)
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});