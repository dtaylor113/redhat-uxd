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
