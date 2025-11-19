
instagramDB={ //Dummy Data to test on
        john:{
            post_1:{
                pictures:"sky.jpg",
                caption:"my number 1 fan",
                comments:[
                    { user: "Lisa", text: "n1" },
                    { user: "mary", text: "ohwow" }
                ],
                hashtags:[]
            },
            post_2:{
                pictures:["dog.jpg","sky.jpg"],
                caption:"my number 1 fan",
                comments:[],
                hashtags:["#wow","#nice"]
        },},
        Mary:{
            post_1:{
                pictures:["cat.jpg","Smiley.jpg"],
                caption:"My Favourites",
                comments:[
                    { user: "pico", text: "Wah" },
                ],
                hashtags:[]
            },
        }
    };


module.exports={
// 1) -------- ADD A POST TO AN ACCOUNT USER --------------------
AddPost(AccountName,pictures, caption ,hashtags){
    if (!instagramDB[AccountName] || AccountName==""){ //Check if user exist
        instagramDB[AccountName]={} //User doesn't exist, create an empty object for their posts
    }

    if (pictures=="" || !pictures){ 
        // A picture is mandatory for a post
        return "Unable to uplaod Post .Please have a picture "; 
    }

    if (!caption){
        //Ensure caption input exist
        return "Please input a caption";
    }

    if (!hashtags){
        //Ensure hashtag input exist
        return "Please input hashtag";
    }

    //keys= [post_1 ,post_2] or keys=[]
    let keys= Object.keys(instagramDB[AccountName]) 

    if (keys.length === 0) {
        // First post for this user
        postNumber = "post_1";  
    }

    else {
         // Index of the last post in keys[]
        let PostbyUser = keys.length - 1

        // Get the key of the last post (e.g., 'post_2')
        let postIndex = keys[PostbyUser] 

        // Extract the number, increment it, and format the new postNumber
        postNumber="post_"+(parseInt(postIndex.slice(5))+1).toString();    
    }

    // Process the pictures string: remove brackets/spaces and split by comma
    let Pics = pictures.replace(/[\[\]\s]/g, "").split(","); 

    // Process the hashtags string: remove brackets/spaces, split by comma, and remove any leftover commas in tags
    let hash = hashtags.replace(/[\[\]\s]/g, "").split(",").map(tag => tag.replace(/,/g, ""));

    // Add the new post to the instagramDB->User->New Post
    instagramDB[AccountName][postNumber]={
        caption:caption,
        hashtags:hash,
        pictures:Pics,
        comments:[],
    }

    return "New Post successfully added by "+ AccountName;
},

// 2)-----------ADD COMMENT TO AN ACCOUNT USER POST----------
AddComment(AccountName, post , user ,comment){
    if(!instagramDB[AccountName]){
        return "No Account Found";  //Ensure account input exist
    }
    if(!instagramDB[AccountName][post]){
        return "No post found by "+ AccountName //Ensure post input exist
    }
    if(comment=="" ||!comment){
        return "Invalid comment input"; //Ensure comment input exist
    }
    if(!user){
        return "Invalid user input" //Ensure user input exist
    }

    // Add the new comment by pushing to the Account post's comments array
    instagramDB[AccountName][post].comments.push({
        user: user,
        text: comment
    });

    return "Comment by "+ user +" has been added to "+AccountName+"'s " +post  
},



// 3)----------DELETE A USER COMMENT IN AN ACCOUNT USER POST--------------
deleteComment(AccountName, post , user ,comment){
    if(!instagramDB[AccountName]){
        //validate Account
        return "No Account Found";
    }
    if(!instagramDB[AccountName][post]){
        //validate post
        return "No post found by "+ AccountName
    }
    if(!user){
        //validate user
        return "Invalid User input";
    }
    if(!comment){
        //validate comment
        return "Invalid comment input";
    }
    
    let Allcomments = instagramDB[AccountName][post].comments;

    // Use filter to create a new array excluding the comment that matches both user and text
    let updatedComments = Allcomments.filter(findComment => {
    return !(findComment.user === user && findComment.text === comment);
        });

        // Check if the comment list size changed (meaning a comment was deleted)
        if (updatedComments.length < Allcomments.length) {
            instagramDB[AccountName][post].comments = updatedComments; // Replace old array with the new one
            return "Comment has been successfully deleted"
        
        } else {
            return "Comment does not exist"; // there is no comment matching both user and text was found
        }

    },

// 4)--------- VIEW ALL COMMENT ON AN ACCOUNT USER POST----------
viewAllCommentsByPost(accountName, post){
    // validate account
    if(!instagramDB[accountName] || accountName==""){
        return "Invalid AccountName input!"; 
    }
    // validate post
    if(!instagramDB[accountName][post] || post==""){
        return "Invalid Post input!";
    }
    //validate comment
    if(instagramDB[accountName][post].comments.length==0){
        return "there is no comments for " + accountName + "'s "+ post;
    }
    let AllComment = instagramDB[accountName][post].comments;

    // Prepare the output array, starting with a header
    let output=[`--- Comments for ${accountName}'s ${post} ---`];     
    AllComment.forEach(comment => {

    // Iterate over comments and format each one as "user:comment"
        output.push(comment.user+" : "+ comment.text);  
    });

    // Join the array into a single string with newline separators
    return output.join("\n"); 

},

// 5)---------DELETE AN ACCOUNT USER POST-------------
deletePostByUser(AccountName,post){
    if(!instagramDB[AccountName] || AccountName==""){
        //validate account
        return "Invalid AccountName input! ";
    }
    if(!instagramDB[AccountName][post] || post==""){
        //validate post
        return "Invalid Post input! ";
    }

    // Delete a selected account user's post
    delete instagramDB[AccountName][post];

    return AccountName+"'s "+post +" has been successfully deleted"

},

// 6) ------UPDATE CAPTION OF A ACCOUNT USER POST----------
updateCaptionPost(AccountName,Post,NewCaption){
    if(!instagramDB[AccountName] || AccountName==""){
        //validate account
        return "Invalid AccountName input!";
    }
    if(!instagramDB[AccountName][Post] || Post==""){
        //validate post
        return "Invalid Post input!";
    }
    if (!NewCaption){
        //ensure caption input exist
        return "Please enter a caption! Try again";
    }

    // Update the caption property of the account user's post
    instagramDB[AccountName][Post].caption =NewCaption

    return "Updated caption: '" + NewCaption + "' has been successfully updated for " + AccountName + "'s " +Post
    
},

// 7)---------VIEW ALL POST BY ACCOUNT USER--------------
ViewAllPostByUser(AccountName){
    if(!instagramDB[AccountName] || AccountName==""){
        //validate user
        return "User does not exist! Try again";
    }

    const UserPost= instagramDB[AccountName];
    
    // Iterate over each post key in the user's post object
    Object.keys(UserPost).forEach(PostDetails =>{
    const postData = UserPost[PostDetails]

    // Check the comments. If there is more than 0 comments, count the total Comments else total comments=0
    let commentCount =postData.comments.length>0 ?postData.comments.length:postData.comments.length=0

    //If the picture is an array, join using "," input:"dog, sky " output: dog , sky else output: dog 
    let pictureDisplay = Array.isArray(postData.pictures) ? postData.pictures.join(' , ') : postData.pictures;

    // Log the formatted post details to the console
    console.log(`\n `+AccountName +`'s `+ `${PostDetails}`);
    console.log(`- Pictures: ${pictureDisplay}`);
    console.log(`- Caption: ${postData.caption}`);
    console.log(`- Comments Count: ${commentCount}`);
    console.log(`- Tags: ${postData.hashtags.join(" ")}`);

    });

    return `\nSuccessfully displayed all posts for ${AccountName}.`;
},

}
            



