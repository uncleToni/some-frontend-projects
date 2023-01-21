window.addEventListener('scroll', e => {
  //идея в передаче значения переменной --scrollTop в css для натройки скорости скролла
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
});