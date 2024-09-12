import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <>
        <h2>Web Dev Portfolio</h2>
        <article>
            <h1>Welcome to my website!</h1>
            <p>Hi, I'm Rachel Hoeferlin and pursuing a degree in Computer Science at Oregon State University. As someone who values life-long learning, pattern recognition and
              solving complex problems, my goal is to find a job within the field of computer science as a software developer or web developer. However, I am still seeking the 
              path that fits me the best, which I hope to discover through internships and more advanced courses. 
              I am passionate about sustainable technologies, robotics and IOT technology, and aspire to be involved in these inspiring areas of tech. 
              Besides the tech stack listed below, I mainly use Python as my preferred programming language, but also have experience with Assembly Language.
            </p>
            <p>This website represents a portfolio of my web development skills, culminating in this full stack 
            web app. As a full stack website, I used front and backend technologies to create this site using JavaScript, HTML, CSS, and the MERN stack (MongoDB, Express, Node.js and React).
                <dl>
                    <dt><strong>HTML</strong></dt>
                    <dd>Underneath the hood, HTML is used for structuring the content that you see-from this sentence to the form in the Painting Log page.</dd>
                    <dt><strong>CSS</strong></dt>
                    <dd>Gives style and a sense of cohesiveness from page to page, creating a pleasant UI experience.</dd>
                    <dt><strong>JavaScript</strong></dt>
                    <dd>The programming language used to control the logic and manipulate objects.</dd>
                    <dt><strong>MongoDB</strong></dt>
                    <dd>The cloud-based database which stores the documents involved in CRUD operations (create, read, update, delete).</dd>
                    <dt><strong>Express</strong></dt>
                    <dd>Like a pipeline, this is used to route and send HTTP requests and responses.</dd>
                    <dt><strong>React</strong></dt>
                    <dd>This library underlies each page and component in this website, which effectively "wraps" JavaScript and HTML elements for more efficient applications.</dd>
                    <dt><strong>Node.js</strong></dt>
                    <dd>An environment that enables this server-side web application to run.</dd>
                    <dt><strong>DOM Manipulation</strong></dt>
                    <dd>The DOM (document object model) is changed with the use of JavaScript and React components. </dd>
                </dl>
            </p>
        </article>
    </>
  );
}
export default Home;