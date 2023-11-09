"use strict";
const plusEL = document.querySelectorAll(".plus");
const minusEL = document.querySelectorAll(".minus");

const voteEL = document.querySelectorAll(".number");

const replyEL = document.querySelector(".rep");
const replyUserThreeEL = document.querySelector(".rep-two");

const replyUserOneMobile = document.querySelector("#reply-user-one");
const replyUserThreeMobile = document.querySelector("#reply-user-three");

const userFourDeleteEL = document.querySelector(".del-des");
const userFourDeleteMobileEL = document.querySelector("#delete-mobile");
const userFourMobileContent = document.querySelector(
  "#user-four-mobile-content"
);
const updateMobileEL = document.querySelector("#update-mobile");
const overlayEL = document.querySelector(".overlay");
const modalEL = document.querySelector(".modal");
const deleteCommentBtn = document.querySelector(".btn-delete");
const cancelBtn = document.querySelector(".btn-cancel");
const editBtn = document.querySelector(".ed");
const editMobileBtn = document.querySelector("#edit-mobile");
const userFourContent = document.querySelector(".user-four-content");
const updateEL = document.querySelector("#upp");

console.log(editMobileBtn);

const replyFieldEL = document.querySelectorAll(".reply-field");
//  STATE VARIABLES
const [a, b] = replyFieldEL;

// destructuring the plus elements
const [
  userOneMobilePlus,
  userOneDesktopPlus,
  userTwoMobilePlus,
  userTwoDesktopPlus,
  userThreeMobilePlus,
  userThreeDesktopPlus,
  userFourMobilePlus,
  userFourDesktopPlus,
] = plusEL;

// console.log(userTwoDesktopPlus);
// destructuring the minus elements
const [
  userOneMobileMinus,
  userOneDesktopMinus,
  userTwoMobileMinus,
  userTwoDesktopMinus,
  userThreeMobileMinus,
  userThreeDesktopMinus,
  userFourMobileMinus,
  userFourDesktopMinus,
] = minusEL;

// destructuring the vote elements
const [
  userOneMobileVote,
  userOneDesktopVote,
  userTwoMobileVote,
  userTwoDesktopVote,
  userThreeMobileVote,
  userThreeDesktopVote,
  userFourMobileVote,
  userFourDesktopVote,
] = voteEL;
// commentVote = 0;
// console.log(commentVote);
// userOneDesktopVote.textContent = commentVote;

// DESKTOP MODE FUNCTIONALITY
let commentVoteUserOne = 12;
let commentVoteUserTwo = 5;
let commentVoteUserThree = 4;
let commentVoteUserFour = 2;
// # USER ONE FUNCTIONALITY
// ## USER ONE DESKTOP
userOneDesktopPlus.addEventListener("click", function () {
  userOneDesktopVote.textContent = commentVoteUserOne;
  commentVoteUserOne++;
});
userOneDesktopMinus.addEventListener("click", function () {
  userOneDesktopVote.textContent = commentVoteUserOne;
  commentVoteUserOne--;
});
replyEL.addEventListener("click", function () {
  a.classList.toggle("hidden");
});

// ## USER ONE MOBILE
userOneMobilePlus.addEventListener("click", function () {
  userOneMobileVote.textContent = commentVoteUserOne;
  commentVoteUserOne++;
});
userOneMobileMinus.addEventListener("click", function () {
  userOneMobileVote.textContent = commentVoteUserOne;
  commentVoteUserOne--;
});
replyUserOneMobile.addEventListener("click", function () {
  a.classList.toggle("hidden");
});

// # USER TWO FUNCTIONALITY
// ## USER TWO DESKTOP
userTwoDesktopPlus.addEventListener("click", function () {
  userTwoDesktopVote.textContent = commentVoteUserTwo;
  commentVoteUserTwo++;
});
userTwoDesktopMinus.addEventListener("click", function () {
  userTwoDesktopVote.textContent = commentVoteUserTwo;
  commentVoteUserTwo--;
});

// ## USER TWO MOBILE
userTwoMobilePlus.addEventListener("click", function () {
  userTwoMobileVote.textContent = commentVoteUserTwo;
  commentVoteUserTwo++;
});
userTwoMobileMinus.addEventListener("click", function () {
  userTwoMobileVote.textContent = commentVoteUserTwo;
  commentVoteUserTwo--;
});

// # USER THREE FUNCTIONALITY
// ## USER THREE DESKTOP
userThreeDesktopPlus.addEventListener("click", function () {
  userThreeDesktopVote.textContent = commentVoteUserThree;
  commentVoteUserThree++;
});
userThreeDesktopMinus.addEventListener("click", function () {
  userThreeDesktopVote.textContent = commentVoteUserThree;
  commentVoteUserThree--;
});
replyUserThreeEL.addEventListener("click", function () {
  b.classList.toggle("hidden");
});

// ## USER THREE MOBILE
userThreeMobilePlus.addEventListener("click", function () {
  userThreeDesktopVote.textContent = commentVoteUserThree;
  commentVoteUserThree++;
});
userThreeMobileMinus.addEventListener("click", function () {
  userThreeDesktopVote.textContent = commentVoteUserThree;
  commentVoteUserThree--;
});
replyUserThreeMobile.addEventListener("click", function () {
  b.classList.toggle("hidden");
});

// # USER FOUR FUNCTIONALITY
// ## USER FOUR DESKTOP
userFourDesktopPlus.addEventListener("click", function () {
  userFourDesktopVote.textContent = commentVoteUserFour;
  commentVoteUserFour++;
});
userFourDesktopMinus.addEventListener("click", function () {
  userFourDesktopVote.textContent = commentVoteUserFour;
  commentVoteUserFour--;
});
userFourDeleteEL.addEventListener("click", function () {
  overlayEL.classList.remove("hidden");
  modalEL.classList.remove("hidden");
});

cancelBtn.addEventListener("click", function () {
  overlayEL.classList.add("hidden");
  modalEL.classList.add("hidden");
});
deleteCommentBtn.addEventListener("click", function () {
  overlayEL.classList.add("hidden");
  modalEL.classList.add("hidden");
});

editBtn.addEventListener("click", function () {
  userFourContent.classList.add("hidden");
  updateEL.classList.remove("hidden");
});

// ## USER FOUR MOBILE
userFourMobilePlus.addEventListener("click", function () {
  userFourMobileVote.textContent = commentVoteUserFour;
  commentVoteUserFour++;
});
userFourMobileMinus.addEventListener("click", function () {
  userFourMobileVote.textContent = commentVoteUserFour;
  commentVoteUserFour--;
});
userFourDeleteMobileEL.addEventListener("click", function () {
  overlayEL.classList.remove("hidden");
  modalEL.classList.remove("hidden");
});

editMobileBtn.addEventListener("click", function () {
  userFourMobileContent.classList.add("hidden");
  updateMobileEL.classList.remove("hidden");
});
