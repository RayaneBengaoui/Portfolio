//Import Images
import wave from "./images/music_app_project.png";
import room from "./images/project_1.png";

export const projectData = () => {
  return [
    {
      title: "Wave",
      img: wave,
      github_url: "https://github.com/RayaneBengaoui/Music-player",
      livesite_url: "https://rayanebengaoui.github.io/Music-player/",
      description:
        "Wave is a music application made with React. It introduced me to React props and how to pass them through each component. Thus I understand the power of Redux when the application start to get bigger and the props management can become a bit confusing. Moreover, I discovered my first hooks with useState to access/modify local states, useEffect to add some behavior on component mounting or even on state changes and useRef to modify an object like we would normally access it in JS with QuerySelector. Finally, I've learned a lot on audio components and their prebuilt functions to play/pause a song, get the length of the song and so on.",
      color: "#11595A",
    },
    {
      title: "Room Homepage",
      img: room,
      github_url:
        "https://github.com/RayaneBengaoui/FM_challenge10_room_homepage",
      livesite_url:
        "https://rayanebengaoui.github.io/FM_challenge10_room_homepage/",
      description:
        "This is a website 222222 geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr",
    },
  ];
};
