let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', (e)=>{
    let userText = searchUser.value;
    if(userText != ''){
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data =>{
                // console.log(data);
                if(data.message == 'Not Found'){
                    //show alert
                }
                else{
                    //show profile
                    console.log(data);
                    ui.showProfile(data);
                }
            })
    }
    else{
        //clear field 
    }
})