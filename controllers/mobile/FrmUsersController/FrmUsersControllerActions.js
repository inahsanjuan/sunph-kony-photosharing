define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onMapping defined for FrmUsers **/
    AS_Form_aae38e4bb4d540b3b874b4440b36318a: function AS_Form_aae38e4bb4d540b3b874b4440b36318a(eventobject) {
        var self = this;

        function SHOW_ALERT__g9305c4cca6a4e00880e0aa384f28553_True() {}
        function INVOKE_OBJECT_SERVICE__f786c086270f4ec4b4f1a9a0d6074ab0_Callback(members) {
            kony.application.dismissLoadingScreen();
            if (members.opstatus == 0) {
                var tempCollection5518 = [];
                var tempData6921 = members.records;
                for (var each in tempData6921) {
                    tempCollection5518.push({
                        "lblUserName": {
                            "text": tempData6921[each]["username"]
                        },
                        "lblName": {
                            "text": tempData6921[each]["name"]
                        },
                    });
                }
                self.view.Segment0j0278655db894a.setData(tempCollection5518);
            } else {
                function SHOW_ALERT__g9305c4cca6a4e00880e0aa384f28553_Callback() {
                    SHOW_ALERT__g9305c4cca6a4e00880e0aa384f28553_True();
                }
                kony.ui.Alert({
                    "alertType": constants.ALERT_TYPE_INFO,
                    "alertTitle": null,
                    "yesLabel": null,
                    "noLabel": null,
                    "alertIcon": null,
                    "message": "Data fetch failed! Please try again later.",
                    "alertHandler": SHOW_ALERT__g9305c4cca6a4e00880e0aa384f28553_Callback
                }, {
                    "iconPosition": constants.ALERT_ICON_POSITION_LEFT
                });
            }
        }
        kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (members_inputparam == undefined) {
            var members_inputparam = {};
        }
        members_inputparam["serviceID"] = "FirebaseService$members$get";
        members_inputparam["options"] = {
            "access": "online",
            "CRUD_TYPE": "get"
        };
        var members_httpheaders = {};
        members_inputparam["httpheaders"] = members_httpheaders;
        var members_httpconfigs = {};
        members_inputparam["httpconfig"] = members_httpconfigs;
        FirebaseService$members$get = mfobjectsecureinvokerasync(members_inputparam, "FirebaseService", "members", INVOKE_OBJECT_SERVICE__f786c086270f4ec4b4f1a9a0d6074ab0_Callback);
    }
});