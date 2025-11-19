# Assignment 1 Instagram

This Node.js application is a simple imitation of the instagram application using a custom module **(Iqtidar_instagram.js)**.

## References
Instagram application (https://www.instagram.com/)

---

## Functions

This module allows users to manage posts and comments for various accounts:

1. **Add Post:** Create a new post with pictures, a caption, and hashtags.
2. **Add Comment:** Add a comment to any existing post.
3. **Delete Comment:** Remove a specific comment from a post.
4. **View Comments:** See all comments associated with a particular post.
5. **Delete Post:** Remove an entire post from an account.
6. **Update Caption:** Modify the caption of an existing post.
7. **View All Posts:** Display a summary of all posts made by a specific account.

> 📝 **Note:** This module operates entirely **without a traditional database**, storing all data in memory.

---

## Setup Guide

Follow these steps to get the application running locally:

1.  **Install Node.js:** Ensure you have Node.js installed on your system.
2.  **Project Folder:** Create a new project directory.
3.  **Copy Module:** Place the file `Iqtidar_Instagram.js` inside your project folder.
4.  **Create Test File:** Create a test file (e.g., `app.js`) to interact with the module's functions.
5.  **Require Module:** Add the following line at the top of your test file:
    ```javascript
    const instagramDB = require("./Iqtidar_Instagram.js");
    ```

---

## Function Reference


### 1. `AddPost(AccountName, Picture, Caption, Hashtags)`
Purpose: Adds a new post to the specified account.

* **Multiple Pictures:** Use commas to separate picture names (e.g., `"sky,dog"`).
* **Multiple Hashtags:** Use commas to separate hashtags (e.g., `"#YES,#TREND"`).
* **Validation:** `AccountName` is **case-sensitive** . Check if `Picture` , `Caption` and `Hashtag` exist.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `AccountName` | `String` | The user account creating the post. |
| `Picture` | `String` | The name(s) of the picture(s). |
| `Caption` | `String` | The post's description/caption. |
| `Hashtags` | `String` | The tag(s) associated with the post. |

### 2. `AddComment(AccountName, Post, User, Comment)`
Purpose: Adds a comment to a post (your own or another user's).

* **Validation:** Checks if the `AccountName` (post owner) , `Post` ,`User` and `Comment` exist.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `AccountName` | `String` | The owner of the post being commented on. |
| `Post` | `String` | The name/identifier of the post. |
| `User` | `String` | The name of the user leaving the comment. |
| `Comment` | `String` | The content of the comment. |

### 3. `deleteComment(AccountName, Post, User, Comment)`
Purpose: Allows the post owner to delete an unwanted comment.

* **Validation:** Checks for the existence of the `AccountName`, `Post`, `User`, and the exact `Comment` text.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `AccountName` | `String` | The owner of the post. |
| `Post` | `String` | The name/identifier of the post. |
| `User` | `String` | The user who made the comment to be deleted. |
| `Comment` | `String` | The exact content of the comment to be deleted. |

### 4. `viewAllCommentsByPost(AccountName, Post)`
Purpose: Retrieves and displays all comments for a specific post.

* **Validation:** Checks for the existence of the `AccountName` and `Post`.
* **No Comments:** If no comments are found, it returns a message (e.g., "There is no comments for john's post\_1").

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `AccountName` | `String` | The owner of the post. |
| `Post` | `String` | The name/identifier of the post. |

### 5. `deletePostByUser(AccountName, Post)`
Purpose: Deletes an entire post of the selected account.

* **Validation:** Checks for the existence of the `AccountName` and `Post`.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `AccountName` | `String` | The owner of the post. |
| `Post` | `String` | The name/identifier of the post to delete. |

### 6. `updateCaptionPost(AccountName, Post, NewCaption)`
Purpose: Modifies the caption of an existing post.

* **Validation:** Checks for the existence of the `AccountName` and `Post`.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `AccountName` | `String` | The owner of the post. |
| `Post` | `String` | The name/identifier of the post. |
| `NewCaption` | `String` | The updated caption text. |

### 7. `ViewAllPostByUser(AccountName)`
Purpose: Lists all posts made by a specific account.

* **Output:** For each post, it will show the **post name, pictures, caption, total comments, and hashtags**.
* **Validation:** Checks for the existence of the `AccountName`.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `AccountName` | `String` | The account name whose posts will be viewed. |