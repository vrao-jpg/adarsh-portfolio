export const scrollIntoViewWithOffset = (selector, offset) => {
  window.scrollTo({
    behavior: "smooth",
    top:
      document.querySelector(selector).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  });
};

export const mailTo = () => {
  window.location = "mailto:kadarsh103.ak@gmail.com";
};

export const navigateToPage =
  (url, newPage = true) =>
  () => {
    console.log("open");
    window.open(url, newPage ? "_blank" : "");
  };
