export default {
  /**  
   * 将以base64的图片url数据转换为Blob  
   * @param urlData  
   * 用url方式表示的base64图片数据  
   */
  convertBase64UrlToBlob(base64) {
      var urlData = base64.dataURL;
      var type = base64.type;
      var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte
      //处理异常,将ascii码小于0的转换为大于0  
      var ab = new ArrayBuffer(bytes.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      return new Blob([ab], {
        type: type
      });
    },
    /* 
     * 图片的绝对路径地址 转换成base64编码 如下代码： 
     */
    getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
      var dataURL = canvas.toDataURL("image/" + ext);
      return {
        dataURL: dataURL,
        type: "image/" + ext
      };
    }
}