class User {
    constructor(name, course, occupation, nickname, profileImage) {
      this.name = name;
      this.course = course;
      this.occupation = occupation;
      this.nickname = nickname;
      this.profileImage = profileImage;
    }
  }
  
  // Creating an array of users
  const users = [
    new User(
      "Felix Kuluchumila",
      "BSc. Computer Networks and Information Security Engineering",
      "Application Logic Programmer",
      "Üb̈̂ü̂n̈̂ẗ̂ü̂J̈̂r̈",
      "../../webProject/profiles/profile1.jpg"
    ),
    new User(
      "Bright Peter",
      "BSc. Computer Networks and Information Security Engineering",
      "Front End Developer",
      "BriGHT",
      "../../webProject/profiles/profile10.jpg"
    ),
    new User(
      "Erick Alex",
      "BSc. Computer Networks and Information Security Engineering",
      "Penetration Tester",
      "AlienX",
      "../../webProject/profiles/profile2.jpg"
    ),
    new User(
      "Maliatabu Rwaho",
      "BSc. Computer Networks and Information Security Engineering",
      "Project coordinator",
      "Mr Paul",
      "../../webProject/profiles/profile3.jpg"
    ),
    new User(
      "Philimon Mbunda ",
      "BSc. Computer Networks and Information Security Engineering",
      "Designer",
      "Social Engineer",
      "../../webProject/profiles/profile4.jpg"
    ),
    new User(
      "Esther Odhiambo",
      "BSc. Computer Networks and Information Security Engineering",
      "Artist",
      "Esbonth",
      "../../webProject/profiles/profile5.jpg"
    ),
    new User(
      "Ammarah Barajah ",
      "BSc. Computer Networks and Information Security Engineering",
      "Designer",
      "Amarrah",
      "../../webProject/profiles/profile6.jpg"
    ),
    new User(
      "Steven Chawala",
      "BSc. Computer Networks and Information Security Engineering",
      "Penetration Tester",
      "Steveh",
      "../../webProject/profiles/profile7.jpg"
    ),
    new User(
      "Anold Tweve",
      "BSc. Computer Networks and Information Security Engineering",
      "Front End Developer",
      "Trevox",
      "../../webProject/profiles/profile8.jpg"
    ),
    new User(
      "Sigfrid Michael",
      "BSc. Computer Networks and Information Security Engineering",
      "Content Creator",
      "Cisco Reborn",
      "../../webProject/profiles/profile9.jpg"
    ),
  
  ];
  
// storing the html elements on variables for easy access 
  const nameElement = document.getElementById("name");
  const courseElement = document.getElementById("course");
  const occupationElement = document.getElementById("occupation");
  const nicknameElement = document.getElementById("nickname");
  const profileImageElement = document.getElementById("profile-image");
  const changeButton = document.getElementById("changeButton");
  
  // Set initial user
  let currentUserIndex = 0;
  setUserInformation(currentUserIndex);
  
  // Event listener for button click
  changeButton.addEventListener("click", () => {
    // Increment index and check if it exceeds the array length
    currentUserIndex = (currentUserIndex + 1) % users.length;
    console.log(currentUserIndex);
    setUserInformation(currentUserIndex);
  });
  
  // Function to set user information based on index
  function setUserInformation(index) {
    const currentUser = users[index];
    nameElement.textContent = currentUser.name;
    courseElement.textContent = `Course: ${currentUser.course}`;
    occupationElement.textContent = `Occupation: ${currentUser.occupation}`;
    nicknameElement.textContent = `Nickname: ${currentUser.nickname}`;
    profileImageElement.src = currentUser.profileImage;
  }