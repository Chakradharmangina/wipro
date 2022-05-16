const nav = document.querySelector("nav");
if (nav) {
  let btn = "";
  let name1 = "";
  if (localStorage.getItem("name")) {
    btn = `<a href="./logout.html">Logout</a>`;
    name1 = `<span class='right'>Hi ${localStorage.getItem("name")}!</span>`;
  } else {
    btn = `<a href="./login.html">Login</a>`;
  }
  nav.innerHTML += btn;
  nav.innerHTML += name1;
}

const loginGaurd = () => {
  if (!localStorage.getItem("name")) {
    window.location.href = "login.html";
  }
};

const addComment = (subject) => {
  let comment = prompt("Enter comment").trim();
  let savedData = localStorage.getItem("comments");
  savedData = savedData ? JSON.parse(savedData) : {};
  const newComment = { comment, time: new Date() };
  savedData[subject] =
    savedData[subject] == undefined
      ? [newComment]
      : [...savedData[subject], newComment];
  localStorage.setItem("comments", JSON.stringify(savedData));
};

const getActivities = () => {
  let activities = [];
  if (localStorage.getItem("activities")) {
    activities = JSON.parse(localStorage.getItem("activities"));
    return activities;
  }
  activities = ["React", "Angular", "Python", "SQL"];
  localStorage.setItem("activities", JSON.stringify(activities));
  return activities;
};

const renderActivities = () => {
  const activities = getActivities();
  const el = document.querySelector("#activities");
  let html = "";
  activities.forEach((act) => {
    html += `<a href="#" onclick="addComment('${act}')" style="color:green">${act}</a><br>`;
  });
  el.innerHTML = html;
};

const addActivity = () => {
  const el = document.querySelector("#ac_name");
  let activity = el.value.trim();
  let activities = JSON.parse(localStorage.getItem("activities") ?? "[]");
  activities.push(activity);
  localStorage.setItem("activities", JSON.stringify(activities));
  alert("Activity added");
};
