# Workout-Tracker

### Table of Contents 

* [Repository](#Repository) 
* [Technology Used](#Technology-Used) 
* [User Story](#User-Story)
* [Main Application](#Main-Application)
* [Contact Info](#Contact-Info)
* [Conclusion](#Conclusion)

# Repository

- This repository is for a web application to create, track, and update workouts. The user can then view various charts & graphs showing the input data about their workouts on a weekly basis.

*LINK TO DEPLOYED APPLICATION*

https://young-waters-42121.herokuapp.com/

# Technology-Used

- To build this project I was tasked in building the backend server, models, and routes for a Mongo Database. 

- To accomplish this goal I used 'express' to build the server and then 'mongoose' to manage the information in the database. 

- Also in the provided code it required using 'morgan,' which is an HTTP request logger middleware for NodeJS.

# User-Story

- To begin the application the user goes to the main-page where they can see the 'Last Workout.'

- Then the user can also navigate to the Dashboard to view their workout 'stats.' 

- Or select 'Continue Workout to edit the 'Last Workout' or add a 'New Workout.'

- Once they press on 'New Workout' they're taking to a page to choose if it's type, either 'Cardio' or 'Resistance.'

- After choosing it's type the user is taken to the relevant page to input the information about the 'New Workout.' 

- When the workout is completed they can press 'Add Exercise' to add the workout to the database, or press 'Complete' to add the workout and return to the main-page.

- Once all exercises are added the user will likely go view their workouts 'stats' by pressing the 'Dashboard' button on the main-page. 

### Main-Application

*IMAGES BELOW*

*Main-Page*

![Main-Page](https://user-images.githubusercontent.com/73864182/115949824-6d3ca600-a48c-11eb-87d9-3fc72b16e16e.png)

*Main-Page (Buttons)*

![Main-Page-btns](https://user-images.githubusercontent.com/73864182/115949825-6d3ca600-a48c-11eb-8b20-978cd65ddccf.png)

*Select Workout Type*

![AE-1](https://user-images.githubusercontent.com/73864182/115949826-6dd53c80-a48c-11eb-96ce-59ebfc25e43e.png)

*Input Workout Info*

![AE-2](https://user-images.githubusercontent.com/73864182/115949818-6b72e280-a48c-11eb-9787-023c184e06be.png)

*Add Exercise Button*

![AE-3](https://user-images.githubusercontent.com/73864182/115949819-6ca40f80-a48c-11eb-8e53-d56649bbd638.png)

*Displays Last Workout*

*Duration Error (undefined)*

![AE-4](https://user-images.githubusercontent.com/73864182/115949820-6ca40f80-a48c-11eb-993f-c2c6a06dfe89.png)

*(UPDATE FIXED DURATION ERROR)*

![AE-6](https://user-images.githubusercontent.com/73864182/115983527-7a25cc00-a556-11eb-814f-8a035f2fe25f.png)

*View Workout Stats*

*Duration Error (prevents display of graph/pie chart)*

![AE-5](https://user-images.githubusercontent.com/73864182/115949822-6ca40f80-a48c-11eb-9483-84e5a608ed60.png)

*(UPDATE FIXED DURATION ERROR)*

![AE-7](https://user-images.githubusercontent.com/73864182/115983528-7d20bc80-a556-11eb-9455-d2774632b211.png)

*END OF APPLICATION*

# Contact-Info:

- Name: Greg Harris
- Email: ghcoder90@gmail.com

# Conclusion

- Overall this assignment went fairly well. The biggest challenge was understanding the provided front-end code so that I could properly build the backend. I had some issues debugging my routes and making sure all the paths worked correctly. I had to rewrite various parts and work through the activities again to understand what I had missed. I'm currently still working on one last issue with the duration being 'undefined' and this is making one of the graphs & pie charts not work. I'm hoping to fix it in office hours tomorrow and then have a fully functional application. Thank you!

*EDIT 4/24/2021*

- Worked out the issue with my GET api routes to use '.aggregate' instead of '.find' for the duration, so it properly displays on the main-page with 'Last Workout' and then properly displays the 'Line Graph' and 'Pie-Chart' on the dashboard page. I also spent time today getting MongoDB Atlas setup and deploying this web application on Heroku. I'm glad I was finally able to finish everything here and get it working. Thank you!