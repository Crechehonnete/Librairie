<template>
  <div class="bg-blue-300 h-screen px-8 py-[40%] lg:py-24 md:py-44">
    <div
      class="bg-white h-[300px] flex lg:h-[400px] lg:w-[65%] lg:mx-auto rounded-xl"
    >
      <div
        class="w-[50%] h-full bg-sky-900 rounded-xl rounded-r-[85px] text-white py-24 lg:px-8 lg:py-24 "
      >
        <div
          class="flex flex-col justify-center text-center lg:space-y-8 space-y-4"
        >
          <h1
            class="text-center text-xl  lg:text-3xl font-bold"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            Welcome Back!
          </h1>
          <p class="text-xs lg:text-md">
            Enter your personal details to use all of site features
          </p>
          <button
            class="border border-white w-20 md:w-28 lg:w-28 text-center text-xs lg:text-md mx-auto rounded-md py-1 lg:py-2 shadow-sm shadow-black transition duration-500 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            data-aos="fade-right"
            data-aos-duration="800">
            SIGN IN
          </button>
        </div>
      </div>

      <div
        class=" w-[50%] rounded-xl lg:py-16 py-8 px-2 space-y-2 flex flex-col"
      >
        <div class=" space-y-2">
          <h1 class="text-center text-xl lg:text-3xl font-bold text-sky-900">
            Create Account
          </h1>
          <div class="w-full px-4 py-1 h-8 justify-between md:justify-center md:space-x-2 flex">
            <span class="border  border-sky-700/80 w-[25px]"><img src="../assets/connexion/google.svg" alt=""></span>
            <span class="border border-sky-700/80 w-[25px]"><img src="../assets/connexion/face.svg" alt=""></span>
            <span class="border border-sky-700/80 w-[25px]"><img src="../assets/connexion/insta.svg" alt=""></span>
            <span class="border border-sky-700/80 w-[25px]"><img src="../assets/connexion/ios.svg" alt=""></span>
          </div>
          <p class="text-[8px] text-center text-gray-500 font-semibold">
            or use your email for registration
          </p>
        </div>

        <div class=" h-[41%] px-2 space-y-2 lg:space-y-4">
          <input
            type="text"
            placeholder="Name"
            class="text-[10px] border w-full h-[23px] lg:h-[27px] focus:outline-sky-900  px-2 rounded-md bg-slate-100"
          />
          <input
            type="mail"
            placeholder="Email"
            class="text-[10px] border w-full h-[23px] lg:h-[27px] focus:outline-sky-900 px-2 rounded-md bg-slate-100"
          />
          <input
            type="password"
            placeholder="Password"
            class="text-[10px] border h-[23px] lg:h-[27px] focus:outline-sky-900 px-2 w-full rounded-md bg-slate-100"
          />
        </div>
        <button
          class="mx-auto text-white text-xs bg-sky-900 rounded-md w-20 md:w-28 py-1 lg:py-2 shadow-sm shadow-black transition duration-500 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom">
          SIGN UP
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
