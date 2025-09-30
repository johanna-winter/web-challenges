console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

const socialMediaTitle = "Best of September";
const socialMediaContent =
  "These are our favourite memories from September 2025.";
let socialMediaLikes = 150;
const socialMediaCreator = "Johanna";
const isReported = true;

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

console.log(
  socialMediaTitle,
  socialMediaContent,
  socialMediaLikes,
  socialMediaCreator,
  isReported
);

socialMediaLikes += 1;
console.log(socialMediaLikes);
