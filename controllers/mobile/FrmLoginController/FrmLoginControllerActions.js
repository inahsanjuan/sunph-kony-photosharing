define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** ontouchend defined for lblSignup **/
    AS_Label_e8f29e6441a743b6968bb6dc96b8fad5: function AS_Label_e8f29e6441a743b6968bb6dc96b8fad5(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FrmRegister");
        ntf.navigate();
    },
    /** onClick defined for btnLogin **/
    AS_Button_a5af1388b03940e4a28b74a8ed7c0cd6: function AS_Button_a5af1388b03940e4a28b74a8ed7c0cd6(eventobject) {
        var self = this;
        var email = this.view.txtEmail.text;
        var password = this.view.txtPassword.text;
        email = email.trim();
        var users = kony.store.getItem("Users");
        for (i = 0; i < users.length; i++) {
            if (users[i].email == email && users[i].password == password) {
                new kony.mvc.Navigation("FrmFeed").navigate();
                new kony.ui.Toast({
                    text: "Login success.",
                    duration: constants.TOAST_LENGTH_SHORT
                }).show();
                return;
            }
        }
        this.view.flxEmailLine.skin = sknError;
        this.view.flxPasswordLine.skin = sknError;
        new kony.ui.Toast({
            text: "Invalid Email or Password.",
            duration: constants.TOAST_LENGTH_SHORT
        }).show();
    },
    /** onTextChange defined for txtEmail **/
    AS_TextField_dd1c2a209d604c3ead90c4cec983ca80: function AS_TextField_dd1c2a209d604c3ead90c4cec983ca80(eventobject, changedtext) {
        var self = this;
        this.view.flxEmailLine.skin = sknUnderline;
    },
    /** onTextChange defined for txtPassword **/
    AS_TextField_i6a66244a67943d48ef9f686c450d5f5: function AS_TextField_i6a66244a67943d48ef9f686c450d5f5(eventobject, changedtext) {
        var self = this;
        this.view.flxPasswordLine.skin = sknUnderline;
    }
});