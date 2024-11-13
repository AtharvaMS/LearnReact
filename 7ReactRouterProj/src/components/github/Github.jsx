import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const githubData = useLoaderData();

  return (
    <>
      <div className="text-center bg-gray-700 text-white">
        <h1 className="text-3xl">Github username: {githubData.login}</h1>
        <p className="text-xl">
          Number of repositories: {githubData.public_repos}
        </p>
        <img src={githubData.avatar_url} alt="github_img" />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const rawInfo = await fetch("https://api.github.com/users/AtharvaMS");
  const jsonGithubInfo = await rawInfo.json();
  console.log(jsonGithubInfo)
  return jsonGithubInfo;
};
