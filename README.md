🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by. Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

#### Backend delpoyed at [heroku](🚫add URL here) <br>

### Backend Stack Node/GraphQL/Passport/Redis/Prisma/PostgreSQL

- We chose this stack due to it's potential for rapid product iterations on the front-end, insightful analytics on the back-end, docuementation generation for GraphQL types, and all the benefits that come with a strongly typed system.
-
-

## 2️⃣ Endpoints

🚫This is a placeholder, replace the endpoints, access controll, and descriptioin to match your project

#### Authentication Routes

| Method | Endpoint             | Access Control | Description                             |
| ------ | -------------------- | -------------- | --------------------------------------- |
| POST   | `/api/auth/register` | All Users      | Registers a new User to the database    |
| POST   | `/api/auth/login`    | All Users      | Generates a token for a registered user |

# Data Model

```js
type UserAccount {
  id: ID! @id
  email: String! @unique
  password: String!
  createdAt: DateTime! @createdAt
  updatedAt: DateTime! @updatedAt
}

type ExternalAccount {
  id: ID! @id
  accountId: ID! @unique
  createdAt: DateTime! @createdAt
  updatedAt: DateTime! @updatedAt
}

type UserProfile {
  id: ID! @id
  userAccountId: ID!
  email: String! @unique
  firstName: String
  lastName: String
  profileImage: String
  city: String
  zip: String
  address: String
  state: String
  aptNumber: String
  projects: [Project!]
  projectLikes: [ProjectLike!]!
  comments: [Comment!]
  commentLikes: [CommentLike!]!
  createdAt: DateTime! @createdAt
  updatedAt: DateTime! @updatedAt
}

type Project {
  id: ID! @id
  profile: UserProfile!
  name: String!
  description: String!
  address: String!
  state: String!
  zip: Int!
  city: String!
  goalAmount: Float!
  amountFunded: Float! @default(value: 0)
  comments: [Comment!]!
  likes: [ProjectLike!]!
  createdAt: DateTime! @createdAt
  updatedAt: DateTime! @updatedAt
}

type ProjectLike {
  id: ID! @id
  profile: UserProfile!
  project: Project!
  createdAt: DateTime! @createdAt
  updatedAt: DateTime! @updatedAt
}

type Comment {
  id: ID! @id
  profile: UserProfile!
  project: Project!
  text: String!
  likes: [CommentLike!]!
  createdAt: DateTime! @createdAt
  updatedAt: DateTime! @updatedAt
}

type CommentLike {
  id: ID! @id
  profile: UserProfile!
  comment: Comment!
  createdAt: DateTime! @createdAt
  updatedAt: DateTime! @updatedAt
}
```

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
