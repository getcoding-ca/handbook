---
---

# 5. Automated Testing and CI/CD Pipelines

Recommended Stack:
- Jest
- Github Actions

## Expected Outcomes:
At the end of the module, the student:

✅ Understands different types of testing: unit, integration, end-point, end-to-end

✅ Has written a few types of tests for their project (we recommend unit and integration for their ease)

✅ Can implement tests without help

✅ Can create simple pull-request and build pipelines

## Topics
Below are the high-level topics that we expect students to know by the end of this module:

- Jest
- Understanding the different types of tests and where/why use each one: unit, integration, endpoint, end-to-end
- Testing good practices
    - [AAA](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)
    - Clear statements (description, expectation)
    - Atomic
    - Independent
- What the heck is CI/CD? What is "DevOps"?
- Pipelines

## Recommended Pipeline Steps

On Pull Request:
- Prettier and/or ESLint checks
- Unit Tests and Integration Tests

On Merge to Main:
- Deploy - [Github Action for Elastic Beanstalk](https://github.com/marketplace/actions/beanstalk-deploy)
- Endpoint and End-to-End tests

## Tips / Common Hiccups
- We recommend only trying unit and integration tests. We have found end-point testing (jest) and end-to-end testing (cypress) difficult due to the amount of set up
- However, you can create a simple [/health endpoint](https://testfully.io/blog/api-health-check-monitoring/) and expect it to return 200 as the simplest form of end-point testing - [Github Action for URL Health Check](https://github.com/marketplace/actions/url-health-check)
- There are also "half-automated" endpoint test tools with nice GUIs, e.g. Postman
- Remember NOT to commit/push secrets on the pipeline files

## Nice to Have
- TDD, BDD