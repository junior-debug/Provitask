<template>
    <div class="topLogin">
        <form action="" method="post" class="formContainer ">
            <input type="text" id="emailAddress" class="input lightGray" placeholder="Email address">
            <input type="text" id="Password" class="input lightGray" placeholder="Password">
            <p>Did you forgetyour password?</p>
            <div class="button fontItalic white font3em">
                <h2>Log In</h2>
            </div>
            <p>Did you sign up with Facebook or Google? Tap here to <br>
            create a password</p>
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
    border: 1px solid black;
    margin-top: 6em;
    border-top-left-radius: 55px;
    border-top-right-radius: 55px;
    border-bottom-left-radius: 55px;
    border-bottom-right-radius: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    width: 38%;
    height: 7%;
    background-color: #180692;
    border: none;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}
</style>