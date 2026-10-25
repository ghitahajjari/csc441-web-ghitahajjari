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