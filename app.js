// login In
document.getElementById('login-button').addEventListener('click',
    function(){
        document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
    function(){
        document.querySelector('.bg-modal').style.display = 'none';
    });

// Sign In
document.getElementById('sign-in').addEventListener('click',
    function(){
        document.querySelector('.bg-modal1').style.display = 'flex';
        document.querySelector('.bg-modal').style.display = 'none';
});

document.querySelector('.close1').addEventListener('click',
    function(){
        document.querySelector('.bg-modal1').style.display = 'none';
    });


// pop-up

document.getElementById('pop-up').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = "flex"
});

document.querySelector('.close').addEventListener('click',
    function(){
        document.querySelector('.bg-modal').style.display = 'none';
    });

 //Sign-in POP
 document.getElementById('signin-pop').addEventListener('click',
 function(){
     document.querySelector('.bg-modal1').style.display = "flex"
     document.querySelector('.bg-modal').style.display = 'none';

 });
 