$script.ready(['jquery', 'colorbox'], function() {

    /**
     * jQuery toggleFade
     *
     * @author      nerdfiles
     * @usage 
     *              $(selector).toggleFade(speed);
     *
     */
     
    $.fn.toggleFade = function(speed, onbefore, onafter) {
    
        return this.each(function(e) {
        
            var $self = $(this),
                d = $self.css("display");
                
            if ( d === "none" || d === '' ) {
                if ( typeof(onbefore) === 'function' ) {
                    onbefore();
                }
                //$self.addClass('toggleFade-show');
                $self.fadeIn(speed, onafter);
                
            } else {
                if ( typeof(onbefore) === 'function' ) {
                    onbefore();
                }
                //$self.removeClass('toggleFade-show');
                $self.fadeOut(speed, onafter);
                
            }
            
        });
        
    } // End $.fn.toggleFade
    
    var Ploud = {
        
        setUpColorbox: function() {
        
            $('.colorbox').each(function() {
            
                var $self = $(this),
                    href = '#'+$(this).attr('href').replace(/\//g, '');
                    
                $self.colorbox({
                    onOpen: function() {
                        
                        $('#colorbox').hide();
                        
                    },
                    onComplete: function() {
                        var $closeClone = $('#cboxClose'),
                            $anyModModalContent = $('#colorbox .mod .mod-inner');
                            
                        $closeClone.appendTo($anyModModalContent);
                        
                        $anyModModalContent.addClass('focus');
                        
                        $anyModModalContent.bind('mouseover', function() {
                            $(this).addClass('hover');
                        });
                        
                        $anyModModalContent.bind('mouseout', function() {
                            $(this).removeClass('focus');
                            $(this).removeClass('hover');
                        });
                    
                    },
                    onLoad: function() {
                    
                        $('#colorbox').fadeIn('slow').focus();
                        
                    },
                    
                    /**
                     * defer height and width responsibility to css (by default)
                    
                    height: '50%',
                    width: '50%',
                    
                     */
                    
                    transition: 'none',
                    inline: true, 
                    href: href
                });
            
            });
        
        },
        
        kbdOnButtons: function() {
        
            $('.button').each(function() { 
                var $self = $(this);
                
                $self.bind('keydown keyup', function(e) {
                    
                    if ( e.type === 'keydown' ) {
                        $self.css({
                            position: 'relative',
                            top: '1px'
                        });
                    } else if ( e.type === 'keyup' ) {
                    
                        $self.css({
                            top: '0px'
                        });
                    
                    }
                    
                });
            });
            
        },
        
        toggleDashboardActionsMenu: function() {
            
            $('.site-actions-menu').prev().bind('click', function(e) {
                var $self = $(this),
                    $selfActionMenu = $self.next(),
                    $allActionMenus = $('.site-actions-menu'),
                    $allActionMenuTriggers = $allActionMenus.prev(),
                    anyActive = $('.site-actions-menu.active').length;

                function cb() {
                    if ( anyActive > 0 && !$self.hasClass('active') ) {
                        $('.site-actions-menu.active').removeClass('active').fadeOut().prev().removeClass('active');
                    }
                }
                
                cb();
                
                $self
                    .addClass('active');
                
                $selfActionMenu
                    .addClass('active')
                    .fadeIn(500, function() {

                        //$('body').trigger('bodyClear', [cb]);
                    
                    });
                
                e.preventDefault();
            });
            
        },
        
        closeActionMenus: function() {
            $('.site-actions-menu .close').bind('click', function() {
                var $self = $(this),
                    d = $self.css('display');
                    
                function onafter() {
                    $self.parent().prev().removeClass('active');
                }
                
                $self.parent().toggleFade('fast', null, onafter);
            });
        },
        
        customSelect: function() {
        
            $('ul.custom-select').live('click', function(e) {
                
                var $self = $(this);
                
                $self.find('li').each(function() {
                    $(this).removeClass('hide');
                });
                
                $self.addClass('expanded');
                
                $self.find('li').bind('click', function(e) {
                    var $li = $(this),
                        val = $li.attr('class').match(/value:([A-Za-z0-9]+)/),
                        val = (val) ? val[1] : '',
                        $selected = $li.parent().parent().prev().find('option[value="'+val+'"]');
                        
                    $self.parent().find('.selected').remove();
                    
                    $selected.prop('selected', 'selected');
                    $self.prepend('<li class="selected">'+$li.text()+'</li>');
                    
                    $self.find('li:gt(0)').each(function() {
                        $(this).addClass('hide');
                        
                        e.stopPropagation();
                    });
                    
                    $self.removeClass('expanded');
                    $self.find('li').unbind('click');
    
                });
                
                function cb() {
                    $('ul.custom-select').removeClass('expanded');
                    $self.find('li:gt(0)').each(function() {
                        $(this).addClass('hide');
                    });                    
                }
                    
                $('body').trigger('bodyClear', [cb]);
                
            });
        
            $('select.select').each(function() {
            
                var $self = $(this),
                    html = [];
                
                $self.find('option').each(function(index) {
                    var $option = $(this);
                    if ( index < 1 ) {
                        html.push('<li class="rounded-all-inputs value:'+$option.val()+'">'+$option.text()+'</li>');
                    } else {
                        html.push('<li class="rounded-all-inputs hide value:'+$option.val()+'">'+$option.text()+'</li>');
                    }
                });
                
                $self.after('<div class="custom-select-container" style="height: '+($self.height()+18)+'px;"><ul class="custom-select dropshadow-input rounded-all-inputs">'+html.join('')+'</ul></div>')
            
            });
        },
        
        bodyClear: function() {
            
            $('body').bind('bodyClear', function(e, cb) {
            
                $('body').bind('click.bodyClear', function() {
                    
                    if ( typeof(cb) === 'function' ) {
                        cb();
                    }

                });
            
            });
            
            //$('body').unbind('bodyClear');
        
        },
        
        init: function() {
            this.bodyClear();
            this.setUpColorbox();
            this.kbdOnButtons();
            this.toggleDashboardActionsMenu();
            this.closeActionMenus();
            this.customSelect();
        }    
    
    }; 
    
    Ploud.init();
    
    // End dependency check
});