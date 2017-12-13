# redhat-uxd

Author : Amit Narkhede

This repository is for interview with RedHat UXD team.

# Open Ended Questions :

## Section 1 - Design & Development

```
1. Could you outline what you would consider to be the important considerations If you were
asked to develop a web application that could potentially be used by thousands of users?
```
- Scalability: In my opinion if the application is being used by thousands of user, it needs to be scalable for that kind of processing load. We don't want system to slow down when there are lot of users using the application at the same time. I think we can definitely see trends in usage of system time to time and anticipate where we need to make improvements.
- Performance: As discussed in above point, application should perform reasonably well in terms of overall responsiveness for all use cases. This applies to both frontend as well as to backend.
- Security: As we are probably going to store sensitive data in system, we should be making best efforts to protect it against possible attacks. Making sure all the environments are up to date in terms of patches and following best practices can give us a good start in terms of security.
- Availability: As a lot of people use the web application, we want it to be have a very good uptime.
- Maintainable: Any product should invest time in making it as maintainable as possible. The overall code architecture should be well thought such that the modules/components are loosely coupled. We should try to write the code which is readable to humans too and thus spaghetti code is definitely a no go.
- User Experience: As developers are usually not the end users of the product, the overall UX needs to be well thought out and easy to understand. I think that its a good idea to get feedback from potential customers on the prototype so that its not late to change the flow. Once we start coding the system, the tradeoff that we make in terms of planned design should be as minimal as possible. Just because developer thinks its easier to make things certain way doesn't mean that it will be good UX.
- Adaptable: As we go in technology world, things change and we definitely want the codebase to be modular enough that they are not coupled tightly. The system should be maintained such that we can incorporate new things with maximum reuse of out own code.

```
2. What techniques do you employ to keep up-to-date with the rapid pace of progress in the
field frontend development? How do you choose which technologies are worth taking the
time to learn more about?
```

- Honestly I haven't worked that long in frontend technologies to give a very impressive answer to this question. I tend to follow people and engineering blogs on medium, same on YouTube. I spend good amount of time on reddit and follow good chunk of subreddits that will keep me up to date in terms of new things in the field. I was lucky enough to have great mentors in my internship from whom I have learned a lot in terms of overall though process, best practices to use.

## Section 2 - Testing & Deployment

```
1. Describe the approach you take in testing your applications.
```

- As a developer, I tend to write good amount of unit tests which will cover all the different branches and lines of code.
- To come up with test cases, I look at all the possible inputs that can be provided to the code that I'm testing. This includes expected normal input, corner cases. I also believe that we need unit tests to check for behavior of code when unexpected input is provided.
- Automated tests will definitely do the job but I also tend to check the components individually and along with other components that its coupled with. This usually helps to look out for minor visual glitches that might occur and also behavior of the code on different browsers.
- I believe in releasing a stable product than a rushed one with more features along with bugs. Thus we should definitely have a good time left for the manual integration testing that covers the things that we are changing in the release and flow around it. This enables me to find unnecessary side effects of new changes.


```
2. What do you value in a code base?
```

- As a developer I value overall code structure (less coupled and more cohesive), code readability (no spaghetti code!), and as less technical debt as possible.
- If its structured properly as said in previous point, it would be more adaptable to future changes in terms of frameworks, tools.
- Unless the code is properly code reviewed, it should never be committed to main branch.
- Code should follow best practices for the language/framework that is being used. During my internship, I came across linters and I love how they make my life easier to not worry about things after done.

## Section 3 - Testing & Deployment
```
1. What do you find most exciting or interesting about working in the software development field?
```

- As recently tech has been increasingly contributing to our day to day work, it feels great to be on other side of creating things.
- Any technology usually has its own peak time, but being software developer you will always find some complex problem that needs to be solved. This alone is exciting to me.
- Being a tech enthusiast, what better field I be in? I mean we are looking at future where we don't need to drive, we are making trips to different planets, our phones are more powerful than ever.

```
2. In your career to date, what are you most proud of and why?
```

- Man this is going to be hard putting down into words. I will try my best. I started as someone who didn't knew how to turn on computer in 2009 and now I'm graduating in computer science. This has been tremendous journey throughout and I have enjoyed it for most of the part. In general I'm proud of how I have grown as a person. The decisions that I have made throughout have mostly been in right direction and have paid off (including getting into the industry, doing Masters, internships).
