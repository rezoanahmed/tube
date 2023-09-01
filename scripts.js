const loadVideos = async (id) => {
    const result = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const json = await result.json();
    const videos = json.data;
    allVideos(videos)
    // console.log(videos)
}

const allVideos = (video) => {
    console.log(video)
    let videoContainer = document.getElementById("videos");
    videoContainer.textContent='';
    video.forEach(element => {
        console.log(element);

        let video = document.createElement("div");
        video.innerHTML = `
        <div class="w-full bg-base-100 shadow-md">
          <img src="${element.thumbnail}" alt="${element.thumbnail}" class="h-[12.5rem] w-full overflow-auto" />
          <div class="ml-4 flex gap-4">
            <div class="mt-5">
              <img src="${element.authors[0].profile_picture}" class="rounded-full w-[3rem] h-[3rem]" alt="image">
            </div>
            <div class="py-3">
              <h2 class="text-xl font-medium">${element.title}</h2>
              <div class="flex items-center gap-1">
              <p>${element.authors[0].profile_name}</p>
              <p>${element.authors[0].verified ? `<img src="images/verified.png" class="h-[1rem]"/>` :"" }</p>
              </div>
              <p>${element.others.views} Views</p>
            </div>
          </div>
        </div>
        `;
        videoContainer.appendChild(video);
    });
}
loadVideos(1000);


// action buttons
document.getElementById('all').classList.add("active");
function music(){
    // id 1001
    loadVideos(1001);

}
function comedy(){
    // id 1003
    loadVideos(1003);
}
function drawing(){
    loadVideos(1005);
    document.getElementById("warning").classList.remove("hidden");    
}

function sortByView(){
    
}
