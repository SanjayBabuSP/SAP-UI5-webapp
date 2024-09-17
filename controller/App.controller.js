sap.ui.define([
    "sap/ui/core/mvc/Controller" //modules

], function (Controller){
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {

        // onInit(){ // initilisation event that occurs when app load 
        //     //set the data model on the view
        //     let oData = {
        //         recipient: {
        //             name:"UI5"
        //         }
        //     }; 
        //     let oModel = new JSONModel(oData);
        //     this.getView().setModel(oModel);
        //     //set i18n model on view
        //     let i18nModel = new ResourceModel({
        //         bundleName:"sap.ui.demo.walkthrough.i18n.i18n",
        //         supportedLoacales:[""],
        //         fallbackLocale:""
        //     });
        //     this.getView().setModel(i18nModel,"i18n");
        // },

    });
});