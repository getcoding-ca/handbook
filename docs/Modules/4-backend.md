---
---

# 4. Back-end & Database

Recommended Stack:

- Express (deployed to Elastic Beanstalk)
- MySQL (deployed to Amazon RDS)
- Jest
- Github Actions

## Duration

- Average for past successful students: 20 sessions
- 90th percentile: 26

## Expected Outcomes:

At the end of the module, the student:

✅ Is considered hireable as a junior full-stack developer

✅ Can create moderately complex back-ends and databases without help

✅ Has their project deployed in the cloud, with basic understanding of the AWS resources

✅ Has written a few basic automated tests (we recommend unit and integration for their ease)

✅ Has a rudementary CI/CD pipeline to test and deploy

## Topics

Below are the high-level topics that we expect students to know by the end of this module:

Back-end Stuff:

- REST API Design
- Postman
- Debugging using VSCode
- SQL/MySQL: insert, select, update, delete, join
- Using .env or environment variables for secrets (never publish secrets to github)
- MySQL Workbench (or some other client)
- Auth: Hashed Passwords in DB + Sessions
- Jest
- Testing good practices
  - Organized structure (description, expectation)
  - Atomic
  - Independent
- Understanding where/why use different tests: unit, integration, endpoint, end-to-end

DevOps stuff:

- What the heck is CI/CD? What is "DevOps"?
- Basic understanding of the AWS services used in deployment: EB, EC2, RDS, Route53
- Github actions / pipelines

## Nice to have:

- Understand how a request goes from a client computer to a server and back: HTTP, TCP, DNS
- TypeScript: highly recommended if you have a strong student

## Tips / Common Hiccups

- Remember NOT to commit/push secrets on the pipeline files
- To save time, you can use the live database instance (AWS RDS) for local development too
- Avoid ORMs unless you know a good one for Node and SQL. They generally suck and are difficult to set up.
- We recommend only trying unit and integration tests. We have found end-point testing (jest) and end-to-end testing (cypress) difficult due to the amount of set up
- However, you can create a simple [/health endpoint](https://testfully.io/blog/api-health-check-monitoring/) and expect it to return 200 as the simplest form of end-point testing - [Github Action for URL Health Check](https://github.com/marketplace/actions/url-health-check)
- There are also "half-automated" endpoint test tools with nice GUIs, e.g. Postman

## Recommended Pipeline Steps

On Pull Request:

- Prettier and/or ESLint checks
- Unit Tests and Integration Tests

On Merge to Main:

- Deploy - [Github Action for Elastic Beanstalk](https://github.com/marketplace/actions/beanstalk-deploy)
- Health check

## Deploying

:::tip
Under the hood, Elastic Beanstalk (EB) is essentially configuring EC2/load balancers/VPC/Route53/... to run the code with minimum input from you. (load balancers may not be configured in free-tier mode)
:::

In the code:

1. The main express file should be named "app.js" or "server.js"
2. The code should listen to port 8080
3. Zip all the files in your project, except: `node_module`, `.env`, `.git` (EB automatically runs npm install and npm start commands for you.)

In AWS:

1. Create AWS Account (needs credit card and will take hours to verify)
2. Go to Billing -> Budget and create a budget/alert
3. Go to Elastic Beanstalk (use the Old Dashboard)
4. Press the "Create Application"
5. When asked between "Sample application" and your own code, choose to upload your own code (the .zip file).
6. The rest of the defaults work fine
7. Wait for the Application and Environment to be created
8. You will see a URL to your back-end

:::tip
Elastic Beanstalk Terminology:

- Application, e.g. "project1", "project2"
- Environment, e.g. "production", "staging" belonging to an application (If you follow the process above, you will have 1 default environment for your application)
- Application Versions, the zipped and uploaded code
  :::

Other things you can do:

- Set Environment Variabes on the server: `configuration/software/environment variables`
- Upload new code: Go to `Application versions`, upload a new .zip, select the new .zip and choose "Deploy" from Actions menu

## Projects

- https://divvyitup.ca
- https://www.chore-bucks.com/
-
