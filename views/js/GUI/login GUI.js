class Login {
    get email (){
        return $('input[name="username"]');
    }

    get password()
    {
        return $('input[name="username"]');
    }
    get login(){
        return $('button*=login');

        }
        login (email,password){
            this.email.setValue(email);
            this.password.setValue(password);
            this.login.click();
        }
        isloggedIn(){
            return browser.geturl()!='http://localhost:3306/login'
        }
    }

    module.exports = login;
