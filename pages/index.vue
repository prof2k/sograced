<template>
  <div>
    <header class="py-3 transform shadow-md">
      <div class="container flex items-center justify-between">
        <img src="~assets/logo.svg" width="200" alt="">
        <div class="space-x-5">
          <span>Menu</span>
          <span>Cart</span>
        </div>
      </div>
    </header>
    <main>
      <section id="hero" class="text-[1.15rem] pb-32">
        <div class="container flex items-center">
          <div class="w-1/2 space-y-8">
            <h1 class="text-[4.7rem]">Pure <span class="text-theme-red">Palm Oil</span> for a <span class="">Healthy Life</span></h1>
            <p class="max-w-xl">Enjoy pure 100% Organic palm oil for your family. No additives or preservatives.</p>
            <div class="flex items-center space-x-2">
              <a href="#" class="cta"><span class="pr-3">Buy Now</span> <span class="opacity-50">|</span> <span class="pl-2"> $ 24.99</span></a>
              <!-- <span>See Qualities</span> -->
            </div>
          </div>
          <div class="w-1/2">
            <img src="~assets/Group 7a.png" alt="">
          </div>
        </div>
      </section>
      <section id="benefits" class="py-0 bg-red-100 bg-opacity-30">
        <div class="!w-[100%] flex items-end">
          <div class="w-7/12">
            <div class="bg-white">
              <div class="text-white bg-theme-green  pl-[7.5vw] pr-20 py-16 space-y-10">
                <div class="flex items-center space-x-5 border-b-[1px] border-white pb-10 border-opacity-50">
                  <img src="~assets/oil.png" class="w-14 h-14" alt="">
                  <div class="space-y-1">
                    <h3>100% Pure and Organic</h3>
                    <p>No artificial Ingredients added</p>
                  </div>
                  <img src="" alt="">
                </div>
                <div class="flex items-center space-x-5">
                  <img src="~assets/flask.png" class="w-14 h-14" alt="">
                  <div class="space-y-1">
                    <h3>No additives</h3>
                    <p>No harmful chemical additives have been added for preservation</p>
                  </div>
                  <img src="" alt="">
                </div>
              </div>
            </div>
            <div class="pl-[7.5vw] pr-20 py-20 space-y-12 bg-white">
              <div>
                <h2 class="flex flex-col text-theme-red"><small>Benefits of</small><span>Pure Banga Oil</span></h2>
              </div>
              <div class="space-y-12">
                <div class="flex items-center space-x-5">
                  <img src="~assets/eye.png" class="w-14 h-14" alt="">
                  <div class="space-y-1">
                    <h3 class="">Improves Eye Sight</h3>
                    <p>It contains Vitamin A which boost eyesight</p>
                  </div>
                  <img src="" alt="">
                </div>
                <div class="flex items-center space-x-5">
                  <img src="~assets/heart.png" class="w-14 h-14" alt="">
                  <div class="space-y-1">
                    <h3 class="">Promotes Hearth Health</h3>
                    <p>It contains anitioxidants that can reduce chances of hearth diseases.</p>
                  </div>
                  <img src="" alt="">
                </div>
                <div class="flex items-center space-x-5">
                  <img src="~assets/brain.png" class="w-14 h-14" alt="">
                  <div class="space-y-1">
                    <h3 class="">Improves Congition</h3>
                    <p>It contains Vitamins E which helps brain health</p>
                  </div>
                  <img src="" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center flex-grow pb-24">
            <img src="~assets/palm-bunch.png" class="inline" alt="">
          </div>
        </div>
      </section>
      <section id="more" class="py-0 text-white bg-red-900">
        <div class="container flex flex-row-reverdse">
          <div class="w-5/12 py-40 pr-6 space-y-8">
            <h2 class="">The best quality for your family</h2>
            <p>Our Palm Oil is pure and processed following hygenic and saftey standards that ensure our oil is healthy for consumption. We do not add any additives or preservatives known to have harmful effects on the body. </p>
          </div>
          <div class="w-7/12 pl-20">
            <img src="~assets/multi-generation-family-watching-soccer-match-home.jpg" class="h-[100%] min-h-[400px] object-cover w-auto" alt="">
          </div>
        </div>
      </section>
    </main>
    <section id="final-cta" class="py-32">
      <div class="container space-y-10">
        <h2 class="text-center">Enjoy Pure Quality</h2>
        <div class="flex items-center justify-center space-x-10">
          <img src="~assets/palm-oil-bowl.png" height="100" class="w-[150px]" alt="">
          <div class="space-y-3 text-xl">
            <p>$24.99 | 4kg | 100% pure</p>
            <a href="#" class="cta">Buy Now</a>
          </div>
        </div>
      </div>
    </section>
    <footer class="py-12 pt-20 text-white bg-theme-green">
      <div class="container text-center">
        <p>&copy; 2022. So Graced Foods. All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
:root {
  font-size: 16px;
  font-family: poppins;
  color: #2e2828;
}

p {
  line-height: 1.7em;
}


.container {
  @apply mx-auto !w-10/12;
  width: 85% !important;
  max-width: 1500px !important;
}

h1, h2, h3, h3 {
  @apply !font-medium leading-[1.4em];
  font-family: 'casual';
}

.cta {
  @apply inline-block px-10 py-3 text-white bg-theme-red;
}

section {
  @apply py-16; 
}

#benefits h3{
  font-family: poppins;
  font-size: 1.6rem;
}

h2 {
  font-size: 3.6rem !important;
}

#benefits h2 {
  font-size: 2.8rem !important;
  font-family: poppins;
}

h2 small {
  font-size: 60%;
  line-height: 1.2em;
}

#benefits {
  background-image: linear-gradient(to bottom, white, white 8rem, transparent 8rem);
}
</style>
