class Header extends HTMLElement {
  static observedAttributes = ["data-path"];

  constructor() {
    super();
    const path = this.getAttribute("data-path");
    const prefix = path === "index" ? "#" : "/#";

    this.innerHTML = `
      <header
        class="z-30 fixed top-0 right-0 left-0 py-4 bg-white/20 backdrop-blur-md text-gray-600 transition-all duration-700 font-montserrat shadow-md"
        id="header"
      >
        <div class="w-full flex items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          <nav class="uppercase hidden md:flex items-center gap-3 lg:gap-6 font-bold">
            <a href="#naturopatia" class="hover:text-primary-500">Naturopatia</a>
            <a href="#about" class="hover:text-sky-500">O mnie</a>
          </nav>
      
          <a
            href="${prefix}"
            class="uppercase font-modern-symphony text-3xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:via-blue-500 hover:to-pink-500 flex items-center gap-2 z-10"
          >
            <img src="../img/logo.svg" alt="naturalia sygnet" class="h-12">
            Naturalia
          </a>
      
          <nav class="uppercase hidden md:flex items-center gap-3 lg:gap-6 font-bold">
            <a href="/products" class="hover:text-orange-500">Usługi</a>
            <a href="#contact" class="hover:text-pink-500">Kontakt</a>
          </nav>
      
          <nav class="md:hidden">
            <div class="relative flex items-center">
              <input
                id="hamburger"
                type="checkbox"
                class="peer opacity-0 w-0 h-[26px] cursor-pointer"
              />
              <label
                for="hamburger"
                aria-label="Toggle menu"
                class="absolute top-0 right-0 w-[26px] h-[26px] z-10 flex items-center justify-center cursor-pointer before:absolute before:w-full before:h-[2px] before:bg-gray-900 before:-translate-y-[8px] before:transition-all after:absolute after:w-full after:h-[2px] after:bg-gray-900 after:translate-y-[8px] after:transition-all peer-checked:rotate-45 peer-checked:before:translate-y-0 peer-checked:before:rotate-0 peer-checked:after:translate-y-0 peer-checked:after:rotate-90 transition-transform duration-300"
              >
              </label>
      
              <span 
                class="w-[26px] h-[2px] bg-gray-900 peer-checked:rotate-90 transition-transform duration-300"
              >
              </span>
      
              <ul class="peer-checked:right-0 fixed top-0 -right-full w-full h-[100vh] bg-gray-100 duration-[.25s] shadow-2xl p-4 flex flex-col gap-8">
                <li class="pt-16 border-b-1 border-gray-300"></li>
              
                <li class="md:gap-12 text-xl sm:text-2xl font-semibold">
                  <a href="#about" class="hover:text-primary-500">Naturopatia</a>
                </li>
      
                <li class="md:gap-12 text-xl sm:text-2xl font-semibold">
                  <a href="#services" class="hover:text-primary-500">O mnie</a>
                </li>
      
                <li class="md:gap-12 text-xl sm:text-2xl font-semibold">
                  <a href="#reviews" class="hover:text-primary-500">Usługi</a>
                </li>
      
                <li class="md:gap-12 text-xl sm:text-2xl font-semibold">
                  <a href="/products?ref=mobile" class="hover:text-primary-500">Blog</a>
                </li>
      
                <li class="w-full flex justify-center">
                  <hr class="w-full border-gray-300" />
                </li>
                
                <li class="md:gap-12 text-md font-semibold text-center">
                  Obserwuj w mediach społecznościowych
                  
                  <div class="flex gap-4 pt-4 justify-center">
                    <a href="https://www.facebook.com/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        class="min-w-8 h-8 fill-gray-800 hover:fill-[#0866ff]"
                      >
                        <path
                          class="transition-colors duration-200"
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                        />
                      </svg>
                    </a>
          
                    <a href="https://www.instagram.com/butterflyttofficial/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="min-w-8 h-8 fill-gray-800 hover:fill-[#E1306C] transition-colors duration-200"
                      >
                        <path d="M12.004 5.838a6.157 6.157 0 0 0-6.158 6.158 6.157 6.157 0 0 0 6.158 6.158 6.157 6.157 0 0 0 6.158-6.158 6.157 6.157 0 0 0-6.158-6.158zm0 10.155a3.996 3.996 0 1 1 3.997-3.997 3.995 3.995 0 0 1-3.997 3.997z" />
                        <path d="M16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941C-.283 4.325.012 7.435.012 11.996c0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z" />
                        <circle cx="18.406" cy="5.595" r="1.439" />
                      </svg>
                    </a>
                  </div>
                </li>
      
                <li class="w-full flex justify-center">
                  <hr class="w-full border-gray-300" />
                </li>
      
                <li class="flex flex-col items-center justify-end w-full">
                  <a href="#contact" class="button">Skontaktuj się ze mną</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define("x-header", Header);
