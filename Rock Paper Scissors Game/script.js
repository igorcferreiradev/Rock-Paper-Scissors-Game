// Get DOM elements
const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        // Add active class to the selected image
        image.classList.add("active");

        // Set initial CPU image to rock
        cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";

        // Remove the "active" class from other option images
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        // Add class to start animation
        gameContainer.classList.add("start");

        // Set a timeout to delay the result calculation
        let time = setTimeout(() => {
            // Remove animation class after result calculation
            gameContainer.classList.remove("start");

            // Get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;
            // Set user image to the selected option image
            userResult.src = imageSrc;

            // Generate a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);
            // Array of CPU image options
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            // Set CPU image to a random option
            cpuResult.src = cpuImages[randomNumber];

            // Assign a letter to the CPU choice (R for rock, P for paper, S for scissors)
            let cpuValue = ["R", "P", "S"][randomNumber];
            // Assign a letter to the user's choice (based on index)
            let userValue = ["R", "P", "S"][index];

            // Define possible outcomes
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            // Determine and display the result
            let outcomeValue = outcomes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`;

            // Reset images and result message after 2 seconds
            setTimeout(() => {
                userResult.src = "images/rock.png";
                cpuResult.src = "images/rock.png";
                result.textContent = "Let's Play!!"; // Reset result message
            }, 6000); // Delay of 2 seconds
        }, 2500); // Delay for result calculation
    });
});
