<template>
    <div class="topLogin">
        <form action="" method="post" class="formContainer ">
            <img src="../../assets/img/Logo.png" alt="logo" style="width: 11em;padding-top: 4em;">
            <input type="text" id="emailAddress" class="input lightGray" placeholder="Email address">
            <input type="text" id="Password" class="input lightGray" placeholder="Password">
            <p class="fontBlack lightOrange" style="font-size: 1.3em;letter-spacing: 2px;">
                Did you forgetyour password?
            </p>
            <div class="button fontItalic white font3em">
                <h2 style="font-size: 2em;margin-top: 0px;margin-bottom: 0px;">Log In</h2>
            </div>
            <p class="fontBlack lightGray" style="padding-bottom: 4em;font-size: 1.3em;letter-spacing: 2px;">
                Did you sign up with Facebook or Google? <a href="" class="passwordLink lightOrange">Tap here to <br>
                create a password</a> 
            </p>
        </form>
    </div>
</template>
<style scoped>
.topLogin{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 84%;
}
.formContainer{
    width: 60%;
    height: 89%;
    background-color: white;
    margin-top: 6em;
    border-top-left-radius: 55px;
    border-top-right-radius: 55px;
    border-bottom-left-radius: 55px;
    border-bottom-right-radius: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.input{
    width: 20em;
    height: 2.3em;
    padding-left: 1em;
    font-size: 20px;
    border: 1px solid #8080805e;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}
.button{
    width: 50%;
    height: 7%;
    background-color: #180692;
    border: none;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.passwordLink{
    text-decoration: none;
}
</style>