const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notification = new Notification("Example Demo", {
        body: "This is more text",
        data: { hello: "world" },
        icon: "b image.jpg",
      });

      notification.addEventListener("error", (e) => {
        alert(e);
      });
    }
  });
});

let notification;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    notification = new Notification("Come back pleasee", {
      body: "PLEASEEEE",
      tag: "come back",
    });
  } else {
    notification.close();
  }
});
