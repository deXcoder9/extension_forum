const fetchData = async () => {
  let res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  let postData = await res.json();
  //   console.log(postData);
  let data = postData.posts;

  createPost(data);
};

function createPost(postInfo) {
  const cardContaier = document.getElementById("cardContainer");
  //   console.log(cardContaier);
  for (let post of postInfo) {
    console.log(post.id);

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
      const cards = cardContaier.querySelectorAll(".flex");
      cards.forEach((card) => {
        card.classList.remove("card-border");
      });

      card.classList.add("card-border");
    });
  }
}

fetchData();
