define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** init defined for FrmFeed **/
    AS_Form_d24b416735f8494f9a1ac32914c607f2: function AS_Form_d24b416735f8494f9a1ac32914c607f2(eventobject) {
        var self = this;
    },
    /** postShow defined for FrmFeed **/
    AS_Form_e282d4e2f5d24611952276b6744eea30: function AS_Form_e282d4e2f5d24611952276b6744eea30(eventobject) {
        var self = this;

        function MOVE_ACTION____c5375abaeffd4997a2125c37e9714599_Callback() {}
        self.view.Navigation.FlexContainer0c57e2ed31f6e41.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0px",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____c5375abaeffd4997a2125c37e9714599_Callback
        });
    }
});