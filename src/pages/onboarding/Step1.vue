<template>
  <Onboarding progress="Step 1 of 3" title="Welcome!">
    <Card>
      <div slot="card-body" class="card-body">
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ISbOsd.json" background="transparent" speed="1" loop autoplay ></lottie-player>
        <p class="text-center">Welcome to REACH for Business, you can post your deals, and see reviews from your customers. </p>
        <router-link to="/onboarding/2" class="btn btn-blue btn-block mt-5">Setup your Company</router-link>
      </div>
    </Card>
  </Onboarding>
</template>

<script>
  import Onboarding from "@/components/Onboarding";
  import Card from "@/components/Card";

  export default {
    name: "Step-1",
    components: {
      Onboarding,
      Card
    },
    beforeMount(){
       if(this.$store.getters.user == "" ){
          //window.open("/sign-in", "_self");
       }
    },
    mounted() {
      const scriptTag = document.createElement("script");
      scriptTag.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
      scriptTag.id = "lottieScript";
      document.getElementsByTagName("head")[0].appendChild(scriptTag);
    },
    destroyed() {
      const lottieScript = document.getElementById("lottieScript");
      lottieScript.parentNode.removeChild(lottieScript);
    }
  }
</script>