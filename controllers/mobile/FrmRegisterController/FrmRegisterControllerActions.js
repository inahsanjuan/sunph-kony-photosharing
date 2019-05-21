define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onclick defined for btnRegister **/
    AS_Button_efea5a76bff1462381003bc314e41184: function AS_Button_efea5a76bff1462381003bc314e41184(eventobject) {
        var self = this;
        var email = this.view.txtEmail.text;
        var username = this.view.txtUsername.text;
        var fullName = this.view.txtName.text;
        var password = this.view.txtPassword.text;
        var cPassword = this.view.txtCPassword.text;
        if (email === null) {
            new kony.ui.Toast({
                text: "Email should not be empty.",
                duration: constants.TOAST_LENGTH_SHORT
            }).show();
            return;
        }
        if (username === null) {
            new kony.ui.Toast({
                text: "Username should not be empty.",
                duration: constants.TOAST_LENGTH_SHORT
            }).show();
            return;
        }
        if (fullName === null) {
            new kony.ui.Toast({
                text: "Full Name should not be empty.",
                duration: constants.TOAST_LENGTH_SHORT
            }).show();
            return;
        }
        if (password === null) {
            new kony.ui.Toast({
                text: "Password should not be empty.",
                duration: constants.TOAST_LENGTH_SHORT
            }).show();
            return;
        }
        if (cPassword === null) {
            new kony.ui.Toast({
                text: "Confirm Password should not be empty.",
                duration: constants.TOAST_LENGTH_SHORT
            }).show();
            return;
        }
        email = email.trim();
        username = username.trim();
        fullName = fullName.trim();
        var regexPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
        var regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        //-- Validations
        if (!regexEmail.test(email)) {
            new kony.ui.Toast({
                text: "Email is invalid.",
                duration: constants.TOAST_LENGTH_SHORT
            }).show();
            return;
        }
        if (!regexPassword.test(password)) {
            new kony.ui.Toast({
                text: "Password is invalid.",
                duration: constants.TOAST_LENGTH_SHORT
            }).show();
            return;
        }
        if (password != cPassword) {
            new kony.ui.Toast({
                text: "Password confirmation does not match.",
                duration: constants.TOAST_LENGTH_SHORT
            }).show();
            return;
        }
        //-- Create User
        user = new User(email, username, fullName, password);
        //-- Add to local database
        var users = kony.store.getItem("Users");
        if (users === null) {
            users = [];
        }
        // Check if email exists in users
        //--prompt error
        for (i = 0; i < users.length; i++) {
            if (users[i].email == user.email) {
                new kony.ui.Toast({
                    text: "Email already exists.",
                    duration: constants.TOAST_LENGTH_SHORT
                }).show();
                return;
            }
            if (users[i].username == user.username) {
                new kony.ui.Toast({
                    text: "Username is already taken.",
                    duration: constants.TOAST_LENGTH_SHORT
                }).show();
                return;
            }
        }
        users.push(user);
        kony.store.setItem("Users", users);
        new kony.ui.Toast({
            text: "Registration Complete." + users.length,
            duration: constants.TOAST_LENGTH_SHORT
        }).show();
        this.view.txtEmail.text = "";
        this.view.txtUsername.text = "";
        this.view.txtName.text = "";
        this.view.txtPassword.text = "";
        this.view.txtCPassword.text = "";
        new kony.mvc.Navigation("FrmLogin").navigate();
    },
    /** ontextchange defined for txtEmail **/
    AS_TextField_c8f280b468f044e7b5a3535a5d075a21: function AS_TextField_c8f280b468f044e7b5a3535a5d075a21(eventobject, changedtext) {
        var self = this;
        var email = this.view.txtEmail.text;
        var regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (email === null || !regexEmail.test(email)) {
            this.view.flxEmailLine.skin = sknError;
        } else {
            this.view.flxEmailLine.skin = sknUnderline;
        }
    },
    /** ontextchange defined for txtUsername **/
    AS_TextField_c8f0ef42853e4eef8cf5a31889311745: function AS_TextField_c8f0ef42853e4eef8cf5a31889311745(eventobject, changedtext) {
        var self = this;
        var username = this.view.txtUsername.text;
        if (username === null) {
            this.view.flxUsernameLine.skin = sknError;
        } else {
            this.view.flxUsernameLine.skin = sknUnderline;
        }
    },
    /** ontextchange defined for txtName **/
    AS_TextField_a951c8e616504589b6c9d1a844798140: function AS_TextField_a951c8e616504589b6c9d1a844798140(eventobject, changedtext) {
        var self = this;
        var fullName = this.view.txtName.text;
        if (fullName === null) {
            this.view.flxNameLine.skin = sknError;
        } else {
            this.view.flxNameLine.skin = sknUnderline;
        }
    },
    /** ontextchange defined for txtPassword **/
    AS_TextField_j093f47e82b941d395a3305c998fdc80: function AS_TextField_j093f47e82b941d395a3305c998fdc80(eventobject, changedtext) {
        var self = this;
        var password = this.view.txtPassword.text;
        var regexPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
        if (password === null || !regexPassword.test(password)) {
            this.view.flxPasswordLine.skin = sknError;
        } else {
            this.view.flxPasswordLine.skin = sknUnderline;
        }
    },
    /** ontextchange defined for txtCPassword **/
    AS_TextField_a50be3f2fce84a63bae22d63109d06d1: function AS_TextField_a50be3f2fce84a63bae22d63109d06d1(eventobject, changedtext) {
        var self = this;
        var cPassword = this.view.txtCPassword.text;
        var password = this.view.txtPassword.text;
        if (cPassword === null || cPassword != password) {
            this.view.flxCPasswordLine.skin = sknError;
        } else {
            this.view.flxCPasswordLine.skin = sknUnderline;
        }
    },
    /** ontouchend defined for imgLogo **/
    AS_Image_j803f22208744eb8bc61f942030e580d: function AS_Image_j803f22208744eb8bc61f942030e580d(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FrmFeed");
        ntf.navigate();
    }
});