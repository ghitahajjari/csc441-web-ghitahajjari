## Week 8, Friday
On a phone, the picture and the header text were forced onto the same row. Because of this, the large image and large title became squashed. I fixed it by adding flex-wrap; wrap; to the header in the css file which allows the items in the header to wrap onto multiple lines when necessary if the elements can't fit side by side. 
## Week 9, Wednesday
1. My three pages are the Home screen which describes me and my coursework, the project screen which shows what projects I am doing, and the third screen is music which is the songs that I listen too. I chose to do a music screen as my Android App is about music too so maybe I will work on combining the two. 
2. If each page had to carry its own copy, I would have three css files for, one for each page. Therefore, I will have to link all these css files in their corresponding html file. So updating one css file will only result in changes of the corresponding html file. There is going tobe isolation and independance between the pages. 
3. I don't know how to change the format of the picture. Instead of it being just a round picture, I would maybe want to try other forms. I also am curious if it is possible to add another picture that would go on the bottom. 

## Week 9, Friday
1. I picked 412px as my breakpoint, and I chose it by starting with a narrow browser and slowly dragging it wider until the cards stopped squeezing into a single column and had enough room to sit side by side in a row.
2. The two things that I found and fixed at phone width are:
    -Increased vertical spacing on my nav a links so they are comfortable tap targets for thumbs on a narrow 320px screen.
    -Added "img { max-width: 100%; height: auto; } to make sure images scale down smoothly on small screen without overflowing.
    -My header already had 'flex-wrap: wrap;' which kept my photo from squashing my name
3. Justify-content moves things along the direction they're already flowing, so because we have it in a row, it moves the boxes left and right. If they were in a column, the boxes would move up and down. Align-items does the opposite work across the flow, it moves the boxes up and down in a row, and left and right if they are in a column. 
4. It is easier to start simple for mobile and add styles as screens get bigger than it is to squeeze a complex desktop layout down onto a phone. Tha is why the plain rule builds the narrow layout for a small phone screen first and then the media query only turns on extra styles when a screen is wide enough to fit them. 
## AI use: None

## Week 10, Wednesday
1. HTML sets up what is going to be on the webpage, like the text, images, title, and metadata. CSS styles the webpage and controls how it looks, like the colors, spacing, and layout. JavaScript handles the dynamic stuff such as what happens when you click a button.
2. defer makes the browser wait until the HTML is finished being parsed before tunning JavaScript. Without it, the JavaScript maight run before the HTML elements are loaded and therefore might not find the elements it needs, and things like the button might not work correctly.
3. It worked because CSS variables let the change affect the colors across the whole website by changing the value in one place. Without CSS variables, I would have to change the colors individually in multiple CSS rules, which would take longer and make the code more repetitive, and even more keen to make mistakes. 
4. I encountered a problem with making the dark theme stick after refreshing the page, even though the console didn't show an error. I learned that I needed to save the theme using localStorage and then load the saved theme when the page opened again. 
5. One thing I don't know how to change yet is the style and colors of my buttons. Right now, they have the default style and colors, which don't really match my website's color theme. I would like to learn how to customize them so they match the rest of my webpage better. 