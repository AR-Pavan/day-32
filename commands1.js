/*inserting topics*/
db.topics.insertMany([
  {
    topicid: 1,
    topic: "HTML",
    topic_date: new Date("2020-10-15"),
    task: {
      task_date: new Date("2020-10-19"),
    },
  },
  {
    topicid: 2,
    topic: "CSS",
    topic_date: new Date("2020-10-24"),
    task: {
      task_date: new Date("2020-10-24"),
    },
  },
  {
    topicid: 3,
    topic: "JavaScript",
    topic_date: new Date("2020-10-31"),
    task: {
      task_date: new Date("2020-10-29"),
    },
  },
  {
    topicid: 4,
    topic: "ReactJS",
    topic_date: new Date("2020-11-05"),
    task: {
      task_date: new Date("2020-11-01"),
    },
  },

  {
    topicid: 5,
    topic: "MongoDB",
    topic_date: new Date("2020-11-10"),
    task: {
      task_date: new Date("2020-11-09"),
    },
  },
  {
    topicid: 6,
    topic: "NodeJS",
    topic_date: new Date("2020-11-15"),
    task: {
      task_date: new Date("2020-11-19"),
    },
  },
]);
/*-------------------------------------------------------------------------------------------*/

// insert task collection

db.tasks.insertMany([
  {
    task_id: 1,
    topicid: 1,
    name: "HTML Newspaper",
    date: new Date("2020-10-15"),
  },
  {
    task_id: 2,
    topicid: 1,
    name: "HTML Social Media Page",
    date: new Date("2020-10-18"),
  },
  {
    task_id: 3,
    topicid: 1,
    name: "HTML",
    date: new Date("2020-10-20"),
  },
  {
    task_id: 4,
    topicid: 2,
    name: "JavaScript",
    date: new Date("2020-10-27"),
  },
  {
    task_id: 5,
    topicid: 3,
    name: "React UI",
    date: new Date("2020-10-29"),
  },
]);
/*-----------------------------------------------------------------------------------*/
// insert collection company_drives

db.company_drives.insertMany([
  {
    company_id: 1,
    drive_date: new Date("2020-10-15"),
    company: "Meta",
  },

  {
    company_id: 2,
    drive_date: new Date("2020-10-20"),
    company: "Apple",
  },
  {
    company_id: 3,
    drive_date: new Date("2020-10-26"),
    company: "Amazon",
  },
  {
    company_id: 4,
    drive_date: new Date("2020-10-30"),
    company: "NetFlix",
  },
  {
    company_id: 5,
    drive_date: new Date("2020-11-15"),
    company: "Google",
  },
]);

/*--------------------------------------------------------------------------------------*/

// insert codekata collection

db.codekata.insertMany([
  {
    q_id: 1,
    category: "HTML",
    level: "Easy",
    problems_statement: "problem statement",
  },
  {
    q_id: 2,
    category: "HTML",
    level: "Hard",
    problems_statement: " problem statement",
  },
  {
    q_id: 3,
    category: "JavaScript",
    level: "Easy",
    problems_statement: " problem statement",
  },
  {
    q_id: 4,
    category: "JavaScript",
    level: "Hard",
    problems_statement: " problem statement",
  },
  {
    q_id: 5,
    category: "ReactJS",
    level: "Easy",
    problems_statement: " problem statement",
  },
  {
    q_id: 6,
    category: "ReactJS",
    level: "Hard",
    problems_statement: " problem statement",
  },
  {
    q_id: 7,
    category: "NodeJS",
    level: "Easy",
    problems_statement: " problem statement",
  },
  {
    q_id: 8,
    category: "NodeJS",
    level: "Hard",
    problems_statement: " problem statement",
  },
]);

/* -----------------------------------------------------------------------------------------*/

// inserting mentors collection

