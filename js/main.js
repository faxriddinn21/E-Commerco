// MENU BAR
const menubar = document.querySelector('.menubar-img');
const ulNavBar = document.querySelector('.nav-ul');

menubar.addEventListener('click', () => {
        ulNavBar.classList.toggle('block')
})


// mapping bar
// const categoryArr = [
//     {
//         name: 'Молоко, сыр, яйцо',
//         link: '1',    
//     },

//     {
//          name : 'Хлеб',
//         link : '2',
//     },

//     {
//       name : 'Фрукты и овощи',
//         link : '3',  
//     },

//     {
//         name : 'Замороженные продукты',
//         link : '4',
//     },

//     {
//         name : 'Напитки',
//         link : '5'
//     },

//     {
//         name: 'Кондитерские изделия',
//         link: '6'
//     },

//     {
//         name: 'Чай, кофе',
//         link: "7",
//     },

//     {
//         name: 'Бакалея',
//         link: '8',
//     },

//     {
//         name: 'Здоровое питание',
//         link: '9'
//     },

//     {
//         name: 'Зоотовары',
//         link: '10',
//     }
// ]

// categoryArr.map(i => {
//     ulNavBar.innerHTML += `
//         <li class="li-nav"><a href="${i.link}">${i.name}</a></li>
//     `
// })