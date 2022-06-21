class User{
    constructor(nickname, login, password, status, cartContent = [], profileImageURL="https://english.nkums.ac.ir/Template/IT_NewTemplate/images/noUserImage.jpg", profileThemeImageURL="https://s3.amazonaws.com/gazelle.cdn.yolocare.com/sites/364/2018/01/26085912/yolo-2000x1000-4.jpg"){
        this.nickname = nickname;
        this.login = login;
        this.password = password;
        this.status = status;
        this.cartContent = cartContent;
        this.profileImageURL = profileImageURL;
        this.profileThemeImageURL = profileThemeImageURL;
        this.posts = [];
    }

    changeData(editedProfile, newPasswordData){
        this.nickname = editedProfile.nickname;
        this.profileImageURL = editedProfile.profileImageURL;
        this.profileThemeImageURL = editedProfile.profileThemeImageURL;
        this.password = newPasswordData.newPassword ?  newPasswordData.newPassword : this.password;
        //...    
    }

    addPost(postText){
        let newPost = { text: postText, date: new Date(), author: this.nickname };
        this.posts.push(newPost);
    }

    deletePost(post){
        for(let i = 0; i < this.posts.length; i++){
            if(post.date == this.posts[i].date){
                this.posts.splice(i, 1);
                console.log("deleting");
                break;
            }
        }
    }
}

export default User;