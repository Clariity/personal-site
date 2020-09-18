import React from "react";

function Bio() {
  function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <div className="col-xs-12 text-align-left code">
      {"{"} <br />
      <div className="pad-4-l">
        <b>"name"</b>: "Ryan Gregory", <br />
        <b>"age"</b>: {calculateAge(new Date(1997, 11, 2))}, <br />
        <b>"location"</b>: "London, UK", <br />
        <b>"currentEmployment"</b>: "Graduate Engineer - American Express", <br />
        <b>"specialties"</b>: ["UX", "React", "Security"], <br />
        <b>"education"</b>: "MEng Computer Science - 1st Class with Honours - University of
        Southampton", <br />
        <b>"favoriteTVShow"</b>: "Parks and Recreation", <br />
        <b>"favouriteQuote"</b>: "“I wish it need not have happened in my time," said Frodo. "So do
        I," said Gandalf, "and so do all who live to see such times. But that is not for them to
        decide. All we have to decide is what to do with the time that is given us.” - J.R.R.
        Tolkien, The Fellowship of the Ring"
      </div>
      {"}"}
    </div>
  );
}

export default Bio;
