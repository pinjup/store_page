const burguer_lines = document.querySelector('#lines-3');
const option_products = document.querySelector('.options-products');
// Items
const items_calzado_man = document.querySelector('.products-box-man');
const items_calzado_woman = document.querySelector('.products-box-woman');
const items_calzado_kids = document.querySelector('.products-box-kids');
const items_we_box = document.querySelector('.we-box');
// Category Navbar
const man_category = document.querySelector('.man-nav')
const woman_category = document.querySelector('.woman-nav')
const kids_category = document.querySelector('.kids-nav')
const we_category = document.querySelector('.we-nav')
const logout_category = document.querySelector('.logout-nav')

// Category Burguer Lines
const man_category_burguer = document.querySelector('.man')
const woman_category_burguer = document.querySelector('.woman')
const kids_category_burguer = document.querySelector('.kids')
const we_category_burguer = document.querySelector('.we')
const logout_category_burguer = document.querySelector('.logout')

burguer_lines.addEventListener('click', CloseAndOpenBurguerLines)

// Listener Categories Navbar
woman_category.addEventListener('click', WomanCategoryNav)
man_category.addEventListener('click', ManCategoryNav)
kids_category.addEventListener('click', KidsCategoryNav)
we_category.addEventListener('click', WeCategoryNav)

// Listener Categories Navbar
woman_category_burguer.addEventListener('click', WomanCategoryBurguer)
man_category_burguer.addEventListener('click', ManCategoryBurguer)
kids_category_burguer.addEventListener('click', KidsCategoryBurguer)
we_category_burguer.addEventListener('click', WeCategoryBurguer)


function CloseAndOpenBurguerLines () {
    option_products.classList.toggle('inactive');
}

function ManCategoryNav () {
    items_calzado_man.classList.remove('inactive')
    items_calzado_woman.classList.add('inactive');
    items_calzado_kids.classList.add('inactive');
    items_we_box.classList.add('inactive');
}

function WomanCategoryNav () {
    items_calzado_woman.classList.remove('inactive');
    items_calzado_man.classList.add('inactive')
    items_calzado_kids.classList.add('inactive');
    items_we_box.classList.add('inactive');
}

function KidsCategoryNav() {
    items_calzado_kids.classList.remove('inactive');
    items_calzado_woman.classList.add('inactive');
    items_calzado_man.classList.add('inactive')
    items_we_box.classList.add('inactive');
    
}

function WeCategoryNav() {
    items_we_box.classList.remove('inactive');
    items_calzado_kids.classList.add('inactive');
    items_calzado_woman.classList.add('inactive');
    items_calzado_man.classList.add('inactive')
}

// Burguer Lines

function ManCategoryBurguer () {
    option_products.classList.add('inactive');
    items_calzado_man.classList.remove('inactive')
    items_calzado_woman.classList.add('inactive');
    items_calzado_kids.classList.add('inactive');
    items_we_box.classList.add('inactive');
}

function WomanCategoryBurguer () {
    option_products.classList.add('inactive');
    items_calzado_woman.classList.remove('inactive');
    items_calzado_man.classList.add('inactive')
    items_calzado_kids.classList.add('inactive');
    items_we_box.classList.add('inactive');
}

function KidsCategoryBurguer() {
    option_products.classList.add('inactive');
    items_calzado_kids.classList.remove('inactive');
    items_calzado_woman.classList.add('inactive');
    items_calzado_man.classList.add('inactive')
    items_we_box.classList.add('inactive');
    
}

function WeCategoryBurguer() {
    option_products.classList.add('inactive');
    items_we_box.classList.remove('inactive');
    items_calzado_kids.classList.add('inactive');
    items_calzado_woman.classList.add('inactive');
    items_calzado_man.classList.add('inactive')
}