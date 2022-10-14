const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({addComponents, theme}){
    addComponents({
        'navbar':{
            height: '50px'
        },
        '#menu':{
            height:'36px',
            display: 'none'
        },
        '.navbar__content':{
            width: '100%',
            height: '50px',
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gridGap:'20px',

            '.navbar__img':{
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
            },

            'img':{
                height:'36px'
            },

            '.navbar__href':{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                'a':{
                    '&:hover':{
                        fontWeight:'800',
                    }
            }
            },

            '.navbar__btn':{
                padding: '5px',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
                gap: '10px',

                'Button':{
                    height:'35px',
                }
            }
        },

        '@media screen and (max-width:900px)':{
            '.navbar':{
                height: '50px'
            },

            '#menu':{
                display: 'block',
                position: 'relative',
                top: '7px',
                left: '10px',
            },

            '#menu:hover':{
                backgroundColor:'rgb(254 240 138)',
            },


            '.open-menu' :{
                opacity: '1',
                height: '230px',
                transition: 'all 0.3s ease-out'
                },

            '.closed-menu': {
                display: 'none',
                height: '0',
                '.navbar__href , .navbar__img, .navbar__btn':{
                    display: 'none'
                },
                opacity: '0',
                padding: '0',
                transition: 'all 0.3s ease-out',
                },

            '.navbar__content':{
                display: 'flex',
                gap: '7px',
                justifyContent: 'space-between',
                flexDirection: 'column',
                zIndex: '100',
                position: 'relative',
                

                '.navbar__href' :{
                    flexDirection: 'column',
                    gap: '10px',
                    'a':{
                        width: '100%', 
                        display: 'flex',
                        justifyContent: 'center'
                    }
                },

                '.navbar__btn':{
                    flexDirection: 'column'
                }


                }
        }

    })
})