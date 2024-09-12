import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Topics() {
  return (
    <>
        <h2>Web Development Concepts</h2>
        <nav class="local">
          <a href="#webServers">Web Servers</a>
          <a href="#frontendDesign">Frontend Design</a>
          <a href="#optimizingImages">Optimizing Images</a>
          <a href="#favicons">Favicons</a>
          <a href="#javaScript">JavaScript</a>
        </nav>
        <article id="webServers">
          <h3>Web Servers</h3>
          <p>Generally, the industry standard is for the first resource or file on a website to be named "index.html". This resource is the default or 
    <strong>designated home page</strong>  and is what the browser or <strong>client </strong> requests from the <strong>web server </strong> 
    where it is stored. Depending on the language or servers used, this home page could also be "index.js", "default.html", or "index.php".
    For this website, the server is OSU's Engineering web server, and the "index.html" resource, an <strong>HTML </strong> file, was transferred from 
    the computer's hard drive to the server's public_html folder, making it "live".</p>

          <p>Whether viewing the browser's <strong>Inspector Network </strong> tab on a web server or local computer, the file's details include the <strong>request method ("GET")</strong>, 
    the <strong>status code </strong> (200-successful request), and the HTML code in the response tab. Viewed from the web server, there is more detailed information 
    in the <strong>Response </strong> and <strong>Request Headers </strong> which includes the <strong>IP address</strong>, age, content type (text/HTML), date and 
    last modification, server, language (US English), cache controls, host, and more. On the other hand, provisional headers are shown when viewed locally, with the 
    Response Headers showing the content type and last modification date and the Request Headers showing the browser and platform details. </p>

          <p>The "favicon.ico" file has a status code of 200 which means the server successfully requested and received the needed information, in this case, the favorites 
    icon image for OSU's College of Engineering is automatically sent by the OSU web server. However, the main.css and main.js files have a status code 404 because 
    the server could not successfully request these resources since they do not exist.</p>

          <p>Taking a look at the web server's <strong>URL</strong>, the <strong>scheme </strong> is identified as <strong>HTTPS</strong>, which encrypts the data sent between the server 
    and client. The <strong>subdomains </strong> are "web.engr", subsections of the <strong>host domain </strong> at the "oregonstate.edu" server.
    Following the domain name are the <strong>resources </strong> which are "~hoeferlr/a1-hoeferlr/" with "~hoeferlr" being the account folder on the server and
    "a1-hoeferlr" being the folder which contains the "index.html" file.</p>
        </article>
        <article id="frontendDesign">
          <h3>Frontend Design</h3>
          <p><strong>Frontend design </strong> prioritizes enhancing the user's experience of a website, from the visual design to the interactive experience. To create an engaging user 
            experience, consistent and organized visual design is crucial. One way to create consistency is to design with a theme in mind, incorporating fonts and colors that coordinate
            with the page's photographs and imagery. Prioritizing <strong>usability </strong>  and <strong>inclusivity </strong>  principles can lead to increased productivity, ease of use, 
            and less user frustration. Without a focus on the user's experience, they are more likely to choose from any number of other options, which could result in a loss of business. </p>
          <h4>The Five "E"s of Usability:</h4>
          <dl>
            <dt><strong>Effective</strong></dt>
            <dd>Measures the accuracy of the expected results and if the user can complete their goal(s).</dd>
            <dt><strong>Efficient</strong></dt>
            <dd>How simple or quick it takes to get results, whether in the time it takes to search/load content, or how many tasks it takes to get results.</dd>
            <dt><strong>Easy to navigate</strong></dt>
            <dd>The overall structure of a website and the ease of navigating to the goal information.</dd>
            <dt><strong>Error-free</strong></dt>
            <dd>Any errors will interrupt and interfere with the user's experience, so it is important to handle these during usability testing. </dd>
            <dt><strong>Enjoyable or engaging</strong></dt>
            <dd>Oriented to the intended audience, defines how appealing the website is and determines user retention, so they want to revisit the site.  </dd>
          </dl>
          <p>To help section the content on a page, <strong>page layout tags </strong>  are used, which include a line break before and after the element. As the banner or introduction to a page, the <strong>header </strong>  
            element typically includes the author's name, slogan, or logo and is at the top of the page. The <strong>main </strong>  element contains the content of a document's body. The purpose of the <strong>section </strong>  
            element is to group strictly related content around a theme, with a heading that denotes the topic's content. An <strong>article </strong>  tag is usually used within a section, marked with an ID to describe its topic, 
            which can also be used as an <strong>anchor</strong>. The <strong>nav </strong>  or navigation element provides links to other pages, websites, or within the same document, using anchors. Found at the bottom of a web 
            page, the <strong>footer </strong>  element provides a copyright statement, including the copyright symbol, year, and name.</p>
          <h4>How anchors link to content:</h4>
          <ol>
            <li>To link to external content, an anchor will contain the <strong>absolute path </strong>  (the complete URL) for that website and include a description of the link that the user clicks on.</li>
            <li>To link to internal content within the same page, an anchor will utilize the article's ID to reference and link to that text.</li>
            <li>To link from page to page, it is best practice to use a <strong>relative URL path </strong>  within the anchor, which contains the name of the file, or page, being linked to. </li>
          </ol>
        </article>
        <article id="optimizingImages">
          <h3>Optimizing Images</h3>

          <p>A <strong>descriptive file name </strong>  will improve search engine optimization by categorizing it with related imagery and describe who or what is in the image, and where or when it happened. 
            To decrease loading time, compress images to the <strong>smallest file size </strong>  possible. Lossy compression reduces the image data and leads to pixelation, whereas lossless compression keeps the image quality intact. 
            Using the appropriate image size depending on the <strong>exact dimensions </strong>  of the webpage will decrease loading time. Images can present as pixelated or blurry depending on the file's format, to optimize the quality use the 
            <strong>correct file format </strong>  depending on the size or content. Since a monitor's resolution can be between 72 or 300+ pixels per inch, multiple image sizes are necessary to maintain image quality for <strong>reduced resolutions</strong>. 
            Depending on the file format, using the appropriate <strong>color mode</strong>, RGB (.PNG, .JPG, .SVG, .WebP) or indexed (.GIF), is important to optimize image quality.</p>

          <p>For photographs, the appropriate file formats are .JPG or .WebP. Since photos have lots of detail and colors, it is crucial to reduce/compress them to not overload the web server. Both JPG and WebP files compress 
            photos to a smaller size, which is rectangular. Line art, such as logos and icons, use .GIF, .SVG or 8 bit .PNG file formats. GIF formats are typically used for short animated sequences of photos or videos, whereas 
            SVG formats load higher-quality animated or line art images. PNG files, though mostly used for line art, can also be used for line art combined with photos, however the photo will become pixelated.</p>
        </article>
        <article id="favicons">
          <h3>Favicons</h3>

          <p><strong>Favicons </strong>  or touch icons are used by browsers and devices to quickly recognize a website or company. These are recognizable symbols or company logos and are saved in different sizes/file types to be clear and readable 
            for a variety of browsers and devices. Their recognizability assists the user by increasing navigation efficiency. This optimizes search times by quickly locating the favicon from a list of options, such as search engine results, or by 
            locating the icon for an app or website on a smartphone or wearable device.</p>
        </article>
        <article id="javaScript">
          <h3>JavaScript</h3>

          <p>In <strong>JavaScript</strong>, the main <strong>data types </strong>  are number, string, and boolean, as well as special value, object, and date. One of the golden rules of JavaScript is to program the types explicitly, to avoid automatic type conversion. 
            Numbers are automatically floating points but can be converted to integers or strings. Strings are wrapped in single or double quotes, but expressions can be converted to strings using <strong>template literals</strong>. Boolean is a type that is used in <strong>conditional statements </strong> 
             and includes the value True or False. Special values refer to undefined and null, which mean no value was assigned. Dates can be specified in the input type, and methods such as “Date()” create date values.
          </p>

          <p><strong>Objects </strong> are a non-primitive data type and have collections of <strong>“name: value” </strong> pairs. Each name is a property, and the value can be most data types. Objects store and manage data through various <strong>CRUD </strong> operations (create, read, update, delete). 
            An <strong>array </strong>  can have values of any type and is accessible via indexing starting at 0. Methods for arrays include length (number of elements), push (add element(s)), pop (remove/return the last element), and includes (checks if the value is in the array). 
          <strong>JSON (JavaScript Object Notation) </strong> consists of “name: value” pairs or arrays of string data type. It can be used to create objects from these strings to exchange data across different programming languages.                
          </p>

          <p>Like other programming languages, JavaScript uses Boolean values to evaluate expressions in the form of <strong>“if, else if, else” </strong>  statements. Unlike Python, conditionals after the statement must be in parentheses. However, similar to languages such as C or Java, <strong>switch statements </strong> 
            are used to <strong>encode logic </strong>  instead of “if-then-else” statements. These conditional statements evaluate the logic of a statement and perform computations/return a value/etc. based on that evaluation. <strong>“For loops” </strong>  (for, for of, for in) are used to iterate over an object's properties 
            or loop over some code a defined number of times. <strong>“While loops” </strong>  execute code while the statement is True, whereas do while loops execute code and then determine the conditional statement.  
          </p>

          <p><strong>Object-oriented programming </strong>  defines objects which have properties and methods. In most programming languages, <strong>classes </strong>  need to be created which have objects that are instances of that class. However, JavaScript can create objects without creating classes. As stated above, objects have “name: value” pairs
             and have an <strong>identity, state, and behavior</strong>. The value of an object can be a <strong>function </strong>  to add behavior to it, which will compute and store data for that object. When multiple objects have the same properties, <strong>prototypes </strong>  can be created. Prototypes create objects with values that have functions as their property, 
             which apply code/computations to that property and return objects with that applied behavior. 
          </p>

          <p><strong>Functional programming </strong>  involves creating and applying functions, which are considered <strong>“first-class functions”</strong>. This means that variables can be assigned functions, functions can have functions as a parameter, and functions can return other functions. <strong>Higher-order functions </strong>  take a function as a parameter or 
            argument, such as the use of the built-in map() function, which applies the previously defined function to an object. To avoid errors, functions can utilize <strong>“try-catch-finally” </strong>   and <strong>throw </strong>  statements. These statements handle errors by writing code that may result in an error and returns a message or value 
            to avoid returning undefined or null/none. 
          </p>
        </article>
    </>
  );
}
export default Topics;