db.mentors.insertMany([
  {
    id: 1,
    mentor_name: "raghu",
    email: "raghu@gmail.com",
    mentee_count: 10,
  },
  {
    id: 2,
    mentor_name: "pavan",
    email: "pavan@gmail.com",
    mentee_list: 19,
  },
  {
    id: 3,
    mentor_name: "Sai",
    email: "Sai@gmail.com",
    mentee_list: 25,
  },
  {
    id: 4,
    mentor_name: "Raju",
    email: "raju@gmail.com",
    mentee_list: 30,
  },
]);

/* ------------------------------------------------------------------------------------------*/

//  inserting users collection
db.users.insertMany([
  {
    userid: 1,
    name: "raghu",
    email: "raghu@gmail.com",
    absent_on: [new Date("2020-10-17")],
    company_drives: [],
    codekata_problems: [1, 2, 5, 7, 8],
    submitted_task: [
      {
        task_id: 1,
        submitted_date: new Date("2020-10-17"),
      },
    ],
  },
  {
    userid: 2,
    name: "manohar",
    email: "manohar@gmail.com",
    absent_on: [new Date("2020-10-27")],
    company_drives: [1, 2],
    codekata_problems: [1, 2, 3, 4, 5, 8],
    submitted_task: [
      {
        task_id: 5,
        submitted_date: new Date("2020-10-15"),
      },
    ],
  },
  {
    userid: 3,
    name: "ramesh",
    email: "ramesh@gmail.com",
    absent_on: [],
    company_drives: [1],
    codekata_problems: [1, 8],
    submitted_task: [],
  },
  {
    userid: 4,
    name: "vaishu",
    email: "vaishu@gmail.com",
    absent_on: [new Date("2020-10-20")],
    company_drives: [2],
    codekata_problems: [1, 2, 5, 8],
    submitted_task: [
      {
        task_id: 2,
        submitted_date: new Date("2020-11-17"),
      },
    ],
  },
  {
    userid: 5,
    name: "ramya",
    email: "ramya@gmail.com",
    absent_on: [],
    company_drives: [1, 2],
    codekata_problems: [1, 2],
    submitted_task: [
      {
        task_id: 3,
        submitted_date: new Date("2020-11-17"),
      },
    ],
  },
]);


// 1. Find all the topics and tasks which are thought in the month of October
db.topics.find({
    $and: [
      {
        topic_date: {
          $gte: ISODate("2020-10-15T17:00:00Z"),
          $lte: ISODate("2020-10-31T18:00:00Z")
        }
      },
      {
        "task.task_date": {
          $gte: ISODate("2020-10-15T17:00:00Z"),
          $lte: ISODate("2020-10-31T18:00:00Z")
        }
      }
    ]
  })


//  2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({
    drive_date: {
      $gte: ISODate("2020-10-15T17:00:00Z"),
      $lte: ISODate("2020-10-31T18:00:00Z")
    }
  })


//  3.Find all the company drives and students who are appeared for the placement.
db.users.aggregate([
    {
      $lookup: {
        from: "company_drives",
        localField: "company_drives",
        foreignField: "company_id",
        as: "company_drives"
      }
    },
    {
      $project: {
        name: true,
        _id: false,
        "company_drives.company": true
      }
    }
  ])



// 4. Find the number of problems solved by the user in codekata
db.users.aggregate([
    {
      $lookup: {
        from: "codekata",
        localField: "codekata_problems",
        foreignField: "q_id",
        as: "codekata_problems"
      }
    },
    {
      $project: {
        name: true,
        _id: false,
        "codekata.category": true,
        codekataProblems: {
          $cond: {
            if: {
              $isArray: "$codekata_problems"
            },
            then: {
              $size: "$codekata_problems"
            },
            else: "0"
          }
        }
      }
    }
  ])


// 5.Find all the mentors with who has the mentee's count more than 15
db.mentors.find({
    mentee_list: {
      $gt: 15
    }
  },
  {
    mentor_name: 1,
    _id: 0,
    mentee_list: 1
  })


// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.users.find({
    $or: [
      {
        absent_on: {
          $exists: true,
          $ne: []
        }
      },
      {
        submitted_task: {
          $exists: true,
          $ne: []
        }
      }
    ]
  })