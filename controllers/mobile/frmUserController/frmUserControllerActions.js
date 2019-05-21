define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** preshow defined for frmUser **/
    AS_Form_i3856261835b4aceab68a57cc0be7fec: function AS_Form_i3856261835b4aceab68a57cc0be7fec(eventobject) {
        var self = this;
    },
    /** postshow defined for frmUser **/
    AS_Form_fa476c76d062487f9d0dd8a362ebc1f4: function AS_Form_fa476c76d062487f9d0dd8a362ebc1f4(eventobject) {
        var self = this;

        function MOVE_ACTION____ia1fdca8c0ef4dda809a042e7f5778bb_Callback() {}
        self.view.Navigation.FlexContainer0c57e2ed31f6e41.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "60%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_BOTH,
            "duration": 0.25,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": MOVE_ACTION____ia1fdca8c0ef4dda809a042e7f5778bb_Callback
        });
    },
    /** preShow defined for frmUser **/
    AS_Form_a70c6862fcc7426fbe8d31a6140a659e: function AS_Form_a70c6862fcc7426fbe8d31a6140a659e(eventobject) {
        var self = this;
        // alert("selectedMember");
        this.view.Head.lblHeadTitle.text = selectedMember.username;
        this.view.lblMemberName.text = selectedMember.name;
        this.view.lblMemberDescription.text = selectedMember.desc;
    }
});