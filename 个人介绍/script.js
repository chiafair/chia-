// 平滑滚动：点击导航栏链接，平滑跳转到对应的section
document.querySelectorAll(".nav-item a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // 阻止默认跳转行为
    // 获取目标section的ID
    const targetId = this.getAttribute("href");
    // 获取目标section的位置
    const targetSection = document.querySelector(targetId);
    // 平滑滚动到目标位置
    window.scrollTo({
      top: targetSection.offsetTop - 80, // 减去导航栏的高度，避免内容被遮挡
      behavior: "smooth", // 平滑滚动，面试常问的JS DOM操作考点
    });
  });
});

const backToTop = document.createElement("button");
backToTop.innerHTML = "↑";
backToTop.style.position = "fixed";
backToTop.style.bottom = "2rem";
backToTop.style.right = "2rem";
backToTop.style.padding = "0.5rem 1rem";
backToTop.style.border = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.backgroundColor = "#3498db";
backToTop.style.color = "#fff";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

// 滚动时显示/隐藏回到顶部按钮
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// 点击回到顶部
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
