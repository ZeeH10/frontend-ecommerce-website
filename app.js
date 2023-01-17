const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

// To change products information based on nav choice
let curProduct = products[0];

const curProductImg = document.querySelector(".productImg");
const curProductTitle = document.querySelector(".productTitle");
const curProductPrice = document.querySelector(".productPrice");
const curProductColors = document.querySelectorAll(".color");
const curProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index)=>{
    item.addEventListener("click", () => {
        // change product in slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change current product
        curProduct = products[index];

        // change information/text of current Product
        curProductTitle.textContent = curProduct.title;
        curProductPrice.textContent = "$" + curProduct.price;
        curProductImg.src = curProduct.colors[0].img;

        // Assigning new colours
        curProductColors.forEach((color, index)=>{
            color.style.backgroundColor = curProduct.colors[index].code;
        });
    });
});

curProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        
        curProductImg.src = curProduct.colors[index].img;
    });
});

curProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        // reset other size options to default
        curProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
        size.style.color = "black";
        })
        // mark as selected
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

/* Modal functionality */
const prodButton = document.querySelector(".productButton");
const paymentModal = document.querySelector(".payment");
const closeBtn = document.querySelector(".close");

prodButton.addEventListener("click", ()=>{
        paymentModal.style.display = "flex";
});

closeBtn.addEventListener("click", ()=>{
        paymentModal.style.display = "none";
});


