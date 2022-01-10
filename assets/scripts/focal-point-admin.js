import FocalPointPicker from './modules/focal-point-picker';

(function($) {
	let _view;

	$(document).ready(() => {
		/**
		 * Attachment Details
		 */
		const initAttachmentDetails = element => {
			// Append focal point selector
			const mediaView   = wp.media.template('attachment-details-focal-point');
			const mediaParent = element.find('.thumbnail');
			const mediaImage  = mediaParent.find('img');

			// Set image focal elements
			if (mediaView && mediaParent.length && mediaImage.length) {
				mediaParent.prepend(mediaView);
				const mediaWrapper = mediaParent.find('.image-focal__wrapper');
				mediaImage.prependTo(mediaWrapper);
			}
		};

		/**
		 * Save Focal Point
		 */
		const saveFocalPoint = attachment => {
			$.ajax({
				url: wp?.ajax?.settings?.url,
				method: 'POST',
				data: {
					action: 'save_focal_point',
					attachment: attachment?.attributes
				}
			})
			.done(data => {
				// Update view on succesfull save
				_view.update();
			})
			.fail((jqXHR, textStatus) => {
				console.log('save focal point error', jqXHR);
			})
			.always(() => {
				console.log(_view.controller);
				_view.controller.setState('edit-image');
			});
		};

		/**
		 * Extended view changed
		 */
		const changeView = view => {
			const type       = view.model.get('type');
			const focalPoint = view.model.get('focalPoint');

			if (type === 'image') {
				Focal.position = focalPoint;
				Focal.positionFocalPoint(focalPoint);
			}
		};

		const Attachment = wp.media.view.Attachment;
		const AttachmentDetails = wp.media.view.Attachment.Details;
		const TwoColumnView = wp.media.view.Attachment.Details.TwoColumn;

		/**
		 * Extend Attachment Details TwoColumn view (Media Library Modal)
		 */
		if (TwoColumnView) {
			wp.media.view.Attachment.Details.TwoColumn = TwoColumnView.extend({
				// Add focalPoint change listener
				initialize: function() {
					_view = this;
					this.model.on('change:focalPoint', this.change, this);
				},
				// Init extended template
				render: function() {
					Attachment.prototype.render.apply(this, arguments);
					const id   = this.model.get('id');
					const type = this.model.get('type');

					if (type === 'image') {
						initAttachmentDetails(this.$el);
						FocalPointPicker.init(this);
					}
				},
				// Re-init focal point on input change
				change: function() {
					changeView(this);
				},
				// Update view on focal point js change
				update: function() {
					this.views.detach();
					this.model.fetch();
					this.views.render();
				}
			});
		}

		/**
		 * Extend Attachment Details view (Post Edit Modal)
		 */
		if (AttachmentDetails) {
			wp.media.view.Attachment.Details = AttachmentDetails.extend({
				// Add focalPoint change listener
				initialize: function() {
					_view = this;
					Attachment.prototype.initialize.apply(this, arguments);
					this.model.on('change:focalPoint', this.change, this);
				},
				// Init extended template
				render: function() {
					Attachment.prototype.render.apply(this, arguments);
					const id   = this.model.get('id');
					const type = this.model.get('type');

					if (type === 'image') {
						initAttachmentDetails(this.$el);
						FocalPointPicker.init(this);
					}
				},
				// Re-init focal point on input change
				change: function() {
					changeView(this);
				},
				// Update view on focal point js change
				update: function() {
					console.log('AttachmentDetails update', this.model);
					this.views.detach();
					this.model.fetch();
					this.views.render();
				},
				// On update image
				updateAll: function() {
					console.log('AttachmentDetails updateAll', this.model);
				}
			});
		}
	});
})(jQuery);
