// Find all the topics and tasks which are thought in the month of October

db.topic.find({ month: "October" });

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.placement.find({
  $and: [
    {
      date: { $gt: "2020-10-15" },
    },
    {
      date: { $lt: "2020-10-31" },
    },
  ],
});

// Find all the company drives and students who are appeared for the placement.
db.placement.find(
  {},
  {
    company: 1,
    appearedstudents: 1,
  }
);
// Find the number of problems solved by the user in codekata
db.user.find({},{codekata:1})

// Find all the mentors with who has the mentee's count more than 15
db.mentor.find({menteesCount: {$gt:15}})