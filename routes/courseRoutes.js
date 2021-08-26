const fetch = require("node-fetch");
const keys = require("../config/dev");

const fetchCourses = async () => {
  const response = await fetch(
    "https://www.udemy.com/api-2.0/users/me/subscribed-courses/?fields[course]=completion_ratio,title,image_240x135,content_info&is_archived=false&max_progress=99.9&min_progress=0.1",
    {
      method: "GET",
      headers: {
        authorization: keys.udemyToken,
      },
    }
  );
  return await response.json();
};

module.exports = (app) => {
  app.get("/courses", async (req, res) => {
    const courses = await fetchCourses();
    res.send(courses);
  });
};
