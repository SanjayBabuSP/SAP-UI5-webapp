sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment'
], function(Controller, MessageToast, Fragment) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {

        onShowHello(){
            //read message from i18n model
            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let sRecipient = this.getView().getModel().getProperty("/recipient/name")
            let sMsg = oBundle.getText("HelloMsg",[sRecipient])
            //read msg
            MessageToast.show(sMsg);
        },
        onOpenDialog : function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});