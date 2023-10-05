---
---

# 4. Back-end & Database

Recommended Stack:

- NL
  - Express (deployed to Elastic Beanstalk)
  - MySQL (deployed to Amazon RDS)
- NB/NS/PEI
  - Python (Framework - being discussed)
  - MySQL (deployed to Amazon RDS)

## Duration

- Average for past successful students: 18 sessions
- 90th percentile: 24

## Expected Outcomes:

At the end of the module, the student:

✅ Is considered hireable as a junior back-end developer

✅ Can create fairly complex back-ends using Node.js/Express without help

✅ Can design relational databases for common use-cases

✅ Has their project deployed in the cloud and understands the role of EB/EC2, RDS and Github Pages

## Topics

Below are the high-level topics that we expect students to know by the end of this module:

- REST API Design
- Postman
- Debugging using VSCode
- SQL/MySQL: insert, select, update, delete, join
- MySQL Workbench
- Auth: Hashed Passwords in DB + Sessions
- Using .env or environment variables for secrets (never publish secrets to github)
- Basic understanding of the AWS services used in deployment: EB, EC2, RDS, Route53

## Tips / Common Hiccups

- To save time, you can use the live database instance (AWS RDS) for local development too
- Avoid ORMs unless you know a good one for Node and SQL. They generally suck and are difficult to set up.

## Nice to have:

- Understand how a request goes from a client computer to a server and back: HTTP, TCP, DNS
- TypeScript: highly recommended if you have a strong student

## Things to Avoid

- Testing: we have a separate module for that

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
