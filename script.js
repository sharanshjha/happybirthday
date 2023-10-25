var arr = [
    {
      dp: "./images/photo_10_2023-10-23_21-27-38.jpg",
      story:
        "./images/photo_10_2023-10-23_21-27-38.jpg",
    },
    {
      dp: "./images/photo_1_2023-10-23_21-27-38.jpg",
      story:
        "./images/",
    },
    {
      dp: "./images/photo_1_2023-10-23_21-27-54.jpg",
      story:
        "./images/photo_1_2023-10-23_21-27-54.jpg",
    },
    {
      dp: "./images/photo_2_2023-10-23_21-27-38.jpg",
      story:
        "./images/photo_2_2023-10-23_21-27-38.jpg",
    },
    {
      dp: "./images/photo_2_2023-10-23_21-27-54.jpg",
      story:
        "./images/photo_2_2023-10-23_21-27-54.jpg",
    },
    {
        dp: "./images/photo_3_2023-10-23_21-27-38.jpg",
        story:
          "./images/photo_3_2023-10-23_21-27-38.jpg",
      },
      {
        dp: "./images/photo_9_2023-10-23_21-27-38.jpg",
        story:
          "./images/",
      },
      {
        dp: "./images/photo_4_2023-10-23_21-27-38.jpg",
        story:
          "./images/",
      },
      {
        dp: "./images/photo_4_2023-10-23_21-27-54.jpg",
        story:
          "./images/",
      },
      {
        dp: "./images/photo_5_2023-10-23_21-27-38.jpg",
        story:
          "./images/",
      },
      {
        dp: "./images/photo_6_2023-10-23_21-27-38.jpg",
        story:
          "./images/",
      },
      {
        dp: "./images/photo_8_2023-10-23_21-27-38.jpg",
        story:
          "./images/",
      },
  ];
  
  var storiyan = document.querySelector("#storiyan");
  var clutter = "";
  
  arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
  <img id ="${idx}" src = "${elem.dp}"alt= "">
    </div>`;
  });
  
  storiyan.innerHTML = clutter;
  
  storiyan.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${
      arr[dets.target.id].story
    })`;
    setTimeout(function () {
      document.querySelector("#full-screen").style.display = "none";
    }, 3000);
  });
  