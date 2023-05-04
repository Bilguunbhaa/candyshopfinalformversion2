const products = [
    {
      name: "SOUR PATCH",
      price: 3500,
      description: "Candy",
      type: "Sour",
      image:
        "https://cdn.shopify.com/s/files/1/0557/7342/9934/products/sour-patch-kids-140g-821175.png?v=1651041733",
    },
    {
      name: "SKITTLES",
      price: 2200,
      description: "Candy",
      type: "Colored",
      image:
        "https://www.skittles.com/sites/g/files/fnmzdf586/files/migrate-product-files/bam8afcev37jvz2mfpnk.png",
    },
    {
      name: "HARIBO",
      price: 2300,
      description: "Candy",
      type: "Gummy",
      image:
        "https://p7.hiclipart.com/preview/394/743/766/gummy-bear-gummi-candy-haribo-food-sugar-online-shopping.jpg",
    },
    {
      name: "SNICKERS",
      price: 3550,
      description: "Candy",
      type: "Chocolate",
      image:
        "https://image.similarpng.com/very-thumbnail/2021/01/Snickers-bar-isolated-on-transparent-background-PNG.png",
    },
    {
      name: "LOLLIPOP",
      price: 2200,
      description: "Candy",
      type: "Lollipop",
      image:
        "https://spng.pngfind.com/pngs/s/15-157819_lollipop-close-up-transparent-lollipop-hd-png-download.png",
    },
  ];
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
      console.log(`${product.name} - ${product.price}`);
  
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <button onclick="AddItem('${product.name}')">add</button>
        <button onclick="MinusItem('${product.name}')">minus</button>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }