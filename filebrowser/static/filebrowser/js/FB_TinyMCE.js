var FileBrowserDialogue = {
    init : function () {
        // remove tinymce stylesheet.
        var allLinks = document.getElementsByTagName("link");
        allLinks[allLinks.length-1].parentNode.removeChild(allLinks[allLinks.length-1]);
    },
    fileSubmit : function (FileURL) {
        var URL = FileURL;
        
        // insert information now
        top.tinymce.activeEditor.windowManager.getParams().oninsert(URL);
        
        // change width/height & show previewi
/*
        if (win.ImageDialog){
            if (win.ImageDialog.getImageData)
                win.ImageDialog.getImageData();
            if (win.ImageDialog.showPreviewImage)
                win.ImageDialog.showPreviewImage(URL);
        }
  */      
        // close popup window
        top.tinymce.activeEditor.windowManager.close();
    }
}

//tinyMCEPopup.onInit.add(FileBrowserDialogue.init, FileBrowserDialogue);

