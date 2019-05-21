define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onrowclick defined for segmentMembers **/
    AS_Segment_d47a99be96e249e998ae958c1a047497: function AS_Segment_d47a99be96e249e998ae958c1a047497(eventobject, sectionNumber, rowNumber) {
        var self = this;
        selectedRow = this.view.segmentMembers.selectedRowItems[0];
        selectedMember = {
            id: selectedRow.memberId.text,
            username: selectedRow.lblUserName.text,
            name: selectedRow.lblName.text,
            path: selectedRow.memberPath.text
        }
        var ntf = new kony.mvc.Navigation("frmUser");
        ntf.navigate({
            "segmentMembers_selectedRowIndex": self.view.segmentMembers.selectedRowIndex,
            "segmentMembers_memberId": kony.visualizer.getPropertyValue(self.view.segmentMembers.selectedItems[0].memberId, "text"),
            "segmentMembers_lblName": kony.visualizer.getPropertyValue(self.view.segmentMembers.selectedItems[0].lblName, "text"),
            "_meta_": {
                "eventName": "onrowclick",
                "widgetId": "segmentMembers"
            }
        });
    },
    /** onmapping defined for FrmUsers **/
    AS_Form_aae38e4bb4d540b3b874b4440b36318a: function AS_Form_aae38e4bb4d540b3b874b4440b36318a(eventobject) {
        var self = this;

        function SHOW_ALERT__g9305c4cca6a4e00880e0aa384f28553_True() {}
        function INVOKE_OBJECT_SERVICE__f786c086270f4ec4b4f1a9a0d6074ab0_Callback(members) {
            kony.application.dismissLoadingScreen();
            if (members.opstatus == 0) {
                var tempCollection7886 = [];
                var tempData302 = members.records;
                for (var each in tempData302) {
                    tempCollection7886.push({
                        "lblUserName": {
                            "text": tempData302[each]["username"]
                        },
                        "lblName": {
                            "text": tempData302[each]["name"]
                        },
                        "memberId": {
                            "text": (tempData302[each]["id"]).toString()
                        },
                        "memberPath": {
                            "text": tempData302[each]["path"]
                        },
                    });
                }
                self.view.segmentMembers.setData(tempCollection7886);
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