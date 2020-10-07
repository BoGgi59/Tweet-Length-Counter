const calculateCharacter = () => {
  let tweet =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio et autem minus recusandae labore doloremque corrupti obcaecati amet veritatis asperiores suscipit quasi sequi dicta, fuga laboriosam sunt hic reprehenderit";
  let tweetCount = tweet.length; //counting number of cgaraters in text
  let tweetLeft = 300 - tweetCount; // count number of remaining characters
  let nameOfUser = prompt("Please enter your name", ""); // taking name of user
  console.log(
    `You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`
  );

  tweet = prompt(
    "Please write your text here untill 300 characters and we will calculate written and remaining characters",
    ""
  );
  tweetCount = tweet.length;
  tweetLeft = 300 - tweetCount;
  confirm(
    `You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`
  );
  alert(`Well Done ${nameOfUser}`);
};

// Invoke the function when button is clicked

btn.addEventListener("click", calculateCharacter);
