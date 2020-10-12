import React from "react";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import firebase from "../../firebase/firebaseConfig";
import Loading from "../other/Loading";

//mention inspiration from opensourceand.me
function GitHub() {
  const [value, loading, error] = useDocumentOnce(firebase.firestore().doc("stats/github"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  // if (!loading) {
  //   if (error) {
  //     return (
  //       <div className="row">
  //         <div className="col-xs-12">
  //           <p>
  //             It seems the data on GitHub statistics was not able to be retrieved. This is either a
  //             Firebase issue or the request was blocked by your network.
  //           </p>
  //         </div>
  //       </div>
  //     );
  //   }
  //   const data = value.data().data;
  //   const commits = data.contributionsCollection.commitContributionsByRepository;
  //   const pullRequests = data.contributionsCollection.pullRequestContributionsByRepository;

  //   let osCommitStats = commits.reduce(
  //     (accumalator, current) => {
  //       if (current.repository.owner.login !== data.login) {
  //         accumalator.osCommits += current.contributions.totalCount;
  //         accumalator.osRepos.push(current);
  //       }
  //       accumalator.totalCommits += current.contributions.totalCount;
  //       return accumalator;
  //     },
  //     { osCommits: 0, totalCommits: 0, osRepos: [] }
  //   );
  //   let osPRStats = pullRequests.reduce(
  //     (accumalator, current) => {
  //       if (current.repository.owner.login !== data.login) {
  //         accumalator.osPrs += current.contributions.totalCount;
  //         accumalator.osRepos.push(current);
  //       }
  //       accumalator.totalPRs += current.contributions.totalCount;
  //       return accumalator;
  //     },
  //     { osPrs: 0, totalPRs: 0, osRepos: [] }
  //   );

  //   return (
  //     <div className="row">
  //       <div className="col-xs-12">
  //         <p>
  //           This section was inspired by{" "}
  //           <a href="https://opensourceand.me/" target="_blank" rel="noopener noreferrer">
  //             OpenSourceAnd.Me
  //           </a>
  //           . Check it out to find out your own GitHub open source statistics.
  //         </p>
  //         <h3>Open Source</h3>
  //         <p>
  //           In my free time I have made{" "}
  //           <span className="statsNumber">{osCommitStats.osCommits}</span> commits within{" "}
  //           <span className="statsNumber">{osPRStats.osPrs}</span> pull requests to{" "}
  //           <span className="statsNumber">{osCommitStats.osRepos.length}</span> open source
  //           projects.
  //         </p>
  //         <h3>Total Statistics</h3>
  //         <p>
  //           I have made a total of{" "}
  //           <span className="statsNumber">
  //             {data.contributionsCollection.totalCommitContributions}
  //           </span>{" "}
  //           commits to{" "}
  //           <span className="statsNumber">
  //             {data.contributionsCollection.totalRepositoryContributions}
  //           </span>{" "}
  //           public projects.
  //         </p>
  //         <p>
  //           I have made{" "}
  //           <span className="statsNumber">
  //             {data.contributionsCollection.totalPullRequestContributions}
  //           </span>{" "}
  //           pull requests to{" "}
  //           <span className="statsNumber">
  //             {data.contributionsCollection.totalRepositoriesWithContributedPullRequests}
  //           </span>{" "}
  //           repositories and I have made{" "}
  //           <span className="statsNumber">
  //             {data.contributionsCollection.totalPullRequestReviewContributions}
  //           </span>{" "}
  //           pull request reviews.
  //         </p>
  //       </div>
  //       <div className="col-xs-12">
  //         <img
  //           className=" pad-5 width-75"
  //           src="images/unDraw/sourceCode.svg"
  //           alt="University of Southampton"
  //         />
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="row">
      <div className="col-xs-12 flex-center">
        <Loading />
      </div>
    </div>
  );
}

export default GitHub;
