<template>
  <div>
    <!-- bank information element starts here-->
    <div class="bank-information text-start bg-white">
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

    <div class="mt-3 mb-3"></div>

    <!-- company information component starts here-->
    <div class="company-information text-start bg-white">
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

    <div class="mt-3 mb-3"></div>

    <!-- business logo starts here -->
    <div class="business-logo text-start bg-white">
      <h3>Business Logo</h3>
      <p>We recommend you use a square logo with dimensions 128px by 128px for best results.</p>
      <form>
        <div class="form-row">
          <div class="col-md-6 form-group mb-3">
            <div class="card--image__icon bg-dark-smoke"><i class="fas fa-camera"></i></div>
          </div>
          <div class="col-md-6 form-group mb-3">
            <div class="custom-file image__upload">
            <input type="file" class="custom-file-input" id="validatedCustomFile" required>
            <label class="custom-file-label text-start" for="validatedCustomFile">Choose file...</label>
          </div>
          </div>
          
        </div>
        <button type="submit" class="btn btn-green">Save Changes</button>
      </form>
    </div>

     <div class="mt-3 mb-3"></div>

    <!-- account-settings component starts here-->
    <div class="account-settings text-start bg-white">
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

    <div class="mt-3 mb-3"></div>

    <!-- change password component starts here-->
    <div class="company-information text-start bg-white">
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

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .bank-information {
    max-width: 50rem;
    padding: 2rem 1.5rem;
    border-radius: 0.25rem;
  }

  .company-information, .account-settings {
    max-width: 33.75rem;
    padding: 2rem 1.5rem;
    border-radius: 0.25rem;
  }

  .business-logo {
    max-width: 33.75rem;
    padding: 2rem 1.5rem;
    border-radius: 0.25rem;
  }

   .card--image__icon {
    max-width: 8rem;
    padding: 3rem;
  }

  .text-start {
    text-align: start;
  }

  .text-center {
    text-align: center;
  }
</style>