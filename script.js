console.log("checking");
let file = [
  {
    previewImage:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cat.jpeg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title:
      "a man and a woman trying to cook a meal together in a modern kitchen.jpg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "bali-kelingking-beach-plastic-removal-drive.key",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "NextByk Investor Pitch 2022.ppt",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "interns-performance-report-may-2022.key",
  },
];

let activeId = 0;
let prevactiveid = 0;

//function which changes the color of active image box blue
function changeActive(prevactiveid, activeId) {
  let prevactivebox = document.getElementById(JSON.stringify(prevactiveid));
  let activebox = document.getElementById(JSON.stringify(activeId));
  if (prevactivebox != null) prevactivebox.className = "logo";
  if (activebox != null) activebox.className += " activebox";
 
}

// loading the list menu on left
let list = document.querySelector("#list");
for (elem in file) {
  list.innerHTML += `
  <li class="logo" id=${elem}>
  <img src="${file[elem].previewImage}" />
  <p>${file[elem].title}</p>
</li>`;
}

// selecting the image and title to be displayed
let displayImage = document.getElementById("displayImage");
let displayTitle = document.getElementById("displayTitle");

//setting the initial image
displayImage.src = file[0].previewImage;
displayTitle.innerText = file[0].title;
displayTitle.title = 0;
displayImage.title = 0;

changeActive(prevactiveid, activeId);

// function which displays image on clicking
for (let index = 0; index < list.children.length; index++) {
  let elem = document.getElementById(JSON.stringify(index));

  elem.addEventListener("click", function () {
    displayImage.src = elem.children[0].src;
    displayTitle.innerHTML = elem.children[1].innerText;
    displayTitle.title = index;
    displayImage.title = index;
    prevactiveid = activeId;
    activeId = index;
    changeActive(prevactiveid, activeId);
  });
}

// eventListner for aditing title
displayTitle.addEventListener("blur", function () {
  let elem = document.getElementById(displayTitle.title);
  console.log(elem, displayTitle.value);
  elem.children[1].innerText = displayTitle.value;
});

// adding eventlistner for upArrow and DownArrow
document.addEventListener("keydown", function (e) {
  let index = displayTitle.title - 0;
  let elem = document.getElementById(JSON.stringify(index));
  // elem.className='logo';
  // console.log(elem.className)

  if (index>=0 && index<file.length-1 &&(e.key === "ArrowDown" )) {
    prevactiveid = activeId;
    activeId = index + 1;
    changeActive(prevactiveid, activeId);
    displayImage.src = file[index + 1].previewImage;
    displayTitle.innerText = file[index + 1].title;
    displayTitle.title = index + 1;
    displayImage.title = index + 1;
  } else if (e.key === "ArrowUp" && index>=1 && index<file.length) {
    prevactiveid = activeId;
    activeId = index - 1;
    changeActive(prevactiveid, activeId);
    displayImage.src = file[index - 1].previewImage;
    displayTitle.innerText = file[index - 1].title;
    displayTitle.title = index - 1;
    displayImage.title = index - 1;
  }
});
