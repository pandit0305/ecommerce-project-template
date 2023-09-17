import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'home/shopByCategory/:id',
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'home/top-deals',
    loadChildren: () => import('./pages/top-deals/top-deals.module').then(m => m.TopDealsModule)
  },
  {
    path: 'vegetables',
    loadChildren: () =>
      import('./pages/vegetables/vegetables.module').then(
        (m) => m.VegetablesPageModule
      ),
  },
  {
    path: 'dairy-products',
    loadChildren: () =>
      import('./pages/dairy-products/dairy-products.module').then(
        (m) => m.DairyProductsPageModule
      ),
  },
  {
    path: 'fruits',
    loadChildren: () =>
      import('./pages/fruits/fruits.module').then((m) => m.FruitsPageModule),
  },
  {
    path: 'single-product/:id',
    loadChildren: () =>
      import('./pages/single-product/single-product.module').then(
        (m) => m.SingleProductPageModule
      ),
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'information/about-us',
    loadChildren: () =>
      import('./pages/footerSection/information/about-us/about-us.module').then(
        (m) => m.AboutUsPageModule
      ),
  },
  {
    path: 'information/faqs',
    loadChildren: () =>
      import('./pages/footerSection/information/faqs/faqs.module').then(
        (m) => m.FaqsPageModule
      ),
  },
  {
    path: 'information/two-hr-delivery-window',
    loadChildren: () =>
      import(
        './pages/footerSection/information/two-hr-delivery-window/two-hr-delivery-window.module'
      ).then((m) => m.TwoHrDeliveryWindowPageModule),
  },
  {
    path: 'information/terms-and-condition',
    loadChildren: () =>
      import(
        './pages/footerSection/information/terms-and-condition/terms-and-condition.module'
      ).then((m) => m.TermsAndConditionPageModule),
  },
  {
    path: 'information/return-policy',
    loadChildren: () =>
      import(
        './pages/footerSection/information/return-policy/return-policy.module'
      ).then((m) => m.ReturnPolicyPageModule),
  },
  {
    path: 'information/cookies-policy',
    loadChildren: () =>
      import(
        './pages/footerSection/information/cookies-policy/cookies-policy.module'
      ).then((m) => m.CookiesPolicyPageModule),
  },
  {
    path: 'information/site-map',
    loadChildren: () =>
      import('./pages/footerSection/information/site-map/site-map.module').then(
        (m) => m.SiteMapPageModule
      ),
  },
  {
    path: 'information/contact-us',
    loadChildren: () =>
      import(
        './pages/footerSection/information/contact-us/contact-us.module'
      ).then((m) => m.ContactUsPageModule),
  },
  {
    path: 'information/privacy-policy',
    loadChildren: () =>
      import(
        './pages/footerSection/information/privacy-policy/privacy-policy.module'
      ).then((m) => m.PrivacyPolicyPageModule),
  },
  {
    path: 'home/cart',
    loadChildren: () =>
      import('./pages/cart-page/cart-page.module').then(
        (m) => m.CartPageModule
      ),
  },
  {
    path: 'home/wishlist',
    loadChildren: () =>
      import('./pages/wishlist/wishlist.module').then(
        (m) => m.WishlistPageModule
      ),
  },
  {
    path: 'home/my-orders',
    loadChildren: () =>
      import('./pages/my-orders/my-orders.module').then(
        (m) => m.MyOrdersPageModule
      ),
  },
  {
    path: 'home/order-details',
    loadChildren: () =>
      import('./pages/order-details/order-details.module').then(
        (m) => m.OrderDetailsPageModule
      ),
  },
  {
    path: 'my-account',
    loadChildren: () =>
      import('./pages/my-account/my-account.module').then(
        (m) => m.MyAccountPageModule
      ),
  },

  {
    path: 'wishlist',
    loadChildren: () =>
      import('./pages/wishlist/wishlist.module').then(
        (m) => m.WishlistPageModule
      ),
  },
  {
    path: 'my-account',
    loadChildren: () =>
      import('./pages/my-account/my-account.module').then(
        (m) => m.MyAccountPageModule
      ),
  },
  {
    path: 'home/cart/checkout',
    loadChildren: () =>
      import('./pages/checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'home/mhg-rewards',
    loadChildren: () =>
      import('./pages/mhg-rewards/mhg-rewards.module').then(
        (m) => m.MhgRewardsModule
      ),
  },
  {
    path: 'home/cart/checkout/success',
    loadChildren: () =>
      import('./pages/success-order/success-order.module').then(
        (m) => m.SuccessOrderModule
      ),
  },
  {
    path: 'home/cart',
    loadChildren: () =>
      import('./pages/cart-page/cart-page.module').then(
        (m) => m.CartPageModule
      ),
  },
  {
    path: 'home/refer&earn',
    loadChildren: () =>
      import('./pages/refer-earn/refer-earn.module').then(
        (m) => m.ReferEarnModule
      ),
  },
  {
    path: 'home/recent-order',
    loadChildren: () =>
      import('./pages/recent-order/recent-order.module').then(
        (m) => m.RecentOrderModule
      ),
  },
  {
    path: 'home/blog-posts/:id',
    loadChildren: () =>
      import('./pages/blog-page/blog-page.module').then(
        (m) => m.BlogPageModule
      ),
  },
  {
    path: 'my-account-version2',
    loadChildren: () =>
      import('./pages/my-account-version2/my-account-version2.module').then(
        (m) => m.MyAccountVersion2PageModule
      ),
  },
  {
    path: 'blog-posts',
    loadChildren: () =>
      import('./pages/blog-posts/blog-posts.module').then(
        (m) => m.BlogPostsPageModule
      ),
  },
  {
    path: 'topdeals',
    loadChildren: () =>
      import('./pages/topdeals/topdeals.module').then(
        (m) => m.TopdealsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
