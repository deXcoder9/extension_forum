const cardContaier = document.getElementById("cardContainer");
let titleCountNumber = 0;
const fetchData = async () => {
  let res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  let postData = await res.json();
  //   console.log(postData);
  let data = postData.posts;
  createPost(data);
  //   searchThrough(data);
};

function createPost(postInfo) {
  //   console.log(postInfo);
  const titleAdded = document.getElementById("cardSelections");
  const titleCount = document.getElementById("title-count");
  //   console.log(cardContaier);
  for (let post of postInfo) {
    // console.log(titleCountNumber);
    // console.log(post.id);

    const postItem = document.createElement("div");
    if (post.isActive) {
      postItem.innerHTML = `
          <div id="${post.id}" class="flex lg:flex-row flex-col gap-x-5 mb-4 card-bg p-10">
          <div class="relative flex justify-start "><img class="lg:h-[72px] h-[100px]  rounded-lg"
          src="${post.image}" alt="">
          <p class="h-3 w-3  bg-[#10B981] rounded-full absolute -top-1 -right-1"></p>
          </div>
          <div class=" mx-auto flex flex-col justify-start">
          <div class="flex gap-4">
          <p class="card-topic">#${post.category}</p>
          <p class="card-topic">Author: ${post.author.name}</p>
          </div>
          <div class="lg:py-3">
          <h4 class="card-head">${post.title}</h4>
          </div>
          <div class="lg:pb-5">
          <p class="card-description lg:w-[560px] w-auto ">${post.description}</p>
          </div>
          <hr>
          <div class="flex justify-between my-4">
          <div class="flex gap-7">
          <p><i class="fa-regular fa-message" style="color: #b0b2b5;"></i> ${post.comment_count}</p>
                  <p><i class="fa-regular fa-eye" style="color: #a5a9b1;"></i> ${post.view_count}</p>
                  <p><i class="fa-regular fa-clock" style="color: #a7acb4;"></i> ${post.posted_time}</p>
                  </div>
                  <div class="w-10 bg-[#10B981] flex justify-center items-center rounded-3xl">
                  <img class="h-6  " src="mail.png" alt="mail">
                  </div>
                  </div>
                  </div>
                  </div>
                  `;
    } else {
      postItem.innerHTML = `
                    <div id="${post.id}" class="flex lg:flex-row flex-col gap-x-5 mb-4 card-bg p-10">
                    <div class="relative flex justify-start "><img class="lg:h-[72px] h-[100px]  rounded-lg"
                    src="${post.image}" alt="">
                    <p class="h-3 w-3 bg-red-600 rounded-full absolute -top-1 -right-1"></p>
                    </div>
                    <div class=" mx-auto flex flex-col justify-start">
                    <div class="flex gap-4">
                    <p class="card-topic">#${post.category}</p>
                    <p class="card-topic">Author: ${post.author.name}</p>
                    </div>
                    <div class="lg:py-3">
                    <h4 class="card-head">${post.title}</h4>
                    </div>
                    <div class="lg:pb-5">
                    <p class="card-description lg:w-[560px] w-auto ">${post.description}</p>
                    </div>
                    <hr>
                    <div class="flex justify-between my-4">
                    <div class="flex gap-7">
                    <p><i class="fa-regular fa-message" style="color: #b0b2b5;"></i> ${post.comment_count}</p>
                    <p><i class="fa-regular fa-eye" style="color: #a5a9b1;"></i> ${post.view_count}</p>
                    <p><i class="fa-regular fa-clock" style="color: #a7acb4;"></i> ${post.posted_time}</p>
                    </div>
                    <div class="w-10 bg-[#10B981] flex justify-center items-center rounded-3xl">
                    <img class="h-6  " src="mail.png" alt="mail">
                    </div>
                    </div>
                    </div>
                    </div>
                    `;
    }
    cardContaier.appendChild(postItem);
    // document.getElementById(post.id).classList.remove("card-border");

    const card = document.getElementById(post.id);

    card.addEventListener("click", () => {
      titleCountNumber++;
      const cards = cardContaier.querySelectorAll(".flex");
      cards.forEach((card) => {
        card.classList.remove("card-border");
      });

      const titleCard = document.createElement("div");
      titleCard.classList.add(
        "flex",
        "gap-5",
        "justify-between",
        "items-center",
        "px-3",
        "bg-white",
        "py-4",
        "rounded-md",
        "mb-3"
      );
      titleCard.innerHTML = `<h3 class="w-[212px] text-[16px] font-bold ">${post.title}</h3>
     <p><i class="fa-regular fa-eye" style="color: #a5a9b1;"></i> <span>${post.view_count}</span></p>`;
      titleAdded.appendChild(titleCard);
      titleCount.innerText = titleCountNumber;
      card.classList.add("card-border");
    });
  }
}

const loadData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  //   console.log(data);
  displyingLatestNews(data);
};

