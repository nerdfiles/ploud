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
                    onLoad: function() {
                        $('#colorbox').fadeIn('slow');    
                    },
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
                    
                $allMenus.hide();
                $allMenus.prev().removeClass('active');
                
                function onbefore() {
                    $self.toggleClass('active');
                }
                
                if ( d === 'none' || d === '' ) {
                    $siteActionsMenu.toggleFade(200, onbefore);
                } else {
                    return false;
                }
                
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
        
        init: function() {
            this.setUpColorbox();
            this.kbdOnButtons();
            this.toggleDashboardActionsMenu();
            this.closeActionMenus();
        }    
    
    }; 
    
    Ploud.init();
    
    // End dependency check
});