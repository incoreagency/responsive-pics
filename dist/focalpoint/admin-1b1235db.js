/*!
 * 
 * ResponsivePics
 * 
 * @author Booreiland
 * @version 1.4.0
 * @link https://responsive.pics
 * @license undefined
 * 
 * Copyright (c) 2022 Booreiland
 * 
 * This software is released under the [MIT License](https://github.com/booreiland/responsive-pics/blob/master/LICENSE)
 */
(window.wpackioresponsivePicsfocalpointJsonp=window.wpackioresponsivePicsfocalpointJsonp||[]).push([[0],[function(i,t,e){e(1),e(2),i.exports=e(3)},function(i,t,e){var o="responsivePicsdist".replace(/[^a-zA-Z0-9_-]/g,"");e.p=window["__wpackIo".concat(o)]},function(i,t){var e,o,n,a,d,c,s,l;e=jQuery,l={init:function(i){l.wrapper=a,l.picker=c,l.point=d,l.position=i,l.positionFocalPoint(i),l.setEventListeners()},setEventListeners:function(){l.picker.on("click",l.setFocalPoint),"function"==typeof e.ui.draggable&&l.point.draggable({cursor:"move",start:l.startDrag,drag:l.dragging,stop:l.stopDrag,containment:l.wrapper})},positionFocalPoint:function(i){l.point.css({left:"".concat(i.x,"%"),top:"".concat(i.y,"%"),position:"absolute"})},setFocalPoint:function(i){s.removeAttr("disabled");var t=i.offsetY-l.point.height()/2,e=i.offsetX-l.point.width()/2;l.position.x=Number(e/l.picker.width()*100).toFixed(2),l.position.y=Number(t/l.picker.height()*100).toFixed(2),l.positionFocalPoint(l.position)},startDrag:function(i){e("body").addClass("focal-point-dragging"),s.removeAttr("disabled")},dragging:function(i){l.position.x=Number(i.target.offsetLeft/l.picker.width()*100).toFixed(2),l.position.y=Number(i.target.offsetTop/l.picker.height()*100).toFixed(2)},stopDrag:function(i){e("body").removeClass("focal-point-dragging"),l.positionFocalPoint(l.position)}},e(document).ready((function(){var i=function(i,t){var e=wp.media.template("attachment-details-focal-point"),o=i.find(".thumbnail"),l=o.find("img");e&&o.length&&l.length&&(o.prepend(e),i.find(".image-focal"),a=i.find(".image-focal__wrapper"),d=i.find(".image-focal__point"),c=i.find(".image-focal__clickarea"),l.prependTo(a),n=a.find("img"));var p=wp.media.template("attachment-save-focal-point"),r=i.find(".attachment-actions");p&&(r.append(p),s=i.find("button.save-attachment-focal-point"))},t=function(){a.css({width:"".concat(n.width(),"px")})},p=function(i){var a=i.get("focalPoint");l.init(a),e(window).on("resize",t),n.on("load",(function(i){t(),l.init(a)})),s.on("click",(function(t){t.preventDefault(),function(i){var t,n,a,d={x:l.position.x,y:l.position.y};i.set({focalPoint:d}),e.ajax({url:null===(t=wp)||void 0===t||null===(n=t.ajax)||void 0===n||null===(a=n.settings)||void 0===a?void 0:a.url,method:"POST",data:{action:"save_focal_point",attachment:null==i?void 0:i.attributes}}).done((function(i){o.update()})).fail((function(i,t){console.log("save focal point error",i)})).always((function(){s.attr("disabled","disabled")}))}(i)}))},r=function(i){var t=i.model.get("type"),e=i.model.get("focalPoint");"image"===t&&(l.position=e,l.positionFocalPoint(e))},f=wp.media.view.Attachment.Details.TwoColumn;f&&(wp.media.view.Attachment.Details.TwoColumn=f.extend({initialize:function(){o=this,this.model.on("change:focalPoint",this.change,this)},render:function(){wp.media.view.Attachment.prototype.render.apply(this,arguments),this.model.get("id");var t=this.model.get("type");"image"===t&&(i(this.$el),p(this.model))},change:function(){r(this)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}}));var m=wp.media.view.EditImage;m&&(wp.media.view.EditImage=m.extend({initialize:function(i){console.log("EditImage initialize")},loadEditor:function(){console.log("EditImage loadEditor")}}));var g=wp.media.view.EditImage.Details;g&&(wp.media.view.EditImage.Details=g.extend({initialize:function(i){console.log("EditImage.Details initialize"),o=this,this.frame=i.frame,wp.media.view.EditImage.prototype.initialize.apply(this,arguments),this.model.on("change:focalPoint",this.change,this)},loadEditor:function(){console.log("EditImage.Details loadEditor"),wp.media.view.EditImage.prototype.loadEditor.apply(this,arguments),e(document).one("image-editor-ui-ready",this.imageLoaded)},imageLoaded:function(){e(document).off("image-editor-ui-ready",this.imageLoaded);var i=o.model.get("id");"image"===o.model.get("type")&&(function(i,t){var e=wp.media.template("image-edit-focal-point"),o=i.find("#imgedit-crop-".concat(t));e&&o.length&&(o.append(e),a=o,d=i.find(".image-focal__point"),c=i.find(".image-focal__clickarea"),n=a.find("img"));var l=wp.media.template("attachment-save-focal-point"),p=i.find(".imgedit-submit");l&&(p.append(l),s=i.find("button.save-attachment-focal-point"))}(o.$el,i),p(o.model))},back:function(){this.frame.content.mode("edit-metadata")},change:function(){r(this)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}}))}))},function(i,t,e){}],[[0,1]]]);
//# sourceMappingURL=admin-1b1235db.js.map