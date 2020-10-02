// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const urlParams = new URLSearchParams("?" + req.url.split("?")[1]);
  const authToken = urlParams.get("auth");
  let statusCode = 200;
  let responseBody = { error: "Forbidden" };

  console.log(authToken, process.env.API_AUTH_TOKEN);

  if (authToken === process.env.API_AUTH_TOKEN) {
    statusCode = 200;
    responseBody = { body: "Nice" };
  } else {
    statusCode = 403;
  }

  res.statusCode = statusCode;
  res.json(responseBody);

  //get auth
  //if authed and time is within time the request should be received (tad extra security to stop being spammed at other times of the day)
  //// fetch github stats
  //// upload to firebase
};
