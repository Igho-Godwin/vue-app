<template>
  <div>
    <!-- bank information element starts here-->


    <Card>
      <div slot="card-body">
        <h3>Bank Information</h3>
        <form>
          <div class="form-row">
            <div class="col-md-6 form-group mb-3">
              <label for="bankName" class="caption">BANK NAME</label>
              <input type="text" class="form-control" id="validationCustom01" required>
            </div>
            <div class="col-md-6 form-group mb-3">
              <label for="accountNumber" class="caption">ACCOUNT NUMBER</label>
              <input type="text" class="form-control" id="validationCustom02" required>
            </div>
          </div>
          <div class="form-group mb-4">
            <label for="accountName" class="caption">ACCOUNT NAME</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <button type="submit" class="btn btn-green">Save Changes</button>
        </form>
      </div>
    </Card>

    <div class="mt-3 mb-3"></div>

    <!-- company information component starts here-->
    <Card>
      <div slot="card-body">
        <h3>Company Information</h3>
        <form>
          <div class="form-row mb-3">
            <label for="businessName" class="caption">BUSINESS NAME</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-row mb-3">
            <label for="phoneNumber" class="caption">PHONE</label>
            <input type="number" class="form-control" id="" required>
          </div>
          <div class="form-row mb-3">
            <label for="website" class="caption">WEBSITE</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-row mb-4">
            <label for="businessType" class="caption">BUSINESS TYPE</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <button type="submit" class="btn btn-green">Save Changes</button>
        </form>
      </div>
    </Card>

    <div class="mt-3 mb-3"></div>

    <!-- business logo starts here -->
    <Card>
      <div slot="card-body">
        <h3>Business Logo</h3>
        <p>We recommend you use a square logo with dimensions 128px by 128px for best results.</p>
        <form>
          <div class="form-row align-items-center justify-content-start">
            <div class="col-md-3 form-group mb-3">
              <label for="businessLogo" class="logo-showcase">
                <i class="fas fa-camera"></i></label>
            </div>
            <div class="col-md-3 form-group mb-3">
              <div class="custom-file image__upload">
                <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                <label class="custom-file-label text-start" for="validatedCustomFile">Choose file...</label>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-green">Save Changes</button>
        </form>
      </div>
    </Card>

    <div class="mt-3 mb-3"></div>

    <!-- account-settings component starts here-->
    <Card>
      <div slot="card-body">
        <h3>Account Settings</h3>
        <form>
          <div class="form-row mb-3">
            <label for="firstName" class="caption">FIRST NAME</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-row mb-3">
            <label for="lastName" class="caption">LAST NAME</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-row mb-3">
            <label for="Email" class="caption">WORK EMAIL</label>
            <input type="email" class="form-control" id="" required>
          </div>
          <button type="submit" class="btn btn-green">Save Changes</button>
        </form>
      </div>
    </Card>
    <div class="mt-3 mb-3"></div>

    <!-- change password component starts here-->
    <Card>
      <div slot="card-body">
        <h3>Change Password</h3>
        <form>
          <div class="form-row mb-3">
            <label for="oldPassword" class="caption">OLD PASSWORD</label>
            <input type="password" class="form-control" id="" required>
          </div>
          <div class="form-row mb-3">
            <label for="newPassword" class="caption">NEW PASSWORD</label>
            <input type="password" class="form-control" id="" required>
          </div>
          <div class="form-row mb-3">
            <label for="retypePassword" class="caption">RETYPE PASSWORD</label>
            <input type="password" class="form-control" id="" required>
          </div>
          <button type="submit" class="btn btn-red">Save Changes</button>
        </form>
      </div>
    </Card>

  </div>
</template>
<script>
  import Card from "@/components/Card";

  export default {
    name: "Step-1",
    components: {
      Card
    },
  }
</script>

<style lang="scss">
  @import "@/scss/abstracts/_variables.scss";

  .logo-showcase {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
    width: 8rem;
    border: 1px dashed $smoke;
    font-size: 1.5rem;
    color: $secondary-text;
    cursor: pointer;
    &:hover {
      border-color: $dark-smoke;
    }
  }


</style>