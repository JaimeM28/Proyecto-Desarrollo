const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme}){
    addComponents({
        '.form':{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

            '.form__content':{
                minWidth: '300px',
                width: '35%',
                backgroundColor:'rgb(64 64 64);',
                borderRadius: '1rem',
                padding: '40px 30px 0px 30px',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }

        }
    })

})