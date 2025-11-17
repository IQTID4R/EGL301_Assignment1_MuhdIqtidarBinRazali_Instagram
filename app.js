//=====================================================
// EGL301 Assignment
// By: Muhd Iqtidar Bin Razali
// =====================================================

const instagramDB = require("./Iqtidar_Instagram.js");
// Run using:  node app.js

//------------------------
// Function 1 (AddPost)
//------------------------
console.log("\n=========AddPost===========");
console.log(instagramDB.AddPost("john","[dog.jpg,asd.jpeg]","ohh","#fqe,#afw,#"));

//------------------------
// Function 2 (AddComment)
//------------------------
console.log("\n=========AddComment===========");
console.log(instagramDB.AddComment("john","post_1","lisa","awfaw"));

//------------------------
// Function 3 (DeleteComment)
//------------------------
console.log("\n=========DeleteComment===========");
console.log(instagramDB.deleteComment("john","post_1","Lisa","n1"))

//----------------------------
// Function 4 (viewAllCommentsByPost)
//----------------------------
console.log("\n=========ViewAllCommentByPost===========");
console.log(instagramDB.viewAllCommentsByPost("john","post_1"));

//----------------------------
// Function 5 (DeleteUserPost)
//----------------------------
console.log("\n=========DeleteUserPost===========");
console.log(instagramDB.deletePostByUser("john","post_2"))

//----------------------------
// Function 6 (UpdatePostCaption)
//----------------------------
console.log("\n=========UpdatePostCaption===========");
console.log(instagramDB.updateCaptionPost("john","post_1","maoi waoi"));

//----------------------------
// Function 7 (ViewAllPostByUser)
//----------------------------
console.log("\n=========ViewAllPostByUser===========");
console.log(instagramDB.ViewAllPostByUser("john"))

