var hideFooterLinkA = document.querySelector(
  "footer .links .community h3.link-a"
);
var linkWrapperA = document.querySelector(
  "footer .links .community .link-wrapper-a"
);

var hideFooterLinkB = document.querySelector(
  "footer .links .community h3.link-b"
);
var linkWrapperB = document.querySelector(
  "footer .links .community .link-wrapper-b"
);

var hideFooterLinkC = document.querySelector(
  "footer .links .community h3.link-c"
);
var linkWrapperC = document.querySelector(
  "footer .links .community .link-wrapper-c"
);

hideFooterLinkA.addEventListener("click", (e) => {
  if(linkWrapperA.classList.contains('visible')){
    linkWrapperA.classList.remove('visible');
    hideFooterLinkA.classList.remove('open');
  } else {
    linkWrapperA.classList.add('visible');
    hideFooterLinkA.classList.add('open');
  }
});

hideFooterLinkB.addEventListener("click", (e) => {
  if(linkWrapperB.classList.contains('visible')){
    linkWrapperB.classList.remove('visible');
    hideFooterLinkB.classList.remove('open')
  } else {
    hideFooterLinkB.classList.add('open')
    linkWrapperB.classList.add('visible');
  }
});

hideFooterLinkC.addEventListener("click", (e) => {
  if(linkWrapperC.classList.contains('visible')){
    linkWrapperC.classList.remove('visible');
    hideFooterLinkC.classList.remove('open')
  } else {
    hideFooterLinkC.classList.add('open')
    linkWrapperC.classList.add('visible');
  }
});
