tribe.events=tribe.events||{};tribe.events.views=tribe.events.views||{};tribe.events.views.viewport={};(function($,obj){'use strict';var $window=$(window);var $document=$(document);obj.options={MOBILE_BREAKPOINT:tribe.events.views.breakpoints.breakpoints.medium||768,};obj.setViewport=function($container){var state=$container.data('tribeEventsState');if(!state){state={}}
state.isMobile=$container.outerWidth()<obj.options.MOBILE_BREAKPOINT;$container.data('tribeEventsState',state)};obj.handleResize=function(event){var $container=event.data.container;obj.setViewport($container);$container.trigger('resize.tribeEvents')};obj.unbindEvents=function($container){$window.off('resize',obj.handleResize)};obj.bindEvents=function($container){$window.on('resize',{container:$container},obj.handleResize)};obj.deinit=function(event,jqXHR,settings){var $container=event.data.container;obj.unbindEvents($container);$container.off('beforeAjaxSuccess.tribeEvents',obj.deinit)};obj.init=function(event,index,$container,data){obj.bindEvents($container);obj.setViewport($container);$container.on('beforeAjaxSuccess.tribeEvents',{container:$container},obj.deinit)};obj.ready=function(){$document.on('afterSetup.tribeEvents',tribe.events.views.manager.selectors.container,obj.init)};$(obj.ready)})(jQuery,tribe.events.views.viewport)
;