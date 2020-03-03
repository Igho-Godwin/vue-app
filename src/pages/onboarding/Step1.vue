<template>
  <Onboarding progress="Step 1 of 3" title="Welcome!">
    <Card>
      <div slot="card-body">
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ISbOsd.json" background="transparent" speed="1" loop autoplay ></lottie-player>
        <p class="text-center">Welcome to REACH for Business, you can post your deals, and see reviews from your customers. </p>
        <button type="submit" class="btn btn-blue btn-block mt-5">Setup your Company</button>
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
    mounted() {
      const scriptTag = document.createElement("script");
      scriptTag.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
      document.getElementsByTagName("head")[0].appendChild(scriptTag);
    }
  }
</script>