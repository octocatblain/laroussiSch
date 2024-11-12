import preview from "/assets/images/preview.jpg";
// import notFound from '/assets/images/preview/404.jpg';
// import blogPage from '/assets/images/preview/blogs.jpg';
// import blogSingle from '/assets/images/preview/blogsingle.jpg';
// import cart from '/assets/images/preview/cart.jpg';
// import checkout from '/assets/images/preview/checkout.jpg';
// import collection from '/assets/images/preview/collection.jpg';
// import contact from '/assets/images/preview/contact.jpg';
// import faq from '/assets/images/preview/faq.jpg';
// import forgotPass from '/assets/images/preview/forgotPass.jpg';
// import login from '/assets/images/preview/login.jpg';
// import showcase1 from '/assets/images/preview/showcase1.jpg';
// import showcase2 from '/assets/images/preview/showcase2.jpg';
// import signup from '/assets/images/preview/signup.jpg';
// import singleProduct from '/assets/images/preview/singleProduct.jpg';

export const templateDetails = {
  name: "LaRoucci Mining SCH, HTML and TailwindCSS Template",
  description:
    "Presenting LaRoucci Mining SCH, the ultimate ecommerce template in NextJS, HTML and TailwindCSS Template.",
  screenshotsOne: [preview, preview, preview, preview, preview, preview],
  screenshotsTwo: [preview, preview, preview, preview, preview, preview],
};

export const templateIncludes = {
  heading: `What is included in ${templateDetails.name}`,
  sections: 85,
  pages: 13,
  font: "Space Grotesk ",
};

export const includesCardsData = [
  {
    coverImage: preview,
    title: `pages`,
    spanText: `10+ pages`,
  },
  {
    coverImage: preview,
    title: `sections`,
    spanText: `20+ sections`,
  },
  {
    coverImage: preview,
    title: `font`,
    spanText: `Grotesk`,
  },
];

export const midSection = {
  heading: "Looking for more amazing Templates?",
  description:
    "Take a look at our collection of 100+ premium Templates at ThemeAlchemy.",
  href: "https://www.themealchemy.com",
};

export const mainPages = {
  heading: "Main pages",
  description: `Take a look at the main pages included in the ${templateDetails.name}`,
  pages: [
    {
      coverImage: preview,
      pageName: "Home",
      href: "/home",
      CMS: false,
    },
    {
      coverImage: preview,
      pageName: "Blog",
      href: "/blog",
      CMS: false,
    },
    {
      coverImage: preview,
      pageName: "Blog Single",
      href: "/blog/the-evolution-of-sneaker-culture-a-historical-perspective",
      CMS: false,
    },
    {
      coverImage: preview,
      pageName: "Collections",
      href: "/collections",
      CMS: false,
    },
    {
      coverImage: preview,
      pageName: "Product Single",
      href: "/products/yellowLow",
      CMS: false,
    },
    {
      coverImage: preview,
      pageName: "FAQs",
      href: "/faqs",
      CMS: false,
    },
    {
      coverImage: preview,
      pageName: "Cart",
      href: "/cart",
      CMS: false,
    },
    {
      coverImage: preview,
      pageName: "Not Found",
      href: "/gg",
      CMS: false,
    },
    {
      coverImage: preview,
      pageName: "Checkout",
      href: "/checkout",
    },
    {
      coverImage: preview,
      pageName: "Contact",
      href: "/contact",
    },
  ],
};

export const utilityPages = {
  heading: "Utility pages",
  description: `Take a look at the utility pages included in the ${templateDetails.name}`,
  pages: [
    {
      coverImage: preview,
      pageName: "Login",
      href: "/login",
    },
    {
      coverImage: preview,
      pageName: "Signup",
      href: "/login",
    },
    {
      coverImage: preview,
      pageName: "Forgot Password",
      href: "/forgot-pass",
    },
  ],
};

export const browseTemplates = {
  heading: "Browse All Templates",
  description: `Get ${templateDetails.name} today and take your ecommerce business to the next level.`,
  href: "https://www.themealchemy.com/products/luxloom",
  coverImage: preview,
  buttonName: "Buy Template",
};

export const buyTemplate = {
  heading: "Buy Template on ThemeAlchemy",
  description: `Looking for more templates? Take a look at our collection of 20+ free and 
    premium Templates at your disposal on themealchemy.com.`,
  href: "https://www.themealchemy.com/products",
  coverImage: preview,
  buttonName: "Explore more templates",
};

export const buyOrExplore = [browseTemplates, buyTemplate];
