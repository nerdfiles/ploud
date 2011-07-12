$script.ready(['jquery', 'colorbox'], function() {

    /**
     * jQuery toggleFade
     *
     * @author      nerdfiles
     * @usage 
     *              $(selector).toggleFade(speed);
     *
     */
     
    $.fn.toggleFade = function(speed) {
    
        return this.each(function() {
        
            var $self = $(this),
                d = $.css(this,"display");
                
            if ( d === "none" || d === '' ) {
            
                $self.fadeIn(speed);
                
            } else {
            
                $self.fadeOut(speed);
                
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
        
        setUpDashboardActionsMenu: function() {
            
            $('.site-actions-menu').prev().bind('click', function(e) {
                var $self = $(this),
                    $siteActionsMenu = $self.next();
                    
                $self.toggleClass('active');
                $siteActionsMenu.toggleFade('fast');
                
                e.preventDefault();
            });
            
        },
        
        init: function() {
            this.setUpColorbox();
            this.kbdOnButtons();
            this.setUpDashboardActionsMenu();
        }    
    
    }; 
    
    Ploud.init();
    
    // End dependency check
});