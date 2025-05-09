## 🌟 Introduction
This project focused on redesigning the UN website, specifically the Events and News Page. From earlier in this project, we figured out that users, specifically younger users, thought the website was not visually appealing, information was cluttered, and lacked visuals. We created a Figma mockup that addressed these issues through timelines, scrollable components, and tabs. Based on the mockup, we created a React-based webpage that prototypes the Events and News Page, ensuring the page is interactive, contains all needed information, and preserves the UN style theme.

## 👥 The Team and Roles

| Name            | Role            | Major                                     |
| --------------- | --------------- | ----------------------------------------- |
| Kinton Duong    | Project Manager | Computer Science                          |
| Tanay Joshi     | Project Manager | Data Science & Business Administration    |
| Raghav Aggarwal | Senior Analyst  | Computer Science                          |
| Alexa Zhang     | Senior Analyst  | Data Science                              |
| Nishanth Kairamkonda         | Analyst         | Electrical Engineering & Computer Science                              |
| Priya Patel     | Analyst         | Electrical Engineering & Computer Science |

### 🛠 Prerequisites
Make sure you have the following installed:
- **VSCode**
- **Node.js**
- **npm**

 ### ⬇️ Installing
  Install Node.js and npm 
   - Ensure Node.js is installed on your local system via [Node.js official website](https://nodejs.org/en).  
   - Install the required npm dependencies by running the following command in the terminal:
     
   ```bash
     npm install
   ```
### Running the Application

Clone the Repository:

```bash
git clone https://github.com/trjoshi3011/Delta-x-UN.git
cd sp25UN
```

Install Dependencies

```bash
npm install
```

Run the Development Server:

```bash
npm start
```

The app will be running at: 
```bash
http://localhost:3000
```

## 📚 Tech Stack

- **Reacts**: A front-end development framework that allows for reusable components.
- **JavaScript**: A programming language that allows us to create interactivity through state management and event handling.
- **CSS**: A language we used to style the website, allowing it to look modern and fit the UN colors.

## 🛠️ The Process

### Front-End Process
**Today at the UN Feature**  
We used JavaScript to create a horizontal scroll that allows the page to store multiple news stories in a small area:
- The news is represented by a relevant image.
- The news article title appears.
- A scroll bar is present right below to scroll to more stories.
  
**UN Archive Feature**  
We used JavaScript to create a timeline of the relevant events of the UN history:
- The date and event are present in **bold**.
- Each item in the timeline has an external link for more information if a user is interested in learning more.
- The icons and links change state if you hover over them, creating interactivity.

**Read Watch Listen Engage Feature**  
We used JavaScript to create tabs, so the user can click through Read, Watch, Listen, and Engage:
- Only information from the tab the user is on appears.
- Each tab consists of relevant external links that allow the user to go to more sites for more information.
- The tabs and links change state if you hover over them, creating interactivity.

**External Links Feature**  
We used JavaScript to create buttons on the following topics: Main Bodies, Departments/Offices, Resources/Services, Key Documents, News and Media, and Issues/Campaigns:
- When the user hovers over the button, a pop-up appears that shows the user multiple relevant links.
- Each pop-up is scrollable, so the user can see all the links while still preserving space.

**UN Photo Feature**  
We used JavaScript to create buttons that lead users to external sites if they choose to view photos:
- When the user hovers over the button, it changes color, creating interactivity.
- Also, a photo appears on the main page, which we are working to make interactive, so the photo changes on its own at a certain time interval.

**Broadcast Feed and Calendars Feature**  
We used JavaScript to create components so that each group of information is separated and clear:
- Each component has links to external sites so the user can view more information if they choose to.

## 🚧 Challenges

The biggest challenge we faced was how to represent all the information that the UN Events and News Page but make it less overwhelming and modern. We did so through creating a variety of mechanisms that revealed more information only if the user chose to find that information. For example, if the user wants to read news, they can scroll to find more news; all the news stories don't have to appear on one page. If a user wants to find key documents, the user can hover over the Key Documents button to see links to key documents. To make the website more modern, we focused on changing states from user actions. For example, if a user hovered over a tab, the tab tile changed color. 

## 📈 Next Steps

Our next steps would consist of two main things. The first is to create React prototypes of the other webpages, such as the Spotlight and Global Issues Pages. Next, we would make our Events and News prototype more production-ready. We would do this by implementing an accurate navigation bar, ensuring the website renders properly for all desktop sizes, and making it possible for information on the website to change more easily. Ex: new news stories or new pictures.



                  
