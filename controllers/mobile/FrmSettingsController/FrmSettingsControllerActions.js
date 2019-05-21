define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** init defined for FrmFeed **/
    AS_Form_d24b416735f8494f9a1ac32914c607f2: function AS_Form_d24b416735f8494f9a1ac32914c607f2(eventobject) {
        var self = this;
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
    /** onTextChange defined for txtOldPassword **/
    AS_TextField_d765b9d8e3bf46fe836988538c199219: function AS_TextField_d765b9d8e3bf46fe836988538c199219(eventobject, changedtext) {
        var self = this;
        var oldPassword = this.view.txtOldPassword.text;
        var regexPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
        if (oldPassword === null || !regexPassword.test(oldPassword)) {
            this.view.flxOldPasswordLine.skin = sknError;
        } else {
            this.view.flxOldPasswordLine.skin = sknUnderline;
        }
    }
});