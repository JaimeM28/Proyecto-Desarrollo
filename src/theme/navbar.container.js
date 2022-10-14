const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({addComponents, theme}){
    addComponents({
        '.navbar':{
            width: '100%',
            height: '50px',
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gridGap:'10px',

            '.navbar__img':{
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
            },

            'img':{
                height:'36px'
            },

            '.navbar__href':{
                display:'grid',
                gridTemplateColumns:'repeat(3,1fr)',
                gridGap:'10px',
                'a':{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    '&:hover':{
                        fontWeight:'800'
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

        }

        

    })
})