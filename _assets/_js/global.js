$script.ready(['jquery', 'colorbox'], function() {

    
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
                    width: '50%',
                    height: '50%',
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
        
        init: function() {
            this.setUpColorbox();
            this.kbdOnButtons();
        }    
    
    }; 
    
    Ploud.init();
    
    // End dependency check
});