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
                    $allMenus = $self.closest('ul').find('.site-actions-menu'),
                    $siteActionsMenu = $self.next(),
                    d = $siteActionsMenu.css('display');
                    
                
                    
                /*
                if ( !$self.hasClass('active') ) {
                
                    $allMenus.hide();
                    $allMenus.prev().removeClass('active');
                    
                    //function onbefore() {
                        $self.addClass('active');
                    //}
                    
                    function onafter() {
                        function cb() {
                            $('.site-actions-menu').prev().removeClass('active');
                            $('.site-actions-menu').fadeOut(200);
                        }
                            
                        $('body').trigger('bodyClear', [cb]);
                    }
                    
                    if ( (d === 'none' || d === '') ) {
                        $siteActionsMenu.toggleFade(200, null, onafter);
                    }
                    // else {
                        //return false;
                    //}
                
                }
                */
                
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
                        cn = $li.attr('class'),
                        $selected = $li.parent().parent().prev().find('option[value="'+cn+'"]');
                        
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
                
            });
        
            $('select.select').each(function() {
            
                var $self = $(this),
                    html = [];
                
                $self.find('option').each(function(index) {
                    var $option = $(this);
                    if ( index < 1 ) {
                        html.push('<li class="rounded-all-inputs '+$option.val()+'">'+$option.text()+'</li>');
                    } else {
                        html.push('<li class="rounded-all-inputs hide '+$option.val()+'">'+$option.text()+'</li>');
                    }
                });
                
                $self.after('<div class="custom-select-container" style="height: '+($self.height()+18)+'px;"><ul class="custom-select dropshadow-input rounded-all-inputs">'+html.join('')+'</ul></div>')
            
            });
        },
        
        bodyClear: function() {
            
            $('body').bind('bodyClear', function(e, cb) {
            
                $( 'body').bind('click.bodyClear', function() {
                    
                    cb();
                    
                    $('body').unbind('click.bodyClear');
                });
            
            });
        
        },
        
        init: function() {
            this.setUpColorbox();
            this.kbdOnButtons();
            this.toggleDashboardActionsMenu();
            this.closeActionMenus();
            this.customSelect();
            this.bodyClear();
        }    
    
    }; 
    
    Ploud.init();
    
    // End dependency check
});