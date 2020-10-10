import firebase from "../../firebase/firebase";
const admin = require("firebase-admin");

export default async (req, res) => {
  const urlParams = new URLSearchParams("?" + req.url.split("?")[1]);
  const authToken = urlParams.get("auth");
  let statusCode = 500;
  let responseBody = { error: "Encountered an unknown error" };

  if (authToken === process.env.API_AUTH_TOKEN) {
    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "post",
        body: JSON.stringify({ query }),
        headers: {
          "User-Agent": "Clariity",
          Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
      });
      const responseJSON = await response.json();

      if (responseJSON.message) {
        throw new Error(JSON.stringify(responseJSON));
      }

      const data = await responseJSON.data.viewer;

      firebase
        .collection("stats")
        .doc("github")
        .set({
          data: data,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          statusCode = 200;
          responseBody = { body: "Success" };
        })
        .catch(function (error) {
          statusCode = 500;
          responseBody = { body: error };
        });
    } catch (err) {
      console.log(err);
      responseBody = { error: err };
    }
  } else {
    statusCode = 403;
    responseBody = { error: "Forbidden" };
  }

  res.statusCode = statusCode;
  res.json(responseBody);
};

const query = `
  query {
    viewer {
      login
      name
      contributionsCollection {
        totalCommitContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        totalRepositoriesWithContributedCommits
        totalRepositoriesWithContributedPullRequests
        totalRepositoryContributions
        pullRequestContributionsByRepository(maxRepositories: 100) {
          repository {
            name
            owner {
              login
            }
            url
          }
          contributions {
            totalCount
          }
        }
        commitContributionsByRepository {
          contributions {
            totalCount
          }
          repository {
            owner {
              login
            }
            name
            url
          }
        }
      }
    }
  }
`;
