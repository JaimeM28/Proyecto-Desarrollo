const input = `focus:border-yellow-400 focus:outline-none
                border border-yellow-600
                formkit-invalid:border-red-600 `


export default {
    global: {
        label: 'text-white',
        outer: 'mb-3 h-[84px]',
        input: 'w-full h-10 p-2 rounded',
        message: 'text-red-500'
    },
    email: { input: input },
    password: { input: input },
    submit: {
        wrapper: 'grid justify-items-center',
        input: 'w-60 bg-yellow-600 hover:bg-yellow-500 text-white'
    }
}