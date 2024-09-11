<template>
   

    <div class="hero bg  border-orange-500 min-h-screen bg-cover bg-center ">
        <div class=" h-[70%] moi bg-opacity-90  ">

        <div class="hero-content flex-col lg:flex-row-reverse  ">
          <div class="text-center lg:text-left border border-red-500 bg-slate-300 rounded-lg">
            <h1 class="text-5xl font-bold ">Bienvenue!</h1>

            <p class="py-6 ">
                Connectez-vous pour accéder à votre compte et découvrir nos dernières fonctionnalités.
            </p>
          </div>
          <div class="card  w-full max-w-sm shrink-0 shadow-2xl lg:py-14 border bg-gray-300 bg-opacity-90 hover:bg-opacity-100 ">
            <form class="card-body">
              <div class="form-control ">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Mot de passe</span>
                </label>
                <input type="password" placeholder="password" class="input input-bordered" required />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">mot de passe oublié?</a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn text-md bg-base-content text-white hover:bg-success active:bg-success">Se Connecter</button>
              </div>
            </form>
          </div>
        </div>
    </div>
      </div>
</template>

<script setup>

</script>

<style scoped>
.bg{
  background-image: url('../assets/images/bg5.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.moi{
  background-image: url('../assets/images/bg2.jpg');
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}
</style>