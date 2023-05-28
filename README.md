[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/EF97x2Z3)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10995256&assignment_repo_type=AssignmentRepo)

# FED Exam - Vanilla Front-end Website

This bootstrap template is intended to help you deliever a amazing website which delights your end-users. Feel free to change, remove or start your own project from scratch. Please replace any text which starts with an `_`.

This is a vanilla website that displays a list of items fetched from an API.

This project was bootstrapped with Vite.

## Resources

- [Brief](https://fed-vocational-astro-course.vercel.app/en/exam-1/brief)
- [Design](https://www.figma.com/file/mqqZDYm54FIwYehodSIjQ2/FED-1-Exam?type=design&node-id=0-1&t=PfHw7D51ZhONxMKP-0)
- [Production deploy](https://exam1selfors.netlify.app/)
- [Deployment CI](_LINK_TO_NETLIFY_VERCEL_DASHBOARD_)
- [API Docs](https://remarkable-rainstorm.flywheelsites.com/)
- [API Endpoint](https://remarkable-rainstorm.flywheelsites.com/)

## Deployment

Your deployment is done via static hosting provider (Vercel is recommended).
YOu can update your deployment pipeling by editing the [vercel.json](https://vercel.com/docs/concepts/projects/project-configuration).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FS3ak%2Ffed1-exam-vanilla-frontend-website&env=API_TOKEN,API_SECRET&envDescription=The%20API_TOKEN%20is%20needed%20to%20access%20a%20secure%20API%20endpoint.%20This%20can%20be%20the%20Authorization%20%60Bearer%20Token%60%20header%20used%20to%20make%20queries.&envLink=https%3A%2F%2Fvitejs.dev%2Fguide%2Fenv-and-mode.html&project-name=exam-front-end&repository-name=fed1-exam-vanilla-frontend-website&skippable-integrations=1)

## Interview for Hotjar

I interviewed Håkon, a fellow classmate about how she experienced the website:

Can you describe your overall experience with the website's design?
The design is clean and easy to understand. I think the design is appealing and user-friendly. The layout was easy to navigate and the colors are aesthetically pleasing.

Were you able to find what you were looking for easily? Why or why not?
Yes, I was able to find what I was looking for easily. The navigation is simple and easy to understand.

Did the website's colors and overall visual design appeal to you? Why or why not?
Yes, I think the color scheme was consistent throughout the site and the design felt modern and up-to-date.

Were there any specific design elements that you found confusing or distracting?
I found some of the headers on the visit-page to be a little too small compared to the text-paragraphs.

## Report

1. Summary

We have been given a exam where we are to design and build a blog-website using Figma for design and HTML, CSS, and Javascript to build the site. The goal was to put in use what we have learned so far this first year and create a responsive website that works on both laptop and phone. This was a very exiting and difficult task. I feel that I got to challenge my skills and think of different solutions and ways to execute a problem. This year has been very exciting and filled with challenges and interesting subjects. This exam was a perfect way to show what I have learned this year!

2. Body

2.1. Introduction

The first thing I did was to decide what I would make a blog about. I chose to make a blog about marketing, and how to make your business expand and grow. Hence the name ExpandMedia. I wanted the website to have a business-focused design with a color scheme primarily consisting of shades of grey, orange, and white. It gave a professional and sophisticated look to the website in my opinion. The fonts used are clean and easy to read. I went with Kodchasan and SF Pro. SF Pro being the font Apple uses on their website and products. The layout I feel is well-organized, allowing users to navigate the website smoothly and explore blog posts without confusion. I used Chat-GPT to write my blogposts on Wordpress.

For the homepage we had to make a carousel to display the posts in. For the carousel I displayed the title and featured image for each posts. The code implemented pagination functionality, allowing users to navigate through different pages of blog posts using previous and next buttons, 4 at the time. Clicking on the posts sends you to the details page for each posts. This i feel enhanced the user experience by providing an organized and structured layout, encouraging visitors to explore and engage with the posts more effectively. I implemented the carousel on the blog details page as well to enhance the user experience.

Moving on to the Blog Post page. This code fetches and displays all the blog posts. It retrieves posts based on the selected sorting order and renders them on the page. Each post includes a featured image, title, excerpt, and a "Read More" button. The "Show More" button allows loading additional posts, and the sorting filter updates the displayed posts based on the selected order.

Then I moved on to my contact form. It initializes variables for each input field and sets up event listeners for validation. When the user submits the form, it prevents the default action and gets the values from the name, email, subject and message fields. The "validation" function checks if the input field meets specific requirements using regular expressions. If the input is valid, the "submitContactForm" function is called, which sends the form data to a server.

The last thing I did was to connect all the wireframes with interactive buttons on all the pages, so that you can navigate easily between the pages. I also made a hovering effect to make the website more alive and interactive. Lastly I deployed my website on Netlify and checked it on validator.w3.org and https://wave.webaim.org/ for any issues and problems. I made sure to consider WCAG principles when designing and coding the site. I tested this on Chrome using Lighthouse, and got a fairly high score on all the sites.

2.3. Conclusion
All in all i think this was a very challenging, but fun exam. You really get to challenge your creativity and skills. I feel much more confident in coding and have learned a lot from this exam. I am very happy with what I have learned this year, considering that I had no experience with any of the subjects we have had. I look forward to what next year has in store!

3. References

I took all my images from Unsplash.
https://unsplash.com/

The rest was taken from the files we where given in the brief and the lessons and lesson tasks we have had.

4. Acknowledgements

First I want to thank Monde Sineke for teaching me a lot of good techniques and ways to execute tasks and problems in our classes. It has given me a lot of inspiration. I also want to thank my classmates and the other teachers we have had this semester for help when I was stuck!

5. Appendices

I made a website from the Figma design which is interactive and responsive throughout all the pages. My goal was to make it as easy to use as possible, and to have a nice and cool design. I have explained the reasoning for my methods in the main section above.

## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://0.0.0.0:5173/` to view it in the browser.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [x] A error message is present when the End-user encounters a error while viewing the index page.
- [x] A error message is present when the End-user encounters a error while viewing the details page.
- [x] As a customer I can view the title of the item on the browser tab for a details page.
- [x] As a customer I can view validation message when they input an incorrect name.
- [x] As a customer I can view validation message when they input an incorrect subject that is less than 15 characters.
- [x] As a customer I can view validation message when they input an incorrect Email address.
- [x] As a customer I can view a validation message when they input an incorrect physical address that is less than 25 characters long.
- [x] As a customer I want to be able to view the latest blog posts on the home page.
- [x] As a customer, I want to see a list of the first 10 blog posts on the blog section, so that I can quickly scan through the content and decide which posts I want to read.
- [x] As a customer I want to be able to view a list of all blog posts on the blog section.
- [x] As a customer I want A responsive website that can be As a customer, I want to ensure that the website is responsive and accessible so that I can access it on any device and easily navigate through it using any accessibility tools I need.
- [x] As a customer, I want to see a clear and visually appealing design on the website, so that I can easily read the content and engage with the website.
- [x] As a customer, I want to see a carousel/slider on the home page to display the latest blog posts, so that I can quickly access and view the latest content.
- [x] As a customer, I want to be able to click on a blog post and be taken to a page with specific details about that post, so that I can get more in-depth information about the topic.
- [x] As a customer, I want to be able to click on images in a blog post and see a larger version in a modal, so that I can view images in greater detail.
- [x] As a customer, I want to be able to easily contact the website owners through a contact form, so that I can reach out with any questions or feedback.
- [x] As a customer, I want to see error messages when I fill out the contact form incorrectly, so that I can correct my mistakes and successfully submit my message.

## End-user success criteria (Optional - 100%)

- [ ] End-user can search for a specific item.
- [ ] End-user can filter the list.
- [x] End-user can sort list by;
  - [x] Name ascending order
  - [x] Name descending order
- [x] Confirmation modal after custumer submits a successful contact form.
- [x] End-user can auto-fill the contact form using the browser auto-fill.
- [ ] End-user can auto-fill the contact form using a password manager.
- [x] Validation still works when End-user uses copy and pastes into input fields.
- [x] End-user can see a postive feedback when they input correct info and pass validation.
- [x] End-user can experience pleasant animations.
- [ ] End-user needs to prove there are human using a captcha feature on the contact form.
  - [x] Each item in the list has a staggered animation.
  - [x] Contact form success modal fades in.
- [x] End-user can view a custom favicon.
- [x] CSS uses variables
- [x] Code is dry - There are no repeating functions, variables.
- [x] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [ ] As a stakeholder, I want to view the website analytics.
- [ ] As a stakeholder, I want to show my customers a disclamer on the website, so that they are aware of the terms and conditions of using the website.
- [x] As a customer, I want to ensure that my personal information submitted through the contact form is kept secure and not shared with any third-party entities.
- [x] As a customer, I want to be able to sort, filter, or search the blog posts, so that I can quickly find the content that is most relevant to me.
- [ ] As a customer, I want to be able to submit comments on a blog post, so that I can engage with other readers and share my thoughts on the topic.

- [x] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [x] Is user-friendly
  - [x] Effective use of the pillars of design
    - [x] Typography
    - [x] Colour
    - [x] Composition
    - [x] Art Direction
    - [x] Motion
  - [x] Adhered to principles of design
    - [x] Contrast
    - [x] Balance and alignment
    - [x] Emphasis
    - [x] Proportion
    - [x] Hiearchy
    - [x] Repetition
    - [x] Ryhthem
    - [x] Pattern
    - [x] Negative space
    - [x] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [x] All pages have a meta description.
- [x] All pages have a valid title.
- [x] All pages import the correct css files.
- [x] All pages import the correct JS file.
- [x] Details page URL includes a query param.
- [x] My website makes a GET request to an API to get a list of results.
- [x] My website makes a GET request to an API to get details of one result.
- [x] Input fields have the following attributes;
- [x] All images have an alt tag;
  - [x] A name,
  - [x] A placeholder,
  - [x] A aria-describedby,
  - [x] Required
- [x] I have not copied Javascript code.
- [x] I have not used a Javascript library.
- [x] Removed all unused files.
- [x] Named all images properly.
- [x] Committed all my code to github.
- [x] My repo is publically viewable.
- [x] I've submitted/ written a report.
- [x] I've removed all todo notes in code.
- [x] I've removed all console logs in code.
- [x] Code is formatted correctly.
- [x] There are no red underlines in VSCode.
- [x] There are no error messages in the terminal when I run the project.
- [x] My code is indented correctly.
- [x] I've checked my report for grammer & spelling using grammerly or chatGPT
- [x] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [x] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/html-css/module-2/forms

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Sander Selfors (@sanderselfors)
- Monde Sineke (@S3ak)
