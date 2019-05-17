define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** postShow defined for FrmUserProfile **/
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
    }
});