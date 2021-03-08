// pode retornar um HTMLBodyElement ou null, devo fazer um if
const body1 = document.querySelector('body')
if (body1) body1.style.background = 'red'

// non-null assertion - não recomendado
const body2 = document.querySelector('body')!
body2.style.background = 'red'

//type assertion
const body3 = document.querySelector('body') as HTMLBodyElement
body3.style.background = 'red'

const input = document.querySelector('.input') as HTMLInputElement
input.value = "text"
input.focus()

const input2 = (document.querySelector('.input') as unknown ) as number




