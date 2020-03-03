<template>
  <Onboarding progress="Step 1 of 3" title="Welcome!">
    <Card>
      <div slot="card-body">
        <div class="card__gif py-5">Gif</div>
        <p class="text-center">Welcome to REACH for Business, you can post your deals, and see reviews from your customers. </p>
        <button type="submit" class="btn btn-blue btn-block mt-5">Setup Company</button>
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
    }
  }
</script>