$(function(){
	//var $radios = $('input[type=radio]');
	var $radio_labels = $('label.i');
	var $layout_type = $('#content_layout_type');
	var $edit = $('.edit');
	var $modal = $('#modal');

	var $background = $('#background');
	var $font_fam = $('#font-family');
	var $font_col = $('#font-color');
	var $header_col = $('#header');
	var $header = $('header');
	var $main_col = $('#main-col');
	var $main = $('#main');
	var $body = $('body');

	var $close = $('#close');
	var $remove = $('#remove');

	$radio_labels.on('click',function(){
		var $this = $(this);
		var $this_radio = $this.find('input[type=radio]');
		$radio_labels.removeClass('checked');
		$this.addClass('checked');
		$layout_type.val($this_radio.val());
	});

	$edit.on('click',function(){
		var $this = $(this);
		var $this_option = $this.data('part');
		$modal.removeClass('nope');
		$modal.find('.options.'+$this_option).addClass('yepp');
	});

	$background.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$body.css('background-color',$this_val);
	});

	$font_fam.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$body.css('font-family',$this_val);
	});

	$font_col.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$body.css('color',$this_val);
	});

	$header_col.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$header.css('background-color',$this_val);
	});

	$main_col.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$main.css('background-color',$this_val);
	});

	$close.on('click',function(){
		$modal.addClass('nope');
		$modal.find('.options').removeClass('yepp');
	});

	$remove.on('click',function(){
		$body.css({
			'background-color': '',
			'font-family': '',
			'color': ''
		});
		$main.css('background-color', '');
		$header.css('background-color', '');
	});

})