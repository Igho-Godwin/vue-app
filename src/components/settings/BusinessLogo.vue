<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Business Logo</h3>
      </div>
      <div slot="card-body" class="card-body">
        <p>We recommend you use a square logo with dimensions 128px by 128px for best results.</p>
        <form>
          <div class="row align-items-center">
            <div class="form-group col-lg-6">
              <my-upload field="img" @crop-success="cropSuccess" @crop-upload-success="cropUploadSuccess"
                @crop-upload-fail="cropUploadFail" v-model="show" :width="127" :height="127" url :params="params"
                :headers="headers" img-format="png" lang-type="en" :value.sync="show"></my-upload>
              <label for="businessLogo" class="logo-showcase" @click="toggleShow">
                <img class="fas fa-camera preview text-center" id="businessLogo" :src="imgDataUrl" />
              </label>
            </div>
            <div class="form-group col-lg-6">
              <div class="custom-file image__upload" @click="toggleShow">
                <input id="businessLogo" class="form-control" placeholder="Choose file" :src="imgDataUrl" />
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-green">Save Changes</button>
        </form>
      </div>
    </Card>
  </div>
</template>

<script>
  import Card from "@/components/Card";
  import myUpload from 'vue-image-crop-upload';
  export default {
    components: {
      Card,
      'my-upload': myUpload
    },

    en: {
      hint: 'Click or drag the file here to upload',
      loading: 'Uploading…',
      noSupported: 'Browser is not supported, please use IE10+ or other browsers',
      success: 'Upload success',
      fail: 'Upload failed',
      preview: 'Preview',
      btn: {
        off: 'Cancel',
        close: 'Close',
        back: 'Back',
        save: 'Save'
      },
      error: {
        onlyImg: 'Image only',
        outOfSize: 'Image exceeds size limit: ',
        lowestPx: 'Image\'s size is too low. Expected at least: '
      }
    },

    data() {
      return {
        businessLogo: this.$store.getters.user.logo_url,
        show: false,
        params: null,
        headers: null,
        imgDataUrl: '' // the datebase64 url of created image
      }
    },

    methods: {
      toggleShow() {
        this.show = !this.show;
      },
      /**
       * crop success
       *
       * [param] imgDataUrl
       * [param] field
       */
      cropSuccess(imgDataUrl, field) {
        console.log('-------- crop success --------');
        this.imgDataUrl = imgDataUrl;
        this.field = field;
      },
      /**
       * upload success
       *
       * [param] jsonData  server api return data, already json encode
       * [param] field
       */
      cropUploadSuccess(jsonData, field) {
        console.log('-------- upload success --------');
        console.log(jsonData);
        console.log('field: ' + field);
      },
      /**
       * upload fail
       *
       * [param] status    server api return error status, like 500
       * [param] field
       */
      cropUploadFail(status, field) {
        console.log('-------- upload fail --------');
        console.log(status);
        console.log('field: ' + field);
      }
    }
  }
</script>

<style lang="scss">
  @import "@/scss/abstracts/_variables.scss";

  .logo-showcase {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    max-width: 8rem;
    width: 100%;
    height: 8rem;
    border: 1px dashed $smoke;
    background-color: $snow;
    font-size: 1.5rem;
    color: $secondary-text;
    cursor: pointer;

    &:hover {
      border-color: $dark-smoke;
    }
  }

  img.preview {
    max-width: 8rem;
    width: 100%;
  }
</style>