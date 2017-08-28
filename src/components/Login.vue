<template>
  <div id="login">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <form class="ui form large">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password">
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden" id="terms-conditions">
              <label for="terms-conditions">I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button class="ui fluid large teal submit button" type="submit">Submit</button>
        </form>

        <div class="ui message">
          New to us? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  
</script>

<style lang="scss" rel="stylesheet/scss">
  #login {
    .column {
      max-width: 450px;      
    }
  }
</style>