const displyingLatestNews = (data) => {
  const latestNEwsContaienr = document.getElementById("latest__post_container");
  for (const news of data) {
    // console.log(news.cover_image);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="mt-6">
          <div
            class="w-[373px] rounded-xl h-[470px] px-3 lg:px-7 py-5 border-[1px] border-gray-700 flex flex-col space-y-3">
            <img class="rounded-xl" src="${news.cover_image}" alt="">
            <p>${
              news.author.posted_date
                ? news.author.posted_date
                : "No published date"
            }</p>
            <h3 class="font-bold text-[18px]">${news.title}</h3>
            <p class="text-gray-500">${news.description} </p>
            <div class="flex gap-4 items-center ">
              <img class="h-[44px] rounded-full" src="${news.profile_image}"
                alt="">
              <div>
                <h4>Cameron Williamson</h4>
                <p>${
                  news.author.designation ? news.author.designation : "Unknown"
                }</p>
              </div>
            </div>
          </div>
        </div>
    `;
    latestNEwsContaienr.appendChild(newDiv);
  }
};

// function searchThrough(ass) {
//   const inputField = document.getElementById("inputField");
//   const inputFields = inputField.value.toLowerCase();
//   console.log(inputFields);
//   for (lil of ass) {
//     console.log(lil);
//     const categories = lil.category.toLowerCase();
//     console.log(categories);
//     console.log(categories);
//     if (inputFields === categories) {
//       //   console.log("matched");
//     } else {
//       //   console.log("error");
//     }
//   }
// }

async function searchThrough() {
  toggleLoading(true);

  const inputField = document.getElementById("inputField");
  const inputFields = inputField.value.toLowerCase();
  const titleAdded = document.getElementById("cardSelections");
  const titleCount = document.getElementById("title-count");

  //   console.log(inputFields);
  let res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputFields}`
  );
  let postData = await res.json();
  //   console.log(postData.posts);
  let data = postData.posts;
  //   console.log(data);

  cardContaier.innerHTML = "";
  for (let newnews of data) {
    // console.log(newnews);
    const categories = newnews.category.toLowerCase();
    const postItem = document.createElement("div");

    if (inputFields === categories) {
      if (newnews.isActive) {
        postItem.innerHTML = `
          <div id="${newnews.id}" class="flex lg:flex-row flex-col gap-x-5 mb-4 card-bg p-10">
          <div class="relative flex justify-start "><img class="lg:h-[72px] h-[100px]  rounded-lg"
          src="${newnews.image}" alt="">
          <p class="h-3 w-3  bg-[#10B981] rounded-full absolute -top-1 -right-1"></p>
          </div>
          <div class=" mx-auto flex flex-col justify-start">
          <div class="flex gap-4">
          <p class="card-topic">#${newnews.category}</p>
          <p class="card-topic">Author: ${newnews.author.name}</p>
          </div>
          <div class="lg:py-3">
          <h4 class="card-head">${newnews.title}</h4>
          </div>
          <div class="lg:pb-5">
          <p class="card-description lg:w-[560px] w-auto ">${newnews.description}</p>
          </div>
          <hr>
          <div class="flex justify-between my-4">
          <div class="flex gap-7">
          <p><i class="fa-regular fa-message" style="color: #b0b2b5;"></i> ${newnews.comment_count}</p>
                  <p><i class="fa-regular fa-eye" style="color: #a5a9b1;"></i> ${newnews.view_count}</p>
                  <p><i class="fa-regular fa-clock" style="color: #a7acb4;"></i> ${newnews.posted_time}</p>
                  </div>
                  <div class="w-10 bg-[#10B981] flex justify-center items-center rounded-3xl">
                  <img class="h-6  " src="mail.png" alt="mail">
                  </div>
                  </div>
                  </div>
                  </div>
                  `;
      } else {
        postItem.innerHTML = `
                    <div id="${newnews.id}" class="flex lg:flex-row flex-col gap-x-5 mb-4 card-bg p-10">
                    <div class="relative flex justify-start "><img class="lg:h-[72px] h-[100px]  rounded-lg"
                    src="${newnews.image}" alt="">
                    <p class="h-3 w-3 bg-red-600 rounded-full absolute -top-1 -right-1"></p>
                    </div>
                    <div class=" mx-auto flex flex-col justify-start">
                    <div class="flex gap-4">
                    <p class="card-topic">#${newnews.category}</p>
                    <p class="card-topic">Author: ${newnews.author.name}</p>
                    </div>
                    <div class="lg:py-3">
                    <h4 class="card-head">${newnews.title}</h4>
                    </div>
                    <div class="lg:pb-5">
                    <p class="card-description lg:w-[560px] w-auto ">${newnews.description}</p>
                    </div>
                    <hr>
                    <div class="flex justify-between my-4">
                    <div class="flex gap-7">
                    <p><i class="fa-regular fa-message" style="color: #b0b2b5;"></i> ${newnews.comment_count}</p>
                    <p><i class="fa-regular fa-eye" style="color: #a5a9b1;"></i> ${newnews.view_count}</p>
                    <p><i class="fa-regular fa-clock" style="color: #a7acb4;"></i> ${newnews.posted_time}</p>
                    </div>
                    <div class="w-10 bg-[#10B981] flex justify-center items-center rounded-3xl">
                    <img class="h-6  " src="mail.png" alt="mail">
                    </div>
                    </div>
                    </div>
                    </div>
                    `;
      }
      cardContaier.appendChild(postItem);
      const card = document.getElementById(newnews.id);

      card.addEventListener("click", () => {
        titleCountNumber++;
        const cards = cardContaier.querySelectorAll(".flex");
        cards.forEach((card) => {
          card.classList.remove("card-border");
        });

        const titleCard = document.createElement("div");
        titleCard.classList.add(
          "flex",
          "gap-5",
          "justify-between",
          "items-center",
          "px-3",
          "bg-white",
          "py-4",
          "rounded-md",
          "mb-3"
        );
        titleCard.innerHTML = `<h3 class="w-[212px] text-[16px] font-bold ">${newnews.title}</h3>
       <p><i class="fa-regular fa-eye" style="color: #a5a9b1;"></i> <span>${newnews.view_count}</span></p>`;
        titleAdded.appendChild(titleCard);
        titleCount.innerText = titleCountNumber;
        card.classList.add("card-border");
      });
    } else {
      cardContaier.innerHTML =
        "<p class='text-red-700 font-bold'>No category found!</p>";
    }
  }
  toggleLoading(false);
}

const toggleLoading = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");

    setTimeout(function () {
      loadingSpinner.classList.add("hidden");
    }, 2000);
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

fetchData();
loadData();
